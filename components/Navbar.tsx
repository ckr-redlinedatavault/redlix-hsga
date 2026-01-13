"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, ShieldCheck, School, UserCog } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { 
    label: "Our Profile", 
    dropdown: [
      { label: "About HSGA", href: "/profile/about" },
      { label: "Membership", href: "/profile/history" },
      { label: "Mission & Vision", href: "/profile/aims" },
      { label: "Aims & Objectives", href: "/profile/structure" },
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

const loginDropdown = [
  { label: "Admin", href: "/admin", icon: <ShieldCheck className="w-4 h-4" /> },
  { label: "School Login", href: "/school", icon: <School className="w-4 h-4" /> },
  { label: "Trainer Access", href: "/trainer", icon: <UserCog className="w-4 h-4" /> },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const toggleMobileDropdown = (label: string) => {
    setActiveMobileDropdown(activeMobileDropdown === label ? null : label);
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

  return (
    <nav
      ref={navRef}
      className="fixed left-0 w-full bg-[#800000] text-white shadow-xl z-[60]"
      style={{ top: "var(--header-height)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          
          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, idx) => (
              <div key={idx} className="relative group">
                {item.dropdown ? (
                  <>
                    <button className="flex items-center gap-1.5 px-3 py-2 text-[12px] font-bold uppercase tracking-wider hover:bg-black/20 rounded transition-all duration-200">
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
                    </button>
                    
                    {/* Desktop Submenu */}
                    <div className="absolute left-0 top-full hidden group-hover:block w-60 pt-0">
                      <div className="bg-white mt-0 rounded-b-md shadow-2xl border-t-2 border-[#800000] py-2 animate-in fade-in slide-in-from-top-1 duration-200">
                        {item.dropdown.map((sub, sIdx) => (
                          <Link
                            key={sIdx}
                            href={sub.href}
                            className="block px-5 py-2.5 text-[13px] text-zinc-700 hover:bg-stone-100 hover:text-[#800000] font-semibold transition-colors"
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
                    className="block px-3 py-2 text-[12px] font-bold uppercase tracking-wider hover:bg-black/20 rounded transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: LOGIN DROPDOWN */}
          <div className="hidden lg:block relative group">
            <button
              className="bg-white text-[#800000] px-6 py-1.5 rounded-sm text-[12px] font-bold uppercase tracking-[0.15em] shadow-lg hover:bg-stone-100 transition-all flex items-center gap-2"
            >
              Login
              <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
            </button>

            {/* Desktop Login Submenu */}
            <div className="absolute right-0 top-full hidden group-hover:block w-56 pt-0">
              <div className="bg-white mt-0 rounded-b-md shadow-2xl border-t-2 border-[#800000] py-2 animate-in fade-in slide-in-from-top-1 duration-200">
                {loginDropdown.map((sub, sIdx) => (
                  <Link
                    key={sIdx}
                    href={sub.href}
                    className="flex items-center gap-3 px-5 py-3 text-[13px] text-zinc-800 hover:bg-stone-100 hover:text-[#800000] font-bold transition-colors border-b border-zinc-50 last:border-0"
                  >
                    <span className="text-[#800000]/60">{sub.icon}</span>
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <div className="flex lg:hidden w-full justify-between items-center py-2">
             <span className="text-[11px] font-black uppercase tracking-[0.3em] opacity-90">Navigation Menu</span>
             <button 
               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               className="p-1.5 hover:bg-black/20 rounded-md transition-colors border border-white/20"
             >
               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#660000] border-t border-white/10 max-h-[calc(100vh-120px)] overflow-y-auto">
          <div className="px-5 py-6 space-y-1">
            {navItems.map((item, idx) => (
              <div key={idx} className="border-b border-white/5 last:border-0 pb-1">
                {item.dropdown ? (
                  <div>
                    <button 
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="flex w-full items-center justify-between text-[13px] font-bold uppercase tracking-widest py-3"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeMobileDropdown === item.label && (
                      <div className="mt-1 mb-3 ml-2 flex flex-col space-y-1 border-l-2 border-white/10 pl-4">
                        {item.dropdown.map((sub, sIdx) => (
                          <Link 
                            key={sIdx} 
                            href={sub.href} 
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-[13px] py-2.5 opacity-80 hover:opacity-100 font-medium"
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
                    className="block text-[13px] font-bold uppercase tracking-widest py-3"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* MOBILE LOGIN SECTION */}
            <div className="pt-6">
              <div className="bg-black/20 rounded-lg p-1">
                <button 
                  onClick={() => toggleMobileDropdown('login')}
                  className="flex w-full items-center justify-between text-[12px] font-black uppercase tracking-[0.2em] py-4 px-5 text-white"
                >
                  Account Portals
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === 'login' ? 'rotate-180' : ''}`} />
                </button>
                
                {activeMobileDropdown === 'login' && (
                  <div className="p-2 space-y-2">
                    {loginDropdown.map((sub, sIdx) => (
                      <Link 
                        key={sIdx} 
                        href={sub.href} 
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 w-full bg-white text-[#800000] py-3.5 px-5 rounded-md font-bold text-[12px] uppercase tracking-wider shadow-sm"
                      >
                        {sub.icon}
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}