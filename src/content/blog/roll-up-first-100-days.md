---
title: "The First 100 Days After Close: A Data and AI Plan for Roll-Ups"
description: "A plan for the first 100 days after an acquisition: access, consolidated reporting, the shared model, the baseline, and one AI workflow in shadow mode."
date: 2026-11-24T14:30:00Z
category: "AI Roll-ups"
service: "ai-roll-up"
---

The deal closes on a Friday. On Monday three things compete for the same people: keep the business running, get the numbers to the new owner, and start the AI work the thesis depends on.

The order matters more than the speed. This is the sequence we recommend for the first 100 days. It assumes the [data due diligence](/blog/roll-up-data-due-diligence/) was done before close. If it was not, add two weeks at the start.

![Timeline of the first 100 days: access and first load in days 1 to 10, group reporting in days 10 to 30, the shared model and the baseline in days 30 to 60, one AI workflow in shadow mode in days 60 to 90, and a go or no-go review in days 90 to 100.](/blog/roll-up-first-100-days.svg)

## Before day 1: three things to have in hand

- **The diligence scorecard.** Systems, access method, red flags.
- **A named owner at the acquired company.** The person who knows how the reports are built.
- **A written rule.** Nothing changes in their systems in the first 100 days.

That rule protects two things. It protects the baseline, because you cannot measure a gain against a process that already changed. And it protects goodwill, because staff are not asked to learn a new tool in the same month they got a new owner.

## Days 1–10: access and the first load

- Read-only service accounts for the finance and operations systems. Not a person's login.
- The first raw extract landed, per source, as delivered.
- An inventory of where documents live: shared drives, client portals, inboxes.
- A list of every report the company sends to anyone, and who builds it.

The usual blocker is not technology. It is a vendor that needs a signed form before it enables an export, or an admin password only the former owner knew. Send those requests on day 1.

## Days 10–30: group reporting, version one

The goal is simple. The new company appears in the group numbers.

- Revenue, direct cost, and headcount by month, in the group format.
- Reconciled to their accounting system. Differences are listed, not hidden.
- Published with caveats. A report with three known gaps in week four beats a perfect one in month four.

This is the first thing the board sees. It also earns the integration team the right to ask for more.

## Days 30–60: the shared model and the baseline

Two tracks run side by side.

**Track 1: model and identity**

- Map their customers, jobs, invoices, and people into the [shared model](/blog/roll-up-data-layer/).
- Agree the KPI definitions with their finance lead. Expect one or two real arguments. Have them now.
- Run the first [identity match](/blog/roll-up-identity-resolution/) against the rest of the group.

**Track 2: the baseline**

- Pick the three workflows that take the most hours.
- Measure them as they are done today: volume, minutes per item, rework, turnaround.
- Measure for at least two full weeks. Four is better. Include a busy week.

Nothing is automated yet. That is deliberate. Once a workflow changes, the "before" is gone.

## Days 60–90: one workflow in shadow mode

Pick one workflow from the baseline list. Choose by [time spent and cost of a wrong answer](/blog/ai-workflows-offline-service-business/).

Then run it in shadow mode:

- The AI processes the same items the staff process.
- Staff keep working exactly as before. They do not see the AI output yet.
- Each day, compare the two. Where they differ, a senior person decides who was right.

Shadow mode carries no customer risk, and it produces the evaluation set. After three to four weeks you know the accuracy by document type, the cases that need a person, and the cost per item.

## Days 90–100: the go / no-go review

One meeting, four questions:

1. Is the accuracy good enough on the items we plan to accept without review?
2. How many minutes does a review take? Is that less than doing the task?
3. What does one item cost, model plus review?
4. Do the people who will use it trust it?

If the answers hold, switch the workflow on with a review queue. If they do not, you lost thirty days and no customer saw an error.

## What good looks like

| By day | You have | You do not have yet |
|---|---|---|
| 10 | Read-only access, a first raw load, a report inventory | Any consolidated number |
| 30 | The company in the group report, reconciled | A shared model |
| 60 | Mapped data, agreed KPIs, a measured baseline | Any automation |
| 100 | One workflow evaluated in shadow mode, and a decision | Margin impact |

Say the last row out loud. Day 100 is the end of the setup, not the payoff. Margin shows up one or two quarters later, if it shows up.

## Who does what

| Role | Sits in | In the first 100 days |
|---|---|---|
| Integration lead | The roll-up | Owns the plan and removes blockers |
| Data engineer | The platform team | Connectors, mappings, reconciliation |
| Process owner | The acquired company | Explains how the work is really done, reviews shadow results |
| Finance lead | The acquired company | Agrees the KPI definitions, signs off the reconciliation |

The two people from the acquired company matter most. Without them the engineers model what the system says, not what the business does.

## What slips, and why

- **Access.** Vendor forms, lost passwords, contracts that limit export. Start on day 1.
- **The key person leaves.** Record how they build each report in the first two weeks.
- **Peak season.** Do not start an integration in an accounting firm in March, or in an HVAC company in July. If close falls in peak season, do days 1–30 and pause.
- **Scope.** Someone will propose replacing their main system "while we are in there." Not in the first 100 days.

## What not to do in the first 100 days

- Do not migrate them to a new system.
- Do not change roles or reporting lines because of the AI plan.
- Do not automate anything you have not measured.
- Do not promise a margin number for this company yet.

## After day 100

The second workflow reuses the plumbing of the first. The second company reuses the plan of the first. That is where the time comes down, and where a roll-up starts to look like a platform.

So keep one number for every company: the days it took to reach each row of the table above. If that number is not falling from one acquisition to the next, the integration is still a project each time.

Next: [how to prove the AI changed anything](/blog/measuring-ai-margin-gains-roll-up/).

---

*This plan is the delivery sequence of our [AI roll-up engineering](/ai-roll-up/) practice. [Get in touch](/contact/) if a close date is coming.*
