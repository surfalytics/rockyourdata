# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing/content website for **Rock Your Data** (a data consulting company — Databricks, Snowflake, and AI data engineering), built with **Astro 6 + Tailwind CSS v4**, deployed as a static site to **GitHub Pages** at the custom domain `rockyourdata.cloud` (`public/CNAME`).

> Migrated from a Jekyll/GitBook site in 2026. If you find references to `_layouts/`, `_includes/`, `_config.yml`, or `jekyll-gitbook`, they are stale.

## Commands

```bash
npm install          # install deps
npm run dev          # dev server at http://localhost:4321
npm run build        # static build into ./dist
npm run preview      # serve ./dist (test the real built output)
npx astro check      # type-check .astro + TS (should report 0 errors)
```

Deploy is automatic: pushing to `main` triggers `.github/workflows/deploy.yml` (`withastro/action` → `actions/deploy-pages`). Repo **Settings → Pages → Source must be "GitHub Actions"** (not branch deploy). There are no unit tests; a clean `npm run build` + `npx astro check` is the pre-push gate.

## Critical constraints (don't break these)

- **No `base` in `astro.config.mjs`.** The site is served at the root of a custom domain. Use root-relative (`/about/`) or Astro-resolved asset URLs — never hardcode a `/repo/` prefix.
- **`public/CNAME` and `public/.nojekyll` must survive every build.** Everything in `public/` is copied verbatim to `dist/`. Losing CNAME drops the custom domain; losing `.nojekyll` lets Pages reprocess `dist/_astro/` with Jekyll.
- **Tailwind v4 is wired via PostCSS** (`postcss.config.mjs` → `@tailwindcss/postcss`), **not** `@tailwindcss/vite`. The Vite plugin is incompatible with Astro 6's rolldown-powered Vite — do not switch back to it.
- **Astro frontmatter is parsed as TSX.** Avoid generic type annotations like `Record<X, string>` and leading-pipe multiline unions in `.astro` script blocks — they trip the parser. Derive types from an `as const` object via `keyof typeof` instead (see `Icon.astro`, `FeatureIcon.astro`).
- Single GA4 property: `G-FT018TBY84` (in `src/data/site.ts`, loaded once in `BaseLayout`). The legacy second ID was dropped.

## Architecture

