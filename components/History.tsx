"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function History() {
  return (
    <section
      id="history"
      className="w-full bg-white py-10 md:py-14 border-b border-zinc-100"
      style={{ scrollMarginTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Grid with tighter gaps to save height */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 relative">

          {/* Subtle Vertical Divider for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-zinc-100 -translate-x-1/2"></div>

          {/* Column 1: Heritage */}
          <div className="flex flex-col items-start text-left group">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-6 bg-amber-500"></div>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#800000]">Legacy</span>
            </div>

            <h2 className="text-3xl font-light tracking-tight text-[#800000] md:text-4xl lg:text-5xl uppercase">
              Heritage
            </h2>

            {/* Reduced space-y from 4 to 2 */}
            <div className="mt-3 space-y-2">
              <p className="text-[14px] leading-relaxed text-zinc-600 font-normal">
                At the heart of the Hindustan Scouts and Guides Association is a
                globally-focused, cohesive, and thematic legacy of service.
                This enables our members to explore the world as both
                autonomous and collaborative leaders.
              </p>
              <p className="text-[14px] leading-relaxed text-zinc-600 font-medium">
                We emphasize a comprehensive experience grounded in values,
                attitudes, and national service.
              </p>
            </div>

            {/* Reduced margin-top to mt-5 */}
            <div className="mt-5 w-full sm:w-64">
              <Link
                href="/profile/history"
                className="group flex items-center justify-center gap-3 w-full bg-[#800000] py-3 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-zinc-900 shadow-sm"
              >
                Our Heritage Journey
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Column 2: Evolution */}
          <div className="flex flex-col items-start text-left group">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-6 bg-amber-500"></div>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#800000]">Vision</span>
            </div>

            <h2 className="text-3xl font-light tracking-tight text-[#800000] md:text-4xl lg:text-5xl uppercase">
              Evolution
            </h2>

            {/* Reduced space-y from 4 to 2 */}
            <div className="mt-3 space-y-2">
              <p className="text-[14px] leading-relaxed text-zinc-600 font-normal">
                While history outlines our past, evolution delves into the
                methods and approaches of modern scouting. It is the nexus
                between traditional values and 21st-century life skills,
                shaped by our commitment to youth empowerment.
              </p>
              <p className="text-[14px] leading-relaxed text-zinc-600 font-medium">
                Our distinctive approach ensures every scout is prepared for
                the challenges of a modern global landscape.
              </p>
            </div>

            {/* Reduced margin-top to mt-5 */}
            <div className="mt-5 w-full sm:w-64">
              <Link
                href="/profile/aims"
                className="group flex items-center justify-center gap-3 w-full bg-zinc-900 py-3 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#800000] shadow-sm"
              >
                Explore Our Growth
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}