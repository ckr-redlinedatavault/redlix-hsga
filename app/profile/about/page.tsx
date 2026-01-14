"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { History, ShieldCheck, Flag, Quote, ArrowRight } from "lucide-react";

export default function AboutHSGA() {
  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />

      <main className="flex-grow">
        {/* 1. HERO BANNER - Split Layout Style */}
        <section className="relative h-[320px] md:h-[350px] w-full overflow-hidden bg-zinc-950 border-b-4 border-amber-500">
          <div className="absolute inset-0 flex flex-col md:flex-row">
            {/* Left Content (Maroon) */}
            <div className="w-full md:w-[45%] bg-[#800000] flex items-center p-8 md:p-16 z-20">
              <div className="max-w-md">
                <p className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-3">
                  Our Foundation
                </p>
                <h1 className="text-white text-3xl md:text-5xl font-light uppercase tracking-tight leading-none mb-4">
                  Legacy of <span className="font-normal">Scouting.</span>
                </h1>
                <p className="text-white/80 text-sm font-normal leading-relaxed">
                  Exploring the spiritual soul and historical origins of the movement in India.
                </p>
              </div>
            </div>

            {/* Right Image (Grayscale for Heritage feel) */}
            <div className="relative w-full h-full md:w-[55%] bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Scouting Heritage"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
              />
            </div>
          </div>
        </section>

        {/* 2. PHILOSOPHY & QUOTE */}
        <section className="py-16 md:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-amber-500"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#800000]">Philosophy</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light text-zinc-900 uppercase tracking-tighter mb-6">
                  Uplifting the <span className="text-[#800000] font-normal">Human Soul</span>
                </h2>
                <p className="text-base text-zinc-500 font-normal leading-relaxed mb-6">
                  Scouting is not merely a physical exercise; it is a profound method of building character from childhood. It serves as a play-way path to refine a person into a perfect human being, guiding them through life&rsquo;s journey.
                </p>
                <p className="text-base text-zinc-500 font-normal leading-relaxed">
                   Our approach bridges the gap between traditional discipline and modern spiritual growth. Once a Scout, always a Scout.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="relative p-10 bg-zinc-50 border border-zinc-100">
                  <Quote className="absolute top-6 left-6 text-amber-500/20 w-12 h-12" />
                  <p className="relative z-10 text-xl font-serif italic text-zinc-700 leading-relaxed">
                    &ldquo;Scouting is a way to uplift the soul of a human being to reach to God.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. HISTORY GRID - Balanced Layout */}
        <section className="py-16 bg-zinc-50 border-y border-zinc-100">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-200 -translate-x-1/2"></div>
              
              {/* Global Origins */}
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <History size={18} className="text-[#800000]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Global Origins</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-5 uppercase tracking-tight">Baden Powell&rsquo;s Vision</h3>
                <div className="space-y-4 text-[14px] leading-relaxed text-zinc-500 font-normal">
                  <p>
                    Originally derived from military terminology, the term &ldquo;Scout&rdquo; was redefined by Sir Robert Stephenson Smith Lord Baden Powell after the Boer War in 1900.
                  </p>
                  <p>
                    His seminal work, <span className="text-zinc-900 font-medium italic">&ldquo;Scouting for Boys&rdquo; (1907)</span>, and the experimental camp on Brownsea Island, sparked a global movement that transformed youth education forever.
                  </p>
                </div>
              </div>

              {/* India Context */}
              <div className="group">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck size={18} className="text-[#800000]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">India Context</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-5 uppercase tracking-tight">National Representation</h3>
                <div className="space-y-4 text-[14px] leading-relaxed text-zinc-500 font-normal">
                  <p>
                    While Scouting arrived in India in 1909, it was initially exclusive. Leaders like <span className="text-zinc-900 font-medium">Pt. Madan Mohan Malviya</span> fought for the right of Indian youth to join.
                  </p>
                  <p>
                    By 1928, the <span className="text-[#800000] font-bold">Hindustan Scouts Association</span> was formed, creating an indigenous literature and training system that reflected the spirit of India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE INCIDENT - Clean Dark Accent Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="bg-zinc-900 p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-6">
                    <Flag className="text-amber-500" size={20} />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">1938 Milestone</span>
                  </div>
                  <h2 className="text-3xl font-light text-white uppercase tracking-tighter mb-6">
                    The Incident at <br />
                    <span className="text-amber-500 font-normal">Allahabad</span>
                  </h2>
                  <p className="text-zinc-400 font-normal leading-relaxed text-sm md:text-base">
                    During a grand rally in 1938, the flag failed to unfurl for the World Chief Scout. Under the leadership of <span className="text-white font-medium">Pt. Shri Ram Bajpai</span>, a Hindustani scout performed a &ldquo;direful deed&rdquo; by climbing the broken pole to fix it.
                  </p>
                </div>
                
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="border-l-2 border-amber-500 pl-8">
                    <p className="text-lg text-white font-light italic leading-relaxed mb-6">
                      &ldquo;The scout climbed the pole, lashed it with his rope, and made the flag fit to be unfurled. He got down and saluted.&rdquo;
                    </p>
                    <div className="flex items-center gap-2 text-amber-500 text-xs font-bold uppercase tracking-widest">
                      <span>Historical Recognition</span>
                      <ArrowRight size={14} />
                    </div>
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