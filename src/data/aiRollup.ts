import type { FeatureIconName } from "../components/FeatureIcon.astro";
import type { Faq } from "./services";

/**
 * AI roll-up practice page (/ai-roll-up/).
 *
 * RULES for this file:
 * - Every market fact has a source in `sources`. Results published by roll-up
 *   companies are quoted as company statements, never as audited facts.
 * - We do not claim past roll-up clients. Proof is the platform and AI work on
 *   /projects/ and the team section.
 * - Offer scopes and durations were drafted with the page (Nov 2026).
 *   The owner should confirm them before quoting a client.
 */

/** Short summary, reused by cards, the nav, and blog cross-links. */
export const rollup = {
  slug: "ai-roll-up",
  href: "/ai-roll-up/",
  navLabel: "AI Roll-Ups",
  icon: "merge" as FeatureIconName,
  title: "AI Roll-Up Engineering",
  seoTitle: "AI Roll-Up Engineering: Data and AI for Offline Businesses",
  seoDescription:
    "Data and AI engineering for AI roll-ups: diligence before close, one data layer across every acquired company, and AI workflows with a measured baseline.",
  tagline:
    "The data layer and AI workflows behind a roll-up of offline service businesses.",
  bullets: [
    "Data and AI diligence before the deal closes",
    "One data layer across every acquired company",
    "AI workflows in production, with a measured baseline",
  ],
};

export interface Source {
  id: string;
  publisher: string;
  title: string;
  date: string;
  url: string;
}

export const sources: Source[] = [
  {
    id: "gc-services",
    publisher: "General Catalyst",
    title: "The Future of Services",
    date: "Aug 2025",
    url: "https://www.generalcatalyst.com/stories/the-future-of-services",
  },
  {
    id: "gc-longlake",
    publisher: "General Catalyst",
    title: "Manufacturing Outliers: Long Lake",
    date: "Sep 2026",
    url: "https://www.generalcatalyst.com/stories/manufacturing-outliers-long-lake",
  },
  {
    id: "cnbc",
    publisher: "CNBC",
    title: "Silicon Valley's new buyout playbook is hitting Wall Street",
    date: "Jun 2026",
    url: "https://www.cnbc.com/2026/06/08/silicon-valleys-new-buyout-playbook-is-hitting-wall-street.html",
  },
  {
    id: "dealroom",
    publisher: "Dealroom",
    title: "Market map: 33 AI-native rollups across 14 industries",
    date: "Nov 2026",
    url: "https://dealroom.co/news/x-2123013552038707409-market-map-33-ai-native-rollups-across-14-industries-including-three-tak/",
  },
  {
    id: "sophinos",
    publisher: "Luke Sophinos, Linear",
    title: "AI Roll Ups: Two Years Later",
    date: "Jul 2026",
    url: "https://www.newsletter.lukesophinos.com/p/linear-186-ai-roll-ups-two-years",
  },
  {
    id: "tower",
    publisher: "Tower Research Ventures",
    title: "The AI Services Opportunity Starts at Zero",
    date: "Nov 2025",
    url: "https://tower-research.com/the-ai-services-opportunity-starts-at-zero",
  },
  {
    id: "techcrunch",
    publisher: "TechCrunch",
    title: "The AI services transformation may be harder than VCs think",
    date: "Sep 2025",
    url: "https://techcrunch.com/2025/09/28/the-ai-services-transformation-may-be-harder-than-vcs-think/",
  },
  {
    id: "fortune",
    publisher: "Fortune",
    title: "Why the 'AI rollup' investment strategy is flawed",
    date: "Jun 2025",
    url: "https://fortune.com/2025/06/27/ai-rollup-investment-strategy/",
  },
];

export function getSource(id: string): Source {
  const source = sources.find((s) => s.id === id);
  if (!source) throw new Error(`Unknown source: ${id}`);
  return source;
}

/** The loop every AI roll-up runs. */
export const loop = [
  {
    step: "01",
    title: "Buy",
    description:
      "Acquire profitable, owner-run service businesses: accounting firms, property managers, IT providers, home-services companies, clinics.",
  },
  {
    step: "02",
    title: "Rebuild",
    description:
      "Put AI into the work that eats the hours: intake, documents, scheduling, reporting. Keep the customer relationships.",
  },
  {
    step: "03",
    title: "Reinvest",
    description:
      "Use the margin and the freed capacity to grow each company and to fund the next acquisition.",
  },
];

