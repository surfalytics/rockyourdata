import { XMLParser } from "fast-xml-parser";

export interface SubstackPost {
  title: string;
  link: string;
  date: Date;
  excerpt: string;
  image?: string;
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "’")
    .replace(/&#8230;/g, "…")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Fetches the latest posts from the Surfalytics Substack RSS feed at build time.
 * Returns [] on any failure so the build never breaks if the feed is unreachable.
 */
export async function getLatestPosts(limit = 3): Promise<SubstackPost[]> {
  try {
    const res = await fetch("https://blog.surfalytics.com/feed", {
      headers: { "User-Agent": "rockyourdata.cloud build" },
    });
    if (!res.ok) return [];
    const xml = await res.text();

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
      cdataPropName: "__cdata",
    });
    const data = parser.parse(xml);

    const raw = data?.rss?.channel?.item ?? [];
    const items = Array.isArray(raw) ? raw : [raw];

    const text = (v: unknown): string => {
      if (v == null) return "";
      if (typeof v === "string") return v;
      if (typeof v === "object" && "__cdata" in (v as object))
        return String((v as { __cdata: unknown }).__cdata);
      return String(v);
    };

    return items.slice(0, limit).map((it: Record<string, unknown>) => {
      const description = text(it.description);
      const content = text(it["content:encoded"]);
      let image: string | undefined =
        (it.enclosure as { "@_url"?: string })?.["@_url"];
      if (!image) {
        const m = (content || description).match(/<img[^>]+src="([^"]+)"/);
        image = m?.[1];
      }
      const excerpt = stripHtml(description).slice(0, 150).trim();
      return {
        title: stripHtml(text(it.title)),
        link: text(it.link),
        date: new Date(text(it.pubDate)),
        excerpt,
        image,
      };
    });
  } catch {
    return [];
  }
}
