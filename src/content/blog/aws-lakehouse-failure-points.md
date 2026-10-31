---
title: "AWS Lakehouse Checklist: Where Iceberg, Athena, Glue, and MWAA Usually Break"
description: "The common failure points we look for when we review an AWS lakehouse built on S3, Apache Iceberg, Athena, Glue, MWAA, Spark, and Lambda."
date: 2026-10-21
category: "Architecture"
service: "data-platforms"
---

The AWS lakehouse stack is popular for good reasons. S3 is cheap. Apache Iceberg gives you real tables on files. Athena needs no cluster. Glue, MWAA, and Lambda are managed.

But each piece has known failure points. They do not show up in a proof of concept with small data. They show up six months into production, as slow queries or a surprise bill.

This is the checklist we use when we review this stack.

## S3

- **Partition keys do not match query patterns.** Data is partitioned by ingest date, but every query filters by customer or device.
- **Small files.** Target 128 MB to 1 GB per file. Thousands of 1 MB files make every engine slow.
- **No lifecycle rules.** Raw data stays in S3 Standard forever.
- **Security basics missing.** Check SSE-KMS encryption, Block Public Access, and versioning decisions.

## Apache Iceberg

- **No compaction schedule.** Streaming or frequent small writes create many small files.
- **No snapshot expiry or orphan file cleanup.** Metadata grows, and planning time grows with it.
- **Wrong write mode.** Copy-on-write vs merge-on-read is a real trade-off. Pick it per table, based on how often you update.
- **Partition evolution not used.** Teams rebuild tables when Iceberg could evolve the spec.
- **Schema evolution never tested.** It works in theory. Test it before a source system changes.

## Athena

- **No workgroup limits.** One bad query can scan terabytes. Set per-query and per-workgroup data limits.
- **Full scans.** Bad partitioning or missing filters mean you pay for every byte.
- **Iceberg DML cost.** `UPDATE`, `DELETE`, and `MERGE` on Iceberg through Athena can get expensive at volume.
- **Concurrency quotas.** Fine for 5 analysts. Not fine for 200 dashboard users on Monday morning.

## Glue Catalog and Glue ETL

- **Crawlers everywhere.** Crawlers cost money and can drift your schema. Explicit DDL is often safer.
- **Over-sized DPU.** Jobs run with the default worker count, not what they need.
- **Job bookmarks** used without understanding how they fail on reprocessing.
- **Permission model unclear.** Lake Formation or IAM? Mixing both causes confusion.

## MWAA (managed Airflow)

- **Always on.** MWAA has a fixed monthly cost even when nothing runs. Check the cost at idle.
- **Wrong environment class.** Too big wastes money. Too small means slow DAG parsing and queued tasks.
- **DAG sprawl.** Hundreds of DAGs with copy-paste code and no shared patterns.

## Spark

- **Where does Spark run?** Glue, EMR, or EMR Serverless have very different cost and control.
- **Oversized or long-running clusters.** Clusters that should stop after the job keep running.
- **No spot instances** for jobs that can retry.
- **Skew and shuffle** problems hidden by bigger hardware.

## Lambda

- **The 15-minute limit.** A job that takes 10 minutes today will take 20 next year.
- **Retry storms.** Failed events retry without a dead-letter queue.
- **Hidden orchestration.** Business logic and job ordering buried inside functions, where nobody can see it.

## Monitoring

This is the most common gap.

- **Job is green, data is wrong.** Pipeline success is not data quality. Add freshness and quality checks.
- **No SLA.** If nobody defined "late", nobody gets alerted.
- **No cost alerts.** Budgets and anomaly alerts are free to set up.
- **No on-call.** Alerts go to an email nobody reads.

## Cross-cutting

- Separate dev, test, and prod environments.
- Infrastructure as code (Terraform or CDK).
- CI/CD for pipelines.
- Backup, recovery, and a stated RPO and RTO.
- Runbooks a new engineer can follow.

## Why this matters

None of these items is hard to fix early. Most are hard and expensive to fix late. A day of review before production is cheaper than a quarter of rework after it.

We built and ran this stack at scale: serverless S3 data lakes for a large telecom, Athena platforms for SaaS companies, and an Iceberg lakehouse for a FinTech. See [our projects](/projects/), or [ask us to review yours](/contact/).
