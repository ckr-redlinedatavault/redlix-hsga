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

          {/* RIGHT SIDE: LOGIN DROPDOWN */}
          <div className="hidden lg:block relative group">
            <button
              className="bg-white text-blue-700 px-5 py-1.5 rounded-md text-[13px] font-black uppercase tracking-widest shadow-md hover:bg-blue-50 transition-all flex items-center gap-2 group-hover:bg-blue-50"
            >
              Login
              <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
            </button>

            {/* Desktop Login Submenu */}
            <div className="absolute right-0 top-full hidden group-hover:block w-52 pt-2">
              <div className="bg-white rounded-md shadow-2xl border border-zinc-100 py-2 animate-in fade-in zoom-in-95 duration-200">
                {loginDropdown.map((sub, sIdx) => (
                  <Link
                    key={sIdx}
                    href={sub.href}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-zinc-700 hover:bg-blue-50 hover:text-blue-700 font-bold transition-colors border-b border-zinc-50 last:border-0"
                  >
                    <span className="text-blue-700/50">{sub.icon}</span>
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
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
        <div className="lg:hidden bg-blue-800 border-t border-blue-600 max-h-[calc(100vh-120px)] overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item, idx) => (
              <div key={idx} className="border-b border-blue-600/50 last:border-0 pb-2 pt-2">
                {item.dropdown ? (
                  <div>
                    <button 
                      onClick={() => toggleMobileDropdown(item.label)}
                      className="flex w-full items-center justify-between text-sm font-bold uppercase tracking-widest py-2"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeMobileDropdown === item.label && (
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

            {/* MOBILE LOGIN SECTION */}
            <div className="pt-4">
              <button 
                onClick={() => toggleMobileDropdown('login')}
                className="flex w-full items-center justify-between text-sm font-black uppercase tracking-[0.2em] py-3 px-4 bg-white/10 rounded-lg"
              >
                Account Login
                <ChevronDown className={`w-4 h-4 transition-transform ${activeMobileDropdown === 'login' ? 'rotate-180' : ''}`} />
              </button>
              
              {activeMobileDropdown === 'login' && (
                <div className="mt-2 space-y-2">
                  {loginDropdown.map((sub, sIdx) => (
                    <Link 
                      key={sIdx} 
                      href={sub.href} 
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 w-full bg-white text-blue-700 py-3 px-6 rounded-lg font-bold text-sm uppercase"
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
      )}
    </nav>
  );
}
