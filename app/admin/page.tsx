"use client";
import type React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ChevronRight, Home, Lock, ArrowLeft, ShieldCheck, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  // LOGO EXTERNAL LINK
  const LOGO_URL = "https://res.cloudinary.com/dq2suftps/image/upload/v1722516854/logo_bivaq2.jpg";
  
  const DEMO_EMAIL = "admin@hsgatelangana.org";
  const DEMO_PASSWORD = "HSGA@2024";

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      router.push("/admin/dashboard");
    } else {
      setError("Invalid credentials. Please check your email and password.");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      {/* 1. MINIMALIST BREADCRUMBS */}
      <nav className="w-full bg-white border-b border-zinc-100 py-4">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            <Link href="/" className="hover:text-[#800000] transition-colors flex items-center gap-1">
              <Home size={12} /> Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-zinc-300">Authentication</span>
            <ChevronRight size={12} />
            <span className="text-[#800000]">Admin Portal</span>
          </div>
          
          <Link href="/" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-[#800000] transition-colors">
            <ArrowLeft size={14} /> Back to Site
          </Link>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center py-12 md:py-20 px-6">
        {/* 2. SPLIT HORIZONTAL LOGIN INTERFACE */}
        <div className="w-full max-w-5xl bg-white border border-zinc-200 shadow-2xl flex flex-col md:flex-row overflow-hidden min-h-[620px]">
          
          {/* LEFT SIDE: INSTITUTIONAL BRANDING */}
          <div className="relative w-full md:w-[45%] bg-zinc-950 hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
              alt="HSGA Administrative Background"
              className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
            />
            {/* Maroon Branding Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#800000] via-[#800000]/40 to-transparent"></div>
            
            <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
              <div className="p-3 bg-white/10 backdrop-blur-md border border-white/20 w-fit">
                <Star size={24} className="text-amber-400" />
              </div>
              
              <div>
                <h2 className="text-3xl font-light text-white uppercase tracking-tighter leading-tight mb-4">
                  Institutional <br />
                  <span className="font-normal text-amber-500 underline decoration-white/20 underline-offset-8 uppercase">Governance.</span>
                </h2>
                <p className="text-zinc-300 text-[10px] font-normal leading-relaxed uppercase tracking-[0.2em]">
                  National Headquarters Access <br /> 
                  Hindustan Scouts and Guides
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: AUTHENTICATION FORM */}
          <div className="flex-grow p-8 md:p-16 flex flex-col justify-center relative bg-white">
            <div className="max-w-sm mx-auto w-full">
              
              {/* LOGO AREA - INTEGRATED VIA EXTERNAL LINK */}
              <div className="mb-10 text-center md:text-left flex flex-col md:flex-row items-center gap-6">
                 <img 
                    src={LOGO_URL} 
                    alt="HSGA Logo" 
                    className="h-20 w-auto shadow-lg border border-zinc-100"
                 />
                 <div className="h-10 w-px bg-zinc-100 hidden md:block"></div>
                 <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Identity Verified</p>
                    <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mt-1">HSGA Telangana</h3>
                 </div>
              </div>

              <div className="mb-10">
                <h1 className="text-3xl md:text-4xl font-light text-zinc-900 uppercase tracking-tighter leading-none mb-4">
                  Admin <span className="font-normal text-[#800000]">Login.</span>
                </h1>
                <p className="text-[11px] font-normal text-zinc-500 leading-relaxed italic border-l border-amber-500 pl-4">
                  Authorized access only. All sessions are encrypted and logged for security auditing.
                </p>
              </div>

              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    Administrative Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border-b border-zinc-200 bg-transparent px-0 py-3 text-sm text-zinc-900 placeholder-zinc-300 focus:outline-none focus:border-[#800000] transition-colors font-normal"
                    placeholder="admin@hsgatelangana.org"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    Security Password
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full border-b border-zinc-200 bg-transparent px-0 py-3 text-sm text-zinc-900 placeholder-zinc-300 focus:outline-none focus:border-[#800000] transition-colors font-normal"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* ERROR MESSAGE BOX */}
                {error && (
                  <div className="p-3 bg-red-50 border border-red-100 animate-in fade-in duration-300">
                     <p className="text-[10px] font-bold text-red-600 uppercase text-center">
                      {error}
                    </p>
                  </div>
                )}

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-3 w-full bg-[#800000] text-white py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-900 transition-all shadow-xl shadow-maroon-900/10"
                  >
                    Authenticate & Enter
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <Link href="#" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest hover:text-[#800000] transition-colors">
                    Forgot Password?
                  </Link>
                  <div className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-600 uppercase tracking-tighter">
                    <ShieldCheck size={12} />
                    Secure SSL Session
                  </div>
                </div>
              </form>

              {/* Security Footer Notice */}
              <div className="mt-12 pt-6 border-t border-zinc-50">
                 <p className="text-[9px] text-zinc-400 font-normal leading-relaxed">
                   By logging in, you agree to the Institutional Data Policy. Access to this portal is restricted to Telangana State HQ personnel.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
