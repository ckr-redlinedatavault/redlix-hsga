"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { Shield, Award, Globe, Users, MapPin, Mail, BookOpen, Crown, ArrowRight } from "lucide-react";

export default function NationalTeam() {
  const nationalLeaders = [
    { 
      name: "K. Karunakar Pradhan", 
      role: "National Chairman", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516891/20_bjmamy.jpg", 
      icon: <Crown size={16} /> 
    },
    { 
      name: "Narsingh Mehanji", 
      role: "National President", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516895/27_pbghji.jpg", 
      icon: <Shield size={16} /> 
    },
    { 
      name: "Madhusudhan Gupta", 
      role: "National Chief Commissioner", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516892/21_jz7zrj.jpg", 
      icon: <Award size={16} /> 
    },
    { 
      name: "Dr. Ved Prakash Singh", 
      role: "National General Secretary", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516893/23_elskvx.jpg", 
      icon: <Users size={16} /> 
    },
    { 
      name: "Girish Juyal", 
      role: "National Secretary", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516895/28_ukogac.jpg", 
      icon: <Users size={16} /> 
    },
    { 
      name: "Dr. Atul Kumar", 
      role: "National Joint Secretary", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516894/25_y46nzu.jpg", 
      icon: <Users size={16} /> 
    },
    { 
      name: "Harswaroop Sharma", 
      role: "Sr. Vice President", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516892/22_slxxzr.jpg", 
      icon: <Shield size={16} /> 
    },
    { 
      name: "Vanita Sharma", 
      role: "Vice President", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516893/24_rtic8p.jpg", 
      icon: <Shield size={16} /> 
    },
    { 
      name: "Y. K. Saxena", 
      role: "National Training Commissioner", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516895/26_nbjtko.jpg", 
      icon: <BookOpen size={16} /> 
    },
    { 
      name: "Dr. M. Rajani", 
      role: "International Commissioner - Guides", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516896/29_gu6ndl.jpg", 
      icon: <Globe size={16} /> 
    },
  ];

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />

      <main className="flex-grow" id="main-content">
        <Breadcrumbs />
        <section className="relative h-[320px] md:h-[380px] w-full overflow-hidden bg-zinc-950 border-b-4 border-emerald-500">
          <div className="absolute inset-0 flex flex-col md:flex-row">
            {/* Left Content (Emerald Green) */}
            <div className="w-full md:w-[45%] bg-[#064e3b] flex items-center p-8 md:p-16 z-20">
              <div className="max-w-md">
                <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  Apex Leadership
                </p>
                <h1 className="text-white text-4xl md:text-6xl font-light uppercase tracking-tighter leading-none mb-6">
                  National <br /><span className="font-normal text-white">Team.</span>
                </h1>
                <p className="text-emerald-100/70 text-sm font-normal leading-relaxed">
                  The National Council represents the collective vision and governing wisdom of the Hindustan Scouts and Guides movement across India.
                </p>
                <div className="mt-6 inline-flex rounded-full bg-white/5 p-1 border border-emerald-500/40">
                  <Link
                    href="/team/state"
                    className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full text-emerald-100 hover:bg-emerald-500/10"
                  >
                    State Team
                  </Link>
                  <Link
                    href="/team/national"
                    className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full bg-emerald-500 text-zinc-900"
                  >
                    National Team
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image (Grayscale/Emerald Tint) */}
            <div className="relative w-full h-full md:w-[55%] bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                alt="Leadership"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
              />
              <div className="absolute inset-0 bg-[#064e3b]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </section>

        {/* 2. LEADERSHIP GRID - Museum Style Profile Cards */}
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="border-l-2 border-emerald-600 pl-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-700 mb-2">Structure</p>
                <h2 className="text-3xl md:text-4xl font-light text-zinc-900 uppercase tracking-tighter leading-none">
                  Governance & <span className="text-emerald-700 font-normal">Council</span>
                </h2>
              </div>
              <p className="max-w-xs text-zinc-500 font-normal text-sm md:text-right leading-relaxed">
                Dedicated professionals steering the strategic growth of scouting in India.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {nationalLeaders.map((leader, index) => (
                <div key={index} className="group">
                  {/* Portrait Area */}
                  <div className="relative aspect-[4/5] bg-zinc-100 overflow-hidden mb-6">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-105"
                    />
                    {/* Architectural Accent Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-emerald-600 transition-all duration-500 group-hover:w-full"></div>
                  </div>
                  
                  {/* Info Area */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 mb-2">
                       <span className="text-emerald-600 group-hover:scale-110 transition-transform">{leader.icon}</span>
                       <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">
                          {leader.role}
                       </p>
                    </div>
                    <h4 className="text-xl font-light text-zinc-900 uppercase tracking-tight group-hover:text-emerald-800 transition-colors">
                      {leader.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. MANDATE SECTION - Dark Emerald Accent */}
        <section className="py-24 bg-zinc-950 text-white border-t border-zinc-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                <div className="space-y-8">
                    <div className="flex items-center gap-3">
                       <div className="h-px w-8 bg-emerald-500"></div>
                       <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-500">NHQ Mandate</h2>
                    </div>
                    <h3 className="text-4xl font-light uppercase tracking-tighter leading-tight">
                      National Strategic <br /><span className="text-emerald-500 font-normal">Support Center.</span>
                    </h3>
                    <p className="text-base text-zinc-400 font-normal leading-relaxed max-w-md">
                        The National Headquarters (NHQ) acts as the central nerve center for the movement in India, preserving core values while adapting to the modern landscape.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                        <div className="p-6 border border-zinc-800 bg-zinc-900/50">
                            <MapPin className="text-emerald-500 mb-4" size={20} />
                            <h5 className="text-[10px] font-bold text-white uppercase tracking-widest mb-1">Registered Office</h5>
                            <p className="text-xs text-zinc-500 font-normal">NEW DELHI, INDIA</p>
                        </div>
                        <div className="p-6 border border-zinc-800 bg-zinc-900/50">
                            <Mail className="text-emerald-500 mb-4" size={20} />
                            <h5 className="text-[10px] font-bold text-white uppercase tracking-widest mb-1">Correspondence</h5>
                            <p className="text-xs text-zinc-500 font-normal">NHQ@HSGAINDIA.ORG</p>
                        </div>
                    </div>
                </div>
                
                <div className="relative pt-12 lg:pt-0">
                    <div className="relative bg-[#064e3b] p-10 md:p-14 border-l-4 border-emerald-400 shadow-2xl">
                        <Shield className="text-emerald-400/20 absolute top-8 right-8" size={60} />
                        <blockquote className="text-xl md:text-2xl font-serif italic text-emerald-50 leading-relaxed mb-8 relative z-10">
                            &ldquo;Our leadership is committed to carving a path of excellence, ensuring that the promise 
                            of scouting reaches every village and city in our great nation.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-emerald-400"></div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">HSGA National Council India</p>
                        </div>
                    </div>
                    
                    <div className="mt-12 flex justify-end">
                       <button className="flex items-center gap-3 bg-white text-zinc-950 px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-emerald-500 transition-colors group">
                          View Directory
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                       </button>
                    </div>
                </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
