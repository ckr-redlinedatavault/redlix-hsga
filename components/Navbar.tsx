"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { SearchItem, searchPrefix } from "../lib/searchIndex";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/profile/about", label: "About" },
  { href: "/yojna", label: "Programs" },
  { href: "/team/state", label: "Team" },
  { href: "/gallery/photos", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const updateVars = () => {
      const headerEl = document.getElementById("site-header");
      const headerHeight = headerEl?.offsetHeight ?? 0;
      const navHeight = navRef.current?.offsetHeight ?? 0;

      document.documentElement.style.setProperty(
        "--header-height",
        `${headerHeight}px`
      );
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${navHeight}px`
      );
    };

    updateVars();
    window.addEventListener("resize", updateVars);
    return () => {
      window.removeEventListener("resize", updateVars);
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed left-0 w-full bg-[#800000] text-white shadow-2xl z-[60] top-[var(--header-height)] transition-all duration-300 ease-in-out"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 lg:h-14 items-center justify-between gap-4">
            
            {/* Navigation Items */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-2 text-[12px] font-bold uppercase tracking-widest transition-all duration-200 rounded ${
                    (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href))
                      ? "bg-black/30 text-amber-400"
                      : "hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4 ml-auto">
              <div className="relative">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (results.length > 0) {
                      router.push(results[activeIndex]?.href || results[0].href);
                      setOpen(false);
                    }
                  }}
                  className="flex items-center bg-black/20 border border-white/10 rounded-full px-4 py-1.5 focus-within:border-amber-500/50 transition-all"
                >
                  <Search className="w-3.5 h-3.5 text-white/50" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => {
                      const v = e.target.value;
                      setQuery(v);
                      const r = searchPrefix(v);
                      setResults(r);
                      setActiveIndex(0);
                      setOpen(r.length > 0 && v.trim().length > 0);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        setActiveIndex((i) => Math.min(i + 1, Math.max(results.length - 1, 0)));
                      } else if (e.key === "ArrowUp") {
                        e.preventDefault();
                        setActiveIndex((i) => Math.max(i - 1, 0));
                      } else if (e.key === "Enter") {
                        e.preventDefault();
                        if (results.length > 0) {
                          router.push(results[activeIndex]?.href || results[0].href);
                          setOpen(false);
                        }
                      } else if (e.key === "Escape") {
                        setOpen(false);
                      }
                    }}
                    placeholder="Search..."
                    className="ml-2 bg-transparent text-[11px] text-white placeholder:text-white/40 focus:outline-none w-32 focus:w-48 transition-all"
                  />
                </form>
                {open && results.length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white text-zinc-900 rounded-md shadow-2xl border border-zinc-200 w-64">
                    {results.slice(0, 6).map((item, idx) => (
                      <button
                        key={item.href}
                        onMouseEnter={() => setActiveIndex(idx)}
                        onClick={() => {
                          router.push(item.href);
                          setOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-[12px] uppercase tracking-widest ${
                          activeIndex === idx ? "bg-zinc-100" : "bg-white"
                        } hover:bg-zinc-100 transition-colors`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Recommendation: Consolidated Login Button */}
              <Link
                href="/login"
                className="bg-amber-500 text-black px-6 py-2 rounded-sm text-[11px] font-black uppercase tracking-widest shadow-lg hover:bg-white transition-all active:scale-95"
              >
                Login
              </Link>
            </div>

            {/* Mobile Header */}
            <div className="flex lg:hidden w-full justify-between items-center py-1">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-400">HSGA Navigation</span>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 hover:bg-black/20 rounded-md transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#660000] border-t border-white/10 animate-in slide-in-from-top duration-300">
            <div className="px-6 py-8 space-y-6">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-bold uppercase tracking-tighter py-2 border-b border-white/5"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center text-sm font-black uppercase tracking-widest py-4 bg-amber-500 text-black rounded-sm"
              >
                Member Login
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
