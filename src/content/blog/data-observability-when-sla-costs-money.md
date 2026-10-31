---
title: "Data Observability When a Late File Costs Real Money"
description: "A reverse ETL pipeline delivered location data to a paying client every 30 minutes. Missing the SLA meant a penalty. Here is how 90% of the work became observability."
date: 2026-09-30
category: "Data platforms"
service: "data-platforms"
---

Most data teams say data quality matters. Few have a contract that charges them when data is late.

We worked on one that did. A large North American location-data company sold geo-data to an external client. Data had to arrive **every 30 minutes**. If it was late or wrong, the company paid a financial penalty.

That changes how you build.

## The pipeline was simple

| Step | Tool |
|---|---|
| Query | Athena SQL, run from a Glue Python Shell job every 30 minutes |
| Output | Parquet partitions written to the client's landing zone |
| Compliance | Lambda checks before data leaves the account |
| Alerts | CloudWatch metrics and alarms |
| On-call | PagerDuty |

The data team had 4 data engineers, a manager, and a director.

The transformation logic was a small part of the work. About **90% of the effort went into observability**.

## What to monitor in a pipeline like this

**1. Did the job run?**
The basic check. A job that did not start is the easiest failure to miss.

**2. Did the data arrive on time?**
Freshness at the destination, not only at the source. A job can succeed and still deliver late.

**3. Is the data complete?**
Compare row counts and partition counts with expected ranges. A half-empty file is worse than no file, because nobody notices.

**4. Is the data compliant?**
Location data is sensitive. In this pipeline, Lambda checks ran before delivery, so non-compliant data never left the account.

**5. Is the trend normal?**
Compare volume with the same window last week. A sudden drop often means an upstream problem.

## On-call for a data team

Alerts went to PagerDuty with a real on-call rotation. That needs:

- **Runbooks.** Every alert links to steps to fix it.
- **Clear severity.** Not every alert should wake someone up at 3 a.m.
- **Post-incident reviews.** Each breach should lead to a new check or a better alert.

## The hard lesson: you do not own the whole SLA

Part of the SLA depended on upstream systems the data team did not control. When an upstream service was late, the data team still got the alert — and the penalty.

What helps:

- Monitor upstream inputs, not only your own outputs.
- Agree internal SLAs with upstream teams.
- Write the external contract with clear exclusions.

## What any team can take from this

You may not have penalties in your contract. But your executives make decisions on your dashboards. Ask:

- Do we know when data is late, before a user tells us?
- Do we check completeness, or only job status?
- Does someone own the alert?

If the answer is no, a "green" pipeline does not mean correct data.

See the [project page](/projects/geo-data-delivery-observability/) for the team and the stack.
