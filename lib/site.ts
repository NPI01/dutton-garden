/**
 * Site-wide configuration: identity, navigation, and the routes that run
 * chrome-free (the immersive Gate and Garden Walk).
 */

export const SITE = {
  name: "Dandyland",
  tagline: "The imaginative country of Dan Dutton",
  description:
    "Dandyland is the private artistic world of Kentucky artist Dan Dutton — paintings, ballads, stage works, sculpture, and the family land where they are made.",
  url: "https://dandyland.art",
} as const;

export type NavItem = { label: string; href: string; note?: string };

/** Permanent main navigation. */
export const MAIN_NAV: NavItem[] = [
  { label: "Paintings", href: "/paintings", note: "flowers, ballads, figures" },
  { label: "Ballads", href: "/ballads", note: "songs & recordings" },
  { label: "Stage", href: "/stage", note: "opera & performance" },
  { label: "Sculpture", href: "/sculpture", note: "& things made" },
  { label: "Dandyland", href: "/dandyland", note: "the land itself" },
  { label: "Dan", href: "/dan", note: "the artist" },
  { label: "Archive", href: "/archive", note: "the record" },
];

/** Secondary navigation. */
export const SECONDARY_NAV: NavItem[] = [
  { label: "Almanac", href: "/almanac" },
  { label: "Available Work", href: "/available-work" },
  { label: "Contact", href: "/contact" },
];

/** Routes rendered without global chrome (their own immersive frame). */
export const IMMERSIVE_ROUTES = ["/", "/garden"];

export function isImmersive(pathname: string): boolean {
  return IMMERSIVE_ROUTES.includes(pathname);
}
