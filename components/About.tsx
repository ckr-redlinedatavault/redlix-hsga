"use client";
import Link from "next/link";
import { ShieldCheck, Target, Heart, ArrowRight } from "lucide-react";

export default function About() {
  const data = [
    {
      title: "Mission",
      icon: <Target className="w-5 h-5" />,
      text: "To contribute to the education of young people through a value system based on the Scout Promise and Law, building a better world where people are self-fulfilled individuals.",
      link: "/mission"
    },
    {
      title: "Goals",
      icon: <ShieldCheck className="w-5 h-5" />,
      text: "To uplift weaker sections of society—the poor, widows, and handicapped—through educational institutions and skill development for self-employment and growth.",
      link: "/goals"
    },
    {
      title: "Values",
      icon: <Heart className="w-5 h-5" />,
      text: "To instruct young men and ladies to serve and live in harmony, independent of race, religion, or color, while strictly abstaining from brutality in work or action.",
      link: "/values"
    }
  ];

  return (
    <section
      id="about"
      className="relative w-full py-12 md:py-16 bg-zinc-50 overflow-hidden"
      style={{ scrollMarginTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="border-l-2 border-[#800000] pl-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#800000] mb-2">
              Our core foundation
            </p>
            {/* Main Title: Changed from font-black to font-light */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-zinc-900 tracking-tight uppercase leading-none">
              Guiding the <span className="text-[#800000] font-normal">Future.</span>
            </h2>
          </div>
          <p className="max-w-xs text-zinc-500 font-normal text-sm md:text-right leading-relaxed">
            Building character and leadership in every young scout through a dedicated value system.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {data.map((item, idx) => (
            <div 
              key={idx}
              className="group relative flex flex-col bg-white p-7 border border-zinc-200 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-200/50"
            >
              {/* Top Detail Line */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-zinc-100 group-hover:bg-[#800000] transition-colors"></div>

              {/* Icon & Index Area */}
              <div className="flex justify-between items-start mb-6">
                <div className="bg-zinc-900 text-amber-500 p-2.5 transition-colors duration-300 group-hover:bg-[#800000] group-hover:text-white">
                  {item.icon}
                </div>
                <span className="text-3xl font-light text-zinc-200 group-hover:text-zinc-300 transition-colors">
                  0{idx + 1}
                </span>
              </div>

              <div className="flex-grow">
                <h4 className="text-lg font-bold text-zinc-900 mb-3 uppercase tracking-tight">
                  {item.title}
                </h4>
                
                {/* Main Content: Normal weight for clean context */}
                <p className="text-[14px] leading-relaxed text-zinc-500 font-normal mb-6">
                  {item.text}
                </p>
              </div>
              
              <Link 
                href={item.link}
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#800000] hover:text-amber-600 transition-colors mt-auto"
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