---
title: "AI Data Engineering: Why Your AI Project Is Really a Data Project"
description: "What AI data engineering means in practice — AI-ready data layers, chunking and embeddings, semantic layers for NL-to-SQL, evaluation sets, and the failures that kill AI pilots."
date: 2026-09-04
category: "AI Engineering"
service: "ai-data-engineering"
---

Most AI pilots do not fail on the model. They fail because the data underneath was never built for this.

A demo works because someone hand-picked ten documents and asked five questions they already knew the answers to. Production is different: thousands of documents, stale copies, conflicting definitions, and users who ask things nobody anticipated. That gap is data engineering work, and it is usually underestimated by a factor of five.

Here is what "AI data engineering" actually covers.

## 1. Unstructured data needs a pipeline too

Your warehouse has ingestion, scheduling, testing, and lineage for structured tables. Your PDFs, tickets, wiki pages, and transcripts usually have none of that. They get loaded once by hand into a vector store, and then they rot.

An AI-ready ingestion pipeline handles the same concerns as any other pipeline:

- **Incremental sync**, not full re-embedding. Track source document versions and re-embed only what changed.
- **Deletion.** When a document is removed at source, it must leave the index. Otherwise the model confidently cites a policy that was retired last year.
- **Metadata.** Source system, document ID, last modified, access level. Without it you cannot filter, cannot cite, and cannot enforce permissions.
- **Monitoring.** Document counts, embedding failures, and freshness lag, alerting like any other job.

## 2. Chunking is a real design decision

Splitting documents into fixed 500-token windows is the default, and it is usually wrong. It cuts tables in half and separates headings from the text they describe.

Better approaches, in rough order of effort:

- **Structure-aware splitting.** Split on markdown headings, PDF sections, or ticket fields. Chunks then match how the document is actually organized.
- **Prepend context.** Put the document title and section path at the top of every chunk. Retrieval improves a lot for very little work.
- **Keep tables whole.** A table split across chunks produces confidently wrong numbers.

Test this rather than reasoning about it. Build a set of real user questions, check whether the right chunk comes back in the top 5, and adjust.

## 3. Retrieval: hybrid beats pure vector search

Pure semantic search is bad at exact matches. Users search for error codes, SKUs, part numbers, and person names — and embeddings blur exactly those.

Hybrid retrieval — combining BM25 keyword search with vector similarity, then reranking — is the practical default. Most platforms support it directly: Databricks Vector Search, Snowflake Cortex Search, pgvector alongside Postgres full-text search.

Add a reranker if quality still falls short. Retrieving 50 candidates and reranking to the top 5 is usually a bigger quality gain than switching embedding models.

## 4. NL-to-SQL needs a semantic layer, not a bigger model

Pointing an LLM at your raw warehouse schema and asking for "revenue last quarter" will produce SQL. It will also produce the wrong number, because `revenue` means four different things in your database and the model has no way to know which one the business uses.

What actually makes NL-to-SQL work:

- **A curated, documented subset of tables.** Gold layer only. Never expose the whole warehouse.
- **Metric definitions as code.** One definition of revenue, churn, and active user, stored where both humans and the model read it — dbt metrics, a semantic layer, or Databricks metric views.
- **Column and table descriptions that explain business meaning**, not just data type.
- **Verified query examples.** A library of known-good question/SQL pairs to retrieve as few-shot examples is often the single biggest accuracy lever.

If the model gets the answer wrong, the usual fix is clearer semantics, not a better model.

## 5. Evaluation is a deliverable, not an afterthought

"It seems better" is not a quality process. You need a scored evaluation set before you start tuning, or you cannot tell improvement from regression.

A workable minimum:

- **50-100 real questions** collected from actual users, not invented by the team.
- **Expected answers or expected sources** for each.
- **A retrieval metric** (was the right document in the top 5?) separate from an **answer metric** (was the answer correct?). Separating them tells you whether to fix retrieval or generation.
- **A CI run** on every prompt, chunking, or model change.

Keep the failures. A question the system got wrong is the most valuable test case you have.

## 6. Guardrails and cost, before launch

Two things will surprise you in week one of production:

**Wrong answers delivered confidently.** The fix is refusal. A system that says "I do not have information on that" is more useful than one that guesses. Ground every answer in retrieved sources, cite them, and refuse when retrieval confidence is low.

**The bill.** Token costs scale with usage in a way that batch pipelines do not. Set per-user rate limits, cache repeated queries, use a smaller model for routing and classification, and put a hard budget ceiling in place before launch rather than after the invoice.

## Where to start

If you are at the beginning: do not start with a model. Start by picking one narrow use case with a clear owner, then check whether the data behind it is complete, fresh, permissioned, and unambiguously defined. That check usually takes two weeks and saves six months.

The teams that ship AI features successfully are not the ones with the best models. They are the ones whose data was ready.

---

*We run [AI readiness assessments](/services/ai-data-engineering/) and build the AI-ready data layer underneath production GenAI applications. [Book a call](/contact/) to talk through your use case.*
