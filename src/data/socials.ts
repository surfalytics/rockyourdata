import type { IconName } from "../components/Icon.astro";

export interface Social {
  label: string;
  href: string;
  icon: IconName;
}

export const socials: Social[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/surfalytics/",
    icon: "instagram",
  },
  { label: "Telegram", href: "https://t.me/surfalytics", icon: "telegram" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/surfalytics/",
    icon: "linkedin",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@surfalytics",
    icon: "tiktok",
  },
  {
    label: "GitHub",
    href: "https://github.com/surfalytics/surfalytics",
    icon: "github",
  },
];
