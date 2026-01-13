"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { 
    label: "Our Profile", 
    dropdown: [
      { label: "About HSGA", href: "/profile/about" },
      { label: "Our History", href: "/profile/history" },
      { label: "Aims & Objectives", href: "/profile/aims" },
      { label: "Organizational Structure", href: "/profile/structure" },
    ] 
  },
  { href: "/yojna", label: "Prashiksham Yojna" },
  { 
    label: "Team", 
    dropdown: [
      { label: "National Team", href: "/team/national" },
      { label: "State Team", href: "/team/state" },
    ] 
  },
  { 
    label: "Gallery", 
    dropdown: [
      { label: "Photos", href: "/gallery/photos" },
      { label: "Videos", href: "/gallery/videos" },
    ] 
  },
  { 
    label: "Insights", 
    dropdown: [
      { label: "Careers", href: "/insights/careers" },
      { label: "News", href: "/insights/news" },
      { label: "Downloads", href: "/insights/downloads" },
    ] 
  },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<number | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const toggleMobileDropdown = (index: number) => {
    setActiveMobileDropdown(activeMobileDropdown === index ? null : index);
  };

  useEffect(() => {
    const updateVars = () => {
      const headerEl = document.getElementById("site-header");
      const headerHeight = headerEl?.offsetHeight ?? 0;
      const navHeight = navRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
      document.documentElement.style.setProperty("--navbar-height", `${navHeight}px`);
    };
    updateVars();
    window.addEventListener("resize", updateVars);
    return () => window.removeEventListener("resize", updateVars);
  }, []);

  useEffect(() => {
    const navHeight = navRef.current?.offsetHeight ?? 0;
    document.documentElement.style.setProperty("--navbar-height", `${navHeight}px`);
  }, [mobileMenuOpen, activeMobileDropdown]);

  return (
    <nav
      ref={navRef}
      className="fixed left-0 w-full bg-blue-700 text-white shadow-lg z-[60]"
      style={{ top: "var(--header-height)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          
          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, idx) => (
              <div key={idx} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="flex items-center gap-1 px-3 py-2 text-[13px] font-bold uppercase tracking-wider hover:bg-white/10 rounded transition-colors">
                      {item.label}
                      <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
                    </button>
                    
                    {/* Desktop Dropdown menu */}
                    <div className="absolute left-0 top-full hidden group-hover:block w-56 pt-2">
                      <div className="bg-white rounded-md shadow-2xl border border-zinc-100 py-2 animate-in fade-in zoom-in-95 duration-200">
                        {item.dropdown.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-zinc-700 hover:bg-blue-50 hover:text-blue-700 font-medium transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-[13px] font-bold uppercase tracking-wider hover:bg-white/10 rounded transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: LOGIN BUTTON */}
          <div className="hidden lg:block">
            <Link
              href="/login"
              className="bg-white text-blue-700 px-6 py-1.5 rounded-md text-[13px] font-black uppercase tracking-widest shadow-md hover:bg-blue-50 transition-all active:scale-95"
            >
              Login
            </Link>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <div className="flex lg:hidden w-full justify-between items-center">
             <span className="text-xs font-bold uppercase tracking-widest">Menu</span>
             <button 
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               className="p-2 hover:bg-white/10 rounded-md transition-colors"
             >
               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-blue-800 border-t border-blue-600 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item, idx) => (
              <div key={idx} className="border-b border-blue-600/50 last:border-0 pb-2 pt-2">
                {item.dropdown ? (
                  <div>
                    <button 
                      onClick={() => toggleMobileDropdown(idx)}
                      className="flex w-full items-center justify-between text-sm font-bold uppercase tracking-widest py-2"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {activeMobileDropdown === idx && (
                      <div className="mt-2 ml-4 flex flex-col space-y-3 pb-2 border-l-2 border-white/20 pl-4">
                        {item.dropdown.map((sub, sIdx) => (
                          <Link 
                            key={sIdx} 
                            href={sub.href} 
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-sm opacity-90 hover:opacity-100"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-sm font-bold uppercase tracking-widest py-2"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-6">
              <Link 
                href="/login" 
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-white text-blue-700 py-3 rounded-lg font-black uppercase tracking-widest"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
