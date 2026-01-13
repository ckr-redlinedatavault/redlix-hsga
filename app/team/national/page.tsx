"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Award, Star, Globe, Users, MapPin, Mail, BookOpen } from "lucide-react";

export default function NationalTeam() {
  // Array containing all National leaders with identical design slots
  const nationalLeaders = [
    { 
      name: "K. Karunakar Pradhan", 
      role: "National Chairman", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516891/20_bjmamy.jpg", 
      icon: <Award className="text-emerald-600" size={14} /> 
    },
    { 
      name: "Narsingh Mehanji", 
      role: "National President", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516895/27_pbghji.jpg", 
      icon: <Shield className="text-emerald-600" size={14} /> 
    },
    { 
      name: "Madhusudhan Gupta", 
      role: "National Chief Commissioner", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516892/21_jz7zrj.jpg", 
      icon: <Star className="text-emerald-600" size={14} /> 
    },
    { 
      name: "Dr. Ved Prakash Singh", 
      role: "National General Secretary", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516893/23_elskvx.jpg", 
      icon: <Users className="text-emerald-600" size={14} /> 
    },
    { 
      name: "Girish Juyal", 
      role: "National Secretary", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516895/28_ukogac.jpg", 
      icon: <Users className="text-emerald-600" size={14} /> 
    },
    { 
      name: "Dr. Atul Kumar", 
      role: "National Joint Secretary", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516894/25_y46nzu.jpg", 
      icon: <Users className="text-emerald-600" size={14} /> 
    },
    { 
      name: "Harswaroop Sharma", 
      role: "Sr. Vice President", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516892/22_slxxzr.jpg", 
      icon: <Shield className="text-emerald-600" size={14} /> 
    },
    { 
      name: "Vanita Sharma", 
      role: "Vice President", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516893/24_rtic8p.jpg", 
      icon: <Shield className="text-emerald-600" size={14} /> 
    },
    { 
      name: "Y. K. Saxena", 
      role: "National Training Commissioner", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516895/26_nbjtko.jpg", 
      icon: <BookOpen className="text-emerald-600" size={14} /> 
    },
    { 
      name: "Dr. M. Rajani", 
      role: "International Commissioner - Guides", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516896/29_gu6ndl.jpg", 
      icon: <Globe className="text-emerald-600" size={14} /> 
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Navbar />

      <main className="flex-grow">
        {/* 1. FULL WIDTH HERO BANNER */}
        <section className="relative h-[300px] w-full overflow-hidden bg-zinc-900">
          <div className="absolute inset-0 h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
              alt="National Leadership"
              className="absolute right-0 h-full w-full md:w-[70%] object-cover object-center opacity-40 grayscale"
            />
          </div>

          <div
            className="absolute inset-0 flex h-full w-full flex-col justify-center bg-emerald-800 text-white md:w-[48%] px-8 md:px-16 lg:px-24"
            style={{ clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)" }}
          >
            <div className="max-w-md animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="flex items-center gap-2 mb-4">
                <Globe size={18} className="text-emerald-300" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-200">
                  National Council
                </span>
              </div>
              <h1 className="text-3xl font-black md:text-4xl uppercase tracking-tighter leading-none">
                National <br /> Team
              </h1>
              <p className="mt-4 text-sm font-medium text-emerald-50/80 leading-relaxed">
                Meet the visionary leadership guiding the Hindustan Scouts and Guides Association across India.
              </p>
            </div>
          </div>
        </section>

        {/* 2. LEADERSHIP GRID */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 text-center">
                <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-emerald-700 mb-2">Central Governance</h2>
                <h3 className="text-2xl font-bold text-zinc-900">National Headquarters Leadership</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {nationalLeaders.map((leader, index) => (
                <div key={index} className="group">
                  {/* Portrait Container */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-100 mb-6 shadow-sm border border-zinc-100">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    />
                    
                    {/* Bottom Role Badge Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center gap-3 shadow-lg border border-emerald-100">
                            <div className="shrink-0">
                                {leader.icon}
                            </div>
                            <div className="w-px h-4 bg-emerald-100"></div>
                            <span className="text-[10px] font-black text-emerald-900 uppercase tracking-widest leading-none">
                                {leader.role}
                            </span>
                        </div>
                    </div>
                  </div>

                  {/* Text Container */}
                  <div className="px-1">
                    <h4 className="text-xl font-bold text-zinc-900 group-hover:text-emerald-800 transition-colors">
                        {leader.name}
                    </h4>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">
                        HSGA India
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. NATIONAL MANDATE SECTION */}
        <section className="py-20 bg-zinc-50 border-t border-zinc-200">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="absolute -inset-4 bg-emerald-700 rounded-3xl rotate-2"></div>
                    <div className="relative bg-zinc-900 p-10 rounded-2xl text-white shadow-2xl">
                        <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Shield className="text-emerald-400" size={20} />
                            National Vision
                        </h4>
                        <p className="text-sm text-zinc-400 leading-relaxed mb-6 italic">
                            "The National Council is dedicated to expanding the reaches of scouting to every 
                            corner of India, fostering a generation of self-reliant, disciplined, and patriotic citizens."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-1 bg-emerald-500"></div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">NHQ Council India</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-700 mb-4">Administration</h2>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">Central Coordination</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-8">
                        The National Headquarters (NHQ) oversees all state associations, ensuring that the 
                        mission of Hindustan Scouts and Guides is implemented with integrity and 
                        excellence across the entire nation.
                    </p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 text-sm text-zinc-700">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                                <MapPin size={18} />
                            </div>
                            <span>National Headquarters, New Delhi, India</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-zinc-700">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                                <Mail size={18} />
                            </div>
                            <span>nhq@hsgaindia.org</span>
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