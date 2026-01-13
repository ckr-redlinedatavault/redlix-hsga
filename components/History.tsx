import Link from "next/link";

export default function History() {
  return (
    <section
      id="history"
      className="w-full bg-white py-12 md:py-16"
      style={{ scrollMarginTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Grid with optimized gap */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          
          {/* Column 1: Heritage */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-3xl font-light tracking-tight text-blue-700 md:text-4xl lg:text-5xl">
              Heritage
            </h2>
            <div className="mt-4 space-y-3">
              <p className="text-[14px] leading-relaxed text-zinc-600">
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
            {/* Compact Button Aligned Left */}
            <div className="mt-6 w-full sm:w-72">
              <Link
                href="/heritage"
                className="block w-full bg-blue-700 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-blue-800"
              >
                Our Heritage Journey
              </Link>
            </div>
          </div>

          {/* Column 2: Evolution */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-3xl font-light tracking-tight text-blue-700 md:text-4xl lg:text-5xl">
              Evolution
            </h2>
            <div className="mt-4 space-y-3">
              <p className="text-[14px] leading-relaxed text-zinc-600">
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
            {/* Compact Button Aligned Left */}
            <div className="mt-6 w-full sm:w-72">
              <Link
                href="/evolution"
                className="block w-full bg-blue-700 py-3.5 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-blue-800"
              >
                Explore Our Growth
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
