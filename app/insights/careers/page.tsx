"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, GraduationCap, Users, ArrowRight, FileText, Calendar, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Careers() {
  const eligibilityData = [
    {
      role: "Assistant Scout Master / Guide Captain",
      qualification: "Intermediate / +2",
      age: "18 - 30 Years",
      icon: <Users size={20} />
    },
    {
      role: "Scout Master / Guide Captain",
      qualification: "Any Degree",
      age: "20 - 35 Years",
      icon: <Briefcase size={20} />
    },
    {
      role: "District Organising Commissioner",
      qualification: "Any Post Graduation (PG)",
      age: "18 - 35 Years",
      icon: <ShieldCheck size={20} />
    }
  ];

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />

      <main className="flex-grow">
        {/* 1. HERO BANNER - Split Layout Style */}
        <section className="relative h-[320px] md:h-[400px] w-full overflow-hidden bg-zinc-950 border-b-4 border-amber-500">
          <div className="absolute inset-0 flex flex-col md:flex-row">
            {/* Left Content (Maroon) */}
            <div className="w-full md:w-[45%] bg-[#800000] flex items-center p-8 md:p-16 z-20">
              <div className="max-w-md">
                <p className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  Telangana Recruitment
                </p>
                <h1 className="text-white text-4xl md:text-6xl font-light uppercase tracking-tighter leading-none mb-6">
                  Jobs <br /><span className="font-normal text-white">Notification.</span>
                </h1>
                <p className="text-white/80 text-sm font-normal leading-relaxed">
                  Join the professional leadership team of HSGA Telangana. Recruitment is now open for multiple positions across the state.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full h-full md:w-[55%] bg-zinc-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
                alt="Leadership"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent md:bg-gradient-to-l"></div>
            </div>
          </div>
        </section>

        {/* 2. NOTIFICATION ALERTS */}
        <section className="py-12 bg-zinc-50 border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="flex items-center gap-4 p-6 bg-white border border-zinc-200 shadow-sm">
                  <div className="bg-[#800000] p-3 text-white">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest mb-1">Application Deadline</p>
                    <p className="text-lg font-bold text-zinc-900 uppercase">15 - 09 - 2020</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 p-6 bg-white border border-zinc-200 shadow-sm">
                  <div className="bg-amber-500 p-3 text-zinc-900">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest mb-1">Job Location</p>
                    <p className="text-lg font-bold text-zinc-900 uppercase">All Over Telangana State</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 3. ELIGIBILITY CRITERIA - Refined Cards */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-zinc-100">
              <div className="border-l-2 border-[#800000] pl-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#800000] mb-2">Qualifications</p>
                <h2 className="text-3xl md:text-4xl font-light text-zinc-900 uppercase tracking-tighter leading-none">
                  Eligibility <span className="text-[#800000] font-normal">Framework</span>
                </h2>
              </div>
              <p className="max-w-xs text-zinc-400 font-normal text-sm md:text-right leading-relaxed italic">
                Please review the specific educational and age requirements before applying online.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {eligibilityData.map((item, i) => (
                <div key={i} className="group relative bg-white border border-zinc-200 p-8 transition-all hover:shadow-2xl hover:border-[#800000]/20">
                  <div className="absolute top-0 left-0 w-full h-1 bg-zinc-50 group-hover:bg-[#800000] transition-colors"></div>
                  
                  <div className="text-amber-500 mb-8 p-3 bg-zinc-900 inline-block group-hover:bg-[#800000] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-zinc-900 uppercase tracking-tight mb-6 leading-tight min-h-[56px]">
                    {item.role}
                  </h4>
                  
                  <div className="space-y-4 pt-6 border-t border-zinc-100">
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Education</span>
                       <span className="text-sm font-normal text-zinc-900">{item.qualification}</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Age Limit</span>
                       <span className="text-sm font-normal text-zinc-900">{item.age}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CALL TO ACTION - Application Button */}
        <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
             <div className="h-px w-16 bg-amber-500 mx-auto mb-8"></div>
             <h2 className="text-4xl font-light uppercase tracking-tighter mb-6">Online <span className="text-amber-500 font-normal">Application</span></h2>
             <p className="text-zinc-400 font-normal mb-12 max-w-xl mx-auto leading-relaxed text-base">
                Ready to make a difference? Submit your digital application through our official recruitment portal before the deadline.
             </p>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/apply" className="flex items-center gap-3 bg-[#800000] text-white px-12 py-5 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#800000] transition-all group shadow-2xl">
                    <FileText size={16} />
                    Apply Online Now
                </Link>
                <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
                   <ShieldCheck className="text-amber-500" size={14} />
                   Verified TS Board Opportunity
                </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}