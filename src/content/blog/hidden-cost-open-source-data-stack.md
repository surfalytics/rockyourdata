---
title: "The Hidden Cost of an Open-Source Data Stack"
description: "Two real platforms — Athena with dbt and Meltano at a SaaS company, Iceberg with Trino on Kubernetes at a FinTech — and what open source really costs a small data team."
date: 2026-10-07
category: "Data platforms"
service: "data-platforms"
---

"Open source is free" is the most expensive sentence in data engineering.

The license is free. The engineering time is not. We built and ran two open-source-heavy platforms. Here is what we learned.

## Platform 1: Athena data lake at a pre-IPO SaaS company

| Layer | Tool |
|---|---|
| Ingestion | Meltano |
| Transformation | dbt core |
| SQL engine | Athena over Parquet on S3 |
| Logs and clickstream | Glue and Spark |
| Orchestration | Prefect on ECS |
| BI | Looker, Metabase |
| Infrastructure | Terraform |

The platform was first built by DevOps, not by the data team. It worked. It also carried real tech debt:

- The **dbt adapter for Athena** was less mature than the Snowflake or Redshift ones. Some dbt features did not work, or worked differently.
- Every tool had its own upgrade cycle. Upgrades were a project, not a click.
- Finance reporting for the IPO needed to be exact. That raised the bar for testing and monitoring across every tool.

In the end, the team moved the warehouse to Redshift to get past the dbt-on-Athena limits. The open-source choice did not remove the cost. It moved it into engineering time.

## Platform 2: Iceberg lakehouse at a FinTech

A brokerage moved from BigQuery to an open-source lakehouse on Google Kubernetes Engine:

| Layer | Tool |
|---|---|
| Tables | Apache Iceberg |
| Query engine | Trino |
| Ingestion | Airbyte |
| Streaming | Redpanda |
| Transformation | dbt core |
| Orchestration | Airflow (Helm on GKE) |
| BI | Metabase |

The data team had **four people**. They owned the data and every service in the stack: Kubernetes, Helm charts, Trino tuning, Airbyte connectors.

That is the real cost. A large share of the team's time went into running the platform, not delivering data. Sometimes the fix meant reading and patching the source code of a tool. That is not fast time to market.

## The pattern

Open source makes sense when:

- You have a platform team, not only data engineers.
- You need control a managed service cannot give you.
- You have real scale, where license costs are big.

It hurts when:

- The data team is small (under 6–8 people).
- The business needs results this quarter.
- Nobody owns upgrades, security patches, and on-call for each tool.

## How to compare fairly

When you compare open source with Snowflake or Databricks, count all of it:

1. Cloud compute and storage.
2. **Engineering hours to run the platform**: upgrades, patches, incidents, tuning.
3. On-call time.
4. Hiring cost. Engineers who know Trino and Kubernetes cost more and are harder to find.
5. Time to deliver the first useful dashboard.

Item 2 is the one most proposals leave out. It is often bigger than the license you saved.

## Our view

We are vendor-neutral. We have built on Athena, Iceberg, Trino, Snowflake, and Databricks. For most mid-size companies, a managed platform plus dbt is cheaper over five years than an open-source stack — once you count the people.

Read the project pages for the [SaaS Athena platform](/projects/open-source-analytics-pre-ipo-saas/) and the [FinTech lakehouse](/projects/open-source-analytics-fintech/).
