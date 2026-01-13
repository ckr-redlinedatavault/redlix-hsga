"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Flag, Globe, BookOpen } from "lucide-react";

export default function OrganizationalStructure() {
  const detailedAims = [
    "To teach and train boys and girls, men and women to revere God or Dharma. Through yoga, all faith Meditation and Prayer.",
    "To develop the character of boys and girls, men and women and make them good citizens.",
    "To promote the physical, mental, moral and spiritual development of boys and girls, men and women.",
    "To promote powers of observation, self-discipline and self-reliance and to inoculate and develop loyalty and patriotism and to promote service to others.",
    "To teach and train boys and girls, young men and young women in scout guide crafts.",
    "To arrange/organize Hikes, Trekking programs, Educational tours, Adventure tours, etc., and provide conveyance to any person or persons to and for places of historical/educational significance to improve the knowledge and sense of National Integration.",
    "To train in arts and handicrafts useful to themselves and service useful to Society.",
    "To help the boys and girls and teach them to serve and live in harmony irrespective of race, creed, religion, or color abstaining from the violence through work or action.",
    "To establish, take over or collaborate with any Institution or School or Association for physical, mental, spiritual, educational development and uplift of intelligence or its development, particularly for the children and people of the weaker section of the Society i.e. poor, widow, blinds, handicapped etc. and also to provide ability and skill for employment, self-employment.",
    "To establish, found and maintain Schools, Libraries, and reading rooms and to organize seminars, conferences and training camps to increase knowledge of people.",
    "To conduct activities to the protection and conserving the nature and environment including forests, lakes, rivers, wildlife and compassion for living creatures and to improve the feeling in people for the same.",
    "All the incomes, earnings, movable or immovable properties of the society shall be solely utilized applied towards the promotion of its aims and objects only as set forth in the Memorandum of Association and no portion thereof shall be paid or transferred directly or indirectly by way of dividends, bones, profits or in any manner whatsoever, to the present or past members of the Society or to any person claiming through any one or more of the present or the past members. No member of the Society shall have any personal claim on any movable or immovable properties of the society or make any profit, whatsoever, by virtue of his membership.",
    "To work in co-operation with other agencies with similar aims and objects.",
    "To profess and practice the Promise and the Law."
  ];

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />

      <main className="flex-grow">
        <section className="bg-zinc-50 py-12 border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-6">
            <h1 className="text-4xl font-light text-blue-700 md:text-5xl tracking-tight">
              Aims & Objectives
            </h1>
            <p className="mt-3 text-base text-zinc-600 leading-relaxed max-w-3xl">
              The Aims and Objects of the Association shall be to inoculate and promote reverence to God/Dharma and selfless service to Mother and Humanity.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white border border-zinc-200 rounded shadow-sm">
                <Heart className="text-blue-700" size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Humanity</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white border border-zinc-200 rounded shadow-sm">
                <Flag className="text-blue-700" size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Service to Nation</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white border border-zinc-200 rounded shadow-sm">
                <Globe className="text-blue-700" size={18} />
                <span className="text-xs font-bold uppercase tracking-wider text-wrap">Inclusive of all Religion/God</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-6 flex items-center gap-2">
              <BookOpen size={18} className="text-blue-700" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-blue-700">Detailed Aims and Methods</h2>
            </div>
            
            <div className="overflow-hidden border border-zinc-200 rounded-lg shadow-sm">
              <div className="grid grid-cols-12 bg-zinc-100 border-b border-zinc-200 text-[10px] font-black uppercase tracking-widest text-zinc-600">
                <div className="col-span-2 md:col-span-1 p-4 border-r border-zinc-200 text-center">No.</div>
                <div className="col-span-10 md:col-span-11 p-4">Means and Methods Adopted</div>
              </div>

              {detailedAims.map((aim, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-12 border-b border-zinc-200 last:border-0 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-zinc-50/50'
                  }`}
                >
                  <div className="col-span-2 md:col-span-1 p-4 border-r border-zinc-200 flex items-start justify-center text-sm font-bold text-blue-700">
                    {index + 1}
                  </div>
                  <div className="col-span-10 md:col-span-11 p-4 text-sm text-zinc-700 leading-relaxed">
                    {aim}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-zinc-50 border-t border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-xl font-bold text-zinc-900 mb-8 border-l-4 border-blue-700 pl-4">The Promise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-5 border border-zinc-200 rounded shadow-sm">
                  <h3 className="text-xs font-bold uppercase text-blue-700 mb-2">I) Boys Scouts and Rovers</h3>
                  <p className="text-sm text-zinc-700 leading-relaxed italic">
                    &ldquo;On my honor, I promise that I will do my best. To do my duty to GOD* and my Country. To help other people at all times. To obey the Scouts Law.&rdquo;
                  </p>
                </div>
                <div className="bg-white p-5 border border-zinc-200 rounded shadow-sm">
                  <h3 className="text-xs font-bold uppercase text-blue-700 mb-2">II) Girl Guides and Rangers</h3>
                  <p className="text-sm text-zinc-700 leading-relaxed italic">
                    &ldquo;On my honor, I promise that I will do my best. To do my duty to GOD* and my Country. To help other people at all times. To obey the Guide Law.&rdquo;
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-5 border border-zinc-200 rounded shadow-sm">
                  <h3 className="text-xs font-bold uppercase text-blue-700 mb-2">III) Cubs</h3>
                  <p className="text-sm text-zinc-700 leading-relaxed italic">
                    &ldquo;I promise that I will do my best. To do my duty to GOD and my Country. To keep the the Law of Cub Pack and To do a good turn every day.&rdquo;
                  </p>
                </div>
                <div className="bg-white p-5 border border-zinc-200 rounded shadow-sm">
                  <h3 className="text-xs font-bold uppercase text-blue-700 mb-2">IV) Bulbul</h3>
                  <p className="text-sm text-zinc-700 leading-relaxed italic">
                    &ldquo;I promise that I will do my best. To do my duty to God and my Country. To keep the Law of Bulbul Pack. To do a good turn every day.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-xl font-bold text-zinc-900 mb-8 border-l-4 border-blue-700 pl-4">The Law</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Girl Guides and Rangers Law */}
              <div>
                <h3 className="text-sm font-bold text-zinc-900 mb-4 bg-zinc-100 p-2 rounded">I) Law for Girl Guide and Rangers</h3>
                <ol className="text-sm text-zinc-700 space-y-2 list-decimal ml-5">
                  <li>A Guide honour is to be trusted.</li>
                  <li>A Guide is loyal.</li>
                  <li>A Guide duty is revere God and serve her Country and help others.</li>
                  <li>A Guide is a friend to all a sister to every other Guide no matter to what Country, class or creed the other may belong.</li>
                  <li>A Guide is courteous.</li>
                  <li>A Guide is a friend to animals.</li>
                  <li>A Guide is disciplined and obeys orders.</li>
                  <li>A Guide is brave and smiles under all difficulties.</li>
                  <li>A Guide is thrifty.</li>
                  <li>A Guide is pure in thought, word and deed.</li>
                </ol>
              </div>

              {/* Boy Scouts and Rovers Law */}
              <div>
                <h3 className="text-sm font-bold text-zinc-900 mb-4 bg-zinc-100 p-2 rounded">II) Law for Boy Scouts and Rovers</h3>
                <ol className="text-sm text-zinc-700 space-y-2 list-decimal ml-5">
                  <li>A Scout’s honor is to be trusted.</li>
                  <li>A Scout is loyal.</li>
                  <li>A Scout duty is revere God and serve his Country and help others.</li>
                  <li>A Scout is a friend to all a sister to every other Scout no matter to what Country, class or creed the other may belong.</li>
                  <li>A Scout is courteous.</li>
                  <li>A Scout is a friend to animals.</li>
                  <li>A Scout is disciplined and obeys orders.</li>
                  <li>A Scout is brave and smiles under all difficulties.</li>
                  <li>A Scout is thrifty.</li>
                  <li>A Scout is pure in thought, word, and deed.</li>
                </ol>
              </div>

              {/* Cubs Law */}
              <div className="md:col-span-1">
                <h3 className="text-sm font-bold text-zinc-900 mb-4 bg-zinc-100 p-2 rounded">III) Law for Cubs</h3>
                <ul className="text-sm text-zinc-700 space-y-2 list-disc ml-5">
                  <li>The Cub gives in to the elders.</li>
                  <li>The Cub is clean and courteous.</li>
                </ul>
              </div>

              {/* Bulbul Law */}
              <div className="md:col-span-1">
                <h3 className="text-sm font-bold text-zinc-900 mb-4 bg-zinc-100 p-2 rounded">IV) Law for Bulbul</h3>
                <ul className="text-sm text-zinc-700 space-y-2 list-disc ml-5">
                  <li>The Bulbul gives in to the elders.</li>
                  <li>The Bulbul Cub is clean and courteous.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
