export const site = {
  name: "Rock Your Data",
  longTitle: "Databricks, Snowflake & AI Data Engineering Consulting",
  description:
    "Rock Your Data is a data consulting firm delivering Databricks and Snowflake platforms, AI data engineering, and high-performance data teams across North America.",
  url: "https://rockyourdata.cloud",
  email: "hello@rockyourdata.cloud",
  gaId: "G-FT018TBY84",
  substackUrl: "blog.surfalytics.com",
  surfalytics: "https://surfalytics.com/",
  surfalyticsRoadmap: "https://surfalytics.com/roadmap/",
  blog: "https://medium.com/rock-your-data",
  /** Default social-share image. Must exist in public/. */
  ogImage: "/og.png",
  /** Legal entity location, used in Organization JSON-LD. */
  location: { city: "Vancouver", region: "BC", country: "CA" },
  /**
   * Web3Forms access key for the contact form.
   * Get one free at https://web3forms.com — enter hello@rockyourdata.cloud and
   * they email you the key. Paste it here. The key is public by design; it only
   * allows posting to the form, and submissions go to the email you registered.
   * While it is empty, the form falls back to a mailto link.
   */
  web3formsKey: "9a2c92fc-114f-4a33-ba3d-484fcce69481",
  designCredit: {
    name: "Lala Jafarova",
    url: "https://www.lalajafarova.com/",
  },
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const nav: NavItem[] = [
  { label: "Services", href: "/services/" },
  { label: "Projects", href: "/projects/" },
  { label: "Data Academy", href: "/data-academy/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
];
