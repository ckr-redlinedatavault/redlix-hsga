import Link from "next/link";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";
import { 
  ChevronRight, 
  Home, 
  ArrowLeft, 
  ShieldCheck, 
  School, 
  UserCog, 
  Lock, 
  ArrowUpRight 
} from "lucide-react";

export default function LoginSelection() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col font-sans antialiased text-zinc-800">
      {/* Subtle Nav */}
      <nav className="w-full bg-white/50 backdrop-blur-sm border-b border-zinc-200/60 py-5">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-zinc-400">
            <Link href="/" className="hover:text-[#800000] transition-colors flex items-center gap-1.5">
              <Home size={15} strokeWidth={1.5} />
              <span className="font-normal">Home</span>
            </Link>
            <ChevronRight size={14} strokeWidth={1} className="opacity-40" />
            <span className="font-normal">Authentication</span>
            <ChevronRight size={14} strokeWidth={1} className="opacity-40" />
            <span className="text-[#800000] font-normal">Portals</span>
          </div>

          <Link
            href="/"
            className="group flex items-center gap-2 text-sm font-normal text-zinc-500 hover:text-[#800000] transition-colors"
          >
            <ArrowLeft size={16} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Site
          </Link>
        </div>
      </nav>

      <main className="flex-grow flex flex-col items-center justify-center py-20 px-6">
        <div className="max-w-6xl w-full">
          {/* Header Section */}
          <div className="max-w-2xl mb-16">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-zinc-900 mb-6">
              Select your <span className="text-[#800000]">Portal</span>
            </h1>
            <p className="text-zinc-500 text-lg font-normal leading-relaxed">
              Welcome to the HSGA Telangana management system. Please choose the gateway that matches your administrative role.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PortalCard 
              href="/admin"
              icon={<ShieldCheck size={24} strokeWidth={1.5} />}
              title="HQ Administration"
              category="Management"
              description="Access for National and State Headquarters personnel to manage governance and records."
              color="maroon"
            />
            
            <PortalCard 
              href="/school"
              icon={<School size={24} strokeWidth={1.5} />}
              title="School Portal"
              category="Institutional"
              description="Manage unit registrations, student data, and generate institutional participation reports."
              color="emerald"
            />
            
            <PortalCard 
              href="/trainer"
              icon={<UserCog size={24} strokeWidth={1.5} />}
              title="Trainer Access"
              category="Training"
              description="Monitor training batches, track candidate progress, and update workshop interventions."
              color="zinc"
            />
          </div>

          {/* Minimal Security Footer */}
          <div className="mt-20 pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 text-zinc-400">
              <Lock size={16} strokeWidth={1.5} />
              <p className="text-sm font-normal tracking-tight">
                Secure 256-bit encrypted connection established.
              </p>
            </div>
            <div className="flex gap-8">
              <div className="text-center md:text-left">
                <p className="text-[11px] text-zinc-400 font-normal uppercase tracking-wider mb-1">Status</p>
                <p className="text-sm text-emerald-600 font-normal flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  System Operational
                </p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-[11px] text-zinc-400 font-normal uppercase tracking-wider mb-1">Privacy</p>
                <p className="text-sm text-zinc-600 font-normal">GDPR Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

type Color = "maroon" | "emerald" | "zinc";
interface PortalCardProps {
  href: string;
  icon: ReactNode;
  title: string;
  category: string;
  description: string;
  color: Color;
}

function PortalCard({ href, icon, title, category, description, color }: PortalCardProps) {
  const themes: Record<Color, string> = {
    maroon: "hover:border-[#800000]/30 hover:bg-white text-[#800000] bg-white",
    emerald: "hover:border-emerald-600/30 hover:bg-white text-emerald-700 bg-white",
    zinc: "hover:border-zinc-900/30 hover:bg-white text-zinc-800 bg-white",
  };

  const iconColors: Record<Color, string> = {
    maroon: "bg-[#800000]/5 text-[#800000]",
    emerald: "bg-emerald-50 text-emerald-700",
    zinc: "bg-zinc-100 text-zinc-800",
  };

  const safeColor: Color = (["maroon", "emerald", "zinc"] as const).includes(color) ? color : "zinc";

  return (
    <Link
      href={href || "#"}
      className={`group flex flex-col h-full p-8 rounded-xl border border-zinc-200 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-200/40 ${themes[safeColor]}`}
    >
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-10 transition-transform duration-300 group-hover:scale-110 ${iconColors[safeColor]}`}>
        {icon}
      </div>
      
      <div className="mb-4">
        <p className="text-[11px] font-normal uppercase tracking-[0.15em] text-zinc-400 mb-2">
          {category}
        </p>
        <h3 className="text-xl font-medium text-zinc-900">
          {title}
        </h3>
      </div>

      <p className="text-zinc-500 text-[15px] leading-relaxed font-normal mb-10">
        {description}
      </p>

      <div className="mt-auto flex items-center justify-between group-hover:text-[#800000] transition-colors">
        <span className="text-sm font-normal">Continue to login</span>
        <ArrowUpRight size={18} strokeWidth={1.5} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
      </div>
    </Link>
  );
}
