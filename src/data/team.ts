/**
 * The senior engineering team. First names only, on purpose.
 *
 * Source: resumes in "RYD Inc/04_team" (Oct 2026). Two Nikitas, so they get a
 * last initial. Years = years in data work,
 * counted from the first data role on the resume. Never round years up.
 */
export interface TeamMember {
  name: string;
  role: string;
  years: number;
  skills: string[];
}

export const team: TeamMember[] = [
  {
    name: "Dmitry",
    role: "Founder · Principal Data Architect",
    years: 15,
    skills: ["AWS data lakes", "Snowflake", "Databricks", "Architecture reviews", "Team building"],
  },
  {
    name: "Kirill",
    role: "Senior Data Platform Engineer",
    years: 12,
    skills: ["AWS lakehouse (Iceberg, Athena, Glue)", "5-year TCO models", "Terraform & Kubernetes", "LLM & RAG platforms"],
  },
  {
    name: "Nikita S.",
    role: "Senior Data Engineer",
    years: 12,
    skills: ["Redshift to Snowflake", "dbt at scale", "Airflow & Step Functions", "Kinesis streaming"],
  },
  {
    name: "Nikita V.",
    role: "Senior Data Engineer",
    years: 10,
    skills: ["Databricks lakehouse & Unity Catalog", "dbt (200+ model projects)", "Terraform & CI/CD", "RAG on Databricks"],
  },
  {
    name: "Artur",
    role: "Senior Data Engineer",
    years: 6,
    skills: ["Snowflake & dbt", "Kafka streaming", "Data observability & SLAs", "GenAI evaluation"],
  },
  {
    name: "Tsebek",
    role: "Senior Data Engineer",
    years: 13,
    skills: ["Databricks & Unity Catalog", "Snowflake Cortex AI", "dbt & Airflow", "Banking data"],
  },
  {
    name: "Vladimir",
    role: "Senior Data Engineer",
    years: 13,
    skills: ["Databricks Structured Streaming", "ML feature stores", "AWS Kinesis & Lambda", "AI-assisted delivery"],
  },
  {
    name: "Grigory",
    role: "Senior Data Engineer · PMP",
    years: 10,
    skills: ["Azure Databricks & ADF", "Power BI", "Finance & audit data", "Platform reviews"],
  },
];

/** Shown on every card: the whole team builds with AI. */
export const teamAiSkills = ["Agentic AI workloads", "AI apps for data analytics"];

/** Platforms the team holds certifications on. Names must match platforms.ts. */
export const teamCertifiedOn = ["AWS", "Snowflake", "Databricks", "Microsoft Azure", "Google Cloud"];

/**
 * US and Canadian companies the rest of the team has worked at or delivered for
 * (from their resumes). Shown with the founder's list on the About page.
 */
export const teamCompanies = [
  { name: "Meta", domain: "meta.com" },
  { name: "Electronic Arts", domain: "ea.com" },
  { name: "Autodesk", domain: "autodesk.com" },
  { name: "TELUS", domain: "telus.com" },
  { name: "1-800-GOT-JUNK?", domain: "1800gotjunk.com" },
  { name: "Netskrt", domain: "netskrt.io" },
  { name: "WorkSafeBC", domain: "worksafebc.com" },
  { name: "UBC", domain: "ubc.ca" },
  { name: "Doctors of BC", domain: "doctorsofbc.ca" },
  { name: "Thompson Rivers University", domain: "tru.ca" },
  { name: "Chard Development", domain: "charddevelopment.com" },
];

export const teamYears = team.reduce((sum, m) => sum + m.years, 0);
export const teamAvgYears = Math.floor(teamYears / team.length);
