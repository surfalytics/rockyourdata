export const heroBullets = [
  "Learn the modern data stack in 1 month",
  "Build a data projects portfolio in 2 months",
  "Prepare for the job search",
  "Land your dream job offer 🔥",
];

export const gains = [
  "Gain a competitive advantage with fundamental engineering skills",
  "Create a standout resume that grabs recruiters' attention",
  "Develop communication skills to speak the hiring manager's language",
  "Understand the current job market and assess your skills",
  "Define clear, achievable, and measurable career goals",
  "Know your worth and target compensation",
];

export interface RoadmapStep {
  title: string;
  description: string;
}
export interface Phase {
  phase: string;
  title: string;
  steps: RoadmapStep[];
}

export const roadmap: Phase[] = [
  {
    phase: "Phase 1",
    title: "Foundations 📚",
    steps: [
      {
        title: "Step-by-step roadmap",
        description: "Get a detailed roadmap that guides you throughout the journey.",
      },
      {
        title: "Data Analyst course",
        description:
          "Master the skills needed to solve real-world analytics tasks with our self-paced, hands-on course.",
      },
      {
        title: "Hands-on team projects",
        description:
          "Build a portfolio of hands-on projects under the guidance of experienced data analysts who already found a job.",
      },
    ],
  },
  {
    phase: "Phase 2",
    title: "Job Search 🔍",
    steps: [
      {
        title: "Resume enhancement",
        description: "Get an enhanced resume with tailored job experience for the role.",
      },
      {
        title: "Effective application",
        description: "Learn what hiring managers look for on the Canadian data job market.",
      },
      {
        title: "Mock interviews",
        description:
          "Take mock interviews with Staff Data Engineers and access our mock-interview library.",
      },
    ],
  },
  {
    phase: "Phase 3",
    title: "Job Offer 🔥",
    steps: [
      {
        title: "Progress tracking",
        description: "Track your progress throughout the job search.",
      },
      {
        title: "Offer negotiation",
        description: "Access expert support and tips for salary negotiations.",
      },
      {
        title: "Onboarding support",
        description: "Benefit from onboarding guidance and ongoing community support.",
      },
    ],
  },
];

export const stats = [
  { value: "60+", label: "Active community members" },
  { value: "21", label: "Offers received by members within the first year" },
  { value: "$120k", label: "Average employed member salary (CAD)" },
];

export const skillGroups = [
  {
    heading: "Data Warehouses",
    items: ["Databricks", "Snowflake", "BigQuery", "Redshift", "Synapse"],
  },
  { heading: "BI Tools", items: ["Power BI", "Tableau", "Looker"] },
  {
    heading: "Data Integration",
    items: ["Fivetran", "dbt", "Hightouch", "Matillion", "Airbyte"],
  },
  {
    heading: "Complementary",
    items: ["GitHub", "Docker", "AWS", "Azure", "Apache Spark", "Monte Carlo"],
  },
  {
    heading: "Core tasks",
    items: [
      "Data collection & cleaning",
      "Analysis & interpretation",
      "Reporting & visualization",
    ],
  },
  { heading: "Soft skills", items: ["Presentations", "Gathering requirements"] },
];

export const salaries = [
  { level: "Junior", amount: "$80k", height: 38 },
  { level: "Middle", amount: "$120k", height: 58 },
  { level: "Senior", amount: "$150k", height: 78 },
  { level: "Staff", amount: "$180k", height: 100 },
];

export const salaryInsights = [
  "The demand for data analysts is projected to grow 25% from 2020 to 2030 — much faster than the average for all occupations.",
  "Many data analyst roles include performance bonuses, equity, and other perks — especially at startups and tech companies — significantly increasing total compensation.",
];

export const gainsIn3Months = [
  "A strong, compelling resume tailored for the data job market",
  "A competitive edge through a strong portfolio of projects",
  "Insights into employer expectations and readiness to ace interviews",
];

export const pricing = {
  label: "Early Bird Membership Pricing",
  crossedPrice: "$100 / month",
  highlight: "7 days free trial",
  then: "then $50 / month or $250 / year",
  monthlyUrl: "https://buy.stripe.com/bIY7uecLm32v6KQ5kB",
  yearlyUrl: "https://buy.stripe.com/4gw8yi26I9qTb168wP",
  coursePlaylist:
    "https://www.youtube.com/playlist?list=PLNCDg7zJiXhP5Z_-TXUdorz2n7sjYHHKE",
};
