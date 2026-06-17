export const founder = {
  name: "Dmitry Anoshin",
  role: "Founder of Rock Your Data & Surfalytics",
  bio: [
    "Dmitry Anoshin is an engineering leader, author, and educator with 16+ years building modern analytics platforms across cloud, on-premise, and hybrid environments.",
    "He has delivered data and analytics solutions for organizations ranging from global enterprises like Amazon, Microsoft, and Deloitte to fast-growing startups — and founded Rock Your Data and the Surfalytics community to help data professionals advance their careers.",
    "Dmitry taught Cloud Computing Fundamentals at the University of Victoria from 2019 to 2025 and has authored 10 technical books on analytics and data engineering.",
  ],
  stats: [
    { value: "16+", label: "Years in data & analytics" },
    { value: "10", label: "Technical books authored" },
    { value: "40k+", label: "Community followers" },
    { value: "19+", label: "Companies served" },
  ],
  credentials: [
    "16+ years building modern analytics platforms across cloud and hybrid environments",
    "8 years in big tech, including Amazon and Microsoft",
    "Instructor of Cloud Computing Fundamentals at the University of Victoria (2019–2025)",
    "Founder of Rock Your Data and the Surfalytics data community",
  ],
  // Organizations Dmitry has worked with / delivered solutions for.
  companies: [
    "Microsoft",
    "Amazon",
    "Teradata",
    "BNP Paribas",
    "Deloitte",
    "Okta",
    "Life360",
    "1Password",
    "Wawanesa Insurance",
    "Shaw",
    "Rogers",
    "Health Canada",
    "Alpaca Markets",
    "MilkMoovement",
    "Dandy",
    "Technical Safety BC",
    "Aviso Wealth",
    "ZoomInfo",
    "YVR Airport",
  ],
  books: [
    { title: "Data Engineering with Azure Databricks", year: 2026 },
    { title: "Jumpstart Snowflake (2nd Edition)", year: 2025 },
    { title: "Azure Data Factory Cookbook (2nd Edition)", year: 2024 },
    { title: "Azure Data Factory Cookbook (1st Edition)", year: 2021 },
    { title: "Tableau Desktop Certified Associate: Exam Guide", year: 2020 },
    { title: "Jumpstart Snowflake (1st Edition)", year: 2019 },
    { title: "Tableau 2019.x Cookbook", year: 2019 },
    { title: "Mastering Business Intelligence with MicroStrategy", year: 2016 },
    { title: "SAP Lumira Essentials", year: 2015 },
    { title: "Learning Hunk", year: 2015 },
  ],
} as const;

/** Initials used for the company monogram badges. */
export function initials(name: string): string {
  const words = name.replace(/[^A-Za-z0-9 ]/g, "").split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}
