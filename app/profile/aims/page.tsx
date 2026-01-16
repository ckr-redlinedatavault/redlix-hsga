"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Target, Eye, CheckCircle2, Globe, Heart, Shield, ArrowRight } from "lucide-react";

export default function AimsObjectives() {
  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />

      <main className="flex-grow" id="main-content">
        <Breadcrumbs />
        <section className="relative h-[300px] md:h-[350px] w-full overflow-hidden bg-zinc-950 border-b-4 border-amber-500">
          <div className="absolute inset-0 flex flex-col md:flex-row">
            {/* Left Content (Maroon) */}
            <div className="w-full md:w-[45%] bg-[#800000] flex items-center p-8 md:p-16 z-20">
              <div className="max-w-md">
                <p className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  Our Identity
                </p>
                <h1 className="text-white text-4xl md:text-6xl font-light uppercase tracking-tighter leading-none mb-6">
                  Mission <span className="font-normal">&</span> <br />Vision
                </h1>
                <p className="text-white/80 text-sm font-normal leading-relaxed">
                  Focusing on character building, community service, and national development through the spirit of Scouting.
                </p>
              </div>
            </div>

            {/* Right Image/Graphic Area */}
            <div className="relative w-full h-full md:w-[55%] bg-zinc-900">
              <img
                src="https://i.postimg.cc/WpZJpDWk/Screenshot-2026-01-13-at-05-26-17.png"
                alt="Vision"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent md:bg-gradient-to-l"></div>
            </div>
          </div>
        </section>

        {/* 2. THE MISSION SECTION */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4 sticky top-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-amber-500"></div>
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#800000]">The Mission</h2>
                </div>
                <h3 className="text-3xl font-light text-zinc-900 uppercase tracking-tighter leading-tight mb-6">
                  Developing <span className="text-[#800000] font-normal">Full Potential</span>
                </h3>
                <p className="text-sm text-zinc-500 font-normal leading-relaxed">
                  Building a voluntary membership that transcends boundaries of color, class, or creed to create a meaningful place in society.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 gap-8">
                  {[
                    "To make available voluntary membership regardless of color, class, or creed.",
                    "To develop a deep spiritual awareness among its members and respect for all faiths.",
                    "To create awareness of, and involvement in, selfless service to others and the community.",
                    "To use Scouting opportunities to develop unprejudiced attitudes and respect for others.",
                    "To promote a commitment to a code of values that results in self-discipline and leadership."
                  ].map((text, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 className="text-[#800000] group-hover:text-amber-500 transition-colors" size={20} />
                      </div>
                      <div className="space-y-4 w-full">
                        <p className="text-base text-zinc-600 font-normal leading-relaxed">
                          {text}
                        </p>
                        <div className="h-px w-full bg-zinc-100 group-hover:bg-zinc-200 transition-colors"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE VISION SECTION - Dark Mode Architectural Grid */}
        <section className="py-20 bg-zinc-950 text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          <div className="mx-auto max-w-7xl px-6 relative z-10">
            <div className="flex items-center gap-3 mb-12">
               <Eye className="text-amber-500" size={24} />
               <h2 className="text-3xl font-light uppercase tracking-tighter">The <span className="text-amber-500 font-normal">Vision</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900 shadow-2xl">
              {[
                {
                  icon: <Shield size={24} />,
                  title: "Self-Reliance",
                  desc: "To use specific methods that make each individual self-reliant, supportive, and responsible."
                },
                {
                  icon: <Globe size={24} />,
                  title: "Expansion",
                  desc: "To reach out to a greater youth population and establish high visibility across the state."
                },
                {
                  icon: <Heart size={24} />,
                  title: "Nation Building",
                  desc: "To encourage Community Development activities that contribute to the progress of the country."
                },
                {
                  icon: <Target size={24} />,
                  title: "Networking",
                  desc: "To establish a robust and effective network at all levels of the organizational hierarchy."
                }
              ].map((item, i) => (
                <div key={i} className="bg-zinc-950 p-10 md:p-14 hover:bg-zinc-900/50 transition-all duration-300 group">
                  <div className="text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-4 uppercase tracking-widest text-white group-hover:text-amber-500 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-8 pt-10 border-t border-zinc-900">
               <div className="flex items-center gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">Established Goal</span>
                  <ArrowRight size={16} className="text-amber-500" />
               </div>
               <p className="text-[12px] text-zinc-500 uppercase tracking-widest font-bold">
                 Character • Discipline • Service • Integration
               </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
