"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function History() {
  return (
    <section
      id="history"
      className="w-full bg-white py-12 md:py-16 border-b border-zinc-100"
      style={{ scrollMarginTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-20 relative">
          
          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-100 -translate-x-1/2" />

          {/* LEFT COLUMN: OUR STORY */}
          <div className="flex flex-col items-start">
            <div className="mb-3">
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#800000]">The Heritage</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-light tracking-tighter text-zinc-900 uppercase leading-none mb-6">
              Our <br/>
              <span className="font-normal text-[#800000]">Story.</span>
            </h2>

            {/* Scannable Content */}
            <div className="space-y-4">
              {[
                { title: "Legacy", text: "Connecting Telangana to the global scouting movement." },
                { title: "Values", text: "Nurturing value-driven citizens through time-tested traditions." },
                { title: "Pride", text: "Strengthening community bonds through national service." }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 group">
                  <div className="mt-1 h-3 w-1 bg-amber-500 group-hover:h-8 transition-all duration-300" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 leading-none mb-1">{item.title}</span>
                    <p className="text-[14px] leading-tight text-zinc-600 font-normal">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 w-full sm:w-60">
              <Link
                href="/profile/history"
                className="group flex items-center justify-between px-6 bg-[#800000] py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-zinc-900"
              >
                Explore
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: OUR FUTURE */}
          <div className="flex flex-col items-start mt-10 md:mt-0">
            <div className="mb-3">
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#800000]">The Horizon</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-light tracking-tighter text-zinc-900 uppercase leading-none mb-6">
              Our <br/>
              <span className="font-normal text-[#800000]">Future.</span>
            </h2>

            {/* Scannable Content */}
            <div className="space-y-4">
              {[
                { title: "Growth", text: "Modernizing training to reach every youth in Telangana." },
                { title: "Skills", text: "Focusing on 21st-century leadership and innovation." },
                { title: "Mission", text: "Empowering scouts to be resilient nation-builders." }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 group">
                  <div className="mt-1 h-3 w-1 bg-amber-500 group-hover:h-8 transition-all duration-300" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 leading-none mb-1">{item.title}</span>
                    <p className="text-[14px] leading-tight text-zinc-600 font-normal">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 w-full sm:w-60">
              <Link
                href="/profile/aims"
                className="group flex items-center justify-between px-6 bg-zinc-900 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#800000]"
              >
                Vision
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}