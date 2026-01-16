import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HowToJoin() {
  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />

      <main className="flex-grow">
        <section className="py-16 md:py-20 bg-white border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="mb-10 max-w-3xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#800000] mb-3">
                How to Join
              </p>
              <h1 className="text-3xl md:text-4xl font-light text-zinc-900 uppercase tracking-tighter leading-tight mb-4">
                Step-by-step guide to{" "}
                <span className="font-normal text-[#800000]">
                  becoming a member.
                </span>
              </h1>
              <p className="text-sm md:text-base text-zinc-600">
                Whether you are a student, parent, school, or volunteer, these
                steps outline how to connect with the Hindustan Scouts and
                Guides Association Telangana and begin your journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              <div className="border border-zinc-200 bg-zinc-50 p-6 flex flex-col">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500 mb-2">
                  Step 1
                </p>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">
                  Explore programs
                </h2>
                <p className="text-sm text-zinc-600 leading-relaxed flex-1">
                  Review the programs and sections available in your area
                  through your school, local unit, or the Prashiksham Yojna
                  overview.
                </p>
              </div>

              <div className="border border-zinc-200 bg-zinc-50 p-6 flex flex-col">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500 mb-2">
                  Step 2
                </p>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">
                  Submit registration
                </h2>
                <p className="text-sm text-zinc-600 leading-relaxed flex-1">
                  Fill out the Registration form or submit details through your
                  school or unit leader so the State team can review and guide
                  you.
                </p>
              </div>

              <div className="border border-zinc-200 bg-zinc-50 p-6 flex flex-col">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500 mb-2">
                  Step 3
                </p>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">
                  Complete onboarding
                </h2>
                <p className="text-sm text-zinc-600 leading-relaxed flex-1">
                  After verification and fee confirmation, you&apos;ll receive
                  information about uniforms, schedules, and your first
                  activities as a scout or guide.
                </p>
              </div>
            </div>

            <div className="mt-10 text-sm text-zinc-600 max-w-3xl">
              <p className="mb-3">
                For institutions interested in opening a unit, additional steps
                may include signing affiliation documents, nominating coordinators,
                and arranging basic training for staff and volunteers.
              </p>
              <p>
                If you are unsure where to begin, start with the Registration
                page or reach out via the Contact page, and the State
                Headquarters team will guide you through the appropriate route.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

