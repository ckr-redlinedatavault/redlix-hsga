"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Award, Star, Users, MapPin, Mail, Crown } from "lucide-react";

export default function StateTeam() {
  const allLeaders = [
    { 
      name: "Dr. Addanki Dayakar", 
      role: "State Chief Commissioner", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516881/1_jwsiab.jpg", 
      icon: <Award className="text-emerald-600" size={16} /> 
    },
    { 
      name: "Putta Praveen", 
      role: "State Chairperson", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516882/2_lwgwjj.jpg", 
      icon: <Crown className="text-emerald-600" size={16} /> 
    },
    { 
      name: "Veeramalla Vamshi Krishna", 
      role: "President", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516882/4_muzcwj.jpg", 
      icon: <Star className="text-emerald-600" size={16} /> 
    },
    { 
      name: "Soora Harikrishna", 
      role: "State Vice President", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516882/3_rt9xqj.jpg", 
      icon: <Users className="text-emerald-600" size={16} /> 
    },
    { 
      name: "Jeedipally Ashwini", 
      role: "State Vice President", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516884/6_vdmx2p.jpg", 
      icon: <Users className="text-emerald-600" size={16} /> 
    },
    { 
      name: "Dr. Kunchapu Suresh", 
      role: "State Secretary", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516883/5_cen1xi.jpg", 
      icon: <Users className="text-emerald-600" size={16} /> 
    },
    { 
      name: "Gannarapy Vijay", 
      role: "State Treasurer", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516884/7_zdupey.jpg", 
      icon: <Users className="text-emerald-600" size={16} /> 
    },
    { 
      name: "G. Srikanth", 
      role: "State Joint Secretary", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516885/8_nnzxlo.jpg", 
      icon: <Users className="text-emerald-600" size={16} /> 
    },
    { 
      name: "T. Dhilip", 
      role: "State Assistant Commissioner", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516887/13_nz2hhq.jpg", 
      icon: <Users className="text-emerald-600" size={16} /> 
    },
  ];

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />

      <main className="flex-grow">
        {/* 1. FULL WIDTH HERO BANNER */}
        <section className="relative h-[320px] w-full overflow-hidden bg-zinc-950">
          <div className="absolute inset-0 h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=1200"
              alt="State Leadership Background"
              className="absolute right-0 h-full w-full md:w-[70%] object-cover opacity-50"
            />
          </div>

          <div
            className="absolute inset-0 flex h-full w-full flex-col justify-center bg-emerald-900/90 text-white md:w-[50%] px-8 md:px-16 lg:px-24"
            style={{ clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)" }}
          >
            <div className="max-w-md animate-in fade-in slide-in-from-left-10 duration-1000">
              <div className="flex items-center gap-3 mb-4">
                <Users size={20} className="text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">
                  State Governance
                </span>
              </div>
              <h1 className="text-4xl font-black md:text-5xl uppercase tracking-tighter leading-[0.9]">
                State <br /> Team
              </h1>
              <p className="mt-6 text-sm md:text-base font-medium text-emerald-50/80 leading-relaxed max-w-[90%]">
                The governing council of Telangana dedicated to fostering the spirit of scouting and guiding across every district.
              </p>
            </div>
          </div>
        </section>

        {/* 2. LEADERSHIP GRID - BEST LOOKING UI */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-20 text-center max-w-2xl mx-auto">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-emerald-700 mb-4">Executive Council</h2>
                <h3 className="text-3xl font-bold text-zinc-900 md:text-4xl">State Leadership & Commissioners</h3>
                <div className="h-1.5 w-16 bg-emerald-600 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
              {allLeaders.map((leader, index) => (
                <div key={index} className="group relative">
                  {/* Portrait Card */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg border border-zinc-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    
                    {/* Glassmorphism Badge */}
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-1.5 bg-white rounded-lg shadow-sm">
                                    {leader.icon}
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                                    {leader.role}
                                </p>
                            </div>
                            <h4 className="text-xl font-bold text-white leading-tight">
                                {leader.name}
                            </h4>
                        </div>
                    </div>
                  </div>
                  
                  {/* Background Accent Frame */}
                  <div className="absolute -z-10 top-4 -right-4 w-full h-full border-2 border-emerald-100 rounded-2xl group-hover:border-emerald-200 transition-colors duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. CORE COMMITMENT / CONTACT */}
        <section className="py-24 bg-zinc-50 border-t border-zinc-200 relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                
                <div className="space-y-8">
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-emerald-700 mb-3">State Mandate</h2>
                        <h3 className="text-3xl font-bold text-zinc-900">Administrative Excellence</h3>
                    </div>
                    <p className="text-base text-zinc-600 leading-relaxed">
                        The State Headquarters manages the implementation of the National Training Scheme, 
                        coordinates state-level rallies, and provides direct support to District Associations 
                        to ensure uniform growth and discipline.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                        <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-zinc-200 shadow-sm">
                            <MapPin className="text-emerald-700 shrink-0 mt-1" size={20} />
                            <div>
                                <h5 className="text-sm font-bold text-zinc-900">Headquarters</h5>
                                <p className="text-xs text-zinc-500 mt-1 uppercase">Telangana State</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-zinc-200 shadow-sm">
                            <Mail className="text-emerald-700 shrink-0 mt-1" size={20} />
                            <div>
                                <h5 className="text-sm font-bold text-zinc-900">Inquiries</h5>
                                <p className="text-xs text-zinc-500 mt-1 uppercase">contact@hsgatelangana.org</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="relative">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-100 rounded-full opacity-50 blur-3xl"></div>
                    <div className="relative bg-zinc-900 p-12 rounded-3xl text-white shadow-2xl border border-white/5">
                        <Shield className="text-emerald-400 mb-6" size={32} />
                        <blockquote className="text-lg font-medium text-emerald-50 leading-relaxed italic mb-8">
                            &ldquo;Our leadership is committed to creating an environment where every Scout and Guide 
                            in Telangana can reach their full potential and serve the nation with honor.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-emerald-500"></div>
                            <p className="text-xs font-bold uppercase tracking-widest text-emerald-500">HSGA Telangana State Council</p>
                        </div>
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
