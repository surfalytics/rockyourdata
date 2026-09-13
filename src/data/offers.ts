import type { FeatureIconName } from "../components/FeatureIcon.astro";

/**
 * Fixed-scope entry offers. These convert better than an open "contact us"
 * because the buyer knows the scope, the length, and what they walk away with.
 *
 * NOTE: prices are deliberately not listed. Add a `price` field here and render
 * it in OfferCard if you decide to publish rates.
 */
export interface Offer {
  icon: FeatureIconName;
  title: string;
  duration: string;
  /** Which service page this offer belongs to. */
  service: string;
  summary: string;
  outcomes: string[];
}

export const offers: Offer[] = [
  {
    icon: "snowflake",
    title: "Snowflake Cost Audit",
    duration: "2 weeks",
    service: "snowflake",
    summary:
      "We trace your Snowflake spend down to warehouse, query, and team, then give you a ranked list of fixes with the expected saving on each.",
    outcomes: [
      "Credit spend broken down by warehouse, workload, and team",
      "Ranked optimization backlog with estimated savings",
      "Quick wins applied during the engagement",
    ],
  },
  {
    icon: "stack",
    title: "Databricks Assessment",
    duration: "2-3 weeks",
    service: "databricks",
    summary:
      "An architecture, governance, and cost review of your Databricks workspace, ending in a prioritized action plan you can execute with or without us.",
    outcomes: [
      "Lakehouse architecture and Unity Catalog review",
      "DBU cost baseline with tuning actions",
      "Prioritized roadmap with effort and impact",
    ],
  },
  {
    icon: "cpu",
    title: "AI Readiness Assessment",
    duration: "3 weeks",
    service: "ai-data-engineering",
    summary:
      "We check whether your data can actually support the AI features you want, and tell you what has to be built first.",
    outcomes: [
      "Use-case shortlist scored on value and feasibility",
      "Gap analysis of your data, semantics, and governance",
      "Reference architecture and delivery plan for the first build",
    ],
  },
  {
    icon: "pipeline",
    title: "Platform Migration Plan",
    duration: "3-4 weeks",
    service: "data-platforms",
    summary:
      "A migration plan you can budget against — target architecture, sequencing, cutover approach, risks, and cost.",
    outcomes: [
      "Target architecture with the trade-offs written down",
      "Phased migration plan and cutover runbook",
      "Cost model for the target platform",
    ],
  },
];

export function offersForService(slug: string): Offer[] {
  return offers.filter((o) => o.service === slug);
}
