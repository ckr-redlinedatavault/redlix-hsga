"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Welcome to",
    subtitle: "HSGA Telangana",
    description: "Empowering youth through character, service, and leadership in the state of Telangana.",
    highlight: "Excellence Through Growth",
    image: "https://i.postimg.cc/WpZJpDWk/Screenshot-2026-01-13-at-05-26-17.png",
    color: "from-blue-900 to-blue-700",
  },
  {
    id: 2,
    title: "Service Above Self.",
    subtitle: "Discipline",
    description: "Building leaders of tomorrow through rigorous training and community service.",
    highlight: "Values & Ethics",
    image: "https://i.postimg.cc/dtRNzV8v/Screenshot-2026-01-13-at-04-55-41.png",
    color: "from-red-900 to-red-700",
  },
  {
    id: 3,
    title: "Prashiksham Yojna.",
    subtitle: "Adventure",
    description: "Experience nature and growth through our diverse outdoor and camping programs.",
    highlight: "Outdoor Life",
    image: "https://pbs.twimg.com/media/EDTuZ9DVUAE63Ul.jpg",
    color: "from-emerald-900 to-emerald-700",
  },
  {
    id: 4,
    title: "Practical Learning.",
    subtitle: "Survival Skills",
    description: "Learning by doing in every aspect of life, scouting, and national service.",
    highlight: "Skill Development",
    image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516917/a_sp9mhe.jpg",
    color: "from-orange-900 to-orange-700",
  },
  {
    id: 5,
    title: "Global Federation.",
    subtitle: "Join the Movement",
    description: "Part of the World Federation of Independent Scouts, fostering global citizenship.",
    highlight: "Hindustan Scouts & Guides",
    image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516890/17_vwjp7u.jpg",
    color: "from-indigo-950 to-indigo-800",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[320px] w-full overflow-hidden md:h-[420px] bg-zinc-950">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* IMAGE AREA - Static Alignment */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={slide.image}
              alt={slide.subtitle}
              className="absolute right-0 h-full w-full md:w-[68%] object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/50 md:hidden"></div>
          </div>

          {/* CONTENT BOX - Height-Optimized Chevron Layout */}
          <div 
            className={`absolute inset-0 flex h-full w-full flex-col justify-center bg-gradient-to-br ${slide.color} text-white md:w-[45%] shadow-2xl transition-colors duration-1000`}
            style={{
              clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)",
            }}
          >
            <div className="max-w-md px-8 md:px-14 animate-in fade-in slide-in-from-left-10 duration-1000">
              <p className="text-lg font-light tracking-tight md:text-xl text-white/80">
                {slide.title}
              </p>
              <h2 className="mt-0 text-3xl font-black md:text-4xl lg:text-5xl leading-none tracking-tighter uppercase">
                {slide.subtitle}
              </h2>
              <p className="mt-3 text-xs font-medium opacity-85 md:text-base line-clamp-2 max-w-[95%] leading-relaxed">
                {slide.description}
              </p>
              
              <div className="mt-4">
                <span className="inline-block text-sm font-bold uppercase tracking-[0.25em] text-white/90 border-b-2 border-white/20 pb-1 md:text-base">
                  {slide.highlight}
                </span>
              </div>

              <div className="mt-6">
                <Link
                  href="/about"
                  className="inline-block bg-white px-8 py-2.5 text-[11px] font-black text-zinc-900 uppercase tracking-widest transition-all hover:bg-zinc-100 hover:scale-105 active:scale-95 shadow-xl"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* PAGINATION DOTS - More compact positioning */}
      <div className="absolute bottom-6 left-8 z-20 flex gap-2 md:left-14">
        {slides.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setCurrent(dotIndex)}
            className={`h-2 rounded-full transition-all duration-500 border border-white/20 ${
              current === dotIndex ? "bg-white w-10 shadow-lg" : "bg-white/30 w-2 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* COMPACT RECOGNITION BADGE */}
      <div className="absolute top-4 right-4 z-20 hidden lg:block">
        <div className="bg-black/20 backdrop-blur-md text-white px-3 py-1 text-[9px] font-black uppercase tracking-[0.3em] rounded border border-white/10">
           TS Branch
        </div>
      </div>
    </section>
  );
}