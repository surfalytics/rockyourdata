# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing/content website for **Rock Your Data** (a cloud analytics consulting company), built with **Astro 6 + Tailwind CSS v4**, deployed as a static site to **GitHub Pages** at the custom domain `rockyourdata.cloud` (`public/CNAME`).

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

- **`src/data/`** — content lives here as typed TS, not hardcoded in markup. `site.ts` (nav, URLs, GA id, Substack/Calendly/Surfalytics links), `services.ts` (services + interaction modes + values), `dataAnalyst.ts` (landing-page copy, roadmap, salaries, **Stripe links**), `socials.ts`. Edit copy here, not in `.astro` files.
- **`src/layouts/`** — `BaseLayout` (head, meta/OG, fonts, GA) → `MarketingLayout` (+ Header/Footer) and `BlogLayout` (article chrome + `.prose` styles). Pages pick one.
- **`src/components/`** — presentational. `Icon.astro` (inline-SVG UI + brand glyphs, replaces the old Iconify/FontAwesome CDNs), `FeatureIcon.astro` (stroked card icons), plus section components (`Hero`, `ServiceCard`, `PartnerLogos`, `SwagSection`, `FounderCard`, etc.).
- **`src/styles/global.css`** — the design system. Tailwind v4 `@theme` tokens (brand colors `navy`/`periwinkle`/`accent`, `font-display`=Futura, `font-sans`=Source Sans 3), Futura `@font-face` (self-hosted woff2 in `public/fonts/futura/`), and component classes (`.btn-primary`, `.text-gradient`, `.card`, `.shell`, `.eyebrow`). Source Sans 3 is imported via `@fontsource-variable/source-sans-3` in `BaseLayout`.
- **Blog** — Astro content collection (`src/content.config.ts`, glob loader + zod schema) over `src/content/blog/*.md`. Routes: `/blog/` (listing) and `/blog/[...slug]/` (reader). Post slug = filename.
- **Images** — raster sources in `src/assets/`, rendered through `astro:assets` `<Image>` for automatic webp/resize. Verbose vector SVGs imported with `?url`.

## URL preservation

`astro.config.mjs` `redirects` maps the one legacy GitBook permalink (`/surfalytics/2023-06-04-introduction.html` → `/blog/introduction/`) plus `/pages/about|contact/` → `/about|contact/`. Add a redirect here if you rename a route that may have inbound links.

## Notes / open items

- `src/pages/career-track.astro` was rebuilt from an empty legacy layout — its body copy (audience, course/community benefits) was **authored during migration** and should be reviewed by the owner; it reuses `dataAnalyst.ts` data for the role/roadmap/salary sections.
- `PartnerLogos` renders platform names as text wordmarks (the old mismatched inline brand SVGs were dropped for a consistent look).
