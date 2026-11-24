---
title: "Data Due Diligence for an Acquisition: What to Check in Two Weeks"
description: "A two-week data and AI diligence checklist for buyers of service businesses: systems, access, data quality, where the work really lives, and the red flags that change the integration cost."
date: 2026-11-24T15:00:00Z
category: "AI Roll-ups"
service: "ai-roll-up"
---

Financial diligence tells you what a business earned. Data diligence tells you what it will cost to connect that business to everything else you own, and how much of its work AI can take over.

For an [AI roll-up](/blog/ai-roll-ups-explained/), that second number is the investment thesis. Most buyers still find it out after close.

Here is what to check, in order. Two weeks is enough for one target if the seller answers questions.

## 1. Systems: what runs the business

List every system that holds business data. For a small service firm that usually means accounting, job or practice management, CRM, payroll, phones, email, document storage, and spreadsheets.

For each one, write down:

- Vendor, version, and whether it is cloud or a desktop install.
- Who administers it. Often one person. Sometimes the owner.
- How far back the history goes.
- What it takes to leave: contract length and data export rights.

**Red flag:** a desktop application on a server in the office, with no API and no vendor support. It can still be read, but the connector is custom work.

## 2. Access: can you get the data out

This decides the first month after close. For each system, find which of these exists. Best first:

1. An API, or a native export to a warehouse.
2. Direct read access to the database.
3. Scheduled report exports (CSV, Excel).
4. Manual export only.

Ask for a real sample, not a description. A full export of one table per system shows in an hour what a questionnaire hides for weeks.

**Red flag:** the vendor contract forbids bulk export, or charges for it.

## 3. Data quality: five tests that predict the cost

You do not need a full audit. Run five tests on the samples.

| Test | What it tells you |
|---|---|
| Duplicate customers (same name, phone, or email) | How hard identity matching will be |
| Records missing a key field (no customer on an invoice, no job on a timesheet) | Whether you can tie revenue to work |
| Free text where a code should be (service type, status) | How much mapping each KPI needs |
| History depth and gaps | Whether a baseline is possible |
| Revenue in the operational system vs. the accounting system | Whether the two reconcile at all |

The last test matters most. If job revenue and booked revenue differ and nobody can explain why, every later number will be argued about.

## 4. Where the work lives

AI can only take over work it can read. So find out where the work really happens.

Sit with three or four staff for an hour each. For the ten most frequent tasks, note:

- **The input.** A PDF, an email, a phone call, a form, a screen.
- **The steps**, and which of them need judgement.
- **The output**, and where it goes.
- **Volume per week and minutes per task.** A rough number is fine.

In a small service firm, the system of record often holds only the result. The work itself lives in an inbox, a shared drive, and someone's head.

This list becomes the automation shortlist. Rank it by volume times minutes. Then strike anything where a wrong answer is expensive and hard to catch. We cover the scoring in [where AI removes work first](/blog/ai-workflows-offline-service-business/).

## 5. People: who knows how it works

Every small firm has a person who builds the month-end report, knows which customer codes are wrong, and fixes the export when it breaks. Find that person before close.

**Red flag:** that person is the seller, and the seller is leaving.

## 6. Permission: what you may do with the data

Three things to read:

- **Client contracts.** Some limit the use of client data to delivering the service. Running AI on it may need consent.
- **Regulation.** Health, financial, and tax data carry their own rules on who may process them and where.
- **Vendor terms.** Who owns the data inside each SaaS tool, and whether you can take it with you.

This is a legal review, not an engineering one. But engineering needs the answer before design, not after.

## 7. The output: a scorecard and three numbers

Score each area green, amber, or red, with one sentence of evidence.

| Area | Green | Red |
|---|---|---|
| Systems | Cloud tools with APIs | Unsupported desktop software |
| Access | Full export in days | Manual export, contract limits |
| Quality | Revenue reconciles, few duplicates | Revenue does not reconcile |
| Workflows | High-volume, repeatable tasks | Mostly judgement, low volume |
| People | Knowledge is shared | One person, and they are leaving |
| Permission | Clear right to process | Client consent needed first |

Then turn the scorecard into three numbers for the deal model:

1. Weeks to consolidated reporting.
2. Weeks to a clean, shared data model.
3. Hours per month in the workflows AI could take over, and what those hours cost.

## What this changes

Sometimes it changes the price. More often it changes the plan: which company to integrate first, which workflow to automate first, and how many deals a year the integration team can absorb.

That last number is worth knowing. One roll-up co-founder [traces every failure seen in this market](https://www.newsletter.lukesophinos.com/p/linear-186-ai-roll-ups-two-years) to acquisition pace outrunning integration capacity. Diligence is where you learn your real pace.

After close, the scorecard becomes the build plan for [the shared data layer](/blog/roll-up-data-layer/).

---

*Data and AI diligence is the first step of our [AI roll-up engineering](/ai-roll-up/) practice. [Get in touch](/contact/) if you have a target in view.*