/** Market size and pace. `source` is an id from `sources`. */
export const marketFacts = [
  {
    value: "$6T+",
    label:
      "Yearly US revenue of the service industries General Catalyst targets. The software market is about $370B.",
    source: "gc-services",
  },
  {
    value: "40",
    label:
      "Acquisitions completed by Long Lake in two and a half years, on one shared AI platform.",
    source: "gc-longlake",
  },
  {
    value: "$6.3B",
    label:
      "Price Long Lake agreed in May 2026 to take Amex Global Business Travel private. The deal closed in September.",
    source: "cnbc",
  },
  {
    value: "33",
    label:
      "AI-native roll-ups across 14 industries on a November 2026 market map. Some entries are unverified.",
    source: "dealroom",
  },
];

/** Verbatim quote from a practitioner. Keep it exact. */
export const failureQuote = {
  text: "Every single failure mode I've seen in this category traces back to acquisition pace outrunning integration capacity.",
  author: "Luke Sophinos",
  role: "co-founder of the insurance roll-up AGI, July 2026",
  source: "sophinos",
};

export interface Problem {
  icon: FeatureIconName;
  title: string;
  description: string;
}

export const problems: Problem[] = [
  {
    icon: "stack",
    title: "Every company runs a different stack",
    description:
      "One firm is on QuickBooks, the next on a 15-year-old desktop system, the third on spreadsheets. If the integration is not engineered once and reused, company ten costs as much to connect as company one.",
  },
  {
    icon: "document",
    title: "The work lives in documents, inboxes, and calls",
    description:
      "Most of what an offline business does never reaches a database. AI cannot take over work it cannot read. Unstructured data needs a pipeline, the same as tables do.",
  },
  {
    icon: "shield",
    title: "AI output has to be checked",
    description:
      "If nobody reviews it, mistakes reach customers. If people review everything, the saved hours come back. Someone has to decide which outputs need a human and prove the rest are safe.",
  },
  {
    icon: "gauge",
    title: "Nobody measured the starting point",
    description:
      "You cannot show a margin gain without hours per task and margin per location from before the change. Small service businesses rarely track either.",
  },
];

/** Columns of the data-layer diagram, left to right. */
export const dataLayer = {
  sources: {
    title: "Acquired companies",
    note: "They keep the tools they run today",
    items: [
      "Company A: accounting system, CRM",
      "Company B: legacy desktop app, spreadsheets",
      "Company N+1: whatever it runs",
      "Documents, email, call recordings",
    ],
  },
  connect: {
    title: "Read-only connectors",
    note: "Config per source. No production writes.",
  },
  platform: {
    title: "Shared data layer",
    note: "A lakehouse on Databricks or Snowflake",
    layers: [
      { name: "Raw", detail: "Landed per company, as delivered" },
      { name: "Conformed", detail: "Customers, jobs, invoices, people" },
      { name: "Golden records + KPIs", detail: "One definition everywhere" },
    ],
  },
  workflows: {
    title: "AI workflows",
    note: "Built once, switched on per company",
    items: [
      "Document extraction",
      "Intake and triage",
      "Drafting and reporting",
      "Search and ask-the-data",
    ],
  },
  outcomes: {
    title: "Operators and board",
    note: "The numbers behind the thesis",
    items: [
      "Portfolio KPIs",
      "Margin by company and location",
      "Before and after per workflow",
    ],
  },
  guardrails: [
    "Access control by company",
    "Evaluation sets",
    "Human review queues",
    "Cost per task",
  ],
};

export const principles = [
  {
    title: "Read-only first",
    description:
      "We extract from the systems each company already uses. Nobody is asked to change tools in month one.",
  },
  {
    title: "Conform, do not replace",
    description:
      "A shared model sits above the source systems. Replacing an ERP is a later decision, made with data.",
  },
  {
    title: "Identity before automation",
    description:
      "One record per customer, vendor, employee, and location, with merge rules the business agreed to.",
  },
  {
    title: "Company N+1 is configuration",
    description:
      "New sources arrive as config and mappings, with a runbook. Each integration should be faster than the last.",
  },
];

export interface Phase {
  when: string;
  title: string;
  summary: string;
  items: string[];
}

