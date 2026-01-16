"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Newspaper, Calendar, X, ZoomIn, Share2, ArrowRight } from "lucide-react";

export default function News() {
  const [selectedClipping, setSelectedClipping] = useState<string | null>(null);

  // Representative News Clippings from the Raj News coverage
  const clippings = [
    {
      title: "Raj News: Official State Launch at Osmania University",
      date: "Jan 12, 2026",
      category: "Media Coverage",
      image: "https://i.postimg.cc/WpZJpDWk/Screenshot-2026-01-13-at-05-26-17.png", // Replace with your actual clipping images
      aspect: "aspect-video"
    },
    {
      title: "Chief Commissioner Addanki Dayakar Appointed",
      date: "Jan 10, 2026",
      category: "Leadership",
      image: "https://i.postimg.cc/dtRNzV8v/Screenshot-2026-01-13-at-04-55-41.png",
      aspect: "aspect-square"
    },
    {
      title: "Empowering Telangana Youth through Discipline",
      date: "Jan 05, 2026",
      category: "Press Release",
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516917/a_sp9mhe.jpg",
      aspect: "aspect-[3/4]"
    },
    {
      title: "State-wide Expansion Program for 2026",
      date: "Jan 01, 2026",
      category: "Announcement",
      image: "https://pbs.twimg.com/media/EDTuZ9DVUAE63Ul.jpg",
      aspect: "aspect-video"
    }
  ];

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />

      <main className="flex-grow" id="main-content">
        <Breadcrumbs />
        <section className="relative h-[320px] md:h-[380px] w-full overflow-hidden bg-zinc-950 border-b-4 border-amber-500">
          <div className="absolute inset-0 flex flex-col md:flex-row">
            <div className="w-full md:w-[45%] bg-[#800000] flex items-center p-8 md:p-16 z-20">
              <div className="max-w-md">
                <p className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  Press & Media
                </p>
                <h1 className="text-white text-4xl md:text-6xl font-light uppercase tracking-tighter leading-none mb-6">
                  Latest <br /><span className="font-normal text-white">Updates.</span>
                </h1>
                <p className="text-white/80 text-sm font-normal leading-relaxed">
                  Broadcasts, clippings, and official announcements from the Hindustan Scouts and Guides Association Telangana.
                </p>
              </div>
            </div>
            <div className="relative w-full h-full md:w-[55%] bg-zinc-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80"
                alt="HSGA News"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent md:bg-gradient-to-l"></div>
            </div>
          </div>
        </section>

        {/* 2. PRESS CLIPPINGS SECTION */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-zinc-100">
              <div className="border-l-2 border-[#800000] pl-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#800000] mb-2">The Press Board</p>
                <h2 className="text-3xl md:text-4xl font-light text-zinc-900 uppercase tracking-tighter leading-none">
                  News <span className="text-[#800000] font-normal">Clippings</span>
                </h2>
              </div>
              <div className="flex items-center gap-3 text-zinc-400 font-normal text-sm italic">
                <Newspaper size={18} className="text-amber-500" />
                <span>Click to enlarge and read</span>
              </div>
            </div>

            {/* MASONRY GRID - Respects image sizes */}
            <div className="columns-1 md:columns-2 gap-8 space-y-8">
              {clippings.map((news, i) => (
                <div 
                  key={i} 
                  className="group relative break-inside-avoid bg-zinc-50 border border-zinc-100 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl"
                  onClick={() => setSelectedClipping(news.image)}
                >
                  {/* Top Detail Line */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-zinc-200 group-hover:bg-[#800000] transition-colors z-10"></div>
                  
                  {/* The Image (Clipping) */}
                  <div className={`relative ${news.aspect} overflow-hidden`}>
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    />
                    {/* Zoom Icon Overlay */}
                    <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
                            <ZoomIn className="text-white" size={24} />
                        </div>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600">{news.category}</span>
                        <div className="flex items-center gap-2 text-[10px] text-zinc-400 font-normal">
                          <Calendar size={12} />
                          {news.date}
                        </div>
                    </div>
                    <h4 className="text-lg font-bold text-zinc-900 uppercase tracking-tight group-hover:text-[#800000] transition-colors leading-tight">
                        {news.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. MEDIA RELATIONS FOOTER */}
        <section className="py-20 bg-zinc-50 border-t border-zinc-100">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="h-px w-16 bg-amber-500 mx-auto mb-8"></div>
            <h2 className="text-3xl font-light text-zinc-900 uppercase tracking-tighter mb-4">Official <span className="text-[#800000] font-normal">Statements</span></h2>
            <p className="text-zinc-500 font-normal mb-10 max-w-xl mx-auto leading-relaxed text-sm">
                For official press releases or media interview requests with the State Chief Commissioner, please contact our PR office.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#800000] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-900 transition-all group">
                Contact PR Office
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </main>

      {/* LIGHTBOX MODAL */}
      {selectedClipping && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedClipping(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white hover:text-amber-500 transition-colors z-[110]"
            onClick={() => setSelectedClipping(null)}
          >
            <X size={40} strokeWidth={1} />
          </button>
          
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={selectedClipping} 
              alt="Enlarged clipping" 
              className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-500"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
