"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import { Shield, Award, Star, Users, MapPin, Mail, Crown, ArrowRight } from "lucide-react";

export default function StateTeam() {
  const allLeaders = [
    { 
      name: "Dr. Addanki Dayakar", 
      role: "State Chief Commissioner", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516881/1_jwsiab.jpg", 
      icon: <Award size={16} /> 
    },
    { 
      name: "Putta Praveen", 
      role: "State Chairperson", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516882/2_lwgwjj.jpg", 
      icon: <Crown size={16} /> 
    },
    { 
      name: "Veeramalla Vamshi Krishna", 
      role: "President", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516882/4_muzcwj.jpg", 
      icon: <Star size={16} /> 
    },
    { 
      name: "Soora Harikrishna", 
      role: "State Vice President", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516882/3_rt9xqj.jpg", 
      icon: <Users size={16} /> 
    },
    { 
      name: "Jeedipally Ashwini", 
      role: "State Vice President", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516884/6_vdmx2p.jpg", 
      icon: <Users size={16} /> 
    },
    { 
      name: "Dr. Kunchapu Suresh", 
      role: "State Secretary", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516883/5_cen1xi.jpg", 
      icon: <Users size={16} /> 
    },
    { 
      name: "Gannarapy Vijay", 
      role: "State Treasurer", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516884/7_zdupey.jpg", 
      icon: <Users size={16} /> 
    },
    { 
      name: "G. Srikanth", 
      role: "State Joint Secretary", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516885/8_nnzxlo.jpg", 
      icon: <Users size={16} /> 
    },
    { 
      name: "T. Dhilip", 
      role: "State Assistant Commissioner", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516887/13_nz2hhq.jpg", 
      icon: <Users size={16} /> 
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
                  State Governance
                </p>
                <h1 className="text-white text-4xl md:text-6xl font-light uppercase tracking-tighter leading-none mb-6">
                  State <br /><span className="font-normal text-white">Team.</span>
                </h1>
                <p className="text-emerald-100/70 text-sm font-normal leading-relaxed">
                  The governing council of Telangana dedicated to fostering the spirit of scouting and guiding across every district.
                </p>
                <div className="mt-6 inline-flex rounded-full bg-white/5 p-1 border border-emerald-500/40">
                  <Link
                    href="/team/state"
                    className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full bg-emerald-500 text-zinc-900"
                  >
                    State Team
                  </Link>
                  <Link
                    href="/team/national"
                    className="px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full text-emerald-100 hover:bg-emerald-500/10"
                  >
                    National Team
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full h-full md:w-[55%] bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
                alt="State Leadership"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
              />
              <div className="absolute inset-0 bg-[#064e3b]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </section>

        {/* 2. LEADERSHIP GRID - Gallery Style */}
        <section className="py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="border-l-2 border-emerald-600 pl-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-700 mb-2">Structure</p>
                <h2 className="text-3xl md:text-4xl font-light text-zinc-900 uppercase tracking-tighter leading-none">
                  Executive <span className="text-emerald-700 font-normal">Council</span>
                </h2>
              </div>
              <p className="max-w-xs text-zinc-500 font-normal text-sm md:text-right leading-relaxed">
                Empowering Telangana&#39;s youth through structured leadership and district coordination.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {allLeaders.map((leader, index) => (
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
                       <span className="text-emerald-600 transition-transform group-hover:scale-110">{leader.icon}</span>
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

        {/* 3. CORE COMMITMENT / CONTACT */}
        <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                <div className="space-y-8">
                    <div className="flex items-center gap-3">
                       <div className="h-px w-8 bg-emerald-500"></div>
                       <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-500">State Mandate</h2>
                    </div>
                    <h3 className="text-4xl font-light uppercase tracking-tighter leading-tight">
                      Administrative <br /><span className="text-emerald-500 font-normal">Excellence.</span>
                    </h3>
                    <p className="text-base text-zinc-400 font-normal leading-relaxed max-w-md">
                        The State Headquarters manages the implementation of the National Training Scheme and coordinates district rallies to ensure uniform growth.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                        <div className="p-6 border border-zinc-800 bg-zinc-900/50 transition-colors hover:bg-zinc-900">
                            <MapPin className="text-emerald-500 mb-4" size={20} />
                            <h5 className="text-[10px] font-bold text-white uppercase tracking-widest mb-1">Headquarters</h5>
                            <p className="text-xs text-zinc-500 font-normal uppercase">Telangana State, India</p>
                        </div>
                        <div className="p-6 border border-zinc-800 bg-zinc-900/50 transition-colors hover:bg-zinc-900">
                            <Mail className="text-emerald-500 mb-4" size={20} />
                            <h5 className="text-[10px] font-bold text-white uppercase tracking-widest mb-1">Inquiries</h5>
                            <p className="text-xs text-zinc-500 font-normal">CONTACT@HSGATELANGANA.ORG</p>
                        </div>
                    </div>
                </div>
                
                <div className="relative pt-12 lg:pt-0">
                    <div className="relative bg-[#064e3b] p-10 md:p-14 border-l-4 border-emerald-400 shadow-2xl">
                        <Shield className="text-emerald-400/20 absolute top-8 right-8" size={60} />
                        <blockquote className="text-xl md:text-2xl font-serif italic text-emerald-50 leading-relaxed mb-8 relative z-10">
                            &ldquo;Our leadership is committed to creating an environment where every Scout and Guide 
                            in Telangana can reach their full potential and serve the nation.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-emerald-400"></div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">HSGA Telangana State Council</p>
                        </div>
                    </div>
                    
                    <div className="mt-12 flex justify-end">
                       <button className="flex items-center gap-3 bg-white text-zinc-950 px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-emerald-500 transition-colors group">
                          Contact State Board
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
