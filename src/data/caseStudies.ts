/**
 * ============================================================================
 * NOT PUBLISHED YET. All content below is a PLACEHOLDER written by Claude.
 * ============================================================================
 *
 * The numbers, industries, and stack details are invented as structure only.
 * They are NOT real client results. Do not publish them as-is.
 *
 * To go live:
 *   1. Replace each entry with a real engagement.
 *   2. Get written client permission, or keep the client anonymous
 *      (industry + size is enough — "A North American retailer, ~800 staff").
 *   3. Use real, measured numbers. If you cannot measure it, delete the metric
 *      rather than estimating it.
 *   4. Set PUBLISH_CASE_STUDIES = true below.
 *
 * While the flag is false: /case-studies/ returns 404, the homepage strip is
 * hidden, the nav link is hidden, and the page is excluded from the sitemap.
 */
export const PUBLISH_CASE_STUDIES = false;

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  /** Anonymized is fine: "A North American e-commerce retailer". */
  client: string;
  industry: string;
  /** Which service this maps to, for cross-linking. */
  service: string;
  title: string;
  challenge: string;
  approach: string[];
  outcome: string;
  metrics: CaseStudyMetric[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "placeholder-snowflake-cost",
    client: "PLACEHOLDER — replace with a real client or anonymized descriptor",
    industry: "PLACEHOLDER — industry",
    service: "snowflake",
    title: "PLACEHOLDER — Snowflake cost optimization",
    challenge:
      "PLACEHOLDER — describe the problem the client had, in their words. What was breaking, what was it costing them, and why did they call you?",
    approach: [
      "PLACEHOLDER — first thing you did",
      "PLACEHOLDER — second thing you did",
      "PLACEHOLDER — third thing you did",
    ],
    outcome:
      "PLACEHOLDER — what changed for the client. Keep it to what you can prove.",
    metrics: [
      { value: "00%", label: "PLACEHOLDER — measured result" },
      { value: "00", label: "PLACEHOLDER — measured result" },
    ],
  },
  {
    slug: "placeholder-databricks-lakehouse",
    client: "PLACEHOLDER — replace with a real client or anonymized descriptor",
    industry: "PLACEHOLDER — industry",
    service: "databricks",
    title: "PLACEHOLDER — Databricks lakehouse build",
    challenge: "PLACEHOLDER — the problem.",
    approach: [
      "PLACEHOLDER — first thing you did",
      "PLACEHOLDER — second thing you did",
      "PLACEHOLDER — third thing you did",
    ],
    outcome: "PLACEHOLDER — what changed for the client.",
    metrics: [
      { value: "00%", label: "PLACEHOLDER — measured result" },
      { value: "00", label: "PLACEHOLDER — measured result" },
    ],
  },
  {
    slug: "placeholder-ai-analytics",
    client: "PLACEHOLDER — replace with a real client or anonymized descriptor",
    industry: "PLACEHOLDER — industry",
    service: "ai-data-engineering",
    title: "PLACEHOLDER — AI analytics application",
    challenge: "PLACEHOLDER — the problem.",
    approach: [
      "PLACEHOLDER — first thing you did",
      "PLACEHOLDER — second thing you did",
      "PLACEHOLDER — third thing you did",
    ],
    outcome: "PLACEHOLDER — what changed for the client.",
    metrics: [
      { value: "00%", label: "PLACEHOLDER — measured result" },
      { value: "00", label: "PLACEHOLDER — measured result" },
    ],
  },
];

export function caseStudiesForService(slug: string): CaseStudy[] {
  return PUBLISH_CASE_STUDIES
    ? caseStudies.filter((c) => c.service === slug)
    : [];
}
