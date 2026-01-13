"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SchoolLogin() {
  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />
      <main className="flex-grow">
        <section className="py-16">
          <div className="mx-auto max-w-md px-6">
            <div className="text-center mb-8">
              <p className="text-xs font-black uppercase tracking-[0.4em] text-emerald-700">Institution Access</p>
              <h1 className="mt-2 text-3xl font-bold text-zinc-900">School Login</h1>
            </div>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900">School ID</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  placeholder="Enter school id"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900">Password</label>
                <input
                  type="password"
                  className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  placeholder="Enter password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-700 text-white px-4 py-3 rounded-lg text-[11px] font-black uppercase tracking-widest hover:bg-emerald-800 transition-colors"
              >
                Sign In
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
