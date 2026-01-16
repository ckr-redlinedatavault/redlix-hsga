"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, User, Mail, Phone, MapPin } from "lucide-react";

export default function Register() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />

      <main className="flex-grow">
        <section className="py-16 md:py-20 bg-zinc-50 border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#800000] mb-3">
                Start Your Journey
              </p>
              <h1 className="text-3xl md:text-4xl font-light text-zinc-900 uppercase tracking-tighter leading-tight mb-4">
                Registration for{" "}
                <span className="font-normal text-[#800000]">
                  Scouts, Guides, and Schools
                </span>
              </h1>
              <p className="text-sm md:text-base text-zinc-600 font-normal leading-relaxed mb-6">
                Share a few details and our team will guide you through the next
                steps to formally enroll with the Hindustan Scouts and Guides
                Association Telangana.
              </p>

              <div className="space-y-4 text-sm text-zinc-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-[3px]" />
                  <p>
                    Step 1: Submit your interest using this form with accurate
                    contact details.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-[3px]" />
                  <p>
                    Step 2: State HQ team will connect with you to verify
                    information and share documentation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-[3px]" />
                  <p>
                    Step 3: Complete registration, fee payment as applicable,
                    and receive confirmation credentials.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-zinc-200 shadow-xl p-6 md:p-8">
              <h2 className="text-lg font-semibold text-zinc-900 uppercase tracking-[0.15em] mb-4">
                Registration Form
              </h2>
              <p className="text-xs text-zinc-500 mb-6">
                This form is for new registrations only and does not create a
                login. Approved applicants will receive separate portal access.
              </p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                      Full Name
                    </label>
                    <div className="flex items-center gap-2 border border-zinc-200 px-3 py-2 bg-white">
                      <User className="w-4 h-4 text-zinc-400" />
                      <input
                        type="text"
                        required
                        className="w-full text-sm text-zinc-900 placeholder-zinc-300 focus:outline-none"
                        placeholder="Student / Coordinator Name"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                      Role
                    </label>
                    <select
                      required
                      className="w-full border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 focus:outline-none"
                    >
                      <option value="">Select</option>
                      <option value="student">Student / Parent</option>
                      <option value="school">School / Institution</option>
                      <option value="trainer">Trainer / Volunteer</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    Email Address
                  </label>
                  <div className="flex items-center gap-2 border border-zinc-200 px-3 py-2 bg-white">
                    <Mail className="w-4 h-4 text-zinc-400" />
                    <input
                      type="email"
                      required
                      className="w-full text-sm text-zinc-900 placeholder-zinc-300 focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    Mobile Number
                  </label>
                  <div className="flex items-center gap-2 border border-zinc-200 px-3 py-2 bg-white">
                    <Phone className="w-4 h-4 text-zinc-400" />
                    <input
                      type="tel"
                      required
                      className="w-full text-sm text-zinc-900 placeholder-zinc-300 focus:outline-none"
                      placeholder="+91"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    City / District
                  </label>
                  <div className="flex items-center gap-2 border border-zinc-200 px-3 py-2 bg-white">
                    <MapPin className="w-4 h-4 text-zinc-400" />
                    <input
                      type="text"
                      required
                      className="w-full text-sm text-zinc-900 placeholder-zinc-300 focus:outline-none"
                      placeholder="Location in Telangana"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    Message / Requirement
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-300 focus:outline-none resize-none"
                    placeholder="Share details about your interest, institution, or expected timelines."
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-3 w-full bg-[#800000] text-white py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-900 transition-colors"
                  >
                    Start Your Journey
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <p className="text-[10px] text-zinc-400 leading-relaxed">
                  By submitting this form, you consent to be contacted by HSGA
                  Telangana as per the association&apos;s privacy and data
                  protection policy.
                </p>

                {submitted && (
                  <div className="mt-4 border border-emerald-100 bg-emerald-50 px-4 py-3">
                    <p className="text-[11px] font-semibold text-emerald-700">
                      Thank you for registering. Our team will reach out with
                      next steps shortly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

