// Data Academy content — adapted from Surfalytics (surfalytics.com & /roadmap).
import type { FeatureIconName } from "../components/FeatureIcon.astro";

export const academyIntro = [
  "Surfalytics is the data academy behind Rock Your Data — a mentorship-driven community where learning data feels more like an apprenticeship than a course catalogue.",
  "You start with onboarding, pick a career track, and follow a proven structure: theory, real-world projects, mock interviews, and job-search prep — all in one place, supported by a community of working data professionals.",
];

export interface Track {
  icon: FeatureIconName;
  label: string;
  summary: string;
  modules: string[];
}

export const tracks: Track[] = [
  {
    icon: "chart",
    label: "Data Analyst",
    summary:
      "Master SQL, BI tools, and business communication — the fastest path to your first data role.",
    modules: [
      "SQL & databases",
      "BI tools (Tableau, Power BI)",
      "Statistics & analytics thinking",
      "Business dashboards",
      "Job interview prep",
    ],
  },
  {
    icon: "pipeline",
    label: "Data Engineer",
    summary:
      "Build pipelines, cloud infrastructure, and data platforms — high demand, top salaries.",
    modules: [
      "Python & Git",
      "Cloud platforms (AWS / GCP / Azure)",
      "ETL / ELT pipelines",
      "Data warehousing",
      "Orchestration & dbt",
    ],
  },
  {
    icon: "stack",
    label: "Analytics Engineer",
    summary:
      "Bridge analytics and engineering with dbt, the modern data stack, and transformation pipelines.",
    modules: [
      "Advanced SQL",
      "dbt Core & Cloud",
      "Data modeling (Kimball / Data Vault)",
      "Testing & data quality",
      "Modern data stack",
    ],
  },
];

export interface Pillar {
  icon: FeatureIconName;
  label: string;
  desc: string;
}

// What's included in every track.
export const pillars: Pillar[] = [
  { icon: "book", label: "Theory", desc: "Structured fundamentals — from SQL and modeling to cloud architecture." },
  { icon: "chat", label: "Mock interviews", desc: "SQL challenges, case studies, system design, and stakeholder Q&A." },
  { icon: "database", label: "Pet projects", desc: "End-to-end projects on real datasets, deployed to the cloud." },
  { icon: "document", label: "Resume & LinkedIn", desc: "Templates, profile reviews, and recruiter-ready positioning." },
];
