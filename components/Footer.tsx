import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, ArrowUpRight, Globe } from "lucide-react";

export default function Footer() {
  // Encoded Google Maps URL for: B-3 F-1, Vigyan Puri Colony, Vidhya Nagar, Hyderabad, Telangana 500044
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.877843818621!2d78.50852037516335!3d17.37035108360662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb990025732915%3A0x86733226a273291d!2sVigyan%20Puri%20Colony%2C%20Vidya%20Nagar%2C%20Hyderabad%2C%20Telangana%20500044!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

  return (
    <footer className="w-full">
      {/* 1. TOP TIER: High Impact CTA */}
      <div className="bg-blue-700 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-white tracking-tight leading-none">Ready to join the movement?</h3>
            <p className="mt-2 text-blue-100 opacity-80 font-medium italic">Become a part of the world&rsquo;s largest youth organization today.</p>
          </div>
          <Link 
            href="/login" 
            className="group flex items-center gap-3 bg-white px-8 py-4 text-blue-700 font-black uppercase tracking-widest text-xs transition-all hover:bg-slate-900 hover:text-white shadow-xl rounded"
          >
            Register Now
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* 2. MAIN TIER: Grey Body Content */}
      <div className="bg-zinc-100 pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            
            {/* Column 1: Identity */}
            <div className="space-y-8 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4">
                <img
                  src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516854/logo_bivaq2.jpg"
                  alt="HSGA Logo"
                  className="h-16 w-auto"
                />
                <div className="flex flex-col text-left">
                  <span className="text-xl font-black text-slate-900 leading-none tracking-tighter">HSGA <span className="text-blue-700">TG</span></span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mt-1">Telangana State</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-zinc-500 font-medium italic">
                &ldquo;Contributing to the education of young people through a value system based on the Scout Promise and Law.&rdquo;
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Link href="#" className="p-3 bg-white text-zinc-400 hover:text-blue-700 hover:shadow-md transition-all rounded-lg"><Facebook size={18} /></Link>
                <Link href="#" className="p-3 bg-white text-zinc-400 hover:text-blue-700 hover:shadow-md transition-all rounded-lg"><Twitter size={18} /></Link>
                <Link href="#" className="p-3 bg-white text-zinc-400 hover:text-blue-700 hover:shadow-md transition-all rounded-lg"><Instagram size={18} /></Link>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h4 className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-slate-900 border-b-2 border-blue-700 pb-2 mb-8">
                Quick Navigation
              </h4>
              <ul className="space-y-4">
                {['Home', 'Our Profile', 'Prashiksham Yojna', 'National & State Team', 'Photo Gallery', 'Downloads'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="group flex items-center text-sm font-bold text-zinc-500 hover:text-blue-700 transition-colors">
                      <span className="h-1 w-0 bg-blue-700 transition-all group-hover:w-3 mr-0 group-hover:mr-3 rounded-full"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-slate-900 border-b-2 border-blue-700 pb-2 mb-8">
                Official Reach
              </h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 flex-shrink-0 bg-white rounded-lg flex items-center justify-center text-blue-700 shadow-sm"><MapPin size={20} /></div>
                  <p className="text-xs text-zinc-500 font-bold leading-relaxed pt-1 uppercase tracking-tight">
                    B-3 F-1, Vigyan Puri Colony,<br />
                    Vidhya Nagar, Hyderabad,<br />
                    Telangana-500044
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 flex-shrink-0 bg-white rounded-lg flex items-center justify-center text-blue-700 shadow-sm"><Phone size={18} /></div>
                  <p className="text-sm text-zinc-500 font-black pt-2 tracking-widest">+91 000 000 0000</p>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 flex-shrink-0 bg-white rounded-lg flex items-center justify-center text-blue-700 shadow-sm"><Mail size={18} /></div>
                  <p className="text-sm text-zinc-500 font-bold pt-2 lowercase">contact@hsgatg.org</p>
                </div>
              </div>
            </div>

            {/* Column 4: Map */}
            <div className="flex flex-col">
              <h4 className="inline-block text-[11px] font-black uppercase tracking-[0.3em] text-slate-900 border-b-2 border-blue-700 pb-2 mb-8">
                Location Map
              </h4>
              <div className="relative group w-full h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe 
                  src={mapUrl} 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  className="grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                ></iframe>
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl flex items-center justify-between shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-[10px] font-black text-slate-900 uppercase">Vidya Nagar HQ</span>
                   <Globe size={14} className="text-blue-700 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* 3. BOTTOM TIER: Attribution & Tech Credits */}
          <div className="mt-20 pt-10 border-t border-zinc-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
              
              <div className="flex flex-col gap-2">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Hindustan Scouts and Guides Association</p>
                <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">
                  © {new Date().getFullYear()} HSGA TG · All Rights Reserved.
                </p>
                <p className="text-[10px] font-medium text-zinc-400 italic">Recognized by Ministry of Youth Affairs and Sports, Govt. of India</p>
              </div>

              {/* Redlix Branding - THE BEST LOOK */}
              <div className="flex flex-col items-center md:items-end">
                <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-zinc-200 flex flex-col items-center md:items-end group hover:border-blue-700 transition-colors">
                  <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-1">Built & Maintained By</p>
                  <p className="text-sm font-black text-slate-900 tracking-tighter group-hover:text-blue-700 transition-colors">
                    REDLIX <span className="text-blue-700 group-hover:text-slate-900">DEVELOPMENT TEAM</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Tech Stack Row */}
            <div className="mt-12 flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Powered By:</span>
              <div className="flex flex-wrap justify-center gap-4">
                {['Next.js', 'Tailwind CSS', 'Lucide Icons', 'Google Maps', 'Vercel'].map((tech) => (
                  <span key={tech} className="text-[11px] font-bold text-zinc-600 hover:text-blue-700 cursor-default transition-colors">{tech}</span>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}