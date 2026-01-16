"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function About() {
  const data = [
    {
      title: "Mission",
      label: "The Purpose",
      text: "To contribute to the education of young people through a value system based on the Scout Promise and Law, building a better world.",
      link: "/profile/aims"
    },
    {
      title: "Goals",
      label: "The Objective",
      text: "To uplift weaker sections of society through educational institutions and skill development for sustainable growth.",
      link: "/profile/structure"
    },
    {
      title: "Values",
      label: "The Spirit",
      text: "To instruct young men and ladies to live in harmony, independent of race or religion, practicing discipline in every action.",
      link: "/profile/about"
    }
  ];

  return (
    <section
      id="about"
      className="relative w-full py-12 md:py-16 bg-[#800000] overflow-hidden border-b border-black/10"
      style={{ scrollMarginTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

        {/* SECTION HEADER: Compact (mb-10) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-500 mb-2">
              The Foundation
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tighter uppercase leading-none">
              Guiding the <span className="font-normal text-amber-500">Future.</span>
            </h2>
          </div>
          <div className="max-w-xs border-l border-white/20 pl-5">
            <p className="text-xs md:text-sm text-white/70 font-normal leading-relaxed">
              Building character and leadership through a dedicated value system.
            </p>
          </div>
        </div>

        {/* CARD GRID: Compact Padding (p-7) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-white p-7 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  {item.label}
                </span>
                <span className="text-xl font-light text-zinc-100 group-hover:text-amber-500 transition-colors">
                  0{idx + 1}
                </span>
              </div>

              <div className="flex-grow">
                <h4 className="text-2xl font-light text-zinc-900 mb-3 uppercase tracking-tighter">
                  {item.title}
                </h4>
                
                <p className="text-[14px] leading-snug text-zinc-600 font-normal mb-6">
                  {item.text}
                </p>
              </div>

              {/* Action Link */}
              <Link
                href={item.link}
                className="flex items-center justify-between pt-5 border-t border-zinc-100 text-[10px] font-bold uppercase tracking-widest text-[#800000] group-hover:text-amber-600 transition-all"
              >
                Learn More
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}