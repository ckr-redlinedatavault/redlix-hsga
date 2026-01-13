import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GalleryVideos() {
  const videos = [
    { title: "National Rally Highlights", embed: "https://www.youtube.com/embed/qrcEVg2Jtpw?si=S4hlO2-4p8LoIgfx" },
    
  ];

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />
      <main className="flex-grow">
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
            <div className="max-w-md">
              <p className="text-xs font-black uppercase tracking-[0.3em]">Media Archive</p>
              <h1 className="text-4xl font-black md:text-5xl uppercase tracking-tighter leading-[0.9]">
                Video <br /> Gallery
              </h1>
              <p className="mt-6 text-sm md:text-base font-bold text-zinc-900/80 leading-relaxed max-w-[90%]">
                Highlights and recaps from programs, rallies, and training events.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-100 pb-8">
              <div className="max-w-xl">
                <p className="text-xs font-black uppercase tracking-[0.4em] text-amber-600">Featured Clips</p>
                <h2 className="text-3xl font-bold text-zinc-900">Curated Selections</h2>
              </div>
              <div className="text-sm font-bold text-zinc-600 bg-amber-50 px-5 py-3 rounded-2xl border border-amber-100">
                {videos.length} Videos
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((vid, i) => (
                <div key={i} className="rounded-3xl overflow-hidden border border-zinc-100 shadow-sm bg-white">
                  <div className="aspect-video w-full bg-black">
                    <iframe
                      src={vid.embed}
                      title={vid.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-xs font-black uppercase tracking-widest text-zinc-700">{vid.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-amber-500 text-zinc-900 overflow-hidden relative">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Share Your Story</h2>
            <p className="text-zinc-900/80 font-bold mb-10 max-w-2xl mx-auto leading-relaxed">
              Be part of the next highlight reel. Join upcoming camps and activities across the state.
            </p>
            <button className="bg-zinc-900 text-amber-500 px-12 py-5 text-xs font-black uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all shadow-xl">
              Get Involved
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
