import { XMLParser } from "fast-xml-parser";

export interface SubstackPost {
  title: string;
  link: string;
  date: Date;
  excerpt: string;
  image?: string;
}

/**
 * Fetches posts from the Substack archive API (richer + complete: titles,
 * subtitles, cover images, dates). Returns [] on any failure so the build
 * never breaks if the feed is unreachable.
 */
export async function getArchivePosts(limit = 30): Promise<SubstackPost[]> {
  try {
    const url = `https://blog.surfalytics.com/api/v1/archive?sort=new&search=&offset=0&limit=${limit}`;
    const res = await fetch(url, {
      headers: { "User-Agent": "rockyourdata.cloud build" },
    });
    if (!res.ok) return [];
    const items = (await res.json()) as Array<Record<string, unknown>>;
    if (!Array.isArray(items)) return [];

    return items
      .map((it) => {
        const subtitle = String(it.subtitle ?? it.description ?? "");
        return {
          title: String(it.title ?? "").trim(),
          link: String(it.canonical_url ?? ""),
          date: new Date(String(it.post_date ?? "")),
          excerpt: subtitle.slice(0, 160).trim(),
          image: (it.cover_image as string) || undefined,
        } satisfies SubstackPost;
      })
      .filter((p) => p.title && p.link);
  } catch {
    return [];
  }
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