export const phases: Phase[] = [
  {
    when: "Before close",
    title: "Data and AI diligence",
    summary: "Know the integration cost before you sign.",
    items: [
      "Inventory of systems, data owners, and export paths",
      "Data quality red flags that change the integration cost",
      "Shortlist of workflows AI can take over, with evidence",
      "An integration estimate for the deal model",
    ],
  },
  {
    when: "Days 1–30",
    title: "Connect and report",
    summary: "One view across companies, with nothing disrupted.",
    items: [
      "Read-only extraction from finance and operations systems",
      "Consolidated reporting across every company",
      "No production writes and no tool changes",
    ],
  },
  {
    when: "Days 30–90",
    title: "One model, one baseline",
    summary: "The same number means the same thing everywhere.",
    items: [
      "Conformed data model and golden records",
      "KPI definitions shared by every company",
      "Baseline: hours per task, margin per location, turnaround time",
    ],
  },
  {
    when: "From day 90",
    title: "AI workflows in production",
    summary: "Automation you can defend to a customer and a board.",
    items: [
      "First workflows live, each with an evaluation set",
      "Review queues for low-confidence output",
      "A cost ceiling per task and per company",
    ],
  },
  {
    when: "Each next deal",
    title: "Repeat with a kit",
    summary: "Integration becomes a routine, not a project.",
    items: [
      "Connector and mapping templates",
      "Onboarding runbook and checklist",
      "Integration time tracked per company",
    ],
  },
];

export interface Workflow {
  icon: FeatureIconName;
  title: string;
  description: string;
  /** Optional deep-dive post on this site. */
  post?: { href: string; label: string };
}

export const workflows: Workflow[] = [
  {
    icon: "document",
    title: "Document intake and extraction",
    description:
      "Invoices, forms, contracts, and statements become validated records. Uncertain ones go to a review queue.",
    post: { href: "/blog/llm-extraction-pipeline/", label: "How the pipeline works" },
  },
  {
    icon: "inbox",
    title: "Inbound triage",
    description:
      "Calls, emails, and web requests are classified, summarized, and routed. Staff start with context, not a blank ticket.",
  },
  {
    icon: "calendar",
    title: "Scheduling and dispatch support",
    description:
      "Jobs, crews, and appointments in one place, with suggested schedules that a dispatcher approves.",
  },
  {
    icon: "chart",
    title: "Month-end and board reporting",
    description:
      "Close packs and portfolio reports built from the conformed model. Every number traces back to its source.",
  },
  {
    icon: "book",
    title: "Knowledge search",
    description:
      "Policies, procedures, and past jobs searchable in plain language, with citations and permissions.",
    post: { href: "/blog/rag-document-pipeline/", label: "RAG in production" },
  },
  {
    icon: "chat",
    title: "Ask-the-data for operators",
    description:
      "Managers ask a question in plain language and get the governed number, not a guess.",
    post: { href: "/blog/nl-to-sql-semantic-layer/", label: "NL-to-SQL done right" },
  },
];

/** Sectors named in public reporting on AI roll-ups (see `sources`). */
export const industries = [
  "Accounting, tax, and payroll",
  "Property and HOA management",
  "Home services: HVAC, plumbing, roofing",
  "IT managed services",
  "Insurance agencies and brokers",
  "Dental, veterinary, and clinics",
  "Legal services",
  "Staffing",
  "Customer support and BPO",
];

export const metrics = [
  "Hours per task, before and after",
  "Gross margin by company and location",
  "Revenue per employee",
  "Turnaround time and backlog",
  "Rework and error rate on AI output",
  "Cost per AI task",
];

export interface Audience {
  icon: FeatureIconName;
  title: string;
  description: string;
}

export const audiences: Audience[] = [
  {
    icon: "merge",
    title: "Roll-up platforms and holding companies",
    description:
      "You have the thesis and the capital. You need engineers who make company ten cheaper to integrate than company one.",
  },
  {
    icon: "briefcase",
    title: "PE firms, search funds, and sponsors",
    description:
      "You are doing buy-and-build in services and want AI in the value-creation plan, with numbers behind it.",
  },
  {
    icon: "store",
    title: "Multi-location operators",
    description:
      "You already own the businesses. You want one view of all of them and AI in the back office, without selling to anyone.",
  },
];

export interface RollupOffer {
  icon: FeatureIconName;
  title: string;
  duration: string;
  summary: string;
  outcomes: string[];
}

