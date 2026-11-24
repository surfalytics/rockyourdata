---
title: "How to Prove AI Raised the Margin: Baselines and Measurement for a Roll-Up"
description: "How to measure AI workflows in a roll-up: a baseline, an item log, net minutes per item, a control group, and freed capacity versus real margin."
date: 2026-11-24T12:00:00Z
category: "AI Roll-ups"
service: "ai-roll-up"
---

"The AI saved 30%." Thirty percent of what? Measured how? Compared with what?

Most claims about AI in operations cannot answer those three questions. In a roll-up they have to, because the claim is the investment case. Here is a method that holds up in front of a board and a lender.

## Three levels of evidence

| Level | Question | Example metric | When it shows |
|---|---|---|---|
| Task | Is one item faster? | Minutes per item, including review | Weeks |
| Team | Does the team get more done? | Items per person per day, backlog, turnaround | One to two months |
| P&L | Did the margin move? | Gross margin by company and location | One to two quarters |

Each level lags the one before. Each is also harder to fake than the one before. A good report shows all three and says which ones have not moved yet.

## Step 1: capture the baseline before anything changes

For each workflow you plan to automate, record four numbers as the work is done today:

- **Volume.** Items per week.
- **Handling time.** Minutes of human work per item.
- **Rework.** The share of items corrected after they were marked done.
- **Turnaround.** Time from received to closed.

Where to get handling time, best source first:

1. System timestamps: opened, assigned, closed.
2. Queue or phone logs.
3. A sampled time study. Observe a few dozen items across several people.
4. Staff estimates. Use these only as a cross-check. People leave out interruptions.

Measure for two to four weeks, and include a busy week. A baseline from a quiet week makes every later number look worse than it is.

## Step 2: log every item the workflow touches

You cannot rebuild this later. From the first day, write one row per item:

```sql
create table ops.workflow_item_log (
  item_id            string,
  company_id         string,
  workflow           string,     -- 'invoice_extraction'
  received_at        timestamp,
  ai_completed_at    timestamp,
  route              string,     -- 'accept' | 'review' | 'reject'
  review_started_at  timestamp,
  review_ended_at    timestamp,
  fields_corrected   int,
  reworked_later     boolean,
  closed_at          timestamp,
  model_cost_usd     decimal(10, 4)
);
```

Every metric below comes from this table and the baseline. Nothing else is needed.

## Step 3: count net minutes, not gross

The number to report is this one:

```text
net minutes saved per item = baseline minutes - (review minutes + rework minutes)
```

The gross number misleads in three ways:

- **It ignores review.** An item the AI finished in ten seconds may still take a person four minutes to check.
- **It ignores rework.** An error found a week later costs more than one found in review.
- **It counts only accepted items.** Rejected items went back to the manual queue and took the full time.

Cost per item comes from the same log: model cost, plus review minutes at the loaded labour rate. Compare it with baseline minutes at the same rate.

## Step 4: use your other companies as a control group

Before-and-after in one company proves little. Volume changed. Prices changed. It was tax season, and then it was not.

A roll-up has something a single company lacks: several similar companies. Use them.

- Switch the workflow on in company A first.
- Leave company B unchanged for two or three months.
- Measure both over the same period, the same way.
- The effect is the change in A minus the change in B.

If turnaround improved in both, the AI did not cause it. If it improved in A and stayed flat in B, you have evidence. Then switch B on and see whether the result repeats. A modest gain that repeats in the second company is worth more than a large one from the first.

This works only if both companies are measured the same way. That is what the [shared KPI layer](/blog/roll-up-data-layer/) is for.

## Step 5: separate capacity from cash

Most reports skip this step.

Saved minutes are capacity. They are not margin. Capacity turns into margin in only three ways:

1. **More work with the same team.** New customers served without new hires.
2. **Fewer hires or less overtime.** Positions not backfilled, overtime hours down.
3. **Less outsourcing.** Fewer seasonal contractors, less work sent out.

If none of the three happened, the hours went somewhere else. Perhaps into better service, which has value. But it is not in the margin, and the report should say so.

Track which of the three each workflow fed, by company and by quarter.

## Step 6: build the margin bridge

For the board, one view per company:

| Line in the bridge from baseline margin to current margin | Source |
|---|---|
| Price changes | Billing data |
| Volume and mix | Billing data |
| Wage changes | Payroll |
| AI workflows, measured | Item log and control comparison |
| Everything else | The remainder |

Only the measured line is attributed to AI. If the remainder is large, say so. A bridge where AI explains the whole gain will not be believed, and it should not be.

## Five ways the number goes wrong

- **No baseline.** The "before" is a guess made afterwards.
- **Accuracy instead of time.** 97% accuracy with a four-minute review may save nothing.
- **Best performers.** A result for the top performers is not the average. Ask for the median.
- **Pilot conditions.** One keen team and clean documents. The second company is the real test.
- **Capacity counted as cash.** See step 5.

## What to show each quarter

One page per workflow:

- Volume, and the share accepted, reviewed, and rejected.
- Net minutes per item against the baseline.
- Cost per item against the baseline.
- The control comparison.
- Where the freed capacity went.

It is a modest page. It is also a rare one. The results published in this market so far are [company statements, not audits](/blog/ai-roll-ups-explained/). An operator who can show this page each quarter has a better story for the next lender or buyer than one with a bigger headline number.

---

*Measurement is built into our [AI roll-up engineering](/ai-roll-up/) practice from the first workflow. [Get in touch](/contact/) to set up your baseline.*