- **`src/data/`** — content lives here as typed TS, not hardcoded in markup. `site.ts` (nav, URLs, GA id, OG image, **Web3Forms key**, Substack/Calendly/Surfalytics links), `services.ts` (services + FAQs + interaction modes + values), `offers.ts` (fixed-scope assessments), `caseStudies.ts` (**placeholder content, gated behind `PUBLISH_CASE_STUDIES`**), `dataAnalyst.ts` (landing-page copy, roadmap, salaries, **Stripe links**), `socials.ts`, `aiRollup.ts` (all copy, sources, and offers for `/ai-roll-up/`), `offerings.ts` (resolves a blog post's `service` field to a service or to the roll-up page). Edit copy here, not in `.astro` files.
- **`src/layouts/`** — `BaseLayout` (head, meta/OG, fonts, GA) → `MarketingLayout` (+ Header/Footer) and `BlogLayout` (article chrome + `.prose` styles). Pages pick one.
- **`src/components/`** — presentational. `Icon.astro` (inline-SVG UI + brand glyphs, replaces the old Iconify/FontAwesome CDNs), `FeatureIcon.astro` (stroked card icons), `PlatformLogos.astro` (real brand marks baked into `src/data/platforms.ts`, shown as a grayscale→color logo wall), `ContactForm.astro`, `FaqList.astro`, `OfferCard.astro` (has a `wide` layout for an offer that sits alone in a row), `CtaBand.astro`, `RollupDataLayer.astro` (the roll-up architecture diagram, built in HTML so it stacks on phones), plus section components (`Hero`, `ServiceCard`, `SwagSection`, `FounderCard`, etc.).
- **`src/styles/global.css`** — the design system. **Dark theme** (near-black navy surfaces, light text/icons). Tailwind v4 `@theme` tokens, `font-display`=Futura, `font-sans`=Inter. ⚠️ Token nuance: `navy` is the **light heading/emphasis** color (`text-navy`), while `brand` is the **navy panel/surface** color (`bg-brand`) — they were decoupled for dark mode, so don't assume `text-navy`/`bg-navy` are the same hue. Futura `@font-face` self-hosted in `public/fonts/futura/`; Inter via `@fontsource-variable/inter` in `BaseLayout`. Futura has **two cuts only**: Book (weights 400–500) and Heavy (600–900). Do not add a separate 700 file — the old one was Futura Bold *Condensed*, so card titles did not match the section headings. Shared classes: `.card-link` (hover state for a card that is a link — a shadow does not show on a dark page), `.label` (small uppercase label, always Inter), `.btn-*` (dark text on the periwinkle and orange fills; white text fails WCAG AA there).
- **Blog** — an Astro content collection (`src/content.config.ts`, glob loader + zod schema imported from `zod`, not the deprecated `astro:content` re-export) over `src/content/blog/*.md`. Routes: `/blog/` (listing) and `/blog/[...slug]/` (reader); post slug = filename. Post dates are plain `YYYY-MM-DD`, so **format them with `timeZone: "UTC"`** or they render a day early. To order several posts published on the same day, give them a UTC time (`2026-11-24T16:00:00Z`); newest sorts first. The `service` frontmatter field (a service slug, or `ai-roll-up`) renders a related card under the post. `.prose` styles live in `BlogLayout`: tables are styled there, and SVG diagrams break out of the text column on desktop and scroll sideways on phones (their labels are 12px, so they must not be scaled down). The Substack RSS integration (`BlogPreview.astro`, `Newsletter.astro`, `src/lib/substack.ts`, `fast-xml-parser`) was **removed** — its content no longer matched the positioning. `site.substackUrl` survives only for the Subscribe link on `/blog/`.
- **Images** — raster sources in `src/assets/`, rendered through `astro:assets` `<Image>` for automatic webp/resize. Verbose vector SVGs imported with `?url`.

## Layout conventions

- Inner pages start with `pt-14 md:pt-20` under the header spacer. Only the homepage hero runs under the nav (negative margin in `Hero.astro`).
- `Footer` has `mt-24`. That is the only gap before the footer, so the last section of a page has no bottom padding.
- Service and project detail pages keep every block in one `mx-auto max-w-5xl` column, with long text capped at `max-w-3xl` inside it. That gives one left edge from the hero to the CTA.
- Three-card rows use `md:grid-cols-2 lg:grid-cols-3`. Three columns at tablet width are too narrow for chips and taglines.

## URL preservation

`astro.config.mjs` `redirects` maps the one legacy GitBook permalink (`/surfalytics/2023-06-04-introduction.html` → `/blog/introduction/`) plus `/pages/about|contact/` → `/about|contact/`. Add a redirect here if you rename a route that may have inbound links.

## Notes / open items

- **AI roll-up practice** — `/ai-roll-up/` (`src/pages/ai-roll-up.astro`, copy in `src/data/aiRollup.ts`) is a landing page, not an entry in `services.ts`. It is linked from the nav, the homepage service grid (sixth card), the services index, and the contact form. Rules: every market fact has a source in `sources`; results published by roll-up companies are quoted as company statements, not as audited facts; we do not claim past roll-up clients. The three offers on that page (scope and duration) were drafted in Nov 2026 and **the owner should confirm them**. Four blog posts (category "AI Roll-ups") support the page and are listed on it through `rollupReading`.

- `src/pages/career-track.astro` was rebuilt from an empty legacy layout — its body copy (audience, course/community benefits) was **authored during migration** and should be reviewed by the owner; it reuses `dataAnalyst.ts` data for the role/roadmap/salary sections.
- `PlatformLogos` uses real brand marks (Snowflake, Databricks, dbt, AWS, Azure, Google Cloud) baked inline into `src/data/platforms.ts` from the CC0 Iconify `logos` set + simple-icons; rendered as a grayscale logo wall (white silhouettes on dark, full color on hover).
- `Services` are data-driven (`src/data/services.ts`, with `slug`): homepage cards, `/services/` index, and `/services/[slug]/` detail pages all read from it. `featured: false` keeps a service off the homepage grid (currently only `space-analytics`). Renaming a slug needs a redirect in `astro.config.mjs`.
- **SEO/structured data** — `BaseLayout` emits `ProfessionalService` + `WebSite` JSON-LD on every page and accepts a `schema` prop for extra blocks; service pages add `Service` + `FAQPage` + `BreadcrumbList`, blog posts add `BlogPosting`. `public/og.png` is the social card (regenerate it if the positioning copy changes).
- **Contact form** — `ContactForm.astro` posts to Web3Forms (the site is static, so there is no backend). It renders a mailto fallback until `site.web3formsKey` is set.
- **Projects** — `src/data/projects.ts` drives `/projects/` and `/projects/[slug]/`, plus the homepage proof strip and the "Related work" block on service pages (matched via `Project.service`). Content comes from the founder's Sept 2023 "Data Architectures and Teams" talk — team sizes, stacks, and the cropped architecture diagrams in `src/assets/projects/`. **These are projects the founder worked on (Amazon, Microsoft, and consulting clients), not Rock Your Data client engagements** — the page is framed as "Selected projects", never as case studies. No invented metrics: outcomes are qualitative unless we can stand behind a number.
- Architecture diagrams are dark-on-white, so they render on an explicit white panel inside an `overflow-x-auto` wrapper with `min-w-[640px]` on the image. That keeps them legible on a dark page and scrollable on phones.
