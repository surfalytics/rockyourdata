export interface Company {
  name: string;
  domain: string;
}

export interface Book {
  title: string;
  year: number;
  cover: string;
}

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
    "Three years in space manufacturing before a career in data & IT — now also founder of Player One Space",
    "Instructor of Cloud Computing Fundamentals at the University of Victoria (2019–2025)",
    "Founder of Rock Your Data and the Surfalytics data community",
  ],
  // Organizations Dmitry has worked with / delivered solutions for.
  companies: [
    { name: "Microsoft", domain: "microsoft.com" },
    { name: "Amazon", domain: "amazon.com" },
    { name: "Teradata", domain: "teradata.com" },
    { name: "BNP Paribas", domain: "bnpparibas.com" },
    { name: "Deloitte", domain: "deloitte.com" },
    { name: "Okta", domain: "okta.com" },
    { name: "Life360", domain: "life360.com" },
    { name: "1Password", domain: "1password.com" },
    { name: "Wawanesa Insurance", domain: "wawanesa.com" },
    { name: "Shaw", domain: "shaw.ca" },
    { name: "Rogers", domain: "rogers.com" },
    { name: "Health Canada", domain: "canada.ca" },
    { name: "Alpaca Markets", domain: "alpaca.markets" },
    { name: "MilkMoovement", domain: "milkmoovement.com" },
    { name: "Dandy", domain: "meetdandy.com" },
    { name: "Technical Safety BC", domain: "technicalsafetybc.ca" },
    { name: "Aviso Wealth", domain: "aviso.ca" },
    { name: "ZoomInfo", domain: "zoominfo.com" },
    { name: "YVR Airport", domain: "yvr.ca" },
  ] satisfies Company[],
  books: [
    { title: "Data Engineering with Azure Databricks", year: 2026, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1752614135i/238524338._SY475_.jpg" },
    { title: "Jumpstart Snowflake (2nd Edition)", year: 2025, cover: "https://media.springernature.com/w200/springer-static/cover/book/9798868815331.jpg" },
    { title: "Azure Data Factory Cookbook (2nd Edition)", year: 2024, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1690794372i/195441641._SY475_.jpg" },
    { title: "Azure Data Factory Cookbook (1st Edition)", year: 2021, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611001184i/56729958._SY475_.jpg" },
    { title: "Tableau Desktop Certified Associate: Exam Guide", year: 2020, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1580214614i/50702423._SY475_.jpg" },
    { title: "Jumpstart Snowflake (1st Edition)", year: 2019, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1577258749i/49857027._SY475_.jpg" },
    { title: "Tableau 2019.x Cookbook", year: 2019, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1549989702i/43980942._SY475_.jpg" },
    { title: "Mastering Business Intelligence with MicroStrategy", year: 2016, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1478791276i/32938532._SY475_.jpg" },
    { title: "SAP Lumira Essentials", year: 2015, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442150221i/26471888._SY475_.jpg" },
    { title: "Learning Hunk", year: 2015, cover: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1677815351i/28398153._SY475_.jpg" },
  ] satisfies Book[],
} as const;
