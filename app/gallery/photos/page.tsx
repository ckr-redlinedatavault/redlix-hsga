"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X, ZoomIn, Image as ImageIcon, ArrowRight } from "lucide-react";

export default function GalleryPhotos() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516917/a_sp9mhe.jpg", title: "National Training" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516917/b_og8pcm.jpg", title: "Service Project" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516918/c_bd5giu.jpg", title: "Mountain Hiking" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516918/d_vuur8l.jpg", title: "Campfire Night" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516918/e_bl14v8.jpg", title: "Outdoor Skills" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516921/f_lu58uo.jpg", title: "Morning Assembly" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516922/g_p6d38b.jpg", title: "Drill Practice" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516922/h_aadvu8.jpg", title: "Leadership Talk" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516922/i_mdzjev.jpg", title: "Woodcraft" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516923/j_dm0qc0.jpg", title: "Forest Trail" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516924/k_zf6kqi.jpg", title: "Eco Awareness" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516925/l_fvzm9c.jpg", title: "State Rally" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516925/m_qoqk8g.jpg", title: "Nature Study" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516926/n_wg256c.jpg", title: "High Altitude Camp" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516926/o_efltwm.jpg", title: "Parade Ground" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516927/p_ngiwmz.jpg", title: "Yoga & Wellness" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516928/q_ly7xyj.jpg", title: "Flag Ceremony" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516928/r_dxnvqb.jpg", title: "Group Expedition" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516929/s_wfu3xi.jpg", title: "Compass Work" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516929/s_wfu3xi.jpg", title: "Unity Parade" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516929/t_x9z3hj.jpg", title: "Team Building" },
    { url: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516930/u_vuqxbg.jpg", title: "Field Activities" },
  ];

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />

      <main className="flex-grow">
        {/* 1. HERO BANNER - Split Layout Brand Style */}
        <section className="relative h-[320px] md:h-[380px] w-full overflow-hidden bg-zinc-950 border-b-4 border-amber-500">
          <div className="absolute inset-0 flex flex-col md:flex-row">
            {/* Left Content (Maroon) */}
            <div className="w-full md:w-[45%] bg-[#800000] flex items-center p-8 md:p-16 z-20">
              <div className="max-w-md">
                <p className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  Visual Heritage
                </p>
                <h1 className="text-white text-4xl md:text-6xl font-light uppercase tracking-tighter leading-none mb-6">
                  Photo <br /><span className="font-normal text-white">Gallery.</span>
                </h1>
                <p className="text-white/80 text-sm font-normal leading-relaxed">
                  Reliving the moments of courage, discipline, and service through our national lens.
                </p>
              </div>
            </div>

            {/* Right Image (Artistic Background) */}
            <div className="relative w-full h-full md:w-[55%] bg-zinc-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80"
                alt="Gallery Background"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent md:bg-gradient-to-l"></div>
            </div>
          </div>
        </section>

        {/* 2. GALLERY SECTION */}
        <section className="py-16 md:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 pb-8 border-b border-zinc-100">
              <div className="border-l-2 border-[#800000] pl-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#800000] mb-2">Moments in time</p>
                <h2 className="text-3xl md:text-4xl font-light text-zinc-900 uppercase tracking-tighter leading-none">
                  Captured <span className="text-[#800000] font-normal">Activities</span>
                </h2>
              </div>
              <div className="flex items-center gap-3 text-zinc-400 font-normal text-sm italic">
                <ImageIcon size={18} className="text-amber-500" />
                <span>{galleryImages.length} High-Resolution Archives</span>
              </div>
            </div>

            {/* Masonry Layout */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedImage(image.url)}
                  className="relative group cursor-pointer overflow-hidden border border-zinc-100 bg-zinc-50 break-inside-avoid"
                >
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-full mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <ZoomIn className="text-white w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {image.title}
                    </span>
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
            <h2 className="text-3xl font-light text-zinc-900 uppercase tracking-tighter mb-4">Every Photo Tells a <span className="text-[#800000] font-normal">Story</span></h2>
            <p className="text-zinc-500 font-normal mb-10 max-w-xl mx-auto leading-relaxed">
                Join us in creating more memories. Be a part of the next big camp and see yourself featured in our national archive.
            </p>
            <button className="inline-flex items-center gap-3 bg-[#800000] text-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-900 transition-all group">
                Join the Journey
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </main>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/95 p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white hover:text-amber-500 transition-colors z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} strokeWidth={1} />
          </button>
          
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
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