"use client";
export type SearchItem = { label: string; href: string; tags?: string[] };

export const SEARCH_ITEMS: SearchItem[] = [
  { label: "About HSGA", href: "/profile/about", tags: ["profile", "about"] },
  { label: "Mission & Vision", href: "/profile/aims", tags: ["profile", "mission", "vision"] },
  { label: "Aims & Objectives", href: "/profile/structure", tags: ["profile", "aims", "objectives"] },
  { label: "Prashiksham Yojna", href: "/yojna", tags: ["programs", "training", "yojna"] },
  { label: "State Team", href: "/team/state", tags: ["team", "state"] },
  { label: "National Team", href: "/team/national", tags: ["team", "national"] },
  { label: "Gallery Photos", href: "/gallery/photos", tags: ["gallery", "photos"] },
  { label: "Gallery Videos", href: "/gallery/videos", tags: ["gallery", "videos"] },
  { label: "Careers", href: "/insights/careers", tags: ["insights", "careers"] },
  { label: "News", href: "/insights/news", tags: ["insights", "news"] },
  { label: "Downloads", href: "/insights/downloads", tags: ["insights", "downloads"] },
  { label: "Contact Us", href: "/contact", tags: ["contact"] },
  { label: "How to Join", href: "/how-to-join", tags: ["join", "registration"] },
  { label: "FAQ", href: "/faq", tags: ["faq", "help"] },
];

export const VALID_PATHS = new Set<string>(["/", ...SEARCH_ITEMS.map((i) => i.href)]);

export const ALIASES: Record<string, string> = {
  "/team": "/team/state",
};

export function resolvePath(path: string): string {
  return ALIASES[path] || path;
}

export function isValidPath(path: string): boolean {
  return VALID_PATHS.has(resolvePath(path));
}

export function searchPrefix(query: string): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return SEARCH_ITEMS.filter(
    (item) =>
      item.label.toLowerCase().startsWith(q) ||
      (item.tags || []).some((t) => t.startsWith(q))
  );
}
