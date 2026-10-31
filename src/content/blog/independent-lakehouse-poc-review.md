---
title: "How to Review a Data Lakehouse PoC Before the Board Funds It"
description: "An independent review of a lakehouse proof of concept: what to check, how to score it, and what the steering committee should get at the end."
date: 2026-10-28
category: "Architecture"
service: "data-platforms"
---

A proof of concept is built to show that something works. The business case built on top of it asks a different question: should we spend the money for the next five years?

These are not the same question. The team that built the PoC is usually too close to answer the second one. That is why more companies now ask for an **independent review** before the board approves a full build.

This post describes how we run that review. We use it for lakehouse PoCs on AWS (S3, Iceberg, Athena, Glue, Airflow), but the method works for Databricks and Snowflake too.

## What the review must answer

Leadership needs a decision, not a reading list. So the review answers six questions:

1. Is the PoC package complete and consistent?
2. Did the PoC actually meet its success criteria?
3. Is the architecture ready for production?
4. Will it scale with the expected growth?
5. Are the build cost and the running cost right?
6. Can the team the company has actually run it?

## Start early, but do not take over

The best time to join is **before** the PoC ends. Not to direct the work, but to agree the rules:

- How "success criterion met" will be judged.
- What evidence counts: test results, configs, cost exports.
- What documents the PoC team will hand over.

If the success criteria are vague at the start, they cannot be tested at the end. A short early note saves weeks later. The internal team still makes every PoC decision.

## Score everything the same way

We use fixed verdicts. They are written into the validation plan before the review starts, so nobody can push for a specific answer later.

| What we review | Possible verdicts |
|---|---|
| Each success criterion | Met · Partially met · Not met · Not testable with current evidence |
| Each internal recommendation | Agree · Agree with changes · Disagree · Needs more validation |
| Each cost line | Validated · Understated · Overstated · Missing · Unsupported assumption |
| Each finding | Critical · High · Medium · Low |

Every finding has the same fields: what we saw, the evidence, the impact, the severity, the fix, and the effort.

## Check the tests, not only the results

A green test result means little if the test was weak. For each success criterion we ask:

- Was it tested with realistic data volume?
- Was concurrency realistic, or one user at a time?
- Was the test repeated, or run once?
- Did business users take part, or only engineers?

"Athena queries return in 3 seconds" is not useful if the test table had 1 GB and production will have 5 TB.

## Build the cost model from drivers

A PoC usually runs on small data for a short time. Its AWS bill is a weak predictor. So we map each service to its cost driver and scale the driver:

| Service | Cost driver |
|---|---|
| S3 | GB stored, by storage class |
| Athena | TB scanned |
| Glue ETL | DPU-hours |
| MWAA | Environment-hours (it is always on) |
| Lambda | Invocations and duration |

Then we model five years with **low, expected, and high** growth. We add people costs, because for a first data platform the team often costs more than the cloud.

The result is a spreadsheet the client keeps and updates, not a number in a PDF.

## Be fair to the internal team

A review can feel like an attack on the people who built the PoC. That kills cooperation. Two rules help:

- **Fact check.** The PoC team sees draft findings and can correct facts and add evidence. Conclusions stay with the reviewer.
- **Record disagreement.** If the team disagrees, both views go into the report. The steering committee sees both.

## What the steering committee gets

One package with a clear verdict:

- **Proceed**
- **Proceed with conditions** (and what must be true for each)
- **Additional validation required**
- **Do not proceed**

Plus the top risks, the five-year TCO, and the team needed to build and run the platform.

## Write decisions down

Every important recommendation becomes a short decision document: context, options, recommendation, decision, approver. All of them go into one decision log.

A year later, someone will ask why Iceberg was chosen or why an Athena workgroup has a limit. The log answers that. For a company running its first data project, this log is often the most useful thing the review leaves behind.

---

We have run this kind of review for internally built platforms on AWS and Azure Databricks. If you are about to take a PoC to your board, [talk to us](/contact/).
