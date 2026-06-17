import type { ImageMetadata } from "astro";
import type { FeatureIconName } from "../components/FeatureIcon.astro";
import dataStack from "../assets/services/data-stack.png";
import audit from "../assets/services/audit.png";
import team from "../assets/services/team.png";
import dashboard from "../assets/services/dashboard.png";

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
    slug: "data-platforms",
    icon: "stack",
    title: "Petabyte-Scale Data Platforms",
    tagline: "Architect and build cloud data platforms that scale to petabytes.",
    bullets: [
      "Lakehouse architecture on Databricks & Snowflake",
      "High-throughput batch and streaming ingestion",
      "Cost, performance, and reliability at scale",
    ],
    image: dataStack,
    imageAlt: "Architecture of a modern, large-scale cloud data platform",
    overview: [
      "We design and build cloud data platforms engineered to handle petabyte-scale workloads — from high-throughput ingestion to governed, query-ready data. Whether you're modernizing a legacy warehouse or building greenfield on a lakehouse, we deliver an architecture that stays fast and cost-efficient as your data grows.",
      "Every platform is built on engineering best practices: distributed processing with Spark, version-controlled transformations, automated orchestration, CI/CD, and observability — so the system is reliable, scalable, and easy for your team to extend.",
    ],
    capabilities: [
      "Lakehouse and cloud-warehouse architecture (Databricks, Snowflake, BigQuery)",
      "Distributed processing and large-scale ETL/ELT with Apache Spark",
      "Streaming and high-volume batch ingestion pipelines",
      "Partitioning, clustering, and query/cost optimization at scale",
      "Orchestration, CI/CD, and data observability",
      "Governance, security, and access control",
    ],
    deliverables: [
      "A production-ready platform proven at your data volumes",
      "Documented architecture and data models",
      "Cost and performance benchmarks with tuning guidelines",
      "Runbooks and knowledge transfer for your team",
    ],
    process: [
      { title: "Discover", description: "Assess data volumes, sources, SLAs, and the target architecture." },
      { title: "Design", description: "Produce a scalable reference architecture and delivery roadmap." },
      { title: "Build", description: "Implement ingestion, processing, and serving in reviewable increments." },
      { title: "Scale", description: "Load-test, optimize for cost/performance, and hand over." },
    ],
  },
  {
    slug: "ai-engineering",
    icon: "spark",
    title: "AI Engineering",
    tagline: "Generative-AI analytics applications and AI-assisted engineering, in production.",
    bullets: [
      "Generative-AI analytics apps (RAG, copilots, NL-to-SQL)",
      "Frameworks for AI-assisted (“vibe”) coding",
      "Evaluation, guardrails, and MLOps",
    ],
    image: audit,
    imageAlt: "Engineers building an AI-powered analytics application",
    overview: [
      "We build production-grade generative-AI applications on top of your data — analytics copilots, retrieval-augmented chat over your warehouse, natural-language-to-SQL, and document intelligence — with the evaluation, guardrails, and observability that real deployments require.",
      "We also help engineering teams adopt AI-assisted (“vibe coding”) workflows: practical frameworks, prompts, and guardrails that let your developers ship faster with AI while keeping quality, security, and review standards high.",
    ],
    capabilities: [
      "Generative-AI analytics apps: RAG, copilots, NL-to-SQL, summarization",
      "AI-assisted coding frameworks and developer enablement",
      "LLM evaluation, guardrails, and prompt/version management",
      "Retrieval, embeddings, and vector search over your data",
      "MLOps: deployment, monitoring, and cost control",
      "Responsible-AI: privacy, security, and governance",
    ],
    deliverables: [
      "A deployed, evaluated GenAI application",
      "An AI-assisted engineering playbook for your team",
      "Guardrails, evals, and monitoring you can trust",
    ],
    process: [
      { title: "Frame", description: "Identify high-value use cases and success metrics." },
      { title: "Prototype", description: "Build a working proof of concept with real data." },
      { title: "Harden", description: "Add evals, guardrails, and monitoring for production." },
      { title: "Enable", description: "Roll out and upskill your team on AI-assisted workflows." },
    ],
  },
  {
    slug: "space-analytics",
    icon: "orbit",
    title: "Space Data Analytics",
    tagline: "Analytics for space data — IoT, telemetry, and image recognition.",
    bullets: [
      "Satellite & sensor telemetry pipelines",
      "Image recognition and computer vision",
      "Mission and operations dashboards",
    ],
    image: dashboard,
    imageAlt: "Dashboard visualizing satellite telemetry and imagery analytics",
    overview: [
      "Rock Your Data brings its data engineering and AI expertise to the space domain. We build analytics for space data at scale — ingesting IoT and satellite telemetry, running image recognition and computer vision over Earth-observation and sensor imagery, and turning it all into mission and operations dashboards.",
      "This practice is rooted in real experience: our founder spent three years in space manufacturing before a career in data and IT, and now also leads Player One Space (playeronespace.com). That background lets us speak both languages — spacecraft engineering and modern data — and apply the modern data stack to telemetry, IoT, and imagery workloads.",
    ],
    capabilities: [
      "Telemetry and IoT ingestion pipelines (streaming and batch)",
      "Image recognition & computer vision on satellite/sensor imagery",
      "Time-series processing and anomaly detection",
      "Geospatial and Earth-observation data processing",
      "Mission, telemetry, and operations dashboards",
      "Scalable storage and compute for high-volume sensor data",
    ],
    deliverables: [
      "Telemetry/IoT pipelines tuned for space data volumes",
      "Image-recognition models and processing workflows",
      "Operational dashboards for missions and monitoring",
    ],
    process: [
      { title: "Scope", description: "Map your space data sources, formats, and objectives." },
      { title: "Ingest", description: "Build pipelines for telemetry, IoT, and imagery." },
      { title: "Analyze", description: "Apply CV/ML and time-series analytics to the data." },
      { title: "Operate", description: "Deliver dashboards and ongoing monitoring." },
    ],
  },
  {
    slug: "data-teams",
    icon: "users",
    title: "High-Performance Data Teams",
    tagline: "Build, hire, and grow data teams that consistently ship.",
    bullets: [
      "Hiring strategy and technical interviewing",
      "Onboarding, standards, and ways of working",
      "Upskilling and leadership coaching",
    ],
    image: team,
    imageAlt: "A high-performing data engineering team collaborating",
    overview: [
      "Great platforms need great teams. We help you build and develop a high-performing data function — defining the roles you need, hiring the right people, and establishing the practices that make them effective and accountable.",
      "Drawing on 15+ years building data teams across North America, we set your team up for durable, business-driven results — not just headcount — through proven hiring frameworks, onboarding playbooks, and hands-on coaching.",
    ],
    capabilities: [
      "Data team structure and role definition",
      "Hiring strategy, screening, and technical interviewing",
      "Onboarding, standards, and ways of working",
      "Upskilling and career-path development",
      "Leadership, delivery process, and code-review coaching",
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
