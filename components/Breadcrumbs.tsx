"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { resolvePath, isValidPath } from "../lib/searchIndex";

const labelMap: Record<string, string> = {
  profile: "Profile",
  about: "About",
  aims: "Our Future",
  history: "Our Story",
  structure: "Mission & Structure",
  yojna: "Programs",
  gallery: "Gallery",
  photos: "Photos",
  videos: "Videos",
  team: "Team",
  national: "National Team",
  state: "State Team",
  insights: "Insights",
  careers: "Careers",
  news: "News",
  downloads: "Downloads",
  contact: "Contact",
  faq: "FAQ",
  "how-to-join": "How to Join",
  register: "Register",
  search: "Search",
};

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return null;
  }

  const crumbs = segments.map((segment, index) => {
    const rawHref = "/" + segments.slice(0, index + 1).join("/");
    const finalHref = resolvePath(rawHref);
    const label =
      labelMap[segment] ||
      segment
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
    const isLink = isValidPath(finalHref);
    return { href: isLink ? finalHref : undefined, label };
  });

  return (
    <nav className="w-full bg-white border-b border-zinc-100 py-3">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
          <Link
            href="/"
            className="hover:text-[#800000] transition-colors flex items-center gap-1"
          >
            Home
          </Link>
          {crumbs.map((crumb, index) => (
            <span key={crumb.href} className="flex items-center gap-2">
              <ChevronRight size={12} />
              {index === crumbs.length - 1 ? (
                <span className="text-[#800000]">{crumb.label}</span>
              ) : (
                crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-[#800000] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-zinc-400">{crumb.label}</span>
                )
              )}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
