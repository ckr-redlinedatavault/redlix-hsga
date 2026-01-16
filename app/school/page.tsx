"use client";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ChevronRight, Home, School, ArrowLeft, ShieldCheck, GraduationCap } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SchoolLogin() {
  const router = useRouter();
  const [schoolId, setSchoolId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // EXTERNAL LOGO LINK
  const LOGO_URL = "https://res.cloudinary.com/dq2suftps/image/upload/v1722516854/logo_bivaq2.jpg";
  const DEMO_SCHOOL_ID = "TS-SCH-DEMO";
  const DEMO_SCHOOL_PASSWORD = "demo123";

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col">
      {/* 1. MINIMALIST BREADCRUMBS */}
      <nav className="w-full bg-white border-b border-zinc-100 py-4">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
            <Link href="/" className="hover:text-emerald-700 transition-colors flex items-center gap-1">
              <Home size={12} /> Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-zinc-300">Authentication</span>
            <ChevronRight size={12} />
            <span className="text-emerald-700">Institution Access</span>
          </div>
          
          <Link href="/" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-emerald-700 transition-colors">
            <ArrowLeft size={14} /> Back to Site
          </Link>
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center py-12 md:py-20 px-6">
        {/* 2. SPLIT HORIZONTAL INSTITUTION INTERFACE */}
        <div className="w-full max-w-5xl bg-white border border-zinc-200 shadow-2xl flex flex-col md:flex-row overflow-hidden min-h-[620px]">
          
          {/* LEFT SIDE: EDUCATIONAL BRANDING */}
          <div className="relative w-full md:w-[45%] bg-zinc-950 hidden md:block">
            <img
              src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516890/18_botahw.jpg"
              alt="Institutional Background"
              className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
            />
            {/* Emerald Branding Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 via-emerald-900/40 to-transparent"></div>
            
            <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
              <div className="p-3 bg-white/10 backdrop-blur-md border border-white/20 w-fit">
                <GraduationCap size={24} className="text-emerald-400" />
              </div>
              
              <div>
                <h2 className="text-3xl font-light text-white uppercase tracking-tighter leading-tight mb-4">
                  Institutional <br />
                  <span className="font-normal text-emerald-400 underline decoration-white/20 underline-offset-8 uppercase">Empowerment.</span>
                </h2>
                <p className="text-zinc-300 text-[10px] font-normal leading-relaxed uppercase tracking-[0.2em]">
                  State Training Portal <br /> 
                  Hindustan Scouts and Guides
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: AUTHENTICATION FORM */}
          <div className="flex-grow p-8 md:p-16 flex flex-col justify-center relative bg-white">
             {/* Mobile Emerald Bar */}
             <div className="absolute top-0 left-0 w-full h-1 bg-emerald-700 md:hidden"></div>

            <div className="max-w-sm mx-auto w-full">
              
              {/* LOGO AREA */}
              <div className="mb-10 text-center md:text-left flex flex-col md:flex-row items-center gap-6">
                 <img 
                    src={LOGO_URL} 
                    alt="HSGA Logo" 
                    className="h-20 w-auto shadow-lg border border-zinc-100"
                 />
                 <div className="h-10 w-px bg-zinc-100 hidden md:block"></div>
                 <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Registry Office</p>
                    <h3 className="text-sm font-bold text-zinc-900 uppercase tracking-widest mt-1">School Portal</h3>
                 </div>
              </div>

              <div className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-full border border-emerald-100 flex items-center justify-center bg-emerald-50">
                    <School size={18} className="text-emerald-700" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-light text-zinc-900 uppercase tracking-tighter leading-none">
                    School <span className="font-normal text-emerald-700">Login.</span>
                  </h1>
                </div>
                <p className="text-[11px] font-normal text-zinc-500 leading-relaxed italic border-l border-emerald-500 pl-4">
                  Access for registered schools and educational institutions under the Telangana State Association.
                </p>
              </div>

              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setError("");
                  try {
                    let schools: Array<{ id: string; name: string; password: string }> = [];
                    const existing = localStorage.getItem("hsgatg_schools");
                    if (existing) {
                      try {
                        schools = JSON.parse(existing) as Array<{ id: string; name: string; password: string }>;
                      } catch {
                        schools = [];
                      }
                    }
                    if (schools.length === 0) {
                      schools = [
                        {
                          id: DEMO_SCHOOL_ID,
                          name: "Demo High School",
                          password: DEMO_SCHOOL_PASSWORD,
                        },
                      ];
                      localStorage.setItem("hsgatg_schools", JSON.stringify(schools));
                    }
                    const trimmedId = schoolId.trim();
                    const trimmedPassword = password.trim();
                    const match = schools.find(
                      (x) => x.id === trimmedId && x.password === trimmedPassword
                    );
                    if (match) {
                      router.push("/school/dashboard");
                    } else {
                      setError("Invalid credentials. Please check ID or password.");
                    }
                  } catch {
                    setError("Unable to validate credentials right now.");
                  }
                }}
              >
                {error && (
                  <div className="p-3 bg-red-50 border border-red-100">
                    <p className="text-[10px] font-bold text-red-600 uppercase text-center">
                      {error}
                    </p>
                  </div>
                )}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    Unique School ID
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border-b border-zinc-200 bg-transparent px-0 py-3 text-sm text-zinc-900 placeholder-zinc-300 focus:outline-none focus:border-emerald-700 transition-colors font-normal"
                    placeholder="TS-SCH-0000"
                    value={schoolId}
                    onChange={(e) => setSchoolId(e.target.value)}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    Security Password
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full border-b border-zinc-200 bg-transparent px-0 py-3 text-sm text-zinc-900 placeholder-zinc-300 focus:outline-none focus:border-emerald-700 transition-colors font-normal"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-3 w-full bg-emerald-700 text-white py-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-700/10"
                  >
                    Verify Institution
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <Link href="#" className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest hover:text-emerald-700 transition-colors">
                    Recovery Assistance
                  </Link>
                  <div className="flex items-center gap-1.5 text-[9px] font-bold text-emerald-600 uppercase tracking-tighter">
                    <ShieldCheck size={12} />
                    Verified Portal
                  </div>
                </div>
              </form>

              <div className="mt-8 bg-zinc-50 border border-dashed border-emerald-200 px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-700">
                  Demo Access
                </p>
                <p className="mt-2 text-[11px] text-zinc-600">
                  School ID: <span className="font-semibold">{DEMO_SCHOOL_ID}</span> · Password:{" "}
                  <span className="font-semibold">{DEMO_SCHOOL_PASSWORD}</span>
                </p>
              </div>

              {/* Institutional Support Footer */}
              <div className="mt-12 pt-6 border-t border-zinc-50">
                 <p className="text-[9px] text-zinc-400 font-normal leading-relaxed">
                   For technical issues regarding institutional login or credential recovery, please contact the District Organising Commissioner.
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
