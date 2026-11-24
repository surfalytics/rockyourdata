---
title: "Where AI Actually Removes Work in an Offline Service Business"
description: "How to pick the first AI workflows in an accounting firm, a property manager, or a home-services company: score by time spent and cost of error, design the review loop, and measure hours before and after."
date: 2026-11-24T13:00:00Z
category: "AI Roll-ups"
service: "ai-roll-up"
---

"Use AI to raise margins" is a thesis. It is not a plan. A plan names the task, the hours it takes today, and what happens when the AI is wrong.

Accounting firms, property managers, HVAC companies, clinics, and insurance agencies look different from the outside. Inside, the same four kinds of work fill the day.

## Four shapes of work

| Shape | What the AI does | Example |
|---|---|---|
| Extract | Turns a document into a record | An invoice, intake form, or lease becomes fields in the system |
| Triage | Classifies and routes something inbound | A call, email, or web request lands in the right queue with a summary |
| Draft | Writes a first version for a person to approve | A client reply, an estimate, month-end commentary |
| Answer | Finds and cites what the firm already knows | "What is our policy on this?" or "What was revenue per crew last month?" |

Almost every useful first project is one of these four. They also share the same plumbing. That is why the second workflow costs less than the first.

## Score before you build

![Two-by-two matrix. Vertical axis: time spent today. Horizontal axis: cost of a wrong answer. High time and low cost of error is where to start. High time and high cost: AI prepares and a person decides. Low time and low cost: later. Low time and high cost: leave it alone.](/blog/ai-workflow-matrix.svg)

Two questions decide the order:

1. **How much time does it take today?** Volume per week times minutes per task. Measured, not guessed.
2. **What does a wrong answer cost, and how fast is it caught?**

That gives four groups:

- **High time, cheap errors.** Start here. Document extraction with a review queue. Inbound triage.
- **High time, expensive errors.** AI prepares, a person decides. Drafted replies, pre-filled filings.
- **Low time, cheap errors.** Do it later, once the plumbing exists.
- **Low time, expensive errors.** Leave it alone.

## Design the review loop first

A workflow is not "AI does the task." It is three paths:

- **Accept.** The output passes validation and confidence is high.
- **Review.** A person sees the source and the output side by side and corrects it.
- **Reject.** The input is unreadable or out of scope. It goes to the normal manual process.

Start with most items in review. Move the threshold only as the evaluation results allow. Every correction a reviewer makes becomes a test case.

Two things make review fast:

- Show the source next to the output.
- Ask for a decision on the uncertain fields only, not on the whole record.

We describe the extraction version of this loop in [LLMs inside the pipeline](/blog/llm-extraction-pipeline/).

## Measure hours, not accuracy

Accuracy on a test set is necessary. It is not the result. The result is time. The full method is in [how to prove AI raised the margin](/blog/measuring-ai-margin-gains-roll-up/).

| Metric | How to measure it |
|---|---|
| Minutes per item, including review | Sample for two to four weeks before, same method after |
| Items per person per day | From the work queue, not from memory |
| Turnaround time | Request received to request closed |
| Rework rate | Items corrected after they were marked done |
| Cost per item | Model cost plus review minutes |

If minutes per item including review did not fall, the workflow moved the work. It did not remove it. Researchers at Stanford and BetterUp Labs have a name for that output: "workslop." It is AI-generated work that looks polished but creates more work for colleagues.

## Do not cut the reviewers first

The margin case for a roll-up assumes fewer hours per task. The temptation is to remove people as soon as the demo works.

This order holds up better:

1. Automate, with the reviewers in place.
2. Let the evaluation results settle over real volume.
3. Use the freed capacity to clear backlog and take on more customers.
4. Only then decide about headcount.

The investors behind the largest roll-ups describe their gains the same way. General Catalyst reports the result at Long Lake as capacity: more than 30% more per payroll processor, and over 65 hours a month back for top HOA managers. These are the company's own numbers, not an audit. But note what they measure. Hours and capacity, not heads.

## What makes the second company cheaper

A workflow built against one company's systems has to be rebuilt for the next. A workflow built against a [shared data layer](/blog/roll-up-data-layer/) is switched on when the next company's data arrives.

So the practical order is:

1. The shared data layer, at least for the entities the workflow touches.
2. One workflow, one company, measured.
3. The same workflow in a second company. Track how long that took.
4. The second workflow.

## Where to start

Pick the task your staff complain about most, that happens hundreds of times a month, and where a mistake is caught before it reaches a customer. Measure it for two weeks. Then build.

## Sources

- TechCrunch, [The AI services transformation may be harder than VCs think](https://techcrunch.com/2025/09/28/the-ai-services-transformation-may-be-harder-than-vcs-think/) (September 2025)
- General Catalyst, [Manufacturing Outliers: Long Lake](https://www.generalcatalyst.com/stories/manufacturing-outliers-long-lake) (September 2026)

---

*These workflows, built on a shared data layer, are part of our [AI roll-up engineering](/ai-roll-up/) practice. [Get in touch](/contact/) to pick your first one.*
