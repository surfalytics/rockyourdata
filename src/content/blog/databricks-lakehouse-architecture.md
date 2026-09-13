---
title: "Databricks Lakehouse Architecture: What Actually Matters in Production"
description: "A practical guide to medallion architecture on Databricks — bronze, silver, gold layers, Unity Catalog governance, job compute, and the mistakes that cost the most."
date: 2026-08-26
category: "Databricks"
service: "databricks"
---

Most teams we meet already have Databricks. The platform is not the problem. The problem is that the workspace grew without a shape: notebooks in personal folders, all-purpose clusters running scheduled jobs, tables nobody owns, and no way to answer "where did this number come from".

This post covers the architecture decisions that matter once you are past the proof of concept.

## The medallion pattern, and why the layers are not optional

Bronze, silver, gold is not ceremony. Each layer exists to absorb a specific kind of change.

**Bronze — raw, append-only.** Land the source data as it arrived, with ingestion metadata. No cleaning, no business logic. When a source system changes its schema or you find a bug three months later, bronze is what lets you rebuild without re-requesting the data.

**Silver — cleaned and conformed.** Types enforced, keys deduplicated, columns renamed to your standard, quality rules applied. This is where most of the engineering lives. Silver tables should be trustworthy enough that an analyst could use them directly.

**Gold — business-ready.** Aggregations, metrics, and dimensional models shaped for consumption. Gold is where the business definitions live, and it is the only layer BI tools should touch.

The common failure is skipping silver. Teams go bronze → gold with all the cleaning buried inside the aggregation job. It works until two gold tables disagree, and then nobody can find out why.

## Job compute, not all-purpose compute

This is the most expensive mistake we find, and it is a one-line fix.

All-purpose clusters cost roughly twice as much per DBU as job clusters. They exist for interactive development. If a scheduled job runs on an all-purpose cluster, you are paying interactive rates for automated work.

Check your workflows. Every scheduled task should use job compute, sized for the job, terminating when it finishes.

While you are there:

- **Turn on Photon** for SQL and DataFrame-heavy ETL. It usually pays for its DBU premium in reduced runtime. Test it — it does not help UDF-heavy Python.
- **Right-size the driver.** A huge driver with small workers is a common and pointless expense unless you are doing heavy `collect()` work, which you probably should not be.
- **Set autoscaling bounds narrowly.** A min of 1 and a max of 20 means you will sometimes get 20.

## Unity Catalog is the governance decision

If you are still on the Hive metastore, migrating to Unity Catalog is the highest-value structural change available to you. It gives you three things that are painful to build yourself:

1. **A three-level namespace** (`catalog.schema.table`) so you can separate environments cleanly — `prod.sales.orders` and `dev.sales.orders` with the same code and different catalogs.
2. **Lineage, automatically.** Column-level lineage across notebooks, jobs, and dashboards. This is what answers "what breaks if I change this column".
3. **Central access control**, including row filters and column masks, applied consistently across SQL warehouses, notebooks, and jobs.

A workable catalog layout:

```
prod_bronze.<source>.<table>
prod_silver.<domain>.<table>
prod_gold.<domain>.<table>
```

Grant analysts read on gold, engineers read on silver, and almost nobody direct access to bronze.

## Delta tables need maintenance

Delta Lake is not maintenance-free. Two operations matter:

```sql
-- Compact small files. Streaming and frequent micro-batch writes create many.
OPTIMIZE prod_silver.sales.orders;

-- Reclaim storage from old versions. Default retention is 7 days.
VACUUM prod_silver.sales.orders RETAIN 168 HOURS;
```

Small files are the silent performance killer on streaming tables. If a table is written every few minutes and never optimized, query times degrade steadily until someone notices months later.

Predictive optimization handles this automatically on Unity Catalog managed tables — turn it on if you are eligible, and schedule `OPTIMIZE` yourself if you are not.

## CI/CD with Asset Bundles

Notebooks clicked into production are not a deployment process. Databricks Asset Bundles let you define jobs, clusters, and notebooks as code in a `databricks.yml`, then deploy the same definition to dev, staging, and prod.

```yaml
targets:
  dev:
    default: true
    workspace:
      host: https://dev.cloud.databricks.com
  prod:
    workspace:
      host: https://prod.cloud.databricks.com
    run_as:
      service_principal_name: ${var.prod_sp}
```

Two rules that prevent most production incidents:

- Production jobs run as a **service principal**, never as a person. People leave.
- Deployment happens from **CI on merge**, never from a laptop.

## Streaming: use it when you need it

Structured Streaming and Delta Live Tables are good. They also carry real operational cost — checkpoint management, state store growth, schema evolution handling, and harder debugging.

Before committing to streaming, ask what the business does with data that is 5 minutes old versus 1 hour old. Very often the honest answer is "nothing", and a 15-minute micro-batch job is dramatically simpler to run.

When you do need it, `trigger(availableNow=True)` gives you streaming semantics — exactly-once, checkpointed, incremental — on a batch schedule. It is the right default for most "near real-time" requirements.

## The short version

- Keep all three medallion layers. Silver is the one people skip and regret.
- Move every scheduled job off all-purpose compute today.
- Migrate to Unity Catalog if you have not.
- Schedule `OPTIMIZE` and `VACUUM`, or enable predictive optimization.
- Deploy with Asset Bundles from CI, running as a service principal.

None of this is exotic. It is the difference between a workspace that scales and one that gets rebuilt in two years.

---

*We run [Databricks assessments](/services/databricks/) covering architecture, Unity Catalog governance, and DBU cost — ending in a prioritized action plan. [Book a call](/contact/) to talk through your workspace.*
