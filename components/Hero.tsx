"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Welcome to",
    subtitle: "HSGA Telangana",
    description: "Empowering youth through character, service, and leadership in the state of Telangana.",
    highlight: "Excellence Through Growth",
    image: "https://i.postimg.cc/WpZJpDWk/Screenshot-2026-01-13-at-05-26-17.png",
    color: "bg-[#800000]",
  },
  {
    id: 2,
    title: "Service Above Self.",
    subtitle: "Discipline",
    description: "Building leaders of tomorrow through rigorous training and community service.",
    highlight: "Values & Ethics",
    image: "https://i.postimg.cc/dtRNzV8v/Screenshot-2026-01-13-at-04-55-41.png",
    color: "bg-[#600000]",
  },
  {
    id: 3,
    title: "Prashiksham Yojna.",
    subtitle: "Adventure",
    description: "Experience nature and growth through our diverse outdoor and camping programs.",
    highlight: "Outdoor Life",
    image: "https://pbs.twimg.com/media/EDTuZ9DVUAE63Ul.jpg",
    color: "bg-[#4a0000]",
  },
  {
    id: 4,
    title: "Practical Learning.",
    subtitle: "Survival Skills",
    description: "Learning by doing in every aspect of life, scouting, and national service.",
    highlight: "Skill Development",
    image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516917/a_sp9mhe.jpg",
    color: "bg-[#2a0000]",
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
    // Height: 380px for a sharp, modern banner height
    <section className="relative h-[480px] md:h-[380px] w-full overflow-hidden bg-zinc-950 border-b-4 border-amber-500">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex flex-col md:flex-row transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* TEXT SIDE (45%) */}
          <div className={`${slide.color} w-full md:w-[45%] flex items-center p-8 md:p-14 lg:p-20`}>
             <div className="w-full">
              <p className="text-amber-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] mb-3">
                {slide.title}
              </p>
              
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-[1.1] mb-5">
                {slide.subtitle}
              </h2>
              
              {/* Context text: Changed to font-normal (removed boldness) */}
              <p className="text-white/90 text-sm md:text-base font-normal leading-relaxed mb-8 line-clamp-3">
                {slide.description}
              </p>
              
              <div className="flex items-center gap-6">
                <Link
                  href="/about"
                  className="group flex items-center gap-2 bg-white text-[#800000] px-7 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-amber-400 hover:text-black transition-all"
                >
                  Explore More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                
                <div className="hidden lg:block border-l border-white/20 pl-4">
                   <span className="text-amber-400 text-[11px] font-bold uppercase tracking-tight">{slide.highlight}</span>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE SIDE (55%) - Removed zoom/scale effects */}
          <div className="relative w-full h-full md:w-[55%] overflow-hidden bg-zinc-900">
            <img
              src={slide.image}
              alt={slide.subtitle}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>
      ))}

      {/* REFINED NAVIGATION INDICATORS */}
      <div className="absolute bottom-8 left-8 md:left-[45%] md:-translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setCurrent(dotIndex)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              current === dotIndex ? "w-10 bg-amber-400" : "w-4 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* HQ TAG */}
      <div className="absolute top-6 right-6 z-20">
        <div className="bg-black/40 backdrop-blur-md text-white border border-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest">
           TS Headquarters
        </div>
      </div>
    </section>
  );
}