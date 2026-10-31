---
title: "Serverless Data Lake on AWS: Lessons from a Large Telecom"
description: "How a telecom ran a config-driven S3 data lake where every Spark job creates its own EMR cluster and then stops it — and what we would keep today."
date: 2026-10-14
category: "Data platforms"
service: "data-platforms"
---

One of the largest North American telecom companies ran its big data platform on a simple idea: **no cluster lives longer than the job that needs it.**

This post explains how that platform worked, and which ideas still hold up today.

## The setup

| Layer | Tool |
|---|---|
| Storage | Amazon S3 data lake |
| Processing | EMR and Spark, plus Glue |
| Orchestration | Lambda and CloudWatch Events |
| SQL | Athena |
| Streaming | Kinesis → Lambda → Firehose |
| Warehouse (selected data) | Snowflake |
| BI | Tableau, Alteryx |
| Docs and data quality | Sphinx portal |

## Idea 1: a cluster per job

Each job started its own EMR cluster, ran, and terminated the cluster on success.

- **Cost follows work.** You pay for compute only while data is processed.
- **No noisy neighbours.** One heavy job cannot slow down another.
- **Easy sizing.** Each job gets the cluster shape it needs.

The trade-off is start-up time. A few minutes of cluster start is fine for batch. It is not fine for near-real-time data. Streaming went through Kinesis and Lambda instead.

Today, EMR Serverless gives the same benefit with less work. The team was already moving in that direction.

## Idea 2: pipelines as configuration

Every job was a set of **YAML files** in Git: source, target, transformations, schedule, cluster size.

A new data feed meant a new config file, not a new codebase. This gave the team:

- Code review for every change.
- One tested engine instead of many custom scripts.
- Faster onboarding for new engineers.

This is the most useful idea from the project. We still use it on Databricks and Snowflake platforms.

## Idea 3: trigger on data, not on time

Jobs ran when enough data arrived (by **file volume**), not at a fixed hour. Pipelines reacted to data instead of waiting for the next window.

The risk: if data stops arriving, nothing runs and nothing fails. You need a freshness alert to catch silence.

## Idea 4: documentation is part of the platform

A Sphinx portal held documentation and data quality results in one place. Analysts could check if a table was fresh and correct before they used it.

Most data teams skip this. It is cheap, and it removes a lot of "is this number right?" questions.

## What we would change today

- **EMR Serverless** instead of managing cluster start and stop.
- **Apache Iceberg** tables on S3 instead of plain Parquet folders, for updates and schema changes.
- **One warehouse decision.** Part of the data went to Snowflake, part stayed in Athena. Two engines means two cost models and two sets of skills.

## The lesson

The tools changed. The ideas did not: pay only for work done, define pipelines as config, trigger on data, and document everything.

See the [full project page](/projects/serverless-data-lake-telecom/) for the team and the architecture diagram.
