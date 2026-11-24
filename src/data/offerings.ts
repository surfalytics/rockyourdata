import { getService } from "./services";
import { rollup } from "./aiRollup";

/**
 * Anything a blog post can point at through its `service` frontmatter field:
 * one of the services, or the AI roll-up practice page.
 */
export interface Offering {
  /** Small label above the title, e.g. "Related service". */
  label: string;
  title: string;
  tagline: string;
  href: string;
  linkLabel: string;
}

export function getOffering(slug: string | undefined): Offering | undefined {
  if (!slug) return undefined;

  if (slug === rollup.slug) {
    return {
      label: "Related practice",
      title: rollup.title,
      tagline: rollup.tagline,
      href: rollup.href,
      linkLabel: "See how it works",
    };
  }

  const service = getService(slug);
  if (!service) return undefined;
  return {
    label: "Related service",
    title: service.title,
    tagline: service.tagline,
    href: `/services/${service.slug}/`,
    linkLabel: "Explore service",
  };
}
