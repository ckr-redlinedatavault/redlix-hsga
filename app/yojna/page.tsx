"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  GraduationCap, 
  BookOpen, 
  ShieldCheck,
  Zap,
  Award,
  ArrowRight,
  Clock,
  Compass
} from "lucide-react";

export default function PrashikshamYojna() {
  return (
    <div
      className="min-h-screen bg-white flex flex-col"
      style={{ paddingTop: "calc(var(--header-height) + var(--navbar-height))" }}
    >
      <Header />
      <Navbar />

      <main className="flex-grow">
        {/* 1. HERO BANNER - Brand Split Style */}
        <section className="relative h-[320px] md:h-[400px] w-full overflow-hidden bg-zinc-950 border-b-4 border-amber-500">
          <div className="absolute inset-0 flex flex-col md:flex-row">
            {/* Left Content (Maroon) */}
            <div className="w-full md:w-[45%] bg-[#800000] flex items-center p-8 md:p-16 z-20">
              <div className="max-w-md">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap size={18} className="text-amber-400" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-500">
                    Prashiksham Yojna
                  </span>
                </div>
                <h1 className="text-white text-4xl md:text-6xl font-light uppercase tracking-tighter leading-none mb-6">
                  Progressive <br /><span className="font-normal text-white">Training.</span>
                </h1>
                <p className="text-white/80 text-sm font-normal leading-relaxed">
                  Pragatisheel Prashikshan: The official advancement programme for Cubs, Scouts, and Rovers.
                </p>
              </div>
            </div>

            {/* Right Image (Grayscale) */}
            <div className="relative w-full h-full md:w-[55%] bg-zinc-900 overflow-hidden">
              <img
                src="https://pbs.twimg.com/media/EDTuZ9DVUAE63Ul.jpg"
                alt="Training and Discipline"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent md:bg-gradient-to-l"></div>
            </div>
          </div>
        </section>

        {/* 2. PREFACE SECTION - Clean Editorial Callout */}
        <section className="py-16 bg-white border-b border-zinc-100">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-amber-500"></div>
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#800000]">Introduction</h2>
                </div>
                <h3 className="text-3xl font-light text-zinc-900 uppercase tracking-tighter leading-none">
                  National <br /><span className="text-[#800000] font-normal">Preface</span>
                </h3>
              </div>
              <div className="lg:w-2/3">
                <div className="bg-zinc-50 p-8 md:p-12 border-l-2 border-[#800000]">
                  <div className="text-base text-zinc-600 leading-relaxed space-y-6 font-normal italic">
                    <p>
                      Hindustan Scouts and Guides now presenting before you the Boy and Girl Programme-Pragatisheel Prashikshan which has been duly approved by the National Training team and National council. You are therefore now requested to adhere to this.
                    </p>
                    <p>
                      Please see that each boy or girl who has been invested in the movement should keep the test card according to the age group and should progress accordingly. He or she should not stay at one stage more than one year. He/She should be trained and encouraged for the next stage.
                    </p>
                    <p>
                      On qualifying the HEERAK/GURU PAD District, Association should register the name of Scouts/ Guides who are qualified and preparing for Rajya Puraskar and President Award.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ADVANCEMENT OVERVIEW - Clean Architectural Cards */}
        <section className="py-20 bg-zinc-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12">
               <h3 className="text-3xl font-light text-zinc-900 uppercase tracking-tighter">Advancement <span className="font-normal text-[#800000]">Stages</span></h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Cub Table */}
              <div className="bg-white border border-zinc-200 group transition-all duration-300 hover:shadow-xl">
                <div className="bg-[#800000] text-white p-5 text-[11px] font-bold uppercase tracking-widest flex justify-between items-center">
                   <span>Cub / Bulbul</span>
                   <span className="text-amber-500">6-10+ Yrs</span>
                </div>
                <div className="p-6 divide-y divide-zinc-100 text-[13px] text-zinc-600 font-normal">
                  <div className="py-3 flex justify-between"><span>1. Praveshika</span><span className="font-bold text-zinc-900">3 Months</span></div>
                  <div className="py-3 flex justify-between"><span>2. Rajat Kiran</span><span className="font-bold text-zinc-900">6 Months</span></div>
                  <div className="py-3 flex justify-between"><span>3. Swarn Kiran</span><span className="font-bold text-zinc-900">6 Months</span></div>
                  <div className="py-3 flex justify-between"><span>4. Heerak Kiran</span><span className="font-bold text-zinc-900">9 Months</span></div>
                  <div className="py-3 flex justify-between text-[#800000] font-bold"><span>5. Rajya Puraskar</span><span>7 Months</span></div>
                </div>
              </div>

              {/* Scout Table */}
              <div className="bg-white border border-zinc-200 group transition-all duration-300 hover:shadow-xl">
                <div className="bg-zinc-900 text-white p-5 text-[11px] font-bold uppercase tracking-widest flex justify-between items-center">
                   <span>Scout / Guide</span>
                   <span className="text-amber-500">11-17+ Yrs</span>
                </div>
                <div className="p-6 divide-y divide-zinc-100 text-[13px] text-zinc-600 font-normal">
                  <div className="py-3 flex justify-between"><span>1. Praveshika</span><span className="font-bold text-zinc-900">3 Months</span></div>
                  <div className="py-3 flex justify-between"><span>2. Rajat Pad</span><span className="font-bold text-zinc-900">6 Months</span></div>
                  <div className="py-3 flex justify-between"><span>3. Swarn Pad</span><span className="font-bold text-zinc-900">9 Months</span></div>
                  <div className="py-3 flex justify-between"><span>4. Heerak Pad</span><span className="font-bold text-zinc-900">9 Months</span></div>
                  <div className="py-3 flex justify-between"><span>5. Rajya Puraskar</span><span className="font-bold text-zinc-900">12 Months</span></div>
                  <div className="py-3 flex justify-between text-amber-600 font-bold"><span>6. President Award</span><span>6 Months</span></div>
                </div>
              </div>

              {/* Rover Table */}
              <div className="bg-white border border-zinc-200 group transition-all duration-300 hover:shadow-xl">
                <div className="bg-[#800000] text-white p-5 text-[11px] font-bold uppercase tracking-widest flex justify-between items-center">
                   <span>Rover / Ranger</span>
                   <span className="text-amber-500">17-35 Yrs</span>
                </div>
                <div className="p-6 divide-y divide-zinc-100 text-[13px] text-zinc-600 font-normal">
                  <div className="py-3 flex justify-between"><span>1. Praveshika</span><span className="font-bold text-zinc-900">3 Months</span></div>
                  <div className="py-3 flex justify-between"><span>2. Rajat Sitara</span><span className="font-bold text-zinc-900">6 Months</span></div>
                  <div className="py-3 flex justify-between"><span>3. Swarn Sitara</span><span className="font-bold text-zinc-900">9 Months</span></div>
                  <div className="py-3 flex justify-between"><span>4. Heerak Sitara</span><span className="font-bold text-zinc-900">12 Months</span></div>
                  <div className="py-3 flex justify-between text-amber-600 font-bold"><span>President Award</span><span>12 Months</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CHAPTER II: CUB / BULBUL SECTION */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center gap-3 mb-12">
               <Zap className="text-amber-500" size={24} />
               <h2 className="text-3xl font-light text-zinc-900 uppercase tracking-tighter">Chapter II: <span className="font-normal text-[#800000]">Cub / Bulbul</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Praveshika */}
              <div className="p-8 border border-zinc-100 bg-zinc-50">
                <h3 className="text-xs font-bold uppercase text-[#800000] tracking-widest mb-6">Praveshika (3 Months)</h3>
                <ul className="space-y-3 text-sm text-zinc-600 font-normal">
                  <li className="flex gap-3"><ArrowRight size={14} className="mt-1 text-amber-500 shrink-0"/> Tell the Jungle story (Cubs) / Story of Tara (Bulbuls)</li>
                  <li className="flex gap-3"><ArrowRight size={14} className="mt-1 text-amber-500 shrink-0"/> Understand Law, Promise, Motto, Prayer and Bulbuls songs.</li>
                  <li className="flex gap-3"><ArrowRight size={14} className="mt-1 text-amber-500 shrink-0"/> Demonstrate smiling, salute and left handshake.</li>
                  <li className="flex gap-3"><ArrowRight size={14} className="mt-1 text-amber-500 shrink-0"/> Do a daily Good-turn at home.</li>
                  <li className="flex gap-3"><ArrowRight size={14} className="mt-1 text-amber-500 shrink-0"/> Grand Howl / Grand Salute (Bulbul).</li>
                </ul>
              </div>

              {/* Rajat Kiran */}
              <div className="p-8 border border-zinc-100 bg-zinc-50">
                <h3 className="text-xs font-bold uppercase text-[#800000] tracking-widest mb-6">Rajat Kiran (6 Months)</h3>
                <ul className="space-y-3 text-sm text-zinc-600 font-normal">
                  <li className="flex gap-3"><ArrowRight size={14} className="mt-1 text-amber-500 shrink-0"/> Keep personal belongings neat & sew buttons.</li>
                  <li className="flex gap-3"><ArrowRight size={14} className="mt-1 text-amber-500 shrink-0"/> Learn to pray before meals and do daily Good-turn.</li>
                  <li className="flex gap-3"><ArrowRight size={14} className="mt-1 text-amber-500 shrink-0"/> Vajrasan, B.P. Exercises & meditation.</li>
                  <li className="flex gap-3"><ArrowRight size={14} className="mt-1 text-amber-500 shrink-0"/> Tell time by clock & Somersault/Skipping.</li>
                  <li className="flex gap-3"><ArrowRight size={14} className="mt-1 text-amber-500 shrink-0"/> Make useful things or collect 10 leaves/5 flowers.</li>
                </ul>
              </div>

              {/* Swarn Kiran */}
              <div className="p-8 border border-zinc-100 bg-white shadow-lg">
                <h3 className="text-xs font-bold uppercase text-[#800000] tracking-widest mb-6">Swarn Kiran</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px] text-zinc-600 font-normal">
                   <p>• Handicraft out of waste</p>
                   <p>• Yoga & Meditation</p>
                   <p>• Tie Reef Knot & Clove hitch</p>
                   <p>• Simple First aid knowledge</p>
                   <p>• Jungle / Bal Shaheed Stories</p>
                   <p>• Compass (8 points)</p>
                   <p>• National & Scout Flags</p>
                   <p>• One day/overnight camp</p>
                </div>
              </div>

              {/* Heerak Kiran */}
              <div className="p-8 border border-zinc-100 bg-white shadow-lg">
                <h3 className="text-xs font-bold uppercase text-[#800000] tracking-widest mb-6">Heerak Kiran</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px] text-zinc-600 font-normal">
                   <p>• Open Savings Account</p>
                   <p>• Grow plants for 6 months</p>
                   <p>• Earn 4 Proficiency badges</p>
                   <p>• Pack/Flock expedition</p>
                   <p>• Good-turn at public place</p>
                   <p>• Sheet Bend & Fisherman knot</p>
                   <p>• Knowledge of State/Town</p>
                   <p>• Welcome social guests</p>
                </div>
              </div>
            </div>

            {/* Rajya Puraskar Callout */}
            <div className="mt-12 bg-zinc-900 text-white p-8 md:p-12 border-l-4 border-amber-500">
               <h3 className="text-2xl font-light uppercase text-amber-500 mb-6">Rajya Puraskar <span className="text-white font-normal">(Cub/Bulbul)</span></h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-zinc-400 font-normal">
                  <p>• Participate in one day Hike & weekend Camp.</p>
                  <p>• Collection of 5 medical leaves/herbs in log-book.</p>
                  <p>• Participate in National Day functions & Rallies.</p>
                  <p>• Earn 4 Proficiency Badges (Swimmer, Cook, etc).</p>
               </div>
            </div>
          </div>
        </section>

        {/* 5. CHAPTER III: SCOUT/GUIDE SECTION */}
        <section className="py-20 bg-zinc-50 border-y border-zinc-100">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center gap-3 mb-12">
               <ShieldCheck className="text-amber-500" size={24} />
               <h2 className="text-3xl font-light text-zinc-900 uppercase tracking-tighter">Chapter III: <span className="font-normal text-[#800000]">Scout / Guide</span></h2>
            </div>

            <div className="space-y-6">
              {[
                { title: "Praveshika (3 Months)", items: ["HSGA History", "Prayer & Flag Song", "Law & Promise", "Uniform & Emblem", "Yoga & Breathing", "Good turn record"] },
                { title: "Rajat Pad (6 Months)", items: ["Patrol system", "16 directions compass", "Flag ceremony", "Woodcraft signs", "First-Aid box", "4km Patrol hike"] },
                { title: "Swarn Pad (9 Months)", items: ["Pioneering & Lashing", "Bowline & Timber hitch", "Cooking for Patrol", "Mapping & Stars", "10km nature study", "3 Proficiency badges"] },
                { title: "Heerak Pad (12 Months)", items: ["Artificial respiration", "Fracture care", "Monkey bridge", "30-word Morse message", "30km Cycle Hike", "Culture study of states"] }
              ].map((stage, i) => (
                <div key={stage.title} className="bg-white border border-zinc-200 p-8 flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-1/4">
                    <span className="text-amber-500 font-black text-4xl opacity-20">0{i+1}</span>
                    <h4 className="text-sm font-bold uppercase text-[#800000] mt-1">{stage.title}</h4>
                  </div>
                  <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-zinc-500 font-normal">
                    {stage.items.map(item => <p key={item}>• {item}</p>)}
                  </div>
                </div>
              ))}
            </div>

            {/* Rajya Puraskar Scout/Guide */}
            <div className="mt-12 bg-[#800000] text-white p-10 md:p-14 shadow-2xl relative overflow-hidden">
               <Award size={120} className="absolute right-0 bottom-0 text-white/5 -mb-6 -mr-6" />
               <div className="relative z-10 max-w-2xl">
                  <h3 className="text-3xl font-light uppercase text-amber-400 mb-6">Rajya Puraskar <span className="text-white font-normal">(Scout / Guide)</span></h3>
                  <div className="space-y-4 text-base text-white/80 font-normal leading-relaxed">
                    <p>• Participate in 3 day Pradeshik Puraskar test camp organized by State.</p>
                    <p>• Render social service (12 hours) in slums, colony, mela or hospital.</p>
                    <p>• Take a project on: Sarva Shiksha Abhiyan, Environment or Sanitation.</p>
                    <p>• Qualify any 4 badges: Social worker, Literacy, Population educator, etc.</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 6. CHAPTER IV: ROVER-RANGER SECTION */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex items-center gap-3 mb-12">
               <BookOpen className="text-amber-500" size={24} />
               <h2 className="text-3xl font-light text-zinc-900 uppercase tracking-tighter">Chapter IV: <span className="font-normal text-[#800000]">Rover / Ranger</span></h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                 <div className="p-8 border border-zinc-100 bg-zinc-50 sticky top-32">
                    <h3 className="text-xl font-bold uppercase text-[#800000] mb-6">Praveshika</h3>
                    <p className="text-sm text-zinc-500 font-normal leading-relaxed">
                      Knowledge of HSGA, Law/Promise, Motto, Uniform, Flag, Yoga, and detailed study of life of two great men of India.
                    </p>
                 </div>
              </div>

              <div className="lg:col-span-8 space-y-12">
                 <div className="group">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#800000] mb-4">Rajat Sitara (Silver Star)</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-600 font-normal">
                       <p>• Work for happy family life</p>
                       <p>• Develop vocational hobbies</p>
                       <p>• Chair group discussions</p>
                       <p>• Handicraft centre participation</p>
                       <p>• Pollution/Family education paper</p>
                       <p>• 1-day service camp participation</p>
                    </div>
                 </div>

                 <div className="group pt-8 border-t border-zinc-100">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-[#800000] mb-4">Daksh Badge (Expert)</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-600 font-normal">
                       <p>• Rights & duties of citizen</p>
                       <p>• Behavior correction study</p>
                       <p>• Religious tolerance paper</p>
                       <p>• Help disabled/sick for 1 month</p>
                       <p>• Protect public properties campaign</p>
                       <p>• Literacy centre tutor work</p>
                       <p>• Blood Donation / AIDS awareness</p>
                       <p>• Assistant in Scout/Guide camp</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* PRESIDENT AWARD - The Peak */}
            <div className="mt-20 bg-zinc-950 text-white p-10 md:p-16 border-t-4 border-amber-500 shadow-2xl">
               <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                  <div className="md:w-1/2">
                    <h3 className="text-4xl font-light text-amber-500 uppercase tracking-tighter mb-8 leading-tight">President <br /><span className="text-white font-normal">Rover/Ranger Award</span></h3>
                    <div className="space-y-4 text-zinc-400 text-sm font-normal">
                       <p>• Min 19 years old with 1 year as Daksh.</p>
                       <p>• Cross country overnight Adventure hike.</p>
                       <p>• Community development (Health/Environment).</p>
                       <p>• Lead contingent to neighboring state activity.</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-zinc-900 p-8 border border-zinc-800">
                    <div className="space-y-4 text-zinc-400 text-sm font-normal">
                       <p>• Render 1 week service at National events.</p>
                       <p>• Outreach: Community singing and Pen friendship.</p>
                       <p>• Sustained Traffic Control campaign (3 months).</p>
                       <p>• Partner with Rotary, Red Cross, or Jaycees.</p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-zinc-800">
                       <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500">Highest Distinction</p>
                    </div>
                  </div>
               </div>
            </div>

            {/* BADGES SUMMARY */}
            <div className="mt-20 pt-10 border-t border-zinc-100">
               <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#800000] mb-8">Proficiency Badges</h3>
               <div className="flex flex-wrap gap-2">
                 {[
                  "Blood Donor", "Civil Defense", "Self Defense", "Community Worker", "Climber", "Folk Life", 
                  "Education for All", "Population Education", "Rambler", "Soil Conservation", "World Conservation", 
                  "World Friendship", "Yoga", "Salesman", "Sanitation Promoter", "Ecologist", "Family Life Education"
                 ].map(badge => (
                   <span key={badge} className="px-3 py-1 bg-zinc-100 border border-zinc-200 text-zinc-500 text-[10px] font-bold uppercase tracking-wider">
                     {badge}
                   </span>
                 ))}
               </div>
               <div className="mt-12 flex flex-col md:flex-row justify-between gap-8 items-center bg-zinc-50 p-8 border border-zinc-100">
                  <div className="max-w-xl">
                    <h4 className="text-sm font-bold uppercase text-zinc-900 mb-2">In-Service Leadership</h4>
                    <p className="text-sm text-zinc-500 font-normal leading-relaxed">
                      On completion of 21 (Rover) or 25 (Ranger) years of age, members should take up adult leadership and definite jobs of community service outside the movement.
                    </p>
                  </div>
                  <button className="bg-[#800000] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-zinc-900 transition-colors">
                    Join Leadership
                  </button>
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}