export const rollupOffers: RollupOffer[] = [
  {
    icon: "search",
    title: "Data and AI Diligence",
    duration: "2-3 weeks",
    summary:
      "For one target or your first few companies. You get the integration cost and the automation shortlist before you commit.",
    outcomes: [
      "Systems inventory and data quality scorecard",
      "Workflows worth automating, ranked by evidence",
      "Integration plan and cost estimate",
    ],
  },
  {
    icon: "plug",
    title: "Day-One Data Layer",
    duration: "4-6 weeks",
    summary:
      "Read-only connectors for your first companies, one consolidated view, and the KPI baseline everything else is measured against.",
    outcomes: [
      "Extraction from finance and operations systems",
      "Consolidated reporting across companies",
      "Baseline for hours, margin, and turnaround",
    ],
  },
  {
    icon: "cpu",
    title: "First AI Workflow",
    duration: "6-8 weeks",
    summary:
      "One workflow in production in one company, built so the next company can switch it on.",
    outcomes: [
      "Evaluation set and review queue",
      "Cost ceiling per task",
      "Before and after measured against the baseline",
    ],
  },
];

export const reasons = [
  {
    title: "Senior engineers only",
    description:
      "The people in the first call do the work. No juniors and no hand-off to a delivery pool.",
  },
  {
    title: "Vendor-neutral",
    description:
      "We build on Databricks, Snowflake, and the cloud-native stacks, and recommend the one that fits your portfolio.",
  },
  {
    title: "AI that runs in production",
    description:
      "Evaluation sets, guardrails, monitoring, and a cost ceiling are part of the build, not a later phase.",
  },
  {
    title: "Built to hand over",
    description:
      "You get documented architecture and runbooks. Your platform team owns it, and we stay only if you want us to.",
  },
];

export const rollupFaqs: Faq[] = [
  {
    q: "What is an AI roll-up?",
    a: "An AI roll-up acquires established service businesses and uses AI to change how the work is done: intake, documents, scheduling, and reporting. The margin gained funds more acquisitions. It differs from a classic roll-up because the return depends on operational change, not only on scale.",
  },
  {
    q: "How is this different from a private equity roll-up?",
    a: "A private equity roll-up usually consolidates finance, purchasing, and back-office functions. An AI roll-up also rebuilds the daily workflows inside each company. That takes a shared data layer and production AI engineering, which most deal teams and most acquired companies do not have.",
  },
  {
    q: "Do you work before the acquisition closes?",
    a: "Yes. Diligence runs on the access a seller will give before close: system inventories, exports, sample documents, and interviews. You get an integration estimate and a list of workflows worth automating, so the deal model uses real inputs.",
  },
  {
    q: "Do acquired companies have to change their software?",
    a: "Not at the start. We read from the systems they already run and build a shared model above them. Replacing a system is a later decision, and by then you have the usage and cost data to make it.",
  },
  {
    q: "Databricks or Snowflake for a roll-up?",
    a: "Either. We work with both and have no vendor quota to fill. The choice depends on how much unstructured data you have, the skills on your platform team, and your cloud. We write down the trade-offs and recommend one.",
  },
  {
    q: "How do you keep each company's data separate?",
    a: "Each company gets its own catalog or database, its own access roles, and row-level rules on the shared model. Client contracts and privacy rules for health, financial, and tax data can limit what may be used for AI. We check that in diligence, before anything is built.",
  },
  {
    q: "Will AI replace the staff in the companies we buy?",
    a: "That is your decision, not ours. Our advice is not to cut review capacity before the evaluation results are stable. The gains that are easiest to defend come from clearing backlog, cutting rework, and growing without hiring at the same rate.",
  },
  {
    q: "We are not a roll-up. Can one business use this?",
    a: "Yes. A multi-location business has the same problem at a smaller size: several systems, no single view, and manual back-office work. The same data layer and the same workflows apply.",
  },
];

/**
 * The blog series, in reading order. Slugs in src/content/blog.
 * The posts carry UTC times in `date` so the blog index shows the same order.
 */
export const rollupReading = [
  "ai-roll-ups-explained",
  "roll-up-data-due-diligence",
  "roll-up-first-100-days",
  "roll-up-data-layer",
  "roll-up-identity-resolution",
  "databricks-vs-snowflake-roll-up",
  "ai-workflows-offline-service-business",
  "measuring-ai-margin-gains-roll-up",
  "ai-roll-up-accounting-firms",
  "ai-playbook-multi-location-operators",
];
