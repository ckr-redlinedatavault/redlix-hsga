"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Award, Star, Users, MapPin, Mail } from "lucide-react";

export default function StateTeam() {
  const allLeaders = [
    { 
      name: "Dr. Addanki Dayakar", 
      role: "State Chief Commissioner", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516881/1_jwsiab.jpg", 
      icon: <Award className="text-emerald-600" size={14} /> 
    },
    { 
      name: "Putta Praveen", 
      role: "State Chairperson", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516882/2_lwgwjj.jpg", 
      icon: <Shield className="text-emerald-600" size={14} /> 
    },
    { 
      name: "Veeramalla Vamshi Krishna", 
      role: "President", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516882/4_muzcwj.jpg", 
      icon: <Star className="text-emerald-600" size={14} /> 
    },
    { 
      name: "Soora Harikrishna", 
      role: "State Vice President", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516882/3_rt9xqj.jpg", 
      icon: <Users className="text-emerald-600" size={14} /> 
    },
    { 
      name: "Jeedipally Ashwini", 
      role: "State Vice President", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516884/6_vdmx2p.jpg", 
      icon: <Users className="text-emerald-600" size={14} /> 
    },
    { 
      name: "Dr. Kunchapu Suresh", 
      role: "State Secretary", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516883/5_cen1xi.jpg", 
      icon: <Users className="text-emerald-600" size={14} /> 
    },
    { 
      name: "Gannarapy Vijay", 
      role: "State Treasurer", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516884/7_zdupey.jpg", 
      icon: <Users className="text-emerald-600" size={14} /> 
    },
    { 
      name: "G. Srikanth", 
      role: "State Joint Secretary", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516885/8_nnzxlo.jpg", 
      icon: <Users className="text-emerald-600" size={14} /> 
    },
    { 
      name: "T. Dhilip", 
      role: "State Assistant Commissioner", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516887/13_nz2hhq.jpg", 
      icon: <Users className="text-emerald-600" size={14} /> 
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <Navbar />

      <main className="flex-grow">
        {/* 1. FULL WIDTH HERO BANNER - Background made more vibrant */}
        <section className="relative h-[300px] w-full overflow-hidden bg-zinc-900">
          <div className="absolute inset-0 h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
              alt="State Leadership"
              className="absolute right-0 h-full w-full md:w-[70%] object-cover object-center opacity-50"
            />
          </div>

          <div
            className="absolute inset-0 flex h-full w-full flex-col justify-center bg-emerald-800/90 text-white md:w-[48%] px-8 md:px-16 lg:px-24"
            style={{ clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)" }}
          >
            <div className="max-w-md animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="flex items-center gap-2 mb-4">
                <Users size={18} className="text-emerald-300" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-200">
                  Leadership
                </span>
              </div>
              <h1 className="text-3xl font-black md:text-4xl uppercase tracking-tighter leading-none">
                State <br /> Team
              </h1>
              <p className="mt-4 text-sm font-medium text-emerald-50/80 leading-relaxed">
                The governing council and executive officers of Hindustan Scouts and Guides Association.
              </p>
            </div>
          </div>
        </section>

        {/* 2. LEADERSHIP GRID (COLOURED IMAGES) */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-16 text-center">
                <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-emerald-700 mb-2">The Executive Council</h2>
                <h3 className="text-2xl font-bold text-zinc-900">State Leadership & Commissioners</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
              {allLeaders.map((leader, index) => (
                <div key={index} className="group">
                  {/* Portrait Container */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-zinc-100 mb-6 shadow-md border border-zinc-100">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      /* Removed grayscale, added better transitions */
                      className="h-full w-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
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
                        HSGA Telangana
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. CORE COMMITMENT / CONTACT */}
        <section className="py-20 bg-zinc-50 border-t border-zinc-200">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-700 mb-4">Governance</h2>
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">State Administrative Support</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-8">
                        The State Headquarters coordinates between the National Headquarters and individual District Associations 
                        to ensure uniform training, census management, and event organization across the region.
                    </p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 text-sm text-zinc-700">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                                <MapPin size={18} />
                            </div>
                            <span>State Headquarters, Telangana State</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-zinc-700">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                                <Mail size={18} />
                            </div>
                            <span>contact@hsgatelangana.org</span>
                        </div>
                    </div>
                </div>
                
                <div className="relative">
                    <div className="absolute -inset-4 bg-emerald-700 rounded-3xl -rotate-2"></div>
                    <div className="relative bg-zinc-900 p-10 rounded-2xl text-white shadow-2xl">
                        <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Shield className="text-emerald-400" size={20} />
                            Official Mandate
                        </h4>
                        <p className="text-sm text-zinc-400 leading-relaxed mb-6 italic">
                            "The state leadership remains committed to providing a transparent and efficient 
                            framework for the advancement of every Cub, Scout, and Rover under our jurisdiction."
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-1 bg-emerald-500"></div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Telangana Council</span>
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