import Link from "next/link";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function Events() {
    return (
        <div
            className="min-h-screen bg-white flex flex-col"
            style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
        >
            <Header />
            <Navbar />

            <main className="flex-grow">
                <section className="py-16 md:py-20 bg-zinc-50 border-b border-zinc-100">
                    <div className="mx-auto max-w-7xl px-6 lg:px-12">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#800000] mb-3">
                                Upcoming Activities
                            </p>
                            <h1 className="text-3xl md:text-5xl font-light text-zinc-900 uppercase tracking-tighter leading-tight mb-6">
                                Events <span className="font-normal text-[#800000]">Calendar.</span>
                            </h1>
                            <p className="text-sm md:text-base text-zinc-600 font-normal leading-relaxed">
                                Stay updated with the latest camps, rallies, and training sessions organized by HSGA Telangana across the state.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Event Card 1 */}
                            <div className="bg-white border border-zinc-200 p-6 hover:shadow-xl transition-shadow group">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="bg-amber-50 rounded-sm px-3 py-1.5 border border-amber-100">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-[#800000]">Jan 26</span>
                                    </div>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">State Level</span>
                                </div>
                                <h3 className="text-xl font-light text-zinc-900 uppercase tracking-tight mb-2 group-hover:text-[#800000] transition-colors">
                                    Republic Day Rally
                                </h3>
                                <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                                    Grand march past and flag hoisting ceremony involving scouts and guides from all districts.
                                </p>
                                <div className="space-y-2 border-t border-zinc-100 pt-4">
                                    <div className="flex items-center gap-2 text-xs text-zinc-600">
                                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                                        <span>08:00 AM - 12:00 PM</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-zinc-600">
                                        <MapPin className="w-3.5 h-3.5 text-amber-500" />
                                        <span>Public Gardens, Hyderabad</span>
                                    </div>
                                </div>
                            </div>

                            {/* Event Card 2 */}
                            <div className="bg-white border border-zinc-200 p-6 hover:shadow-xl transition-shadow group">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="bg-zinc-100 rounded-sm px-3 py-1.5 border border-zinc-200">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Feb 05</span>
                                    </div>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Training</span>
                                </div>
                                <h3 className="text-xl font-light text-zinc-900 uppercase tracking-tight mb-2 group-hover:text-[#800000] transition-colors">
                                    Scout Master Refresher
                                </h3>
                                <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                                    Advanced training workshop for unit leaders focusing on new proficiency badges and camping skills.
                                </p>
                                <div className="space-y-2 border-t border-zinc-100 pt-4">
                                    <div className="flex items-center gap-2 text-xs text-zinc-600">
                                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                                        <span>3 Days (Residential)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-zinc-600">
                                        <MapPin className="w-3.5 h-3.5 text-amber-500" />
                                        <span>State Training Center</span>
                                    </div>
                                </div>
                            </div>

                            {/* Event Card 3 */}
                            <div className="bg-white border border-zinc-200 p-6 hover:shadow-xl transition-shadow group">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="bg-zinc-100 rounded-sm px-3 py-1.5 border border-zinc-200">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Feb 22</span>
                                    </div>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Celebration</span>
                                </div>
                                <h3 className="text-xl font-light text-zinc-900 uppercase tracking-tight mb-2 group-hover:text-[#800000] transition-colors">
                                    World Thinking Day
                                </h3>
                                <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                                    Global celebration of scout brotherhood and sisterhood with cultural programs and peace pledges.
                                </p>
                                <div className="space-y-2 border-t border-zinc-100 pt-4">
                                    <div className="flex items-center gap-2 text-xs text-zinc-600">
                                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                                        <span>10:00 AM - 04:00 PM</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-zinc-600">
                                        <MapPin className="w-3.5 h-3.5 text-amber-500" />
                                        <span>Respective District HQs</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-xs text-zinc-500 italic">
                                Note: Dates are tentative and subject to change. Please contact your district secretary for confirmation.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
