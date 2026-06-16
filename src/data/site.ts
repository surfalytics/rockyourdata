export const site = {
  name: "Rock Your Data",
  longTitle: "Modern Cloud Analytics Consulting in North America",
  description:
    "Rock Your Data is a consulting and technology firm delivering secure, scalable cloud analytics and data engineering across North America.",
  url: "https://rockyourdata.cloud",
  email: "hello@rockyourdata.cloud",
  gaId: "G-FT018TBY84",
  substackUrl: "blog.surfalytics.com",
  surfalytics: "https://surfalytics.com/",
  calendly: "https://calendly.com/surfalytics/surfalytics-intro-consultation",
  blog: "https://medium.com/rock-your-data",
  designCredit: {
    name: "Lala Jafarova",
    url: "https://www.lalajafarova.com/",
  },
} as const;

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
  { label: "Careers", href: "/data-analyst/" },
  { label: "Contact", href: "/contact/" },
] as const;
