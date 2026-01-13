"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GalleryPhotos() {
  // Array of 22 images with varying heights for a professional masonry look
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
        {/* 1. FULL WIDTH HERO BANNER - YELLOW/AMBER THEME */}
        <section className="relative h-[320px] w-full overflow-hidden bg-zinc-950">
          <div className="absolute inset-0 h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=1200"
              alt="Gallery Background"
              className="absolute right-0 h-full w-full md:w-[70%] object-cover opacity-60"
            />
          </div>

          <div
            className="absolute inset-0 flex h-full w-full flex-col justify-center bg-amber-500 text-zinc-900 md:w-[50%] px-8 md:px-16 lg:px-24 shadow-2xl"
            style={{ clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)" }}
          >
            <div className="max-w-md animate-in fade-in slide-in-from-left-10 duration-1000">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-zinc-900/70 mb-4">
                Visual Heritage
              </p>
              <h1 className="text-4xl font-black md:text-5xl uppercase tracking-tighter leading-[0.9]">
                Photo <br /> Gallery
              </h1>
              <p className="mt-6 text-sm md:text-base font-bold text-zinc-900/80 leading-relaxed max-w-[90%]">
                Reliving the moments of courage, discipline, and service through our lens.
              </p>
            </div>
          </div>
        </section>

        {/* 2. MASONRY GALLERY GRID */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-100 pb-8">
                <div className="max-w-xl">
                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-amber-600 mb-2">Moments in Time</h2>
                    <h3 className="text-3xl font-bold text-zinc-900">Captured Activities</h3>
                </div>
                <div className="text-sm font-bold text-zinc-600 bg-amber-50 px-5 py-3 rounded-2xl border border-amber-100">
                    {galleryImages.length} High Quality Captures
                </div>
            </div>

            {/* Masonry Layout: columns ensure images fit based on their own height */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="relative group overflow-hidden rounded-3xl bg-zinc-100 break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500 border border-zinc-100"
                >
                  <img 
                    src={image.url} 
                    alt={image.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Amber Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-600/90 via-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="bg-zinc-900/90 backdrop-blur-sm p-4 rounded-2xl flex items-center justify-between w-full shadow-xl">
                            <span className="text-xs font-black text-amber-400 uppercase tracking-widest">{image.title}</span>
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. CTA SECTION */}
        <section className="py-20 bg-amber-500 text-zinc-900 overflow-hidden relative">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Every Photo Tells a Story</h2>
            <p className="text-zinc-900/80 font-bold mb-10 max-w-2xl mx-auto leading-relaxed">
                Join us in creating more memories. Be a part of the next big camp and see yourself featured in our national archive.
            </p>
            <button className="bg-zinc-900 text-amber-500 px-12 py-5 text-xs font-black uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all shadow-xl">
                Join the Journey
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
