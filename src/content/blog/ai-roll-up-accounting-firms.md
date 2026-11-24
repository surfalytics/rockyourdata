---
title: "AI Roll-Ups in Accounting: The Systems, the Data, and the First Workflows"
description: "What a buyer finds inside a small accounting or tax firm: the software, the data, the KPIs, the first AI workflows, and the rules on client tax data."
date: 2026-11-24T11:00:00Z
category: "AI Roll-ups"
service: "ai-roll-up"
---

Accounting is where the [AI roll-up](/blog/ai-roll-ups-explained/) idea is being tested hardest. The firms are small and there are many of them. The revenue repeats every year. And much of the work is reading documents and typing what they say.

This post is for the buyer's side of the table. It covers what you find inside a small accounting or tax firm, from a data point of view.

## Why accounting, and one structural catch

Outside capital was moving in before AI. As of early 2026, almost half of the top 30 US CPA firms had private equity investment or an alternative practice structure, according to CPA Practice Advisor. In August 2026, Grant Thornton agreed to buy CBIZ for $5 billion.

The catch is ownership. As accounting professor Andrew Belnap wrote in Bloomberg Tax: "Partnership models generally restrict ownership to licensed professionals."

Investors work around this with an alternative practice structure. In broad terms, the audit practice stays in a firm owned by CPAs, and the tax, bookkeeping, and advisory work moves into a company that outside investors can own.

That has a data consequence. You get two legal entities that share staff, clients, and systems. Plan the access model with that split in mind from the first day.

## The systems you will find

| Function | What it holds | How you usually get data out |
|---|---|---|
| Tax preparation (UltraTax CS, CCH Axcess, Lacerte, Drake) | Returns, client tax data, prior years | Often report exports and PDFs |
| Practice management (Karbon, Canopy, TaxDome) | Clients, engagements, tasks, deadlines | Cloud tools, some with an API |
| Client ledgers (QuickBooks Online, Xero) | The books of bookkeeping clients | APIs for cloud ledgers. Desktop files are harder |
| Document storage and client portal | Source documents, signed forms, workpapers | Files in folders. Metadata varies |
| Time and billing | Hours, rates, invoices, write-offs | Reports, sometimes an API |
| Email and phone | Most client communication | Mailboxes and call logs |

Check the access method for the exact product and version in [diligence](/blog/roll-up-data-due-diligence/). The same vendor often sells a cloud product with an API and an older desktop product without one.

## Where the data really sits

1. **The most valuable data is the hardest to get out.** The tax software holds years of structured client data. Often you can only export reports.
2. **Work in progress is in the practice tool and in email.** Status fields are often out of date.
3. **Source documents are files.** W-2s, 1099s, K-1s, and bank statements, named by whoever saved them.

## The numbers that matter

| KPI | What it tells you |
|---|---|
| Revenue per full-time employee | The headline productivity number |
| Realization | Billed amount as a share of the standard value of hours worked. Write-downs hide here |
| Utilization | Billable hours as a share of available hours |
| Turnaround per return or per monthly close | Where the queue forms |
| Revenue per client and client retention | Concentration and stickiness |
| Share of revenue from fixed-fee work | How exposed the firm is to the billable-hour problem |

The last row matters for the thesis. If a firm bills by the hour and AI removes hours, revenue falls together with cost. Firms that already sell fixed-fee or subscription work keep the gain. Measure the mix before you buy.

## Workflows AI can take first

1. **Document intake.** Classify what the client sent, extract the fields, and flag what is missing. High volume, and a preparer checks it before it reaches a return. We describe the pattern in [LLMs inside the pipeline](/blog/llm-extraction-pipeline/).
2. **Chasing missing documents.** Draft the reminder, list exactly what is missing, and track the replies. A person sends it.
3. **Bookkeeping categorization.** Suggest a category for each bank transaction, and flag the unusual ones for the monthly close.
4. **Review support.** Compare this year with last year and flag large changes. The reviewer still decides.
5. **Engagement admin.** Engagement letters, organizers, and invoices built from time entries.

Leave these alone at first: tax positions, anything a preparer signs, and advice. They sit in the [high cost of error](/blog/ai-workflows-offline-service-business/) corner.

Vendors sell point tools for several of these tasks. For a roll-up the question is where the extracted data lands. If each firm uses a different tool with its own storage, you have automated the firms and learned nothing across them. Write the results into the [shared data layer](/blog/roll-up-data-layer/).

## The calendar decides the plan

- **January to April is tax season.** Do not start an integration in it.
- **September and October** carry the extension deadlines.
- **The quiet months** are for mapping, baselines, and shadow runs.

A baseline has to include part of a busy period, or it understates the load. So measure in season, and change things out of season.

## Client tax data has its own rules

This is not legal advice. It is the list of questions engineering needs counsel to answer before design starts.

- **Section 7216.** A US tax preparer needs the taxpayer's written consent before using or disclosing return information outside the regulatory exceptions. Violations carry criminal penalties. The IRS has not said whether sending return information to an AI tool counts as a disclosure to a third party.
- **IRS guidance on AI.** In June 2026 the IRS Office of Professional Responsibility issued an alert on AI in tax practice. As reported by CPA Practice Advisor, it tells practitioners to handle client data "using only secure, enterprise-approved AI."
- **The FTC Safeguards Rule.** The FTC lists tax preparation firms among the covered financial institutions. They must keep a written information security program.
- **Work sent outside the US.** The Tax Adviser's reading is that consent is almost certainly required.

What this means for the build:

- An approved list of AI tools. Client data goes into those and nowhere else.
- A log of which tool touched which client's data.
- A path for clients who say no to AI. Their work follows the manual process.
- Human review of every AI output before it reaches a client or the IRS.
- Contract terms with each AI vendor on retention, and on training with your data.

A roll-up adds one more point. On the day you buy a firm, its consent forms and policies are its own. Collect them in diligence. Do not move client tax data into shared AI workflows until the consents and policies are aligned.

## Where to start in a newly acquired firm

1. **Practice management and time data.** They give revenue per employee, realization, and turnaround. They are also the easiest to extract.
2. **The document store.** An inventory and the volumes by document type.
3. **One season of baseline** on document intake.
4. **Tax software exports.** Last, because they take the longest and the first reports do not need them.

The order follows the general [100-day plan](/blog/roll-up-first-100-days/), moved to fit the tax calendar.

## Sources

- CPA Practice Advisor, [Financial Engineer or Operator? How to Choose the Right Buyer](https://www.cpapracticeadvisor.com/2026/09/09/financial-engineer-or-operator-how-to-choose-the-right-buyer/189932/) (September 2026)
- Bloomberg Tax, [Private Equity's Public Accounting Push Reflects a Tech Shock](https://news.bloombergtax.com/daily-tax-report/private-equitys-public-accounting-push-reflects-a-tech-shock) (August 2026)
- CPA Practice Advisor, [What to Settle Before Client Tax Data Touches AI](https://cpapracticeadvisor.com/2026/10/12/what-to-settle-before-client-tax-data-touches-ai/191491) (October 2026)
- FTC, [FTC Safeguards Rule: What Your Business Needs to Know](https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know)
- The Tax Adviser, [The many implications of Sec. 7216](https://www.thetaxadviser.com/issues/2024/jan/the-many-implications-of-sec-7216/) (January 2024)

---

*The same data layer and the same workflows apply to accounting firms. See [AI roll-up engineering](/ai-roll-up/), or [get in touch](/contact/) if you are buying firms and need one view across them.*
