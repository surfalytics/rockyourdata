import type { FeatureIconName } from "../components/FeatureIcon.astro";

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  icon: FeatureIconName;
  title: string;
  /** Used in <title> and h1 on the detail page. Keep keyword-led. */
  seoTitle: string;
  /** Meta description for the detail page. 140-160 chars. */
  seoDescription: string;
  /** One-line summary used on cards and the services index. */
  tagline: string;
  /** Short bullet list shown on the homepage card. */
  bullets: string[];
  /** Long-form content for the dedicated service page. */
  overview: string[];
  capabilities: string[];
  deliverables: string[];
  process: ProcessStep[];
  /** Rendered as an FAQ block and as FAQPage JSON-LD. */
  faqs: Faq[];
  /** Shown on the homepage grid. Keep this to the core offering. */
  featured: boolean;
}

export const services: Service[] = [
  {
    slug: "databricks",
    icon: "stack",
    title: "Databricks Consulting",
    seoTitle: "Databricks Consulting & Lakehouse Implementation",
    seoDescription:
      "Databricks consulting for lakehouse architecture, Unity Catalog, Delta Lake, and Spark pipelines. Migration, cost optimization, and production delivery.",
    tagline:
      "Lakehouse architecture, Unity Catalog, and Spark pipelines built for production.",
    bullets: [
      "Lakehouse and medallion architecture on Delta Lake",
      "Unity Catalog governance and access control",
      "Spark job and DBU cost optimization",
    ],
    overview: [
      "We design, build, and tune Databricks lakehouses. That covers the whole path: landing raw data, building bronze/silver/gold layers on Delta Lake, governing it in Unity Catalog, and serving it to BI tools and ML workloads.",
      "Most teams we meet already have Databricks. The problem is not the platform — it is unclustered tables, oversized all-purpose compute, no CI/CD, and no clear ownership. We fix the engineering, then hand it back with runbooks so your team can run it.",
    ],
    capabilities: [
      "Lakehouse and medallion architecture on Delta Lake",
      "Unity Catalog: catalogs, governance, lineage, and row/column security",
      "Spark and Delta Live Tables pipeline development",
      "Migration from Hadoop, legacy ETL, or a standalone warehouse",
      "DBU and cluster cost optimization, photon and job-compute tuning",
      "Databricks Asset Bundles, CI/CD, and environment promotion",
      "Databricks SQL warehouses and BI serving layer",
    ],
    deliverables: [
      "A production lakehouse with documented bronze/silver/gold layers",
      "Unity Catalog governance model and access policies",
      "CI/CD pipelines and environment promotion via Asset Bundles",
      "A cost baseline with tuning actions and measured savings",
      "Runbooks and knowledge transfer for your team",
    ],
    process: [
      { title: "Assess", description: "Review your workspace, workloads, cost, and governance gaps." },
      { title: "Design", description: "Define the target lakehouse architecture and delivery plan." },
      { title: "Build", description: "Implement pipelines, governance, and CI/CD in reviewable increments." },
      { title: "Tune", description: "Optimize compute and queries, then hand over with runbooks." },
    ],
    faqs: [
      {
        q: "Do you work with an existing Databricks workspace or only greenfield?",
        a: "Both. Most of our work is on existing workspaces — fixing pipeline reliability, adding Unity Catalog governance, and cutting DBU spend. Greenfield builds are also common when a client is moving off a legacy warehouse.",
      },
      {
        q: "Can you reduce our Databricks bill?",
        a: "Usually yes. The common causes are all-purpose clusters used for scheduled jobs, oversized drivers, no auto-termination, unoptimized Delta tables, and full refreshes where incremental would do. We start with a cost baseline so savings are measurable.",
      },
      {
        q: "Which clouds do you support?",
        a: "Databricks on AWS, Azure, and Google Cloud. We work with the surrounding services too — S3/ADLS/GCS, IAM, networking, and the orchestration layer.",
      },
      {
        q: "How do engagements usually start?",
        a: "With a fixed-scope assessment. It gives you an architecture review, a cost baseline, and a prioritized action plan before you commit to a build.",
      },
    ],
    featured: true,
  },
  {
    slug: "snowflake",
    icon: "snowflake",
    title: "Snowflake Consulting",
    seoTitle: "Snowflake Consulting, Implementation & Cost Optimization",
    seoDescription:
      "Snowflake consulting for implementation, migration, dbt modeling, RBAC governance, and warehouse cost optimization. Built by senior data engineers.",
    tagline:
      "Snowflake implementation, dbt modeling, and credit cost optimization.",
    bullets: [
      "Implementation and migration to Snowflake",
      "dbt modeling, testing, and CI/CD",
      "Warehouse sizing and credit cost optimization",
    ],
    overview: [
      "We build and optimize Snowflake platforms end to end — ingestion, modeling in dbt, RBAC and governance, and the BI serving layer. If you are migrating from Redshift, Synapse, SQL Server, Teradata, or an on-prem warehouse, we plan and run the migration.",
      "We also do a lot of cost work. Snowflake bills are easy to grow and hard to explain. We trace spend down to warehouse, query, and team, then fix the causes: wrong warehouse sizes, missing auto-suspend, unclustered large tables, and full-refresh models that should be incremental.",
    ],
    capabilities: [
      "Snowflake implementation, account setup, and landing architecture",
      "Migration from Redshift, Synapse, BigQuery, Teradata, or on-prem",
      "dbt modeling: layered marts, tests, docs, and CI/CD",
      "RBAC, row access policies, masking, and data governance",
      "Warehouse sizing, auto-suspend, clustering, and query tuning",
      "Snowpipe, Streams, Tasks, and Dynamic Tables for ingestion",
      "Cost attribution and chargeback by team or workload",
    ],
    deliverables: [
      "A production Snowflake account with a documented data model",
      "A dbt project with tests, docs, and CI/CD",
      "An RBAC and governance model your security team can sign off",
      "A credit cost baseline plus a prioritized optimization backlog",
      "Migration runbook and cutover plan, if migrating",
    ],
    process: [
      { title: "Assess", description: "Review the current warehouse, models, spend, and access model." },
      { title: "Design", description: "Define the target Snowflake architecture and dbt layering." },
      { title: "Build", description: "Implement ingestion, models, governance, and CI/CD." },
      { title: "Optimize", description: "Tune warehouses and queries, then hand over with runbooks." },
    ],
    faqs: [
      {
        q: "How much can Snowflake cost optimization actually save?",
        a: "It depends on how the account was set up, but the usual wins are large: right-sizing warehouses, enforcing auto-suspend, replacing full-refresh dbt models with incremental ones, and clustering the few tables that need it. We always start with a measured baseline so you can verify the result.",
      },
      {
        q: "Do you use dbt?",
        a: "Yes. dbt is our default transformation layer on Snowflake — layered models, tests on every source and mart, generated docs, and CI that runs on every pull request.",
      },
      {
        q: "Can you migrate us from Redshift or SQL Server to Snowflake?",
        a: "Yes. We handle the schema and code conversion, historical backfill, parallel-run validation, and the cutover plan — including what stays behind and for how long.",
      },
      {
        q: "Snowflake or Databricks — which should we pick?",
        a: "We work with both and have no vendor quota to fill. The honest answer depends on your workloads, team skills, and existing cloud. An assessment gives you a recommendation with the trade-offs written down.",
      },
    ],
    featured: true,
  },
  {
    slug: "ai-data-engineering",
    icon: "cpu",
    title: "AI Data Engineering",
    seoTitle: "AI Data Engineering & Generative AI Analytics",
    seoDescription:
      "AI data engineering: AI-ready data platforms, RAG pipelines, NL-to-SQL analytics, vector search, and LLM evaluation — built for production, not demos.",
    tagline:
      "AI-ready data platforms, RAG pipelines, and analytics copilots in production.",
    bullets: [
      "AI-ready data: unstructured ingestion and vector search",
      "RAG, NL-to-SQL, and analytics copilots",
      "Evaluation, guardrails, and cost control",
    ],
    overview: [
      "AI projects fail on data, not on models. We build the engineering layer that makes AI work: ingesting unstructured content, chunking and embedding it, keeping it fresh, and exposing clean, well-described semantics that an LLM can actually query.",
      "On top of that we ship the applications — retrieval-augmented chat over your knowledge base, natural-language-to-SQL over your warehouse, document extraction, and analytics copilots — with evaluation, guardrails, observability, and a cost ceiling. We build things that survive contact with real users, not demos.",
    ],
    capabilities: [
      "AI-ready data platforms: unstructured ingestion, chunking, embeddings",
      "Vector search and hybrid retrieval (Databricks Vector Search, pgvector, Snowflake Cortex)",
      "RAG applications over documents, tickets, and knowledge bases",
      "Natural-language-to-SQL and analytics copilots over your warehouse",
      "Semantic layers and metric definitions that make LLM answers correct",
      "LLM evaluation sets, guardrails, and prompt/version management",
      "Agent pipelines for data quality, documentation, and ops",
      "Deployment, monitoring, and token cost control",
    ],
    deliverables: [
      "An AI-ready data layer with refresh pipelines and lineage",
      "A deployed, evaluated GenAI application",
      "An evaluation suite so quality changes are measurable",
      "Guardrails, monitoring, and a token cost budget",
      "Architecture docs and handover to your team",
    ],
    process: [
      { title: "Frame", description: "Pick use cases with real value and define success metrics." },
      { title: "Prepare", description: "Build the AI-ready data layer: ingestion, embeddings, semantics." },
      { title: "Prototype", description: "Ship a working application against real data and real users." },
      { title: "Harden", description: "Add evals, guardrails, monitoring, and cost controls." },
    ],
    faqs: [
      {
        q: "What is AI data engineering, exactly?",
        a: "It is the data work that has to happen before an AI feature can be reliable: getting unstructured content into the platform, chunking and embedding it, keeping it in sync, and defining semantics clearly enough that a model returns correct answers. Most 'AI problems' are really data problems.",
      },
      {
        q: "Do you build on our existing warehouse or somewhere else?",
        a: "On your existing platform wherever possible — Databricks, Snowflake, or your cloud provider's AI services. Adding a separate AI stack next to your warehouse creates a second copy of the truth, and that is what breaks first.",
      },
      {
        q: "How do you stop the model from giving wrong answers?",
        a: "Three things: a clean semantic layer so the model queries the right definitions, an evaluation set that scores answers on every change, and guardrails that refuse rather than guess. We treat evals as a deliverable, not an afterthought.",
      },
      {
        q: "Can you help our engineers adopt AI-assisted development?",
        a: "Yes. We run enablement on AI-assisted coding workflows — practical frameworks, prompts, and review guardrails so your developers ship faster without dropping quality or security standards.",
      },
    ],
    featured: true,
  },
  {
    slug: "data-platforms",
    icon: "database",
    title: "Cloud Data Platforms",
    seoTitle: "Cloud Data Platform Architecture at Petabyte Scale",
    seoDescription:
      "Cloud data platform consulting: architecture, high-volume ingestion, orchestration, CI/CD, and governance built to stay fast and cost-efficient at scale.",
    tagline:
      "Architect and build cloud data platforms that scale to petabytes.",
    bullets: [
      "Platform architecture and reference design",
      "High-throughput batch and streaming ingestion",
      "Orchestration, CI/CD, and data observability",
    ],
    overview: [
      "When the question is bigger than one vendor, we design the whole platform: ingestion, storage, processing, orchestration, serving, and governance — engineered to handle petabyte-scale workloads and stay cost-efficient as they grow.",
      "Every platform is built on engineering practice, not tool choice: version-controlled transformations, automated orchestration, CI/CD, testing, and observability — so the system is reliable and easy for your team to extend after we leave.",
    ],
    capabilities: [
      "Reference architecture across AWS, Azure, and Google Cloud",
      "Distributed processing and large-scale ETL/ELT with Apache Spark",
      "Streaming and high-volume batch ingestion pipelines",
      "Orchestration with Airflow, Dagster, or native schedulers",
      "Data quality, testing, and observability",
      "Governance, security, lineage, and access control",
      "Cost and performance benchmarking at your real data volumes",
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
      { title: "Scale", description: "Load-test, optimize for cost and performance, and hand over." },
    ],
    faqs: [
      {
        q: "We do not know which platform to pick yet. Can you help?",
        a: "Yes, that is a normal starting point. We assess your workloads, team skills, existing cloud commitments, and budget, then give you a recommendation with the trade-offs written down. We work with Databricks, Snowflake, and the native cloud stacks, so the answer is not pre-decided.",
      },
      {
        q: "Do you hand over, or do you stay?",
        a: "We hand over by default — documented architecture, runbooks, and knowledge transfer. Ongoing support is available if you want it, but the goal is your team owning the platform.",
      },
      {
        q: "How do you handle streaming?",
        a: "With Kafka, Kinesis, Event Hubs, or Structured Streaming depending on your stack. We are also happy to tell you when micro-batch is good enough — streaming has a real operational cost and is often not needed.",
      },
    ],
    featured: true,
  },
  {
    slug: "data-teams",
    icon: "users",
    title: "High-Performance Data Teams",
    seoTitle: "Data Team Building, Hiring & Upskilling",
    seoDescription:
      "Build and grow a data team that ships: team structure, hiring strategy, technical interviewing, onboarding playbooks, and leadership coaching.",
    tagline: "Build, hire, and grow data teams that consistently ship.",
    bullets: [
      "Hiring strategy and technical interviewing",
      "Onboarding, standards, and ways of working",
      "Upskilling and leadership coaching",
    ],
    overview: [
      "Great platforms need great teams. We help you build and develop a high-performing data function — defining the roles you need, hiring the right people, and establishing the practices that make them effective and accountable.",
      "Drawing on 15+ years building data teams across North America, we set your team up for durable, business-driven results — not just headcount — through proven hiring frameworks, onboarding playbooks, and hands-on coaching.",
    ],
    capabilities: [
      "Data team structure and role definition",
      "Hiring strategy, screening, and technical interviewing",
      "Onboarding, standards, and ways of working",
      "Upskilling on Databricks, Snowflake, dbt, and AI engineering",
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
    faqs: [
      {
        q: "Do you do recruiting, or advise on it?",
        a: "We advise and run the technical side. We define the roles, write the scorecards, build the interview loop, and sit in on technical interviews. Sourcing and offers stay with you or your recruiter.",
      },
      {
        q: "Can you train our existing team instead of hiring?",
        a: "Often that is the better option. We run hands-on upskilling on Databricks, Snowflake, dbt, and AI engineering, tied to your real projects rather than generic courses.",
      },
    ],
    featured: true,
  },
  {
    slug: "space-analytics",
    icon: "orbit",
    title: "Space Data Analytics",
    seoTitle: "Space Data Analytics — Telemetry, IoT & Image Recognition",
    seoDescription:
      "Analytics for space data: satellite and sensor telemetry pipelines, geospatial and Earth-observation processing, computer vision, and mission dashboards.",
    tagline: "Analytics for space data — IoT, telemetry, and image recognition.",
    bullets: [
      "Satellite and sensor telemetry pipelines",
      "Image recognition and computer vision",
      "Mission and operations dashboards",
    ],
    overview: [
      "Rock Your Data brings its data engineering and AI expertise to the space domain. We build analytics for space data at scale — ingesting IoT and satellite telemetry, running image recognition and computer vision over Earth-observation and sensor imagery, and turning it all into mission and operations dashboards.",
      "This practice is rooted in real experience: our founder spent three years in space manufacturing before a career in data and IT, and now also leads Player One Space (playeronespace.com). That background lets us speak both languages — spacecraft engineering and modern data — and apply the modern data stack to telemetry, IoT, and imagery workloads.",
    ],
    capabilities: [
      "Telemetry and IoT ingestion pipelines (streaming and batch)",
      "Image recognition and computer vision on satellite/sensor imagery",
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
    faqs: [
      {
        q: "What kind of space data do you work with?",
        a: "Satellite and spacecraft telemetry, ground-station IoT and sensor feeds, and Earth-observation imagery. The engineering is the same modern data stack — the domain knowledge is what makes it usable.",
      },
      {
        q: "Do you only work with space companies?",
        a: "No. This is one practice among several. The telemetry, IoT, and computer-vision work also applies to manufacturing, energy, and transport.",
      },
    ],
    featured: false,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Homepage grid: core offering only, space analytics lives on /services/. */
export const featuredServices = services.filter((s) => s.featured);

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
