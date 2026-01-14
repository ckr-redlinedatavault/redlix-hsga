"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SchoolDashboard() {
  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />
      <main className="flex-grow">
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-emerald-700">School</p>
              <h1 className="mt-2 text-3xl font-bold text-zinc-900">Dashboard</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-xl border border-zinc-200 p-6">
                <p className="text-xs font-black uppercase tracking-widest text-zinc-500">Roster</p>
                <h3 className="mt-2 text-xl font-bold text-zinc-900">Units</h3>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  <li>Cub Pack A</li>
                  <li>Scout Troop B</li>
                  <li>Rover Crew C</li>
                </ul>
              </div>
              <div className="rounded-xl border border-zinc-200 p-6">
                <p className="text-xs font-black uppercase tracking-widest text-zinc-500">Actions</p>
                <h3 className="mt-2 text-xl font-bold text-zinc-900">Quick Links</h3>
                <div className="mt-4 flex flex-wrap gap-3 text-[11px] font-black uppercase tracking-widest">
                  <a href="/gallery/photos" className="px-4 py-2 rounded-lg border border-zinc-200 hover:border-emerald-700">Photos</a>
                  <a href="/gallery/videos" className="px-4 py-2 rounded-lg border border-zinc-200 hover:border-emerald-700">Videos</a>
                  <a href="/yojna" className="px-4 py-2 rounded-lg border border-zinc-200 hover:border-emerald-700">Yojna</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
