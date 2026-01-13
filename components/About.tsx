import Link from "next/link";
import { ShieldCheck, Target, Heart } from "lucide-react";

export default function About() {
  const data = [
    {
      title: "Mission",
      icon: <Target className="w-6 h-6" />,
      text: "To contribute to the education of young people through a value system based on the Scout Promise and Law, building a better world where people are self-fulfilled individuals.",
      link: "/mission"
    },
    {
      title: "Goals",
      icon: <ShieldCheck className="w-6 h-6" />,
      text: "To uplift weaker sections of society—the poor, widows, and handicapped—through educational institutions and skill development for self-employment and intelligence growth.",
      link: "/goals"
    },
    {
      title: "Values",
      icon: <Heart className="w-6 h-6" />,
      text: "To instruct young men and ladies to serve and live in harmony, independent of race, religion, or color, while strictly abstaining from brutality in work or action.",
      link: "/values"
    }
  ];

  return (
    <section
      id="about"
      className="relative w-full py-20 overflow-hidden bg-white"
      style={{ scrollMarginTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      {/* BACKGROUND SHAPE: A subtle blue slanted polygon to give it a unique shape */}
      <div 
        className="absolute inset-0 bg-zinc-50 z-0"
        style={{ clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)" }}
      ></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Header with vertical accent */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="border-l-4 border-blue-700 pl-6">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-blue-700 mb-2">
              Our core foundation
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              Guiding the <span className="text-blue-700">Future.</span>
            </h3>
          </div>
          <p className="max-w-md text-zinc-500 font-medium italic text-sm md:text-right">
            &ldquo;Building character and leadership in every young scout through a dedicated value system.&rdquo;
          </p>
        </div>

        {/* DIFFERENT LAYOUT: Asymmetric Floating Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, idx) => (
            <div 
              key={idx}
              className="group relative flex flex-col bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-3"
              style={{
                // Giving each card a slightly different "cut" corner for a non-rectangular look
                borderRadius: idx === 1 ? "0px 40px 0px 40px" : "40px 0px 40px 0px"
              }}
            >
              {/* Icon Circle */}
              <div className="absolute -top-6 left-8 bg-blue-700 text-white p-4 rounded-xl shadow-lg group-hover:bg-slate-900 transition-colors duration-300">
                {item.icon}
              </div>

              <div className="mt-4">
                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-zinc-600 mb-8 min-h-[100px]">
                  {item.text}
                </p>
                
                <Link 
                  href={item.link}
                  className="inline-flex items-center text-xs font-black uppercase tracking-widest text-blue-700 group-hover:text-slate-900 transition-colors"
                >
                  Learn More 
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </div>

              {/* Subtle decorative number background */}
              <span className="absolute bottom-4 right-6 text-6xl font-black text-zinc-100 -z-10 select-none group-hover:text-blue-50 transition-colors">
                0{idx + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
