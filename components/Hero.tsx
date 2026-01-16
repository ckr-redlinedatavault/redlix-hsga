"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, PlayCircle, UserPlus } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Building Tomorrow's Leaders",
    subtitle: "HSGA TELANGANA",
    description: "Empowering youth through character, service, and leadership. Join the movement of excellence in the state of Telangana.",
    highlight: "State Headquarters",
    image: "https://i.postimg.cc/WpZJpDWk/Screenshot-2026-01-13-at-05-26-17.png",
    color: "bg-[#450a0a]", // Deep Maroon
  },
  {
    id: 2,
    title: "Service Above Self",
    subtitle: "DISCIPLINE & HONOR",
    description: "Building leaders through rigorous training and community service. We instill values that last a lifetime.",
    highlight: "Values & Ethics",
    image: "https://i.postimg.cc/dtRNzV8v/Screenshot-2026-01-13-at-04-55-41.png",
    color: "bg-[#1a1a1a]", // High Contrast Black
  },
  {
    id: 3,
    title: "Adventure & Growth",
    subtitle: "PRASHIKSHAM YOJNA",
    description: "Experience nature and personal growth through our diverse outdoor survival and camping programs.",
    highlight: "Outdoor Life",
    image: "https://pbs.twimg.com/media/EDTuZ9DVUAE63Ul.jpg",
    color: "bg-[#450a0a]",
  },
  {
    id: 4,
    title: "Practical Learning",
    subtitle: "SKILLS FOR LIFE",
    description: "Learning by doing. We provide the tools for youth to become self-reliant and useful citizens of the nation.",
    highlight: "Skill Development",
    image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516917/a_sp9mhe.jpg",
    color: "bg-[#1a1a1a]",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[550px] md:h-[450px] w-full overflow-hidden bg-black border-b-8 border-amber-500">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex flex-col md:flex-row transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          {/* TEXT SIDE (45%) */}
          <div className={`${slide.color} w-full md:w-[45%] flex items-center p-8 md:p-12 lg:p-16 transition-colors duration-1000`}>
            <div className="w-full space-y-6">
              {/* Spacing Unit: 8px (space-y-2 = 8px) */}
              <div className="space-y-2">
                <p className="text-amber-400 text-xs md:text-sm font-bold uppercase tracking-[0.3em]">
                  {slide.title}
                </p>
                <h2 className="text-white text-4xl md:text-5xl font-black uppercase leading-none tracking-tighter">
                  {slide.subtitle}
                </h2>
              </div>

              <p className="text-zinc-300 text-sm md:text-base font-normal leading-relaxed max-w-md">
                {slide.description}
              </p>

              {/* CTA GROUP - 3 Specific Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/register"
                  className="flex items-center gap-2 bg-amber-500 text-black px-6 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all active:scale-95"
                >
                  <UserPlus className="w-4 h-4" />
                  Start Your Journey
                </Link>

                <Link
                  href="/profile/about"
                  className="flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all active:scale-95"
                >
                  See Our Impact
                </Link>

                <button
                  className="flex items-center gap-2 text-white/60 hover:text-amber-400 transition-colors text-[10px] font-bold uppercase tracking-widest md:ml-2"
                >
                  <PlayCircle className="w-5 h-5" />
                  Watch Video
                </button>
              </div>
            </div>
          </div>

          {/* IMAGE SIDE (55%) - No Animation as requested */}
          <div className="relative w-full h-full md:w-[55%] overflow-hidden bg-zinc-900">
            {/* Subtle overlay to blend image with text block */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10 hidden md:block" />
            <img
              src={slide.image}
              alt={slide.subtitle}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </div>
      ))}

      {/* PROGRESS INDICATORS */}
      <div className="absolute bottom-10 left-8 md:left-[45%] md:-translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setCurrent(dotIndex)}
            className={`transition-all duration-300 h-1 rounded-full ${current === dotIndex ? "w-12 bg-amber-500" : "w-6 bg-white/20"
              }`}
          />
        ))}
      </div>

      {/* FLOATING HQ TAG */}
      <div className="absolute top-8 right-8 z-20 hidden md:block">
        <div className="bg-black/50 backdrop-blur-md border border-white/10 px-5 py-2">
          <p className="text-[10px] text-amber-400 font-bold uppercase tracking-[0.2em]">Official</p>
          <p className="text-white text-xs font-black uppercase">TS State HQ</p>
        </div>
      </div>
    </section>
  );
}