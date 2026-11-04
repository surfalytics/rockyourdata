---
title: "NL-to-SQL That Gives the Right Number: Architecture and the Semantic Layer"
description: "Why 'chat with your warehouse' returns wrong numbers, and the architecture that fixes it — gold tables only, a versioned semantic layer with metric definitions and verified queries, and an evaluation loop in CI."
date: 2026-11-11
category: "AI Engineering"
service: "ai-data-engineering"
---

"Chat with your data" is the second most requested AI use case after document search. The pitch is simple: a manager types "net revenue in EMEA last quarter" and gets a number.

The first demo works. Then someone checks the number against the finance dashboard. It is different.

The model did not make a mistake. It did exactly what it was asked. The problem is that `revenue` exists in four tables, two of them include refunds, one is in local currency, and nothing told the model which one finance uses.

NL-to-SQL is a semantics problem, not a model problem. Here is the architecture that handles it.

## The reference architecture

![NL-to-SQL architecture: question to LLM agent to generated SQL to warehouse to answer, backed by a semantic layer of metric definitions, table docs, and verified queries, with an evaluation loop in CI feeding fixes back into the semantic layer](/blog/nl-to-sql-semantic-layer.svg)

Three things make this different from "point the LLM at the schema":

1. The model only sees **gold tables and metric views**. Never the raw warehouse.
2. The model reads a **semantic layer** before it writes SQL.
3. Every change runs against an **evaluation set** in CI.

## Expose a curated subset, not the warehouse

Giving the model 800 tables makes it guess. Give it 15.

- Gold layer only. Clean, documented, business-named tables and metric views.
- Read-only credentials, a row limit, and a query timeout on the connection.
- Validate the generated SQL before it runs: allowed tables only, no DDL, no cross joins without a condition.

This is also your security boundary. The model cannot leak a table it cannot see.

## The semantic layer is the product

This is where most of the engineering time goes. It has three parts. Keep all of them in Git.

### Metric definitions as code

One definition of revenue. One definition of churn. One definition of active user. Store them where both people and the model read them: dbt metrics, Databricks metric views, or Snowflake semantic views.

If finance and the model use the same definition file, their numbers match by construction.

### Table and column descriptions that explain meaning

"`amount` DECIMAL(18,2)" tells the model nothing. "`amount`: order total in USD after discounts, before tax and refunds" tells it everything.

Write descriptions for the business meaning, the grain, and the gotchas. "One row per order line, not per order" prevents a whole class of double-counting.

### Verified query examples

A library of known-good question and SQL pairs. The agent retrieves the closest examples and uses them as few-shot context. In practice this is the single biggest accuracy lever. It is also the cheapest: every time an analyst writes a query people trust, add it to the library.

## The evaluation loop

You cannot improve what you do not measure. Before tuning anything, build the test set:

- 50 to 100 real questions from actual users. Not invented by the team.
- The expected number for each, pulled from the trusted dashboard.
- A pass means the generated SQL returns that number. Not "looks similar".

Run it in CI on every change to prompts, descriptions, metric definitions, or the model.

When a question fails, fix the semantic layer first. Add a description, add a verified example, tighten a metric definition. Changing the model is the last thing you try. And every wrong answer from production becomes a new test case.

## Show the SQL

Always return the SQL with the number. Analysts will check it. Managers will forward it to analysts who will check it. This is a feature, not a weakness. A number nobody can verify will not be trusted, and an untrusted tool stops being used in a month.

## What this looks like on Databricks and Snowflake

- **Databricks:** Unity Catalog comments as the table docs, metric views for definitions, Genie spaces as the agent, and a Delta table of verified queries. Genie's "trusted assets" is exactly the verified query library.
- **Snowflake:** Cortex Analyst reads a semantic view. The semantic view is the semantic layer. Verified queries are a first-class field in it.

In both cases the platform gives you the agent. What it does not give you is a documented gold layer, agreed metric definitions, and an eval set. That is data engineering work, and it is usually where the project actually stands or falls.

## Where to start

Pick one domain. Sales or finance, not both. Pick ten questions that domain asks every week. Build the gold tables, write the definitions, collect the verified queries, build the eval set. Then turn on the agent.

If the agent is already on and the numbers are wrong, the fix is almost never a bigger model. It is the semantic layer box in the diagram above.

---

*We build the gold layer and semantic layer that make NL-to-SQL trustworthy as part of our [AI data engineering](/services/ai-data-engineering/) service. [Book a call](/contact/) to talk through your use case.*
