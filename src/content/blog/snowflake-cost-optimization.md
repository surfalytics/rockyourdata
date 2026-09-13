---
title: "How to Cut Your Snowflake Bill Without Slowing Anyone Down"
description: "A practical checklist for Snowflake cost optimization: warehouse sizing, auto-suspend, incremental dbt models, clustering, and cost attribution that actually holds up."
date: 2026-08-12
category: "Snowflake"
service: "snowflake"
---

Snowflake bills grow quietly. Nobody makes a bad decision. A warehouse gets sized up for one slow query and stays that size. A dbt model gets set to full refresh during development and never gets changed back. Six months later the bill has doubled and nobody can say which part is the problem.

This is the checklist we run on client accounts. It is ordered by effort-to-saving, so the cheap wins come first.

## 1. Find out where the money goes

You cannot fix what you cannot attribute. Start with `SNOWFLAKE.ACCOUNT_USAGE`:

```sql
select
    warehouse_name,
    date_trunc('day', start_time) as day,
    sum(credits_used) as credits
from snowflake.account_usage.warehouse_metering_history
where start_time >= dateadd('day', -30, current_timestamp())
group by 1, 2
order by credits desc;
```

Then join `QUERY_HISTORY` to find the queries inside the expensive warehouses. Most accounts have a small number of queries driving most of the spend. That is good news — it means a short list of fixes.

## 2. Turn on auto-suspend, properly

Default auto-suspend is 10 minutes. For most warehouses, 60 seconds is right. A warehouse running for 9 idle minutes after every query is pure waste.

The exception is a warehouse serving interactive BI. There, suspend kills the cache, and users feel it. Keep those at 5-10 minutes and leave the rest at 60 seconds.

```sql
alter warehouse transform_wh set auto_suspend = 60;
```

## 3. Stop over-sizing warehouses

Bigger warehouses are not "faster per credit" — they cost proportionally more per second. A LARGE costs 4x a SMALL. It only pays off if the query genuinely parallelizes and finishes 4x faster.

The test is simple: run the same workload on two sizes and compare **credits consumed**, not wall-clock time. Very often a query that runs 30% faster on a bigger warehouse costs twice as much.

Where sizing up genuinely wins is queries that spill to remote storage. Check `bytes_spilled_to_remote_storage` in `QUERY_HISTORY`. Spilling means the warehouse is too small and you are paying for it in wasted time.

## 4. Make your dbt models incremental

This is usually the single largest win. A full-refresh model over a large fact table rebuilds everything, every run. An incremental model processes only new rows.

```sql
{{ config(
    materialized='incremental',
    unique_key='order_id',
    incremental_strategy='merge'
) }}

select * from {{ ref('stg_orders') }}

{% if is_incremental() %}
where updated_at > (select max(updated_at) from {{ this }})
{% endif %}
```

Two warnings from experience:

- **Pick the right `unique_key`.** Get the grain wrong and you silently duplicate rows. Test it.
- **Plan for late-arriving data.** A lookback window (`dateadd('day', -3, ...)`) is safer than a strict `max(updated_at)`.

## 5. Cluster only the tables that need it

Automatic clustering is not free — it runs in the background and consumes credits. Cluster a table only when:

- It is large (hundreds of GB and up), and
- Queries consistently filter on the same column, and
- Partition pruning is currently poor.

Check pruning before you act:

```sql
select
    query_id,
    partitions_scanned,
    partitions_total
from snowflake.account_usage.query_history
where warehouse_name = 'ANALYTICS_WH'
  and partitions_total > 0
order by partitions_scanned desc
limit 50;
```

If `partitions_scanned` is close to `partitions_total` on your hot queries, clustering may help. If it is already small, clustering will just cost you money.

## 6. Separate workloads into their own warehouses

One warehouse serving ingestion, dbt, and BI is impossible to reason about. Split them:

- `LOADING_WH` — ingestion
- `TRANSFORM_WH` — dbt
- `BI_WH` — dashboards and ad-hoc

Now each line on the bill has an owner. This costs nothing and makes every later decision easier.

## 7. Set resource monitors before you need them

A resource monitor will not optimize anything, but it stops a runaway query from turning into a five-figure surprise.

```sql
create resource monitor bi_monitor
  with credit_quota = 500
  frequency = monthly
  start_timestamp = immediately
  triggers
    on 75 percent do notify
    on 100 percent do suspend;
```

## The order that matters

If you only do three things: **fix auto-suspend, make your biggest dbt models incremental, and split workloads into separate warehouses.** Those three cover most of the waste in most accounts, and none of them make anything slower for users.

Measure first. Take a 30-day baseline before you change anything, otherwise you will not be able to prove the saving — and an unprovable saving tends to get spent again.

---

*We run [Snowflake cost audits](/services/snowflake/) as a fixed two-week engagement: spend broken down by warehouse, workload, and team, plus a ranked list of fixes with expected savings. [Book a call](/contact/) if your bill has stopped making sense.*
