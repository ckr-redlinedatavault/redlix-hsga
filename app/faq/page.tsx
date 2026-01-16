import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQ() {
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
            <div className="mb-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#800000] mb-3">
                Frequently Asked Questions
              </p>
              <h1 className="text-3xl md:text-4xl font-light text-zinc-900 uppercase tracking-tighter leading-tight mb-4">
                Answers for{" "}
                <span className="font-normal text-[#800000]">
                  parents, students, and schools.
                </span>
              </h1>
              <p className="text-sm md:text-base text-zinc-600 max-w-2xl">
                A quick guide to how the Hindustan Scouts and Guides Association
                Telangana operates, and what to expect when you join.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
              <div className="space-y-8">
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-800 mb-2">
                    How do I join HSGA Telangana?
                  </h2>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    You can begin by submitting the registration form on the
                    Registration page or by contacting your school&apos;s unit
                    leader. Schools and institutions can also reach out directly
                    to the State Headquarters through the contact page to start
                    the onboarding process.
                  </p>
                </div>

                <div>
                  <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-800 mb-2">
                    What are the age limits?
                  </h2>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Scouting programs are typically structured across junior,
                    scout/guide, and rover/ranger sections, covering school-age
                    children and young adults. Exact age brackets may vary by
                    program; your local unit or school will confirm the specific
                    section for each participant.
                  </p>
                </div>

                <div>
                  <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-800 mb-2">
                    Are there any fees?
                  </h2>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Registration and annual fees may be applicable to cover
                    uniforms, badges, training materials, and program
                    activities. These are kept affordable and are communicated
                    clearly by the school or unit leader before enrollment.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-800 mb-2">
                    How often are activities conducted?
                  </h2>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Regular troop meetings are usually held weekly or
                    fortnightly at the school or unit. In addition, there are
                    periodic camps, rallies, service projects, and training
                    programs throughout the year at district and state levels.
                  </p>
                </div>

                <div>
                  <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-800 mb-2">
                    How are parents involved?
                  </h2>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Parents are encouraged to support their children during
                    events, attend briefings, and stay informed about safety and
                    schedule updates. Many parents also volunteer to assist with
                    logistics, mentoring, or special skills sessions.
                  </p>
                </div>

                <div>
                  <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-800 mb-2">
                    Who do I contact for more information?
                  </h2>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    For detailed information, you can use the contact details on
                    the Contact page, reach your local unit leader, or write to
                    the State Headquarters email address listed there.
                  </p>
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

