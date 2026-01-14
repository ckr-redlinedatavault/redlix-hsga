"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Globe, Facebook, Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";

export default function ContactUs() {
  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />

      <main className="flex-grow">
        {/* 1. HERO BANNER - Split Layout Brand Style */}
        <section className="relative h-[320px] md:h-[380px] w-full overflow-hidden bg-zinc-950 border-b-4 border-amber-500">
          <div className="absolute inset-0 flex flex-col md:flex-row">
            {/* Left Content (Maroon) */}
            <div className="w-full md:w-[45%] bg-[#800000] flex items-center p-8 md:p-16 z-20">
              <div className="max-w-md">
                <p className="text-amber-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                  Get in Touch
                </p>
                <h1 className="text-white text-4xl md:text-6xl font-light uppercase tracking-tighter leading-none mb-6">
                  Contact <br /><span className="font-normal text-white">Support.</span>
                </h1>
                <p className="text-white/80 text-sm font-normal leading-relaxed">
                  Reach out for inquiries, collaborations, or support across our National and State offices.
                </p>
              </div>
            </div>

            {/* Right Image (Abstract Map/Connectivity Context) */}
            <div className="relative w-full h-full md:w-[55%] bg-zinc-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&q=80"
                alt="Contact Background"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent md:bg-gradient-to-l"></div>
            </div>
          </div>
        </section>

        {/* 2. CONTACT DETAILS GRID */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              
              {/* STATE HEAD QUARTERS (Telangana) */}
              <div className="group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-amber-500"></div>
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#800000]">Primary Office</h2>
                </div>
                <h3 className="text-3xl font-light text-zinc-900 uppercase tracking-tighter mb-8">
                  State <span className="text-[#800000] font-normal">Head Quarters</span>
                </h3>
                
                <div className="bg-zinc-50 p-8 md:p-10 border border-zinc-100 relative overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:bg-white">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#800000]"></div>
                  <div className="space-y-8">
                    <div className="flex gap-5">
                      <MapPin className="text-amber-500 shrink-0" size={24} />
                      <div>
                        <h4 className="text-xs font-bold uppercase text-zinc-900 mb-2 tracking-widest">Office Address</h4>
                        <p className="text-sm text-zinc-500 font-normal leading-relaxed">
                          #B-3 F-1, Vigyan Puri Colony, Vidhya Nagar,<br />
                          Hyderabad, Telangana — 500044
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-5">
                      <Phone className="text-amber-500 shrink-0" size={24} />
                      <div>
                        <h4 className="text-xs font-bold uppercase text-zinc-900 mb-2 tracking-widest">Phone</h4>
                        <p className="text-sm text-zinc-500 font-normal">040-31607502</p>
                        <p className="text-sm text-zinc-500 font-normal">7997819797</p>
                      </div>
                    </div>

                    <div className="flex gap-5">
                      <Mail className="text-amber-500 shrink-0" size={24} />
                      <div>
                        <h4 className="text-xs font-bold uppercase text-zinc-900 mb-2 tracking-widest">Email</h4>
                        <p className="text-sm text-zinc-500 font-normal">hsgatelangana@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* NATIONAL HEAD QUARTERS */}
              <div className="group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-zinc-300"></div>
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Apex Office</h2>
                </div>
                <h3 className="text-3xl font-light text-zinc-900 uppercase tracking-tighter mb-8">
                  National <span className="font-normal">Head Quarters</span>
                </h3>
                
                <div className="bg-zinc-900 p-8 md:p-10 border border-zinc-800 relative overflow-hidden transition-all duration-300 text-white">
                  <div className="absolute top-0 left-0 w-full h-1 bg-amber-500"></div>
                  <div className="space-y-8">
                    <div className="flex gap-5">
                      <MapPin className="text-amber-500 shrink-0" size={24} />
                      <div>
                        <h4 className="text-xs font-bold uppercase text-white/50 mb-2 tracking-widest">Office Address</h4>
                        <p className="text-sm text-zinc-400 font-normal leading-relaxed">
                          E-18/19, RD Floor, Gali No.9,<br />
                          Hanuman Chowk, 51, Wazirabad,<br />
                          New Delhi — 110084
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-5">
                      <Phone className="text-amber-500 shrink-0" size={24} />
                      <div>
                        <h4 className="text-xs font-bold uppercase text-white/50 mb-2 tracking-widest">Central Phone</h4>
                        <p className="text-sm text-zinc-400 font-normal">0931450055</p>
                      </div>
                    </div>

                    <div className="flex gap-5">
                      <Mail className="text-amber-500 shrink-0" size={24} />
                      <div>
                        <h4 className="text-xs font-bold uppercase text-white/50 mb-2 tracking-widest">National Email</h4>
                        <p className="text-sm text-zinc-400 font-normal">hsgasb@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. SOCIALS & CTA */}
        <section className="py-20 bg-zinc-50 border-t border-zinc-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-md text-center md:text-left">
                <h4 className="text-2xl font-light text-zinc-900 uppercase tracking-tighter mb-4">Follow <span className="text-[#800000] font-normal">Our Journey</span></h4>
                <p className="text-sm text-zinc-500 font-normal leading-relaxed">
                  Stay updated with our latest activities, camps, and national announcements on our social platforms.
                </p>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: <Facebook size={20} />, label: "Facebook" },
                  { icon: <Instagram size={20} />, label: "Instagram" },
                  { icon: <Twitter size={20} />, label: "Twitter" },
                  { icon: <Youtube size={20} />, label: "Youtube" }
                ].map((social, i) => (
                  <button key={i} className="w-12 h-12 flex items-center justify-center bg-white border border-zinc-200 text-zinc-400 hover:bg-[#800000] hover:text-white hover:border-[#800000] transition-all rounded-full shadow-sm">
                    {social.icon}
                  </button>
                ))}
              </div>

              <button className="flex items-center gap-3 bg-zinc-900 text-white px-10 py-4 text-[11px] font-bold uppercase tracking-widest hover:bg-[#800000] transition-all group">
                Send a Message
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}