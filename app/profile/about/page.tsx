"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { History, ShieldCheck, Flag } from "lucide-react";

export default function AboutHSGA() {
  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />

      <main className="flex-grow">
        {/* 1. HERO BANNER - Reduced heading size to "normal" professional levels */}
        <section className="relative h-[280px] w-full overflow-hidden bg-zinc-950">
          <div className="absolute inset-0 h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
              alt="Scouting Heritage"
              className="absolute right-0 h-full w-full md:w-[68%] object-cover grayscale opacity-40"
            />
          </div>

          <div
            className="absolute inset-0 flex h-full w-full flex-col justify-center bg-blue-900 text-white md:w-[50%]"
            style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)" }}
          >
            <div className="max-w-md px-8 md:px-12">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-200">Our Foundation</p>
              <h1 className="mt-2 text-2xl font-bold md:text-3xl uppercase tracking-tight">
                Legacy of Scouting
              </h1>
              <p className="mt-2 text-sm opacity-90 leading-snug">
                Exploring the spiritual soul and historical origins of the movement in India.
              </p>
            </div>
          </div>
        </section>

        {/* 2. PHILOSOPHY & WHAT IS SCOUTING - Combined into a clean, text-focused flow */}
        <section className="py-12 border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">Philosophy</h2>
              <h3 className="text-xl font-bold text-zinc-900 mb-6">Uplifting the Human Soul</h3>
              
              <div className="border-l-2 border-blue-700 pl-6 mb-10">
                <p className="text-lg text-zinc-600 italic leading-relaxed">
                  &ldquo;Scouting is not only a physical exercise but it is a way to uplift the soul of a human being to reach to God. Once a Scout, always a Scout.&rdquo;
                </p>
              </div>

              <h2 className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-3">What Is Scouting?</h2>
              <p className="text-base text-zinc-700 leading-relaxed">
                In our opinion, Scouting is not only a physical exercise but it is a way to uplift the soul of a human being to reach to God. It is a play-way method of building a person to a perfect human being from childhood to the time of going home of God. Once a Scout, always Scout.
              </p>
            </div>
          </div>
        </section>

        {/* 3. HISTORY GRID - Reduced heading sizes to match standard paragraph emphasis */}
        <section className="py-12 bg-zinc-50/50 border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              
              {/* Global Origins */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <History size={16} className="text-blue-700" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Global Origins</span>
                </div>
                <h2 className="text-lg font-bold text-zinc-900 mb-4">Baden Powell&rsquo;s Vision</h2>
                <div className="space-y-4 text-sm leading-relaxed text-zinc-600">
                  <p>
                    Originally the word &ldquo;Scout&rdquo; was taken from the Military. Sir Robert Stephenson Smith Lord Baden Powell won the famous Boer War of South Africa in 1900. He wrote <span className="font-semibold text-zinc-900">&ldquo;Aid&rsquo;s to Scouting&rdquo;</span>, which was highly embraced by youth associations.
                  </p>
                  <p>
                    In 1907, he wrote <span className="font-semibold text-zinc-900">&ldquo;Scouting for Boys&rdquo;</span> and held the first experimental camp on Brownsea Island. This marked the global beginning of the movement.
                  </p>
                </div>
              </div>

              {/* India Context */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck size={16} className="text-blue-700" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">India Context</span>
                </div>
                <h2 className="text-lg font-bold text-zinc-900 mb-4">Indian Representation</h2>
                <div className="space-y-4 text-sm leading-relaxed text-zinc-600">
                  <p>
                    Scouting arrived in India in 1909, but was initially restricted to European and Anglo-Indian children. Indian leaders like <span className="font-semibold text-zinc-900">Pt. Madan Mohan Malviya</span> pushed for inclusion, eventually leading to the formation of independent Indian troops.
                  </p>
                  <p>
                    In 1928, various groups united under the <span className="font-semibold text-zinc-900">&ldquo;HINDUSTAN SCOUTS ASSOCIATION&rdquo;</span>. Pt. Shri Ram Bajpai became the first National Organizing Commissioner, creating indigenous literature and training for Indian scouts.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. THE INCIDENT - Clean, standard layout */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center gap-2 text-blue-700 mb-4">
              <Flag size={18} />
              <span className="text-[10px] font-bold uppercase tracking-widest">1938 Milestone</span>
            </div>
            <h2 className="text-xl font-bold text-zinc-900 mb-6">The Incident at Allahabad</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 text-base text-zinc-700 leading-relaxed space-y-4">
                <p>
                  In 1938, during a grand rally at Allahabad, the flag failed to unfurl for the World Chief Scout, Lord Baden Powell. While English scouts struggled, a scout from the Hindustan Scouts Association, under <span className="font-bold">Pt. Shri Ram Bajpai</span>, climbed the broken pole to fix it.
                </p>
                <p>
                  Impressed by this &ldquo;direful deed,&rdquo; Baden Powell publicly recognized the association and requested government aid for its development, marking a pivotal moment for Scouting in India.
                </p>
              </div>
              <div className="bg-blue-50 p-6 border-l-2 border-blue-700">
                <p className="text-sm text-blue-900 font-medium leading-relaxed">
                  &ldquo;The Hindustani Scout climbed the pole, lashed it with his rope, and made the flag fit to be unfurled. He got down and saluted, proving his dedication.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
