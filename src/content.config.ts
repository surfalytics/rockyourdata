import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

/**
 * On-site blog. This is the only post source — the Substack feed was removed
 * because its content no longer matches what the site sells, and its SEO value
 * went to blog.surfalytics.com anyway. Slug = filename.
 */
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default("Dmitry Anoshin"),
    category: z.string().default("Data engineering"),
    /** Optional cross-link to the service this post supports. */
    service: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
