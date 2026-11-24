---
title: "Databricks or Snowflake for a Roll-Up? How to Choose the Shared Platform"
description: "How to choose the shared data platform for a roll-up: unstructured data, team skills, tenant isolation, carve-outs, connectors, and the real cost drivers."
date: 2026-11-24T13:20:00Z
category: "AI Roll-ups"
service: "ai-roll-up"
---

We build on both platforms. For most companies the choice comes down to workloads, skills, and the cloud they already use. A roll-up adds its own questions, and they matter more than the usual feature comparison.

Start with one fact that changes the conversation.

## A roll-up has a variety problem, not a volume problem

A 30-person accounting firm or a 50-van HVAC company produces very little data. Forty of them together still produce little. The hard part is forty different systems, forty charts of accounts, and work that lives in PDFs and inboxes.

So ignore benchmarks about scanning petabytes. Both platforms run this workload without effort. Judge them on the seven questions below.

## 1. How much of the work is documents, calls, and email?

In an offline service business, most of the AI value is in unstructured input. Both platforms now handle it with SQL functions.

| Task | Databricks | Snowflake |
|---|---|---|
| Parse a document | `ai_parse_document` | `AI_PARSE_DOCUMENT` |
| Extract fields | `ai_extract`, `ai_query` | `AI_EXTRACT`, `AI_COMPLETE` |
| Classify | `ai_classify` | `AI_CLASSIFY` |
| Transcribe audio | `ai_transcribe` | `AI_TRANSCRIBE` |
| Search | AI Search (formerly Vector Search) | Cortex Search |

These are the function names in the vendor documentation in November 2026. Some are still in beta or preview, so check the status before you plan around one. Both search products support hybrid search, which combines keywords and vectors.

On paper this is a tie. So test both on fifty of your own documents. Scanned forms, handwriting, and multi-page statements separate the tools faster than a feature table does.

## 2. Who will run it?

A roll-up's platform team is small in its first years. Often it is a handful of people.

- A team that thinks in SQL and dbt is productive on Snowflake sooner. There is less to configure.
- A team with Python and Spark skills, or with machine learning plans beyond LLM calls, gets more from Databricks.

Hire first, then choose. A platform your engineers know well beats a better platform they are still learning.

## 3. How will you keep the companies apart?

Each acquired company is a separate legal entity with its own clients.

| Need | Databricks | Snowflake |
|---|---|---|
| One container per company | A catalog in Unity Catalog | A database |
| Limit rows on shared tables | Row filters | Row access policies |
| Hide columns | Column masks | Masking policies |
| Keep a company in its own environment | Workspace bindings | A separate account in the organization |

Both models work. One detail to budget for: Snowflake documents row access policies as an Enterprise Edition feature.

## 4. Will you ever sell one of the companies?

Roll-ups sell things too. A division that no longer fits, or the whole group.

If each company's raw and conformed data sits in its own catalog or database, a carve-out is an export. If everything went into shared tables with a company column, a carve-out is a project, done under deal pressure.

This is a design rule, not a platform difference. Both platforms support it. Decide it on day one.

## 5. What connects to the source systems?

Check this before you sign anything.

Both vendors offer managed connectors: Lakeflow Connect on Databricks and Openflow on Snowflake. Both lists lean toward enterprise sources such as Salesforce, Workday, SharePoint, and the major databases. When we checked the documentation in November 2026, neither list named QuickBooks or Xero.

Most systems in small service firms are not on either list. So you need a separate ingestion tool, or custom connectors, on either platform.

Take the system inventory from [diligence](/blog/roll-up-data-due-diligence/) and check connector coverage tool by tool. This often decides more than the warehouse does.

## 6. What does the cost look like?

With small data, the bill is not storage and it is not large queries. It is three other things:

- **Compute left running.** Set auto-suspend and auto-stop from the first day.
- **AI function calls.** They are billed by usage. Set a budget per workflow and per company.
- **People.** At this size the team usually costs more than the platform.

Ask each vendor to price the same small workload: daily loads from twenty sources, a hundred dbt models, one dashboard, and one document workflow at a known volume. Compare those two quotes, not the list prices.

## 7. What is already there?

- A cloud commitment at the holding company.
- A BI tool the finance team already uses.
- A platform that one acquired company already runs well. That is a free pilot.

## The short version

| Lean to Snowflake when | Lean to Databricks when |
|---|---|
| The team is SQL-first | The team writes Python and Spark |
| Most work is reporting plus document extraction | You plan custom ML or heavy pipelines on unstructured data |
| You want the least to operate | You want one place for data engineering and ML |
| Finance is the main user | Operations and AI workflows are the main users |

These are tendencies, not rules. Each platform can do the other one's job.

## What matters more than the choice

The valuable parts of a roll-up's data layer are portable:

- The shared model, and the mappings per company.
- The [identity cross-reference](/blog/roll-up-identity-resolution/).
- The KPI definitions.
- The evaluation sets for each AI workflow.

Keep them in dbt and in version control, and store tables in an open format where you can. Then the platform is a decision you can revisit. The model is the asset.

## Sources

- Databricks documentation: [AI Functions](https://docs.databricks.com/aws/en/large-language-models/ai-functions), [Lakeflow Connect](https://docs.databricks.com/aws/en/ingestion/lakeflow-connect/), [Unity Catalog](https://docs.databricks.com/aws/en/data-governance/unity-catalog/), [AI Search](https://docs.databricks.com/aws/en/vector-search/vector-search)
- Snowflake documentation: [Cortex AI Functions](https://docs.snowflake.com/en/user-guide/snowflake-cortex/aisql), [Openflow connectors](https://docs.snowflake.com/en/user-guide/data-integration/openflow/connectors/about-openflow-connectors), [row access policies](https://docs.snowflake.com/en/user-guide/security-row-intro), [Cortex Search](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-search/cortex-search-overview)

---

*We work with both platforms and have no vendor quota to fill. See our [Databricks](/services/databricks/) and [Snowflake](/services/snowflake/) services, or [AI roll-up engineering](/ai-roll-up/) for the full picture.*
