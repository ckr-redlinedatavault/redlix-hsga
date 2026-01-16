"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Play, Clapperboard, ArrowRight, MonitorPlay } from "lucide-react";

export default function GalleryVideos() {
  const videos = [
    { title: "National Rally Highlights", embed: "https://www.youtube.com/embed/S_T04Xf02XU" }, // Sample link, replace with actual
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
        {/* 1. HERO BANNER - Brand Split Style */}
        <section className="relative h-[320px] md:h-[380px] w-full overflow-hidden bg-zinc-950 border-b-4 border-amber-500">
          <div className="absolute inset-0 flex flex-col md:flex-row">
            {/* Left Content (Maroon) */}
            <div className="w-full md:w-[45%] bg-[#800000] flex items-center p-8 md:p-16 z-20">
              <div className="max-w-md">
                <div className="flex items-center gap-2 mb-4">
                  <MonitorPlay size={18} className="text-amber-400" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-500">
                    Media Archive
                  </span>
                </div>
                <h1 className="text-white text-4xl md:text-6xl font-light uppercase tracking-tighter leading-none mb-6">
                  Video <br /><span className="font-normal text-white">Gallery.</span>
                </h1>
                <p className="text-white/80 text-sm font-normal leading-relaxed">
                  Reliving the moments of courage, discipline, and service through our national media archives.
                </p>
              </div>
            </div>

            {/* Right Image (Visual Heritage Background) */}
            <div className="relative w-full h-full md:w-[55%] bg-zinc-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80"
                alt="Video Gallery Background"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent md:bg-gradient-to-l"></div>
            </div>
          </div>
        </section>

        {/* 2. VIDEO GRID SECTION */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-zinc-100">
              <div className="border-l-2 border-[#800000] pl-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#800000] mb-2">Cinematic Recaps</p>
                <h2 className="text-3xl md:text-4xl font-light text-zinc-900 uppercase tracking-tighter leading-none">
                  Multimedia <span className="text-[#800000] font-normal">Archives</span>
                </h2>
              </div>
              <div className="flex items-center gap-3 text-zinc-400 font-normal text-sm italic">
                <Clapperboard size={18} className="text-amber-500" />
                <span>{videos.length} Featured Recaps</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((vid, i) => (
                <div key={i} className="group relative flex flex-col bg-white border border-zinc-100 transition-all duration-300 hover:shadow-2xl">
                  {/* Top Detail Line */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-zinc-100 group-hover:bg-[#800000] transition-colors"></div>
                  
                  {/* Video Embed Container */}
                  <div className="aspect-video w-full bg-zinc-900 overflow-hidden relative">
                    <iframe
                      src={vid.embed}
                      title={vid.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    {/* Play Overlay (Visual Only) */}
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-full">
                           <Play className="text-white fill-white w-6 h-6" />
                        </div>
                    </div>
                  </div>

                  {/* Title Area */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-1">
                       <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                       <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#800000]">Recap</p>
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-tight group-hover:text-[#800000] transition-colors">
                        {vid.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. CTA FOOTER */}
        <section className="py-20 bg-zinc-50 border-t border-zinc-100">
          <div className="mx-auto max-w-4xl px-6 text-center">
             <div className="h-px w-16 bg-amber-500 mx-auto mb-8"></div>
            <h2 className="text-3xl font-light text-zinc-900 uppercase tracking-tighter mb-4">Be Part of the <span className="text-[#800000] font-normal">Action</span></h2>
            <p className="text-zinc-500 font-normal mb-10 max-w-xl mx-auto leading-relaxed text-sm">
                Join our upcoming camps and rallies across the state and be featured in the next National highlight reel.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#800000] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-900 transition-all group shadow-xl shadow-maroon-900/10">
                Join the Movement
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
