"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Info, Users, Scale } from "lucide-react";

export default function ProfileHistory() {
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
              Membership Profile & Regulations
            </h1>
            <p className="mt-3 text-zinc-600 max-w-2xl text-base leading-relaxed">
              Guidelines regarding eligibility, categories, the Scout/Guide Promise, 
              and the constitutional framework of the Association.
            </p>
          </div>
        </section>

        <section className="py-12 border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-blue-700 mb-4">General Eligibility</h2>
                <div className="text-sm text-zinc-700 leading-relaxed space-y-4">
                  <p>
                    Membership of the Association is open to the citizens of India who subscribe to the Aims and Objects of the Association and are residing or working in India. Admission is granted by the Executive Committee of the Association.
                  </p>
                  <p>
                    Citizens of any other Nation may be admitted as members on the recommendation of the Association and the National Executive Committee.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-700 p-6">
                <h2 className="text-xs font-bold uppercase tracking-widest text-blue-800 mb-3">The Scout/Guide Promise</h2>
                <p className="italic text-zinc-800 font-serif mb-4">
                  &ldquo;On my honour, I promise that I will do my best. To do my duty to GOD* and my Country. To help other people at all times and To obey the Scout/Guide Law.&rdquo;
                </p>
                <div className="flex items-start gap-2 text-[11px] text-zinc-500">
                  <Info size={14} className="mt-0.5 shrink-0" />
                  <p>*Note: The word <span className="font-bold">Dharma</span> may be substituted for the word <span className="font-bold">GOD</span> if desired.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-zinc-50/50">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-700 mb-8 flex items-center gap-2">
              <Users size={18} /> Categories of Membership
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* General Members */}
              <div className="bg-white p-6 border border-zinc-200 shadow-sm">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">General Members</h3>
                <p className="text-xs text-zinc-500 mb-4">Beneficiaries only (Not Special Members under S.R. Act Sec-15)</p>
                <ul className="space-y-2 text-sm text-zinc-700">
                  <li>• <span className="font-semibold">CUBS/BULBUL:</span> 5 to 11 years old</li>
                  <li>• <span className="font-semibold">SCOUTS/GUIDE:</span> 11 to 16 years old</li>
                  <li>• <span className="font-semibold">ROVER/RANGER:</span> 16 to 25 years old</li>
                </ul>
                <div className="mt-4 p-3 bg-red-50 text-red-700 text-[11px] font-bold uppercase border border-red-100">
                  Note: Shall not be eligible to hold office or stand for election at any level.
                </div>
              </div>

              {/* Special Members */}
              <div className="bg-white p-6 border border-zinc-200 shadow-sm">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">1. Special Members</h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  Admitted by the National Executive Committee for their special services and contribution for the movement. Registered under Section-15 of S.R. Act (XXI) of 1860.
                </p>
              </div>

              {/* Ordinary Members */}
              <div className="bg-white p-6 border border-zinc-200 shadow-sm">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">2. Ordinary Members</h3>
                <p className="text-sm text-zinc-700 mb-3">Annual fee: <span className="font-bold">Rs. 100/-</span></p>
                <p className="text-xs text-zinc-600">
                  They hold meetings every three years. The National Council elects one delegate for every 20 ordinary members to represent them.
                </p>
              </div>

              {/* Honorary Members */}
              <div className="bg-white p-6 border border-zinc-200 shadow-sm">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">3. Honorary Members</h3>
                <p className="text-sm text-zinc-700">
                  Limited to max <span className="font-bold text-blue-700">6 members</span> admitted for meritorious services. They serve as members of the State/National Council.
                </p>
              </div>

              {/* Life Members */}
              <div className="bg-white p-6 border border-zinc-200 shadow-sm">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">4. Life Members</h3>
                <p className="text-sm text-zinc-700 mb-3">One-time fee: <span className="font-bold">Rs. 1100/-</span></p>
                <p className="text-xs text-zinc-600">
                  Members elect representatives (max 5) at 1/10 ratio of life members, one of whom may be a woman.
                </p>
              </div>

              {/* Institutional Members */}
              <div className="bg-white p-6 border border-zinc-200 shadow-sm">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">5. Institutional Members</h3>
                <p className="text-xs text-zinc-500 mb-2">Schools, Colleges, Universities, Clubs, Industries, NGOs</p>
                <p className="text-sm text-zinc-700 mb-3">Fee: <span className="font-bold">Rs. 2000/yr</span> (Annual) or <span className="font-bold">Rs. 1000</span> (Life)</p>
                <p className="text-xs text-zinc-600">
                  Represented by one authorized representative. One delegate per 20 institutions is elected to represent them in the National Council.
                </p>
              </div>

               {/* Other Members */}
               <div className="bg-white p-6 border border-zinc-200 shadow-sm md:col-span-2">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">6. Other Members</h3>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  Includes Branch State Associations paying <span className="font-bold">Rs. 1100/- per year</span> as affiliation fees. Zonal, District, or Divisional members are included as part of affiliated Branch State Associations. 
                  <span className="text-red-600 block mt-2 font-medium italic">Rights and privileges are contingent on the payment of National affiliation fees.</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-blue-700 mb-6">Rights & Privileges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-zinc-700 leading-relaxed">
              <div className="space-y-4">
                <p>
                  Every member representing in the National Council has the right to vote and hold office in the National Council and National Executive Committee if elected or nominated.
                </p>
                <p>
                  Members have the right to inspect books of accounts and minutes books of the Association.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Members are entitled to take part in seminars, meetings, lectures, discussions, conferences, and tours organized by the Association.
                </p>
                <p>
                  They have the right to receive publications such as newsletters, magazines, and journals brought out by the Association.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-zinc-900 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-2 mb-4 text-blue-400">
                  <FileText size={20} />
                  <h2 className="text-sm font-bold uppercase tracking-widest">Withdrawal</h2>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Any member can withdraw from the Association by expressing a desire to do so through a letter addressed to the Chair Person or Secretary of the National Executive Committee.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4 text-red-400">
                  <Scale size={20} />
                  <h2 className="text-sm font-bold uppercase tracking-widest">Expulsion & Suspension</h2>
                </div>
                <ul className="grid grid-cols-1 gap-x-6 gap-y-2 text-xs text-zinc-400">
                  <li>1. Working against Aims & Objects</li>
                  <li>2. Resignation from membership</li>
                  <li>3. Failure to attend 3 consecutive meetings</li>
                  <li>4. Sentenced by a Court of Law</li>
                  <li>5. Failure to pay subscriptions timely</li>
                  <li>6. On the death of the member</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-800">
              <h3 className="text-sm font-bold mb-4">Appeals & Re-admission</h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
                The reasons for expulsion shall be communicated in writing. Every expelled member has the right to prefer an appeal to the National Council for re-admission. The decision of the National Council shall be final.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
