"use client";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  GraduationCap, 
  BookOpen, 
  ShieldCheck,
  Zap
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
        {/* 1. FULL WIDTH HERO BANNER */}
        <section className="relative h-[380px] w-full overflow-hidden bg-zinc-900">
          <div className="absolute inset-0 h-full w-full">
            <img
              src="https://pbs.twimg.com/media/EDTuZ9DVUAE63Ul.jpg"
              alt="Training and Discipline"
              className="absolute right-0 h-full w-full md:w-[70%] object-cover object-center opacity-60 grayscale"
            />
          </div>

          <div
            className="absolute inset-0 flex h-full w-full flex-col justify-center bg-emerald-800 text-white md:w-[48%] px-8 md:px-16 lg:px-24"
            style={{ clipPath: "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)" }}
          >
            <div className="max-w-md animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={20} className="text-emerald-300" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-200">
                  Prashiksham Yojna
                </span>
              </div>
              <h1 className="text-3xl font-black md:text-4xl lg:text-5xl uppercase tracking-tighter leading-none">
                Progressive <br /> Training
              </h1>
              <p className="mt-4 text-sm md:text-base font-medium text-emerald-50/80 leading-relaxed">
                Pragatisheel Prashikshan: The official advancement programme for Cubs, Scouts, and Rovers.
              </p>
            </div>
          </div>
        </section>

        {/* 2. PREFACE SECTION */}
        <section className="py-12 border-b border-zinc-100">
          <div className="mx-auto max-w-5xl px-6">
            <div className="bg-emerald-50 p-8 border-l-4 border-emerald-700">
              <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-800 mb-4">Preface</h2>
              <div className="text-sm text-zinc-700 leading-relaxed space-y-4">
                <p>
                  Hindustan Scouts and Guides now presenting before you the Boy and Girl Programme-Pragatisheel Prashikshan which has been duly approved by the National Training team and National council. You are therefore now requested to adhere to this. The tests of various stages have also been incorporated in the testcards. It is upto you how you carry its out taking rules and regulation into consideration.
                </p>
                <p>
                  Please see that each boy or girl who has been invested in the movement should keep the test card according to the age group and should progress accordingly. He or she should not stay at one stage more than one year. He/She should be trained and encouraged for the next stage. The Branch Associations are also requested to arrange for their badges and special proficiency badges, so that interest of boy & girl is continued. They are also requested to contact their ‘State Training Commissioner’ for training camps and Training Instructors’.
                </p>
                <p>
                  The Scouters and Guiders should be very particular in sending the ‘Annual Reports’ along with their census to their Districts. Associations and District Associations to the State Head Quarters and S.H.Q. in turn to N.H.Q. On qualifying the HEERAK/GURU PAD District, Association should register the name of Scouts/ Guides who are qualified and preparing for Rajya Puraskar and President Award.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ADVANCEMENT OVERVIEW (TABLE LOOK) */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-lg font-bold text-zinc-900 mb-6">Advancement Periods & Stages</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {/* Cub Table */}
              <div className="border border-zinc-200 rounded-lg overflow-hidden shadow-md flex flex-col">
                <div className="bg-emerald-700 text-white p-3 text-[11px] font-black uppercase tracking-widest">Cub / Bulbul (6-10+)</div>
                <div className="divide-y divide-zinc-100 text-[12px] text-black">
                  <div className="px-3 py-2.5 flex justify-between items-center"><span>1. Praveshika</span><span className="font-bold">3 Months</span></div>
                  <div className="px-3 py-2.5 flex justify-between items-center bg-zinc-50"><span>2. Rajat Kiran</span><span className="font-bold">6 Months</span></div>
                  <div className="px-3 py-2.5 flex justify-between items-center"><span>3. Swarn Kiran</span><span className="font-bold">6 Months</span></div>
                  <div className="px-3 py-2.5 flex justify-between items-center bg-zinc-50"><span>4. Heerak Kiran</span><span className="font-bold">9 Months</span></div>
                  <div className="px-3 py-2.5 flex justify-between items-center bg-zinc-50 font-black uppercase"><span>5. Rajya Puraskar</span><span>7 Months</span></div>
                </div>
              </div>
              {/* Scout Table */}
              <div className="border border-zinc-200 rounded-lg overflow-hidden shadow-md flex flex-col">
                <div className="bg-blue-700 text-white p-3 text-[11px] font-black uppercase tracking-widest">Scout / Guide (11-17+)</div>
                <div className="divide-y divide-zinc-100 text-[12px] text-black">
                  <div className="px-3 py-2.5 flex justify-between items-center"><span>1. Praveshika</span><span className="font-bold">3 Months</span></div>
                  <div className="px-3 py-2.5 flex justify-between items-center bg-zinc-50"><span>2. Rajat Pad</span><span className="font-bold">6 Months</span></div>
                  <div className="px-3 py-2.5 flex justify-between items-center"><span>3. Swarn Pad</span><span className="font-bold">9 Months</span></div>
                  <div className="px-3 py-2.5 flex justify-between items-center bg-zinc-50"><span>4. Heerak Pad</span><span className="font-bold">9 Months</span></div>
                  <div className="px-3 py-2.5 flex justify-between items-center"><span>5. Rajya Puraskar</span><span className="font-bold">12 Months</span></div>
                  <div className="px-3 py-2.5 flex justify-between items-center bg-zinc-50 font-black uppercase"><span>6. President Award</span><span>6 Months</span></div>
                </div>
              </div>
              {/* Rover Table */}
              <div className="border border-zinc-200 rounded-lg overflow-hidden shadow-md flex flex-col">
                <div className="bg-zinc-800 text-white p-3 text-[11px] font-black uppercase tracking-widest">Rover / Ranger (17-35)</div>
                <div className="divide-y divide-zinc-100 text-[12px] text-black">
                  <div className="px-3 py-2.5 flex justify-between items-center"><span>1. Praveshika</span><span className="font-bold">3 Months</span></div>
                  <div className="px-3 py-2.5 flex justify-between items-center bg-zinc-50"><span>2. Rajat Sitara</span><span className="font-bold">6 Months</span></div>
                  <div className="px-3 py-2.5 flex justify-between items-center"><span>3. Swarn Sitara</span><span className="font-bold">9 Months</span></div>
                  <div className="px-3 py-2.5 flex justify-between items-center bg-zinc-50"><span>4. Heerak Sitara</span><span className="font-bold">12 Months</span></div>
                  <div className="px-3 py-2.5 flex justify-between items-center bg-zinc-50 font-black uppercase"><span>President Award</span><span>12 Months</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CHAPTER II: CUB / BULBUL SECTION */}
        <section className="py-16 bg-zinc-50">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-xl font-bold text-emerald-800 mb-8 flex items-center gap-3">
              <Zap className="shrink-0" size={24} /> CHAPTER II : CUB / BULBUL SECTION
            </h2>

            <div className="space-y-12">
              {/* Praveshika */}
              <div className="bg-white p-8 border border-zinc-200 rounded shadow-sm">
                <h3 className="text-sm font-bold uppercase text-emerald-700 mb-4">Praveshika (Period – Three months)</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-700">
                  <li>1. Tell the first Jungle story (Cubs) / Story of Tara (Bulbuls)</li>
                  <li>2. Understand Cub/Bulbul Law, Promise, Motto, Prayer and Bulbuls six-songs.</li>
                  <li>3. Demonstrate correctly smiling, salute and left handshake.</li>
                  <li>4. Do a daily Good-turn at home.</li>
                  <li>5. Grand Howl (for Cubs), Grand Salute (for Bulbul)</li>
                  <li>6. Whistle and Hand Signals.</li>
                </ul>
                <p className="mt-6 text-xs text-zinc-500 italic">Note:- After qualifying Praveshika the Cubmaster/Flokleader will arrange the investiture ceremony.</p>
              </div>

              {/* Rajat Kiran */}
              <div className="bg-white p-8 border border-zinc-200 rounded shadow-sm">
                <h3 className="text-sm font-bold uppercase text-emerald-700 mb-4">Rajat Kiran (Period – 6 months)</h3>
                <div className="space-y-4 text-sm text-zinc-700">
                  <p>1. Know how to keep personal belongings neat and be able to sew buttons.</p>
                  <p>2. Learn to pray before meals.</p>
                  <p>3. Do daily Good-turn at home and at school.</p>
                  <p>4. Do Vajrasan, two B.P. Exercises -Toe touching and Knee bending and meditation.</p>
                  <p>5. Be able to tell time by clock.</p>
                  <p>6. Demonstrate any two: Somersault, Leaf Prog, Hopping, Skipping, Throwing ball.</p>
                  <p>7. Make a useful thing or collection of 10 leaves and 5 flowers.</p>
                  <p>8. Demonstrate any three: Ride bicycle, keep place neat, use telephone, Neighborhood knowledge, Unit Leader address, post an envelope.</p>
                  <p>9. Sing any prayer, Flag song and National Anthem.</p>
                </div>
              </div>

              {/* Swarn Kiran */}
              <div className="bg-white p-8 border border-zinc-200 rounded shadow-sm">
                <h3 className="text-sm font-bold uppercase text-emerald-700 mb-4">Swarn Kiran</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-700">
                  <p>1. Prepare handicraft out of waste.</p>
                  <p>2. Health rules, Yoga (Shashankasan, etc) & Meditation.</p>
                  <p>3. Tie Reef Knot and clove hitch.</p>
                  <p>4. First aid of simple wound.</p>
                  <p>5. Jungle/Bal Shaheed Stories.</p>
                  <p>6. Good turns with the Toli.</p>
                  <p>7. Eight principal points of compass.</p>
                  <p>8. Knowledge of Flags (National, Scout, WFIS).</p>
                  <p>9. Play Sense and Jungle games.</p>
                  <p>10. Demonstrate: Hurricane lantern, delivery verbal message, sow seeds, follow a trail.</p>
                  <p>11. Participate in one day/overnight camp.</p>
                  <p>12. Care of valuable things in house.</p>
                </div>
              </div>

              {/* Heerak Kiran */}
              <div className="bg-white p-8 border border-zinc-200 rounded shadow-sm">
                <h3 className="text-sm font-bold uppercase text-emerald-700 mb-4">Heerak Kiran</h3>
                <div className="space-y-4 text-sm text-zinc-700">
                  <p>1. Handicraft-make a useful thing.</p>
                  <p>2. Open a small savings Account in post office or bank.</p>
                  <p>3. Grow and care for two plants for six months.</p>
                  <p>4. Earn one proficiency badge from each group: (Aider, Collector, Athlete, Artist/Cook).</p>
                  <p>5. Participate in pack/flock expedition.</p>
                  <p>6. Participate in good-turn activity at public/historical place.</p>
                  <p>7. Participate in overnight camp.</p>
                  <p>8. Use sheet Bend, Fisherman knot and one round/two half hitches.</p>
                  <p>9. Knowledge of colony/village/town & State.</p>
                  <p>10. Know to welcome and receive a guest in a Social way.</p>
                </div>
              </div>

              {/* Rajya Puraskar */}
              <div className="bg-white p-8 border border-emerald-200 rounded shadow-md border-t-4 border-t-emerald-700">
                <h3 className="text-sm font-bold uppercase text-emerald-700 mb-4 flex items-center gap-2">
                   Rajya Puraskar (Cub/Bulbul)
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-zinc-700">
                  <li>1. Participate in one day Hike.</li>
                  <li>2. Participate in one weekend Camp.</li>
                  <li>3. Collection of 5 medical leaves/herbs in log-book.</li>
                  <li>4. Participate in any National Day function.</li>
                  <li>5. Participate in Distt./State/National Rally.</li>
                  <li>6. Earn any 4 Proficiency Badges (Swimmer, Cook, Naturalist, etc).</li>
                </ul>
                <p className="mt-4 text-xs font-bold text-zinc-500">Note: Submit log books for Rajya Puraskar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CHAPTER III: SCOUT/GUIDE SECTION */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-xl font-bold text-blue-800 mb-8 flex items-center gap-3 uppercase tracking-tighter">
              <ShieldCheck size={24} /> CHAPTER III : SCOUT/GUIDE SECTION (11-17+)
            </h2>

            <div className="space-y-8">
              {/* Praveshika */}
              <div className="border border-zinc-200 p-6 rounded-lg">
                <h4 className="font-bold text-zinc-900 mb-4">Praveshika (3 Months)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm text-zinc-600">
                  <p>1. Knowledge of H.S.G.A. Association.</p>
                  <p>2. HSG Prayer and Flag Song.</p>
                  <p>3. Scout/Guide Law & Promise.</p>
                  <p>4. Motto, Sign, Salute, Left handshake, Emblem.</p>
                  <p>5. Uniform and how to wear it.</p>
                  <p>6. Whistle and hand signals.</p>
                  <p>7. Significance of HSG and National Flag.</p>
                  <p>8. Sing National Anthem, Vande Matram, Sare Jahan se Achchha.</p>
                  <p>9. Good turn for 30 days (keep record).</p>
                  <p>10. Exercise, Yoga and Breathing (Neck, eyes, hands).</p>
                  <p>11. 4 Aasans: Vajrasan, Padmasan, Tadasan, Shavasan.</p>
                  <p>12. Life of two great men of India.</p>
                </div>
              </div>

              {/* Rajat Pad */}
              <div className="border border-zinc-200 p-6 rounded-lg bg-blue-50/30">
                <h4 className="font-bold text-zinc-900 mb-4">Rajat Pad (6 Months)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm text-zinc-600">
                  <p>1. Patrol system and organization.</p>
                  <p>2. 16 directions by compass.</p>
                  <p>3. Flag ceremony practice.</p>
                  <p>4. Woodcraft signs.</p>
                  <p>5. Whipping, Reef knot, sheet-band, clove hitch, etc.</p>
                  <p>6. Rules of health and First-Aid box knowledge.</p>
                  <p>7. Triangular Bandages, Scratches, burns, cuts.</p>
                  <p>8. Use of staff and simple drill.</p>
                  <p>9. 4km Patrol hike.</p>
                  <p>10. Useful handicraft or gadget.</p>
                  <p>11. Cleanliness campaign for 5 days.</p>
                  <p>12. Surya Namaskar and 4 Asans.</p>
                </div>
              </div>

              {/* Swarn Pad */}
              <div className="border border-zinc-200 p-6 rounded-lg">
                <h4 className="font-bold text-zinc-900 mb-4">Swarn Pad (9 Months)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm text-zinc-600">
                  <p>1. Pioneering: Lashing (Square, Diagonal, etc).</p>
                  <p>2. Bowline, timber hitch, figure of eight.</p>
                  <p>3. Improvised shelter and first aid (stretcher).</p>
                  <p>4. Fire building and safety (Kerosene/Gas).</p>
                  <p>5. Cooking for Patrol (Breakfast, Lunch, Dinner).</p>
                  <p>6. Estimation: Self measurement, width, height.</p>
                  <p>7. Direction by stars and mapping.</p>
                  <p>8. Signaling: Semaphore MORSE.</p>
                  <p>9. 10km nature study hike.</p>
                  <p>10. Social service (12 hours) and Pollution projects.</p>
                  <p>11. Kunjal, Satkarm and Yoga (Bhujangasan, etc).</p>
                  <p>12. Earn any 3 proficiency badges (Cook, Gardener, etc).</p>
                </div>
              </div>

              {/* Heerak Pad */}
              <div className="border border-zinc-200 p-6 rounded-lg bg-zinc-50">
                <h4 className="font-bold text-zinc-900 mb-4">Heerak Pad (12 Months)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 text-sm text-zinc-600">
                  <p>1. First-Aid: Artificial respiration, human body parts.</p>
                  <p>2. Fractures (Collar bone, jaw), pressure points.</p>
                  <p>3. Shock, electric shock, choking aid.</p>
                  <p>4. Camp Crafts: Pitching tents, tool use.</p>
                  <p>5. Pioneering: Monkey bridge, Signaling tower, etc.</p>
                  <p>6. Signaling: 30-word message Morse/Semaphore.</p>
                  <p>7. Mapping: Route map, conventional signs.</p>
                  <p>8. Hike: Cycle (30km Scout / 20km Guide) or Foot (10km / 8km).</p>
                  <p>9. Earn any 3 proficiency badges (Citizen, Camper, etc).</p>
                  <p>10. Yoga: Sarvongasan, Sheetali Pranayam.</p>
                  <p>11. Repair: Taps, Gas stove, chairs.</p>
                  <p>12. Culture study of two Indian states.</p>
                </div>
              </div>

              {/* Rajya Puraskar Scout/Guide */}
              <div className="border-2 border-blue-600 p-8 rounded-lg bg-blue-50">
                <h4 className="font-bold text-blue-900 mb-4 text-center">Rajya Puraskar (6 Months)</h4>
                <div className="text-sm text-blue-800 space-y-4">
                  <p>• Participate in 3 day Pradeshik Puraskar test camp organized by State.</p>
                  <p>• Render social service (12 hours) in slums, colony, mela or hospital.</p>
                  <p>• Take a project on: Sarva Shiksha Abhiyan, Environment or Sanitation.</p>
                  <p>• Qualify any 4 badges: Social worker, Literacy, Population educator, etc.</p>
                  <p className="font-bold mt-4">Note: Rajya Puraskar badge worn on left arm. Log-books required for camp.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CHAPTER IV: ROVER-RANGER SECTION */}
        <section className="py-16 bg-zinc-900 text-white">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-xl font-bold text-emerald-400 mb-8 flex items-center gap-3 uppercase">
              <BookOpen size={24} /> CHAPTER IV : ROVER-RANGER SECTION (17-35)
            </h2>

            <div className="space-y-12">
              {/* Praveshika */}
              <div>
                <h3 className="text-emerald-300 font-bold mb-4">Praveshika (3 Months)</h3>
                <p className="text-sm text-zinc-400">Includes Knowledge of HSGA, Law/Promise, Motto, Uniform, Flag, Yoga, and Life of two great men.</p>
              </div>

              {/* Rajat Sitara */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-zinc-400">
                <div>
                  <h3 className="text-white font-bold mb-4">Rajat Sitara Requirements</h3>
                  <p>1. Work for a happy family and relieve hardworking members.</p>
                  <p>2. Develop hobbies/vocational activities.</p>
                  <p>3. Chair group discussions (at least two).</p>
                  <p>4. Participate in Hobbies/Handicraft centre.</p>
                  <p>5. Paper on pollution/family life education.</p>
                </div>
                <div>
                  <p>6. Attend three prayer meetings or 1-day service camp.</p>
                  <p>7. Sustained service in Pack/Troop (3 months).</p>
                  <p>8. Knowledge of pioneering/camping (Tritiya pad Level).</p>
                  <p>9. Organise games for local children for a month.</p>
                  <p>10. Qualify Badge: Literacy, Blood Donor, etc.</p>
                </div>
                <div className="col-span-2 bg-emerald-950/40 p-4 border border-emerald-800 rounded">
                  <p className="text-xs italic">Note: Kushal Badge (Green shoulder flashes with Red R) issued on completion.</p>
                </div>
              </div>

              {/* DAKSH BADGE */}
              <div className="border-t border-zinc-800 pt-8">
                <h3 className="text-white font-bold mb-6">Daksh Badge Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm text-zinc-400">
                  <p>1. Rights and duties of a citizen discussion.</p>
                  <p>2. Transactional Analysis study and behavior correction.</p>
                  <p>3. Paper on religious tolerance; attend other religious functions.</p>
                  <p>4. Upkeep of public building or help disabled/sick for a month.</p>
                  <p>5. Protect public properties campaign.</p>
                  <p>6. Literacy centre work or tutor boys/girls for examinations.</p>
                  <p>7. Help in: Blood Donation, AIDS awareness, or Eye operation camps.</p>
                  <p>8. Work as Assistant in Scout/Guide camp or Rally.</p>
                  <p>9. Qualify: Rambler’s / Ecologist / Rural worker badge.</p>
                </div>
              </div>

              {/* PRESIDENT AWARD */}
              <div className="border-2 border-emerald-500 p-8 rounded-lg bg-emerald-900/20">
                <h3 className="text-xl font-bold text-emerald-400 mb-6 text-center">PRESIDENT ROVER/RANGER AWARD (1 Year)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-zinc-300">
                  <div className="space-y-3">
                    <p>• Age: Min 19 years. Work at least 1 year as Daksh.</p>
                    <p>• Subject: World affairs, Sports, or betterment of humanity.</p>
                    <p>• Priority: Discuss how to best help country/community.</p>
                    <p>• Hike: Cross country overnight Adventure hike.</p>
                    <p>• Project: Community development (Health/Environment/Nutrition).</p>
                  </div>
                  <div className="space-y-3">
                    <p>• Leadership: Lead contingent to neighboring state activity.</p>
                    <p>• Service: Render 1 week service at State/National events.</p>
                    <p>• Outreach: Community singing and Pen friendship.</p>
                    <p>• Traffic Control: Sustained campaign for 3 months.</p>
                    <p>• Partner with: Lion Club, Rotary, Red Cross, or Jaycees.</p>
                  </div>
                </div>
                <div className="mt-8 p-4 bg-emerald-500 text-zinc-900 rounded font-bold text-center uppercase tracking-widest text-xs">
                  Highest Unique Distinction in the Movement
                </div>
              </div>

              {/* PROFICIENCY BADGES ROVER/RANGER */}
              <div className="border-t border-zinc-800 pt-8">
                <h3 className="text-emerald-400 font-bold mb-4">Rover-Ranger Proficiency Badges</h3>
                <div className="flex flex-wrap gap-2 text-[10px] uppercase font-bold text-zinc-500">
                   {[
                    "Blood Donor", "Civil Defense", "Self Defense", "Community Worker", "Climber", "Folk Life", 
                    "Education for All", "Population Education", "Rambler", "Soil Conservation", "World Conservation", 
                    "World Friendship", "Personality Development", "Yoga", "Salesman", "Sanitation Promoter", 
                    "Ecologist", "Family Life Education", "Healthy man", "Home Nurse", "Public Health man", 
                    "Ambulance Man", "Crafts Man/Woman"
                   ].map(badge => (
                     <span key={badge} className="bg-zinc-800 px-3 py-1 rounded border border-zinc-700">{badge}</span>
                   ))}
                </div>
                <p className="mt-6 text-xs text-zinc-500 italic">
                  Note: Rover Section in red on grey background. Ranger Section in red on white background.
                </p>
              </div>

              {/* IN SERVICE */}
              <div className="pt-8 border-t border-zinc-800">
                <h3 className="text-white font-bold mb-4">ROVER-IN SERVICE / RANGER-IN SERVICE</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  On completion of 21 (Rover) or 25 (Ranger) years of age, members should take up adult leadership. Members will embark upon definite jobs of community service outside the movement, with records maintained by the Crew/Team.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
