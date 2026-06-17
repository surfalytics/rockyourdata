import type { ImageMetadata } from "astro";
import type { FeatureIconName } from "../components/FeatureIcon.astro";
import dataStack from "../assets/services/data-stack.png";
import audit from "../assets/services/audit.png";
import experts from "../assets/services/experts.png";
import team from "../assets/services/team.png";

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  icon: FeatureIconName;
  title: string;
  /** One-line summary used on cards and the services index. */
  tagline: string;
  /** Short bullet list shown on the homepage card. */
  bullets: string[];
  image: ImageMetadata;
  imageAlt: string;
  /** Long-form content for the dedicated service page. */
  overview: string[];
  capabilities: string[];
  deliverables: string[];
  process: ProcessStep[];
}

export const services: Service[] = [
  {
    slug: "modern-data-stack",
    icon: "stack",
    title: "Modern Data Stack Implementation",
    tagline: "Design and build a secure, scalable cloud analytics platform end to end.",
    bullets: [
      "Data ingestion and streaming",
      "Cloud data storage and compute",
      "Business intelligence and AI",
    ],
    image: dataStack,
    imageAlt: "Diagram of key layers and roles in the modern data stack",
    overview: [
      "We design and implement the full modern data stack — from ingestion to insight — on Snowflake, Databricks, BigQuery, or Redshift. Whether you are starting from scratch or modernizing a legacy warehouse, we deliver a platform that is secure, governed, and built to scale with your business.",
      "Every implementation is grounded in engineering best practices: version-controlled transformations with dbt, automated orchestration, CI/CD, and observability baked in from day one — so your team inherits a platform they can trust and extend.",
    ],
    capabilities: [
      "Cloud data warehouse architecture (Snowflake, Databricks, BigQuery, Redshift)",
      "Batch and streaming ingestion with Fivetran, Airbyte, or custom pipelines",
      "Transformation layers and data modeling with dbt",
      "Orchestration, CI/CD, and pipeline observability",
      "BI and self-serve analytics with Power BI, Tableau, or Looker",
      "AI/ML enablement on a governed data foundation",
    ],
    deliverables: [
      "A production-ready cloud analytics platform",
      "Documented data models and pipeline architecture",
      "CI/CD and testing for safe, repeatable deployments",
      "Knowledge transfer and runbooks for your team",
    ],
    process: [
      { title: "Discover", description: "Assess your sources, goals, and current state to define the target architecture." },
      { title: "Design", description: "Produce a reference architecture, data model, and delivery roadmap." },
      { title: "Build", description: "Implement ingestion, transformation, and BI in iterative, reviewable increments." },
      { title: "Enable", description: "Hand over with documentation, runbooks, and team enablement." },
    ],
  },
  {
    slug: "analytics-audit",
    icon: "gauge",
    title: "Analytics Audit & Optimization",
    tagline: "Find what's slowing your data platform down — and fix it.",
    bullets: [
      "Uncover data-driven insights to enhance collaboration",
      "Identify and resolve workflow bottlenecks",
      "Continuously refine data processes for performance",
    ],
    image: audit,
    imageAlt: "Team collaborating on an analytics audit",
    overview: [
      "If your pipelines are slow, your cloud bill is climbing, or your team can't trust the numbers, an audit pinpoints the root causes. We review your architecture, models, queries, and workflows against proven benchmarks and hand you a prioritized plan with quantified impact.",
      "We don't just diagnose — we optimize. From warehouse cost tuning to model refactoring and workflow redesign, we make targeted improvements that pay for themselves.",
    ],
    capabilities: [
      "Architecture and data-model review",
      "Query, warehouse, and cost optimization",
      "Pipeline reliability and data-quality assessment",
      "Workflow and collaboration bottleneck analysis",
      "Governance, security, and access review",
      "Prioritized remediation roadmap with effort vs. impact",
    ],
    deliverables: [
      "A findings report with prioritized, quantified recommendations",
      "Quick-win optimizations applied during the engagement",
      "A roadmap for sustained performance and cost control",
    ],
    process: [
      { title: "Assess", description: "Deep-dive your platform, pipelines, and usage patterns." },
      { title: "Diagnose", description: "Identify bottlenecks, risks, and cost drivers with evidence." },
      { title: "Optimize", description: "Apply quick wins and prioritize the larger improvements." },
      { title: "Recommend", description: "Deliver a clear roadmap your team can execute confidently." },
    ],
  },
  {
    slug: "certified-experts",
    icon: "badge",
    title: "Certified Analytics & Engineering Experts",
    tagline: "Senior, certified data talent embedded directly in your team.",
    bullets: [
      "Platform expertise — Snowflake, Databricks, dbt",
      "Qualified and certified engineering staff",
      "Proficient across modern data tooling",
    ],
    image: experts,
    imageAlt: "Certified data engineers leading a workshop",
    overview: [
      "Add senior, certified data engineers and analysts to your team — fast. Our consultants bring deep, hands-on expertise across the modern data stack and integrate directly into your workflows, standards, and tools.",
      "Whether you need to accelerate a critical initiative, cover a skills gap, or raise the bar on engineering practices, our experts deliver from day one and leave your team stronger.",
    ],
    capabilities: [
      "Certified Snowflake, Databricks, and dbt practitioners",
      "Data engineering, analytics engineering, and BI specialists",
      "Flexible embedded or project-based engagements",
      "Best-practice coaching and code review for your team",
      "Migration, modernization, and greenfield delivery",
    ],
    deliverables: [
      "Senior practitioners delivering inside your team",
      "Raised engineering standards and documented practices",
      "Mentorship that levels up your existing staff",
    ],
    process: [
      { title: "Scope", description: "Define the skills, outcomes, and engagement model you need." },
      { title: "Match", description: "Place certified experts suited to your stack and goals." },
      { title: "Deliver", description: "Integrate into your team and ship measurable outcomes." },
      { title: "Uplift", description: "Transfer knowledge so the gains outlast the engagement." },
    ],
  },
  {
    slug: "team-development",
    icon: "users",
    title: "Data Engineering Team Development",
    tagline: "Build and grow a high-performing data team in North America.",
    bullets: [
      "Hiring and developing versatile data teams",
      "15+ years building teams across North America",
      "Dedicated to driving impactful business results",
    ],
    image: team,
    imageAlt: "Data engineering team working together",
    overview: [
      "Great platforms need great teams. We help you build and develop a versatile, high-performing data function — defining the roles you need, hiring the right people, and establishing the practices that make them effective.",
      "Drawing on 15+ years building data teams across North America, we set up your team for durable, business-driven results — not just headcount.",
    ],
    capabilities: [
      "Data team structure and role definition",
      "Hiring strategy, screening, and technical interviewing",
      "Onboarding, standards, and ways of working",
      "Upskilling and career-path development",
      "Leadership and delivery process coaching",
    ],
    deliverables: [
      "A team operating model and hiring plan",
      "Interview frameworks and onboarding playbooks",
      "An upskilling plan tied to business outcomes",
    ],
    process: [
      { title: "Plan", description: "Define the team shape, roles, and capabilities you need." },
      { title: "Hire", description: "Attract and assess the right people with proven frameworks." },
      { title: "Onboard", description: "Establish standards, tooling, and ways of working." },
      { title: "Grow", description: "Develop skills and leadership for lasting performance." },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export interface InteractionMode {
  icon: FeatureIconName;
  title: string;
  description: string;
}

export const interactionModes: InteractionMode[] = [
  {
    icon: "expert",
    title: "The Expert Role",
    description:
      "We own the result, accept responsibility, and execute the action plan. Technical control rests with us — you stay responsive while we solve the problem.",
  },
  {
    icon: "hands",
    title: "The Pair-of-Hands Role",
    description:
      "You leverage us as an extra pair of hands. You define the goals and the plan, retain full control, and we execute against it.",
  },
  {
    icon: "handshake",
    title: "The Collaborative Role",
    description:
      "Your domain knowledge meets our specialized skills. We don't just solve problems for you — we equip your team to solve them together.",
  },
];

export interface Value {
  icon: FeatureIconName;
  title: string;
  description: string;
}

export const values: Value[] = [
  {
    icon: "shield",
    title: "Integrity",
    description:
      "We are committed to ethical practices and transparency in every interaction, building trust with clients and partners.",
  },
  {
    icon: "target",
    title: "Client-Centricity",
    description:
      "Our clients' goals drive our efforts. We listen closely and tailor solutions to deliver measurable, impactful results.",
  },
  {
    icon: "spark",
    title: "Innovation",
    description:
      "We stay at the forefront of technology, constantly refining our methods to deliver advanced, future-ready solutions.",
  },
];
