"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Award, Star, Globe, Users, MapPin, Mail, BookOpen, Crown } from "lucide-react";

export default function NationalTeam() {
  const nationalLeaders = [
    { 
      name: "K. Karunakar Pradhan", 
      role: "National Chairman", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516891/20_bjmamy.jpg", 
      icon: <Crown className="text-emerald-600" size={16} /> 
    },
    { 
      name: "Narsingh Mehanji", 
      role: "National President", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516895/27_pbghji.jpg", 
      icon: <Shield className="text-emerald-600" size={16} /> 
    },
    { 
      name: "Madhusudhan Gupta", 
      role: "National Chief Commissioner", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516892/21_jz7zrj.jpg", 
      icon: <Award className="text-emerald-600" size={16} /> 
    },
    { 
      name: "Dr. Ved Prakash Singh", 
      role: "National General Secretary", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516893/23_elskvx.jpg", 
      icon: <Users className="text-emerald-600" size={16} /> 
    },
    { 
      name: "Girish Juyal", 
      role: "National Secretary", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516895/28_ukogac.jpg", 
      icon: <Users className="text-emerald-600" size={16} /> 
    },
    { 
      name: "Dr. Atul Kumar", 
      role: "National Joint Secretary", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516894/25_y46nzu.jpg", 
      icon: <Users className="text-emerald-600" size={16} /> 
    },
    { 
      name: "Harswaroop Sharma", 
      role: "Sr. Vice President", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516892/22_slxxzr.jpg", 
      icon: <Shield className="text-emerald-600" size={16} /> 
    },
    { 
      name: "Vanita Sharma", 
      role: "Vice President", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516893/24_rtic8p.jpg", 
      icon: <Shield className="text-emerald-600" size={16} /> 
    },
    { 
      name: "Y. K. Saxena", 
      role: "National Training Commissioner", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516895/26_nbjtko.jpg", 
      icon: <BookOpen className="text-emerald-600" size={16} /> 
    },
    { 
      name: "Dr. M. Rajani", 
      role: "International Commissioner - Guides", 
      image: "https://res.cloudinary.com/dq2suftps/image/upload/v1722516896/29_gu6ndl.jpg", 
      icon: <Globe className="text-emerald-600" size={16} /> 
    },
  ];

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />

      <main className="flex-grow">
        {/* 1. FULL WIDTH HERO BANNER */}
        <section className="relative h-[320px] w-full overflow-hidden bg-zinc-950">
          <div className="absolute inset-0 h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=1200"
              alt="National Leadership Background"
              className="absolute right-0 h-full w-full md:w-[70%] object-cover opacity-50"
            />
          </div>

          <div
            className="absolute inset-0 flex h-full w-full flex-col justify-center bg-emerald-900/90 text-white md:w-[50%] px-8 md:px-16 lg:px-24"
            style={{ clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)" }}
          >
            <div className="max-w-md animate-in fade-in slide-in-from-left-10 duration-1000">
              <div className="flex items-center gap-3 mb-4">
                <Globe size={20} className="text-emerald-400" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">
                  Apex Leadership
                </span>
              </div>
              <h1 className="text-4xl font-black md:text-5xl uppercase tracking-tighter leading-[0.9]">
                National <br /> Team
              </h1>
              <p className="mt-6 text-sm md:text-base font-medium text-emerald-50/80 leading-relaxed max-w-[90%]">
                The National Council represents the collective vision and governing wisdom of the Hindustan Scouts and Guides movement across India.
              </p>
            </div>
          </div>
        </section>

        {/* 2. LEADERSHIP GRID - REFINED UI CARDS */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-20 text-center max-w-2xl mx-auto">
                <h2 className="text-xs font-black uppercase tracking-[0.5em] text-emerald-700 mb-4">National Headquarters</h2>
                <h3 className="text-3xl font-bold text-zinc-900 md:text-4xl">Governance & Executive Council</h3>
                <div className="h-1.5 w-16 bg-emerald-600 mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
              {nationalLeaders.map((leader, index) => (
                <div key={index} className="group relative">
                  {/* The Main Portrait Card */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg border border-zinc-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    
                    {/* Integrated Glassmorphism Badge */}
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-2xl">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-1.5 bg-white rounded-lg shadow-sm">
                                    {leader.icon}
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                                    {leader.role}
                                </p>
                            </div>
                            <h4 className="text-xl font-bold text-white leading-tight">
                                {leader.name}
                            </h4>
                        </div>
                    </div>
                  </div>
                  
                  {/* Decorative Background Accent */}
                  <div className="absolute -z-10 top-4 -right-4 w-full h-full border-2 border-emerald-100 rounded-2xl group-hover:border-emerald-200 transition-colors duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. NATIONAL MANDATE & NHQ INFO */}
        <section className="py-24 bg-zinc-50 border-t border-zinc-200 overflow-hidden relative">
          <div className="mx-auto max-w-6xl px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                
                <div className="space-y-8">
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-emerald-700 mb-3">NHQ Mandate</h2>
                        <h3 className="text-3xl font-bold text-zinc-900">National Strategic Support</h3>
                    </div>
                    <p className="text-base text-zinc-600 leading-relaxed">
                        The National Headquarters (NHQ) acts as the central nerve center for the movement in India. 
                        It ensures that educational methods, training schemes, and the core values of HSGA 
                        are preserved while adapting to the needs of the modern Indian youth.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                        <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-zinc-200 shadow-sm">
                            <MapPin className="text-emerald-700 shrink-0 mt-1" size={20} />
                            <div>
                                <h5 className="text-sm font-bold text-zinc-900">Registered Office</h5>
                                <p className="text-xs text-zinc-500 mt-1 uppercase">New Delhi, India</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-zinc-200 shadow-sm">
                            <Mail className="text-emerald-700 shrink-0 mt-1" size={20} />
                            <div>
                                <h5 className="text-sm font-bold text-zinc-900">Correspondence</h5>
                                <p className="text-xs text-zinc-500 mt-1 uppercase">nhq@hsgaindia.org</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="relative">
                    {/* Artistic Quote Card */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-100 rounded-full opacity-50 blur-3xl"></div>
                    <div className="relative bg-zinc-900 p-12 rounded-3xl text-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/5">
                        <Star className="text-emerald-400 mb-6" size={32} />
                        <blockquote className="text-lg font-medium text-emerald-50 leading-relaxed italic mb-8">
                            &ldquo;Our leadership is committed to carving a path of excellence, ensuring that the promise 
                            of scouting reaches every village and city in our great nation.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-emerald-500"></div>
                            <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">HSGA National Council India</p>
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
