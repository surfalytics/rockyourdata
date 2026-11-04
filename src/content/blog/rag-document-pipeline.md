---
title: "RAG in Production: Treat Documents Like a Data Pipeline"
description: "A reference architecture for a RAG system that stays correct after launch — incremental document ingestion, structure-aware chunking, hybrid retrieval, permission filtering, and the monitoring that catches rot."
date: 2026-11-04
category: "AI Engineering"
service: "ai-data-engineering"
---

The most common AI use case we see is the same one: "Let people ask questions about our documents." Policies, runbooks, contracts, support tickets, call transcripts.

The demo takes a week. The production system takes months. The difference is not the model. It is that a demo loads documents once by hand. A production system has to keep thousands of documents correct, fresh, and permissioned, forever.

That is a data pipeline. Build it like one.

## The reference architecture

![RAG document pipeline: ingestion row (sources, ingest, parse and chunk, embed) feeding a hybrid search index, a serving row (question, retrieve and rerank, LLM, answer), and a monitoring bar](/blog/rag-document-pipeline.svg)

Two separate flows share one index:

- **Ingestion** runs on a schedule. It is batch work, same as loading a warehouse.
- **Serving** runs per question. It is a request path, with latency and cost per call.

Most teams design only the serving path. The ingestion path is where production systems break.

## Ingestion: the part the demo skipped

### Incremental sync, with deletes

Re-embedding every document every night is slow and expensive. Track a version per source document (modified timestamp, content hash, or the source system's version ID). Embed only what changed.

Deletes matter more than updates. When a policy is retired at source, it must leave the index the same day. If it does not, the assistant will cite it with full confidence. We have seen this exact failure with an HR policy that was replaced six months earlier.

### Structure-aware chunking

Fixed 500-token windows cut tables in half and separate headings from their text. Split on the document's own structure instead: markdown headings, PDF sections, ticket fields.

Two cheap improvements that help a lot:

- Put the document title and section path at the top of every chunk.
- Keep tables whole, even if the chunk gets long.

### Metadata on every chunk

Store source system, document ID, version, last modified date, and access level with each vector. Without this you cannot cite, cannot filter, and cannot enforce permissions. Adding it later means a full re-index.

## Serving: retrieval decides the answer quality

### Hybrid retrieval

Pure vector search is weak on exact matches. Users search for error codes, part numbers, invoice IDs, and people's names. Embeddings blur exactly those.

Combine keyword search (BM25) with vector similarity. Databricks Vector Search, Snowflake Cortex Search, and pgvector with Postgres full-text search all support this directly.

### Rerank

Retrieve 50 candidates, rerank to the top 5, pass those to the model. In our experience this is a bigger quality gain than changing the embedding model.

### Permission filtering before retrieval

Filter by the user's access level at query time, not after the model has already seen the text. A chunk the user cannot read must never reach the prompt.

### Refuse when retrieval is weak

If the top result scores below a threshold, say "I do not have information on that." A system that refuses is more useful than one that guesses. Every answer should cite its sources so the user can check.

## Monitoring: what to alert on

The index rots silently. Watch it like any other pipeline:

| Metric | Why |
|---|---|
| Document count per source | A broken connector shows up as a flat line |
| Embedding failures | Bad PDFs and oversized files fail quietly |
| Freshness lag | Time between a source change and the index update |
| Deletes applied | Confirms retired documents actually left |
| Retrieval hit rate on the eval set | Did the right chunk land in the top 5? |
| Cost per answer | Catches prompt bloat and runaway users |

The eval set is a fixed list of real user questions with the expected source document. Run it after every change to chunking, embeddings, or the retriever. Without it you cannot tell an improvement from a regression.

## Where this fits on your platform

On Databricks the ingestion path is a normal job: Bronze holds raw files, a Silver table holds parsed chunks with metadata, and Vector Search syncs from that table. On Snowflake the same shape works with Cortex Search over a chunks table. The chunks table is a regular table. Test it with dbt, track lineage, and version it like everything else.

## Where to start

Pick one document set with one owner. Build the ingestion path first, with deletes and metadata from day one. Build the eval set before you tune anything. Then connect the model.

If the demo already exists, the usual gap is the ingestion row in the diagram above. That is the work to fund.

---

*We build the AI-ready data layer under production RAG systems as part of our [AI data engineering](/services/ai-data-engineering/) service. [Book a call](/contact/) to review your architecture.*
