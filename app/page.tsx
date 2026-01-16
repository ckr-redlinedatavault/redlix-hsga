"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import History from "@/components/History";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FloatingTag from "@/components/FloatingTag";
import { 
  ShieldCheck, Globe, Award, 
  ChevronLeft, ChevronRight, Quote, 
  ArrowRight, Calendar, Bell, Sparkles 
} from "lucide-react";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Scouting taught me discipline, courage, and how to serve with pride. Every activity has shaped who I am today.",
      role: "Scout Participant",
      location: "Telangana Student",
    },
    {
      quote: "My child has grown more confident and responsible. HSGA gives them a safe space to learn leadership beyond the classroom.",
      role: "Parent",
      location: "Hyderabad District",
    },
    {
      quote: "The association's outreach has strengthened youth engagement and inspired many in our community to volunteer.",
      role: "Community Leader",
      location: "Civic Representative",
    }
  ];

  const nextSlide = () => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar />
      
      <main style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}>
        <Hero />

        {/* SECTION 1: IMPACT & STATS */}
        <section className="bg-white border-b border-zinc-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="pt-16 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#800000] mb-3">Our Impact</p>
                <h2 className="text-4xl md:text-5xl font-light text-zinc-900 uppercase tracking-tighter leading-none">
                  Scouting across <br />
                  <span className="font-normal text-[#800000]">Telangana.</span>
                </h2>
              </div>
              <p className="max-w-md text-base text-zinc-500 leading-relaxed font-light border-l border-zinc-100 pl-6">
                A growing movement of young people and trainers working together to build character and serve the community.
              </p>
            </div>

            <div className="bg-[#800000] shadow-2xl overflow-hidden">
              <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
                {[
                  { label: "Active Scouts", value: "15K+" },
                  { label: "Districts", value: "33" },
                  { label: "Certified Trainers", value: "450+" },
                  { label: "Service Hours", value: "100K" },
                ].map((stat, idx) => (
                  <div key={idx} className="px-8 py-14 md:py-20 flex flex-col items-center lg:items-start group hover:bg-black/10 transition-colors">
                    <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.25em] mb-2">{stat.label}</p>
                    <span className="text-5xl md:text-6xl font-light text-white tracking-tighter leading-none">{stat.value}</span>
                    <div className="mt-4 w-6 h-[1px] bg-amber-500 group-hover:w-full transition-all duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <History />
        <About />

        {/* SECTION 2: TESTIMONIALS */}
        <section className="py-12 md:py-16 bg-white border-b border-zinc-100 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#800000] mb-3">Community Voices</p>
                <h2 className="text-3xl md:text-4xl font-light text-zinc-900 uppercase tracking-tighter leading-tight">
                  Success <span className="font-normal text-[#800000]">Stories.</span>
                </h2>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-full border border-zinc-300 bg-white text-zinc-700 hover:bg-[#800000] hover:text-white transition-all shadow-sm"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-full border border-zinc-300 bg-white text-zinc-700 hover:bg-[#800000] hover:text-white transition-all shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((item, idx) => (
                  <div key={idx} className="w-full flex-shrink-0">
                    <div className="bg-[#800000] p-8 md:p-14 lg:p-16 relative group">
                      <Quote className="absolute -right-16 -top-16 w-80 h-80 text-white/5 rotate-12" />
                      <div className="relative z-10 max-w-4xl">
                        <Quote className="w-8 h-8 text-amber-500 fill-current mb-6" />
                        <p className="text-xl md:text-3xl lg:text-4xl font-light text-white italic leading-snug mb-8">
                          {item.quote}
                        </p>
                        <div className="flex items-center gap-6">
                          <div className="h-[2px] w-12 bg-amber-500" />
                          <div>
                            <h4 className="text-lg font-black uppercase text-white leading-none">{item.role}</h4>
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-500 mt-2">{item.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: TRUST & NEWS (NEW BEST LOOK) */}
        <section className="py-20 md:py-28 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Trust Side (7 cols) */}
            <div className="lg:col-span-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#800000] mb-4">Recognition</p>
              <h2 className="text-4xl md:text-5xl font-light text-zinc-900 uppercase tracking-tighter leading-none mb-12">
                Institutional <br/><span className="font-normal text-[#800000]">Excellence.</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 shadow-xl">
                {[
                  { icon: ShieldCheck, title: "Govt. Recognized", desc: "Under Ministry of Youth Affairs & Sports." },
                  { icon: Globe, title: "WFIS Germany", desc: "Affiliated to World Federation of Independent Scouts." },
                  { icon: Award, title: "State Heritage", desc: "Decades of Scouting tradition across Telangana." },
                  { icon: Sparkles, title: "Skill India", desc: "Aligned with national youth development goals." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 flex flex-col gap-4 group hover:bg-zinc-50 transition-colors">
                    <item.icon className="w-6 h-6 text-[#800000]" />
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-zinc-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-zinc-500 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* News Side (5 cols) */}
            <div className="lg:col-span-5 flex flex-col">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#800000] mb-4">Bulletins</p>
              <h2 className="text-4xl font-light text-zinc-900 uppercase tracking-tighter leading-none mb-12">Updates.</h2>
              
              <div className="space-y-0 divide-y divide-zinc-200">
                {[
                  { tag: "Events", text: "State-level rally and community service day scheduled.", date: "Jan 2026" },
                  { tag: "Training", text: "Prashiksham Yojna batch registration now open.", date: "Feb 2026" },
                  { tag: "Opportunity", text: "Volunteer call for district-level coordinators.", date: "Ongoing" }
                ].map((news, i) => (
                  <div key={i} className="py-6 group cursor-pointer">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[9px] font-black uppercase bg-stone-200 px-2 py-0.5 rounded-sm">{news.tag}</span>
                      <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{news.date}</span>
                    </div>
                    <p className="text-base font-normal text-zinc-800 group-hover:text-[#800000] transition-colors">{news.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/insights/news" className="flex-1 text-center bg-[#800000] text-white py-4 text-[11px] font-black uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-lg shadow-maroon-900/20">
                  Full Impact News
                </Link>
                <Link href="/contact" className="flex-1 text-center border border-zinc-300 text-zinc-900 py-4 text-[11px] font-black uppercase tracking-widest hover:border-[#800000] transition-all">
                  Contact HQ
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
      <FloatingTag />
    </div>
  );
}
