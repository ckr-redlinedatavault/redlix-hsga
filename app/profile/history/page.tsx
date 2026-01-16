"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FileText, Info, Users, Scale, ShieldCheck, Award, Landmark, ArrowRight } from "lucide-react";

export default function ProfileHistory() {
  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />

      <main className="flex-grow" id="main-content">
        <Breadcrumbs />
        <section className="relative h-[320px] md:h-[380px] w-full overflow-hidden bg-zinc-950 border-b-4 border-amber-500">
          <div className="absolute inset-0 flex flex-col md:flex-row">
            {/* Left Content (Maroon) */}
            <div className="w-full md:w-[45%] bg-[#800000] flex items-center p-8 md:p-16 z-20">
              <div className="max-w-md">
                <p className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  Official Constitution
                </p>
                <h1 className="text-white text-4xl md:text-6xl font-light uppercase tracking-tighter leading-[1.1] mb-6">
                  Membership <span className="font-normal">&</span> <br />Regulations
                </h1>
                <p className="text-white/80 text-sm font-normal leading-relaxed">
                  The framework governing eligibility, categories, and the fundamental Scout/Guide Promise within the Association.
                </p>
              </div>
            </div>

            {/* Right Image/Pattern Area */}
            <div className="relative w-full h-full md:w-[55%] bg-zinc-900 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
               <Landmark size={200} className="text-white/5 absolute -right-10 -bottom-10" />
               <div className="relative z-10 text-center">
                  <ShieldCheck size={80} className="text-amber-500/20 mb-4 mx-auto" />
                  <span className="text-white/20 text-[10px] uppercase tracking-[1em] font-bold">Regulatory Framework</span>
               </div>
            </div>
          </div>
        </section>

        {/* 2. ELIGIBILITY & PROMISE */}
        <section className="py-16 md:py-20 border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-amber-500"></div>
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#800000]">Entry Requirements</h2>
                </div>
                <h3 className="text-3xl md:text-4xl font-light text-zinc-900 uppercase tracking-tighter mb-8">
                  General <span className="text-[#800000] font-normal">Eligibility</span>
                </h3>
                <div className="text-base text-zinc-500 leading-relaxed space-y-6 font-normal">
                  <p>
                    Membership of the Association is open to the <span className="text-zinc-900 font-medium underline decoration-amber-500 underline-offset-4">citizens of India</span> who subscribe to the Aims and Objects of the Association and are residing or working in India.
                  </p>
                  <p className="p-6 bg-zinc-50 border-l-2 border-[#800000] italic">
                    Citizens of any other Nation may be admitted as members on the specific recommendation of the Association and the National Executive Committee. Admission is officially granted by the Executive Committee.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-[#800000] text-white p-8 md:p-12 shadow-2xl relative group">
                  <Award size={60} className="absolute top-6 right-6 text-amber-500/20" />
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400 mb-8">The Sacred Promise</h2>
                  <p className="text-xl md:text-2xl font-serif italic leading-relaxed mb-10 text-white/95">
                    &ldquo;On my honour, I promise that I will do my best. To do my duty to GOD* and my Country. To help other people at all times and To obey the Scout/Guide Law.&rdquo;
                  </p>
                  <div className="flex items-start gap-3 pt-6 border-t border-white/10">
                    <Info size={16} className="shrink-0 text-amber-500" />
                    <p className="text-[11px] text-white/50 font-normal">*Note: The word <span className="text-white font-bold">Dharma</span> may be substituted for the word <span className="text-white font-bold">GOD</span> if desired by the member.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. MEMBERSHIP CATEGORIES */}
        <section className="py-20 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12">
               <div className="flex items-center gap-3 mb-2">
                  <div className="h-px w-8 bg-amber-500"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#800000]">Structure</span>
               </div>
               <h3 className="text-3xl font-light text-zinc-900 uppercase tracking-tighter">Categories of <span className="font-normal">Membership</span></h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Category Card Component Style */}
              {[
                { 
                  title: "General Members", 
                  icon: <Users size={24}/>, 
                  desc: "Beneficiaries only (Cubs, Scouts, Rovers).",
                  note: "Not eligible to hold office or stand for election.",
                  details: ["CUBS: 5-11 yrs", "SCOUTS: 11-16 yrs", "ROVER: 16-25 yrs"]
                },
                { 
                  title: "Special Members", 
                  icon: <Award size={24}/>, 
                  desc: "Admitted by the National Executive Committee for exceptional services and contribution to the movement."
                },
                { 
                  title: "Ordinary Members", 
                  icon: <Landmark size={24}/>, 
                  desc: "Annual fee: ₹100/-. They elect delegates to represent them in the National Council."
                },
                { 
                  title: "Life Members", 
                  icon: <FileText size={24}/>, 
                  desc: "One-time fee: ₹1100/-. Representatives elected at a 1/10 ratio to serve in State/National councils."
                },
                { 
                  title: "Institutional Members", 
                  icon: <ShieldCheck size={24}/>, 
                  desc: "Schools, Colleges, and NGOs. Annual fee: ₹2000/- or Life fee: ₹1000/-."
                }
              ].map((cat, i) => (
                <div key={i} className="group bg-white p-8 border border-zinc-200 transition-all duration-300 hover:shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-zinc-100 group-hover:bg-[#800000] transition-colors"></div>
                  <div className="text-[#800000] mb-6 transition-transform group-hover:scale-110 duration-300">
                    {cat.icon}
                  </div>
                  <h4 className="text-lg font-bold text-zinc-900 mb-3 uppercase tracking-tight">{cat.title}</h4>
                  <p className="text-sm text-zinc-500 font-normal leading-relaxed mb-4">{cat.desc}</p>
                  
                  {cat.details && (
                    <ul className="space-y-2 border-t border-zinc-50 pt-4">
                      {cat.details.map((d, j) => (
                        <li key={j} className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider flex justify-between">
                          <span>{d.split(':')[0]}</span>
                          <span className="text-[#800000]">{d.split(':')[1]}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {cat.note && (
                    <div className="mt-4 p-2 bg-red-50 text-[10px] font-bold text-red-600 uppercase border border-red-100">
                      {cat.note}
                    </div>
                  )}
                </div>
              ))}

               {/* Affiliated Branches - Dark Themed Card */}
               <div className="bg-zinc-900 text-white p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-amber-500 mb-4 uppercase tracking-tight">Other Members</h4>
                    <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                      Includes Branch State Associations paying ₹1100/- annual affiliation fees. Rights are contingent on timely National fee settlement.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-amber-500 text-[10px] font-bold uppercase tracking-widest">
                    <span>Affiliation Rules</span>
                    <ArrowRight size={14} />
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 4. RIGHTS & PRIVILEGES */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-3 mb-4">
                   <div className="h-px w-8 bg-amber-500"></div>
                   <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#800000]">Privileges</span>
                </div>
                <h3 className="text-4xl font-light text-zinc-900 uppercase tracking-tighter leading-tight">
                  Rights of <br /><span className="font-normal text-[#800000]">Members</span>
                </h3>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                {[
                  { t: "Governance", d: "Right to vote and hold office in the National Council and Executive Committee if elected." },
                  { t: "Transparency", d: "Access to inspect books of accounts and minutes books of the Association meetings." },
                  { t: "Participation", d: "Entitlement to take part in seminars, meetings, and conferences organized by the Association." },
                  { t: "Resources", d: "Receive official publications including newsletters, magazines, and specialized journals." }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">{item.t}</h4>
                    <p className="text-sm text-zinc-500 font-normal leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. TERMINATION - Official Dark Mode */}
        <section className="py-20 bg-zinc-950 text-white border-t-4 border-amber-500">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <FileText className="text-amber-500" size={24} />
                  <h2 className="text-lg font-bold uppercase tracking-widest">Withdrawal</h2>
                </div>
                <p className="text-lg text-zinc-400 font-light leading-relaxed">
                  Any member can withdraw by expressing a desire to do so through a letter addressed to the <span className="text-white font-medium">Chair Person</span> or <span className="text-white font-medium">Secretary</span> of the National Executive Committee.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Scale className="text-red-500" size={24} />
                  <h2 className="text-lg font-bold uppercase tracking-widest text-white/90">Termination</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Working against Association Aims",
                    "Formal resignation",
                    "Missing 3 consecutive meetings",
                    "Sentenced by a Court of Law",
                    "Failure to pay subscriptions",
                    "On the death of the member"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-[11px] text-zinc-500 group">
                       <span className="w-6 h-6 flex items-center justify-center border border-zinc-800 rounded-full text-amber-500 font-bold group-hover:bg-amber-500 group-hover:text-black transition-colors">{i+1}</span>
                       <span className="group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Re-admission process footer area */}
            <div className="mt-20 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="max-w-2xl text-center md:text-left">
                <h3 className="text-amber-500 font-bold uppercase text-[10px] mb-2 tracking-widest">Appeals & Re-admission</h3>
                <p className="text-sm text-zinc-500 font-normal leading-relaxed">
                  Every expelled member has the right to prefer an appeal to the National Council for re-admission. The decision of the Council shall be final.
                </p>
              </div>
              <button className="bg-white text-black px-10 py-3 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-amber-500 transition-all shadow-xl">
                Contact Board
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
