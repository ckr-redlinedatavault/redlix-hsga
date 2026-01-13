"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function AdminLogin() {
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
              <p className="text-xs font-black uppercase tracking-[0.4em] text-blue-700">Admin Portal</p>
              <h1 className="mt-2 text-3xl font-bold text-zinc-900">Admin Login</h1>
            </div>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="admin@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-900">Password</label>
                <input
                  type="password"
                  className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-700"
                  placeholder="Enter password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white px-4 py-3 rounded-lg text-[11px] font-black uppercase tracking-widest hover:bg-blue-800 transition-colors"
              >
                Sign In
              </button>
              <div className="text-center">
                <Link href="#" className="text-xs font-bold text-blue-700 hover:underline">
                  Forgot password
                </Link>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
