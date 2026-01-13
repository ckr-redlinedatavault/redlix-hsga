"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, ArrowRight, Globe, ShieldCheck } from "lucide-react";

export default function Footer() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.877843818621!2d78.50852037516335!3d17.37035108360662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb990025732915%3A0x86733226a273291d!2sVigyan%20Puri%20Colony%2C%20Vidya%20Nagar%2C%20Hyderabad%2C%20Telangana%20500044!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

  return (
    <footer className="w-full bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* 1. TOP TIER: Call to Action */}
      <div className="bg-[#800000] py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-light uppercase tracking-tighter leading-none text-white">
              Ready to <span className="font-normal text-amber-400">Join the Movement?</span>
            </h3>
            <p className="mt-2 text-white/70 font-normal text-sm">Become a part of India&apos;s legacy of service and character building.</p>
          </div>
          <Link 
            href="/login" 
            className="group flex items-center gap-3 bg-white px-10 py-4 text-[#800000] font-black uppercase tracking-[0.2em] text-[11px] transition-all hover:bg-zinc-900 hover:text-white shadow-2xl"
          >
            Register Now
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* 2. MAIN TIER: Dark Editorial Content */}
      <div className="pt-20 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            
            {/* Column 1: Identity */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white rounded-sm">
                  <img
                    src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516854/logo_bivaq2.jpg"
                    alt="HSGA Logo"
                    className="h-12 w-auto"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-light uppercase tracking-tighter leading-none">HSGA <span className="font-normal text-[#800000]">Telangana</span></span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 mt-1">State Headquarters</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400 font-normal italic">
                &ldquo;Contributing to the education of young people through a value system based on the Scout Promise and Law.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <Link key={i} href="#" className="p-3 border border-zinc-800 text-zinc-500 hover:text-amber-500 hover:border-amber-500/30 transition-all">
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-6 bg-amber-500"></div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Navigation</h4>
              </div>
              <ul className="space-y-4">
                {['Home', 'Our Profile', 'Training Program', 'Leadership Team', 'Photo Gallery', 'Downloads'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="group flex items-center text-[13px] font-normal text-zinc-400 hover:text-white transition-colors">
                      <ArrowRight className="w-0 h-3 opacity-0 transition-all group-hover:w-4 group-hover:opacity-100 text-amber-500 mr-0 group-hover:mr-2" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Reach */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-6 bg-amber-500"></div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Contact</h4>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin size={20} className="text-amber-500 shrink-0" />
                  <p className="text-[13px] text-zinc-400 font-normal leading-relaxed uppercase tracking-tight">
                    #B-3 F-1, Vigyan Puri Colony,<br />
                    Vidya Nagar, Hyderabad,<br />
                    Telangana — 500044
                  </p>
                </div>
                <div className="flex gap-4">
                  <Phone size={18} className="text-amber-500 shrink-0" />
                  <div className="text-[13px] text-zinc-400 font-normal tracking-widest">
                    <p>+91 7997819797</p>
                    <p className="mt-1">040-31607502</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail size={18} className="text-amber-500 shrink-0" />
                  <p className="text-[13px] text-zinc-400 font-normal lowercase">hsgatelangana@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Column 4: Map */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-6 bg-amber-500"></div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Presence</h4>
              </div>
              <div className="relative group w-full h-48 bg-zinc-900 border border-zinc-800 overflow-hidden">
                <iframe 
                  src={mapUrl} 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  className="grayscale invert opacity-50 group-hover:opacity-80 transition-opacity duration-700"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border-[12px] border-zinc-950/20"></div>
              </div>
              <p className="mt-4 text-[10px] text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <ShieldCheck size={12} className="text-[#800000]" /> Recognized State Board
              </p>
            </div>
          </div>

          {/* 3. BOTTOM TIER: Attribution */}
          <div className="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-[11px] font-normal text-zinc-500 uppercase tracking-[0.2em]">
                © {new Date().getFullYear()} HSGA TELANGANA · OFFICIAL SITE
              </p>
              <p className="text-[10px] font-normal text-zinc-600 italic mt-1 uppercase tracking-tighter">
                Ministry of Youth Affairs and Sports · Govt. of India
              </p>
            </div>

            {/* Redlix Branding - Premium Minimalist */}
            <div className="flex flex-col items-center md:items-end group">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-600 mb-1">Architecture & Maintenance</p>
              <p className="text-sm font-light text-white tracking-tighter">
                REDLIX <span className="font-normal text-amber-500 transition-colors group-hover:text-white tracking-widest uppercase">Development</span>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}