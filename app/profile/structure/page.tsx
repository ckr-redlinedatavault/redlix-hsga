"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Flag, Globe, BookOpen, Scroll, ShieldCheck, ArrowRight } from "lucide-react";

export default function AimsAndObjectives() {
  const detailedAims = [
    "To teach and train boys and girls, men and women to revere God or Dharma through yoga, all-faith meditation, and prayer.",
    "To develop the character of boys and girls, men and women and make them good citizens.",
    "To promote the physical, mental, moral and spiritual development of all members.",
    "To promote powers of observation, self-discipline and self-reliance while developing loyalty and patriotism.",
    "To teach and train boys and girls, young men and young women in scout/guide crafts.",
    "To organize hikes, trekking, and educational tours to improve national integration and historical knowledge.",
    "To train in arts and handicrafts useful to themselves and for service to the society.",
    "To help youth serve and live in harmony irrespective of race, creed, religion, or color.",
    "To establish or collaborate with institutions for the upliftment of the weaker sections, including the blind and handicapped.",
    "To maintain schools, libraries, and reading rooms while organizing seminars to increase community knowledge.",
    "To conduct activities for the protection and conservation of nature, environment, and wildlife.",
    "All incomes and properties shall be solely utilized towards the promotion of these aims and objects only.",
    "To work in co-operation with other agencies with similar aims and objects.",
    "To profess and practice the Promise and the Law."
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
        <section className="relative h-[320px] md:h-[380px] w-full overflow-hidden bg-zinc-950 border-b-4 border-amber-500">
          <div className="absolute inset-0 flex flex-col md:flex-row">
            {/* Left Content (Maroon) */}
            <div className="w-full md:w-[45%] bg-[#800000] flex items-center p-8 md:p-16 z-20">
              <div className="max-w-md">
                <p className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  Our Mission
                </p>
                <h1 className="text-white text-4xl md:text-6xl font-light uppercase tracking-tighter leading-none mb-6">
                  Aims <span className="font-normal">&</span> <br />Objectives
                </h1>
                <p className="text-white/80 text-sm font-normal leading-relaxed">
                  Inoculating and promoting reverence to Dharma and selfless service to Mother India and Humanity.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full h-full md:w-[55%] bg-zinc-900">
              <img
                src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516917/a_sp9mhe.jpg"
                alt="Aims and Objectives"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
              />
            </div>
          </div>
        </section>

        {/* 2. CORE PILLARS */}
        <section className="py-12 bg-zinc-50 border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Heart size={20}/>, label: "Humanity First" },
                { icon: <Flag size={20}/>, label: "Service to Nation" },
                { icon: <Globe size={20}/>, label: "Inclusive Values" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-white border border-zinc-200 shadow-sm transition-transform hover:-translate-y-1">
                  <div className="text-[#800000]">{item.icon}</div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-800">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. DETAILED METHODS - Architectural Numerical List */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-amber-500"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#800000]">The Framework</span>
                </div>
                <h2 className="text-4xl font-light text-zinc-900 uppercase tracking-tighter leading-none sticky top-32">
                  Detailed <br /><span className="text-[#800000] font-normal">Methods</span>
                </h2>
              </div>
              
              <div className="md:w-2/3 space-y-10">
                {detailedAims.map((aim, index) => (
                  <div key={index} className="flex gap-8 group">
                    <span className="text-2xl font-light text-zinc-200 group-hover:text-amber-500 transition-colors duration-300">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <div className="space-y-3">
                      <p className="text-base text-zinc-600 font-normal leading-relaxed pt-1 group-hover:text-zinc-900 transition-colors">
                        {aim}
                      </p>
                      <div className="h-px w-full bg-zinc-100 group-hover:bg-zinc-200 transition-colors"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE PROMISE - High Contrast Sections */}
        <section className="py-20 bg-zinc-900 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center gap-3 mb-12">
               <Scroll className="text-amber-500" size={24} />
               <h2 className="text-3xl font-light uppercase tracking-tighter">The <span className="text-amber-500 font-normal">Promise</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800">
              {[
                { title: "I) Boys Scouts and Rovers", text: "On my honor, I promise that I will do my best. To do my duty to GOD* and my Country. To help other people at all times. To obey the Scouts Law." },
                { title: "II) Girl Guides and Rangers", text: "On my honor, I promise that I will do my best. To do my duty to GOD* and my Country. To help other people at all times. To obey the Guide Law." },
                { title: "III) Cubs", text: "I promise that I will do my best. To do my duty to GOD and my Country. To keep the the Law of Cub Pack and To do a good turn every day." },
                { title: "IV) Bulbul", text: "I promise that I will do my best. To do my duty to God and my Country. To keep the Law of Bulbul Pack. To do a good turn every day." }
              ].map((p, i) => (
                <div key={i} className="bg-zinc-900 p-10 hover:bg-zinc-950 transition-colors">
                  <h3 className="text-amber-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{p.title}</h3>
                  <p className="text-lg font-serif italic text-zinc-300 leading-relaxed">
                    &ldquo;{p.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[11px] text-zinc-500 font-normal">*Note: The word Dharma may be substituted for the word GOD.</p>
          </div>
        </section>

        {/* 5. THE LAW - Organized Grid */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center gap-3 mb-16">
               <ShieldCheck className="text-[#800000]" size={24} />
               <h2 className="text-3xl font-light uppercase tracking-tighter text-zinc-900">The <span className="text-[#800000] font-normal">Law</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Guides / Scouts Law */}
              <div className="space-y-10">
                <div className="border-l-4 border-[#800000] pl-6">
                   <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900 mb-6">Law for Scouts, Guides, Rovers & Rangers</h3>
                   <div className="grid grid-cols-1 gap-4">
                     {[
                       "Honour is to be trusted", "Is loyal", "Revere God and serve Country", "Friend to all & sister/brother to every Scout", "Is courteous", "Friend to animals", "Disciplined and obeys orders", "Brave and smiles under difficulties", "Is thrifty", "Pure in thought, word and deed"
                     ].map((law, i) => (
                       <div key={i} className="flex gap-4 text-sm text-zinc-500 font-normal">
                         <span className="text-[#800000] font-bold">{i+1}.</span>
                         <span>A Scout/Guide {law}.</span>
                       </div>
                     ))}
                   </div>
                </div>
              </div>

              {/* Cubs / Bulbul Law */}
              <div className="space-y-12">
                <div className="bg-zinc-50 p-8 border border-zinc-100">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#800000] mb-6">Law for Cubs & Bulbul</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-sm text-zinc-600 font-normal leading-relaxed">
                       <ArrowRight size={14} className="mt-1 text-amber-500 shrink-0" />
                       <span>The Cub/Bulbul gives in to the elders.</span>
                    </li>
                    <li className="flex items-start gap-3 text-sm text-zinc-600 font-normal leading-relaxed">
                       <ArrowRight size={14} className="mt-1 text-amber-500 shrink-0" />
                       <span>The Cub/Bulbul is clean and courteous.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 border border-zinc-100 flex flex-col items-center text-center">
                   <BookOpen size={40} className="text-zinc-200 mb-4" />
                   <h4 className="text-xs font-bold uppercase mb-2">Rulebook Access</h4>
                   <p className="text-[12px] text-zinc-500 font-normal mb-6">Detailed constitutional guidelines are available for official members at HQ.</p>
                   <button className="text-[10px] font-bold uppercase tracking-widest py-2 px-6 border border-zinc-200 hover:bg-zinc-900 hover:text-white transition-all">
                      Request Document
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