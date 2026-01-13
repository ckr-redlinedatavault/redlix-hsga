"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, CheckCircle2, Globe, Heart, Shield } from "lucide-react";

export default function AimsObjectives() {
  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />

      <main className="flex-grow">
        <section className="bg-zinc-50 border-b border-zinc-100 py-12">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-4xl font-light text-blue-700 md:text-5xl tracking-tight">
              Aims & Objectives
            </h1>
            <p className="mt-3 text-zinc-600 max-w-2xl text-base leading-relaxed">
              Our mission and vision guide every aspect of the movement, focusing on character building, 
              community service, and national development.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-4 text-blue-700">
                  <Target size={20} />
                  <h2 className="text-sm font-bold uppercase tracking-widest">The Mission</h2>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 leading-tight">
                  Developing full potential for a meaningful place in society.
                </h3>
              </div>

              <div className="lg:col-span-8">
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={18} />
                    <p className="text-sm text-zinc-700 leading-relaxed">
                      To make available voluntary membership regardless of color, class, or creed.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={18} />
                    <p className="text-sm text-zinc-700 leading-relaxed">
                      To develop a spiritual awareness among its members.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={18} />
                    <p className="text-sm text-zinc-700 leading-relaxed">
                      To create for each member awareness of, and involvement in, service to others and the community.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={18} />
                    <p className="text-sm text-zinc-700 leading-relaxed">
                      To use the opportunities of the family of Scouting in accordance with its purpose, principles, and method, in order to develop in its members&rsquo; unprejudiced attitudes and an understanding of, and respect for, others.
                    </p>
                  </li>
                  <li className="flex gap-4">
                    <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={18} />
                    <p className="text-sm text-zinc-700 leading-relaxed">
                      To promote a commitment to a code of values that results in self-discipline and the development of the members&apos; full potential that will enable each one to take a meaningful place in society.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-zinc-900 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center gap-2 mb-8 text-blue-400">
              <Eye size={20} />
              <h2 className="text-sm font-bold uppercase tracking-widest">The Vision</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-blue-900/50 flex items-center justify-center border border-blue-700">
                    <Shield size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-2">Self-Reliance & Responsibility</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      To use specific methods that make each individual self-reliant, supportive, responsible, and a committed person.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-blue-900/50 flex items-center justify-center border border-blue-700">
                    <Globe size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-2">Expansion & Outreach</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      To reach out to a greater youth population and establish a good image and high visibility.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-blue-900/50 flex items-center justify-center border border-blue-700">
                    <Heart size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-2">Nation Building</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      To encourage Community Development and Nation Building activities throughout the country.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-blue-900/50 flex items-center justify-center border border-blue-700">
                    <Target size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-2">Networking</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      To establish a robust and effective network at all levels of the organization.
                    </p>
                  </div>
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
