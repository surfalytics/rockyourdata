---
title: "Oracle to AWS Redshift in 8 Months with 3 People"
description: "A realistic timeline and team size for moving a legacy Oracle data warehouse to AWS — and how the platform then grew into a data lake with EMR, Spark, and Athena."
date: 2026-09-23
category: "Data platforms"
service: "data-platforms"
---

How long does a data warehouse migration take, and how many people does it need?

Vendors often say weeks. Here is a real answer from an Amazon subsidiary, a 400-person e-commerce marketplace.

## Where they started

- Oracle data warehouse.
- PL/SQL transformations run by cron.
- Reports in Excel and Crystal Reports.
- No monitoring.

Use cases were standard for e-commerce: sales and finance reporting, financial reconciliation, marketing attribution, and product analytics.

## The team

- 2 Oracle DBAs (who also supported the production OLTP database)
- 1 Software Engineering Manager
- 1 Data Engineer

So in practice, about **3 people** worked on the migration, and two of them had other duties.

## The timeline

| Phase | Time |
|---|---|
| Redshift warehouse and ETL pipelines | ~8 months |
| Move reporting to Tableau Server | ~4 more months |

About a year in total. This is a realistic number for a mid-size warehouse with years of PL/SQL logic.

## The target

- **Amazon Redshift** as the warehouse.
- **Matillion** on EC2 for ETL, with scheduling and monitoring.
- **Tableau Server** for reports, replacing Excel and Crystal.

## What took the most time

Not the data copy. The **logic**. Years of PL/SQL had business rules nobody had written down. Each rule had to be found, understood, rebuilt, and checked against the old numbers.

Plan for parallel running. Old and new reports must match before anyone switches off Oracle.

## Then the platform grew

Once the warehouse was stable, new needs came:

- **Web logs** were too big for Redshift ETL. EMR and Spark processed them instead of a bigger Redshift cluster.
- **Inventory changes** flowed from DynamoDB Streams through Kinesis Firehose into S3, instead of batch extracts.
- **Redshift Spectrum** and **Athena** queried the S3 data lake directly.
- **Glue Crawler** kept the catalog current.
- **SageMaker** used the same data for machine learning.

The warehouse became the center of a data lake. This is the normal path: migrate first, then extend.

## Lessons

1. **Budget a year, not a quarter**, for a real legacy warehouse with a small team.
2. **The hard part is business logic**, not moving tables.
3. **Run old and new in parallel** and compare numbers.
4. **Do not scale the warehouse for every new workload.** Add the right engine (Spark, Athena) next to it.

Today we would likely pick Snowflake or Databricks and dbt instead of Redshift and Matillion. The lessons stay the same.

See the [project page](/projects/oracle-to-redshift-migration/) for the architecture diagrams.
