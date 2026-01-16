"use client";
import { useState } from "react";
import Link from "next/link";
import { LayoutDashboard, Users, School, LogOut, Menu, X, BookOpen, ShieldCheck } from "lucide-react";

export default function SchoolDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const stats = [
    { label: "Active Units", value: "3", icon: <Users size={20} />, color: "bg-emerald-700" },
    { label: "Registered Scouts", value: "96", icon: <School size={20} />, color: "bg-emerald-900" },
    { label: "Upcoming Events", value: "4", icon: <LayoutDashboard size={20} />, color: "bg-zinc-900" },
    { label: "Compliance", value: "On Track", icon: <ShieldCheck size={20} />, color: "bg-emerald-600" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex font-normal text-zinc-900">
      <aside className={`${isSidebarOpen ? "w-64" : "w-20"} bg-zinc-950 text-white transition-all duration-300 flex flex-col fixed h-full z-50`}>
        <div className="p-6 border-b border-zinc-900 flex items-center justify-between">
          <div className={`flex items-center gap-3 ${!isSidebarOpen && "hidden"}`}>
            <div className="w-8 h-8 bg-emerald-700 flex items-center justify-center font-black rounded-sm text-xs">SC</div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-200">
              HSGA <span className="text-emerald-300">School</span>
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="text-zinc-500 hover:text-white transition-colors"
          >
            {isSidebarOpen ? <X size={18} /> : <Menu size={18} className="mx-auto" />}
          </button>
        </div>

        <nav className="flex-grow p-4 space-y-1">
          {[
            { label: "Dashboard", icon: <LayoutDashboard size={18} />, active: true },
            { label: "Units", icon: <Users size={18} /> },
            { label: "Programme", icon: <BookOpen size={18} /> },
          ].map((item, i) => (
            <Link
              key={i}
              href="#"
              className={`flex items-center gap-4 px-4 py-3 rounded-md transition-all ${
                item.active
                  ? "bg-emerald-700 text-white shadow-lg"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-50"
              }`}
            >
              {item.icon}
              <span
                className={`text-[10px] font-bold uppercase tracking-widest ${
                  !isSidebarOpen && "hidden"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-zinc-900">
          <Link
            href="/school"
            className="flex items-center gap-4 px-4 py-3 text-zinc-500 hover:text-red-500 transition-all group"
          >
            <LogOut size={18} />
            <span
              className={`text-[10px] font-bold uppercase tracking-widest ${
                !isSidebarOpen && "hidden"
              }`}
            >
              Exit Portal
            </span>
          </Link>
        </div>
      </aside>

      <main
        className={`flex-grow transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        <header className="h-20 bg-white border-b border-zinc-200 flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <School size={20} className="text-emerald-700" />
            <h1 className="text-xl font-light text-zinc-900 uppercase tracking-tighter">
              School <span className="font-normal text-emerald-700">Workspace</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-[11px] font-bold text-zinc-900 uppercase">Institution</p>
              <p className="text-[9px] text-emerald-600 font-bold uppercase tracking-widest">
                Demo Environment
              </p>
            </div>
            <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-black text-xs shadow-sm">
              SCH
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white p-6 border border-zinc-200 rounded-sm shadow-sm relative overflow-hidden group hover:border-emerald-700 transition-all"
              >
                <div
                  className={`absolute -right-2 -top-2 p-6 ${stat.color} text-white opacity-5 rounded-full`}
                >
                  {stat.icon}
                </div>
                <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-1">
                  {stat.label}
                </p>
                <p className="text-2xl font-light text-zinc-900">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-zinc-200 rounded-sm shadow-sm overflow-hidden flex flex-col">
              <div className="p-5 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
                <div>
                  <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">
                    Unit Directory
                  </h3>
                  <p className="text-[9px] text-zinc-400 uppercase font-bold mt-0.5">
                    Registered Scouts Units
                  </p>
                </div>
                <Users size={16} className="text-emerald-700 opacity-40" />
              </div>
              <div className="p-6 space-y-3">
                {[
                  { name: "Cub Pack A", meta: "32 Members • Junior Section" },
                  { name: "Scout Troop B", meta: "34 Members • Scout Section" },
                  { name: "Rover Crew C", meta: "30 Members • Senior Section" },
                ].map((unit) => (
                  <div
                    key={unit.name}
                    className="flex items-center justify-between p-3 bg-zinc-50/50 border border-zinc-100 rounded-md group hover:bg-white transition-all"
                  >
                    <div>
                      <p className="text-xs font-bold text-zinc-800 uppercase leading-none mb-1">
                        {unit.name}
                      </p>
                      <p className="text-[9px] text-zinc-400 uppercase font-bold tracking-[0.15em]">
                        {unit.meta}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-zinc-200 rounded-sm shadow-sm">
                <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-zinc-400">
                      Programme References
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-zinc-900">
                      Quick Access Links
                    </h3>
                  </div>
                </div>
                <div className="px-6 py-5 grid grid-cols-1 gap-3 text-[11px] font-bold uppercase tracking-[0.25em]">
                  <a
                    href="/gallery/photos"
                    className="w-full text-center px-4 py-3 rounded-sm border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-emerald-700 text-zinc-800 transition-colors"
                  >
                    Photo Gallery
                  </a>
                  <a
                    href="/gallery/videos"
                    className="w-full text-center px-4 py-3 rounded-sm border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-emerald-700 text-zinc-800 transition-colors"
                  >
                    Video Gallery
                  </a>
                  <a
                    href="/yojna"
                    className="w-full text-center px-4 py-3 rounded-sm border border-zinc-200 bg-zinc-50 hover:bg-white hover:border-emerald-700 text-zinc-800 transition-colors"
                  >
                    Training Scheme
                  </a>
                </div>
              </div>

              <div className="bg-zinc-950 text-white border border-zinc-900 rounded-sm px-6 py-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-400 mb-2">
                  Coordination
                </p>
                <p className="text-xs text-zinc-200 leading-relaxed">
                  For updates to institutional details, roster corrections, or programme schedules, kindly
                  coordinate with the District Organising Commissioner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
