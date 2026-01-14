"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, Users, UserCog, School, 
  Plus, IndianRupee, LogOut, Menu, X, Copy, ShieldCheck
} from "lucide-react";

export default function AdminDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [schools, setSchools] = useState<Array<{id:string; name:string; password:string}>>([]);
  const [trainers, setTrainers] = useState<Array<{id:string; name:string; schoolId:string; password:string}>>([]);
  
  const [schoolName, setSchoolName] = useState("");
  const [schoolIdInput, setSchoolIdInput] = useState("");
  const [schoolPasswordInput, setSchoolPasswordInput] = useState("");
  
  const [trainerName, setTrainerName] = useState("");
  const [trainerIdInput, setTrainerIdInput] = useState("");
  const [trainerPasswordInput, setTrainerPasswordInput] = useState("");
  const [selectedSchoolForTrainer, setSelectedSchoolForTrainer] = useState("");

  const copyText = async (text:string) => { 
    try { 
      await navigator.clipboard.writeText(text); 
    } catch {} 
  };

  useEffect(() => {
    const s = localStorage.getItem("hsgatg_schools");
    const t = localStorage.getItem("hsgatg_trainers");
    if (s) { try { setSchools(JSON.parse(s)); } catch {} }
    if (t) { try { setTrainers(JSON.parse(t)); } catch {} }
  }, []);

  useEffect(() => {
    localStorage.setItem("hsgatg_schools", JSON.stringify(schools));
  }, [schools]);

  useEffect(() => {
    localStorage.setItem("hsgatg_trainers", JSON.stringify(trainers));
  }, [trainers]);

  const createSchool = () => {
    if (!schoolName.trim() || !schoolIdInput.trim() || !schoolPasswordInput.trim()) return;
    const entry = { id: schoolIdInput.trim(), name: schoolName.trim(), password: schoolPasswordInput.trim() };
    setSchools(prev => [...prev, entry]);
    setSchoolName(""); setSchoolIdInput(""); setSchoolPasswordInput("");
  };

  const createTrainer = () => {
    if (!trainerName.trim() || !trainerIdInput.trim() || !trainerPasswordInput.trim() || !selectedSchoolForTrainer.trim()) return;
    const entry = { id: trainerIdInput.trim(), name: trainerName.trim(), schoolId: selectedSchoolForTrainer.trim(), password: trainerPasswordInput.trim() };
    setTrainers(prev => [...prev, entry]);
    setTrainerName(""); setTrainerIdInput(""); setTrainerPasswordInput(""); setSelectedSchoolForTrainer("");
  };

  const stats = [
    { label: "Total Students", value: "1,250", icon: <Users size={20} />, color: "bg-[#800000]" },
    { label: "Total Trainers", value: trainers.length.toString(), icon: <UserCog size={20} />, color: "bg-zinc-800" },
    { label: "Total Schools", value: schools.length.toString(), icon: <School size={20} />, color: "bg-[#800000]" },
    { label: "Active Batches", value: "8", icon: <LayoutDashboard size={20} />, color: "bg-zinc-800" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex font-normal text-zinc-900">
      {/* SIDEBAR */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-zinc-950 text-white transition-all duration-300 flex flex-col fixed h-full z-50`}>
        <div className="p-6 border-b border-zinc-900 flex items-center justify-between">
          <div className={`flex items-center gap-3 ${!isSidebarOpen && 'hidden'}`}>
             <div className="w-8 h-8 bg-[#800000] flex items-center justify-center font-black rounded-sm text-xs">TG</div>
             <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-200">HSGA <span className="text-amber-500">Admin</span></span>
          </div>
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-zinc-500 hover:text-white transition-colors">
            {isSidebarOpen ? <X size={18} /> : <Menu size={18} className="mx-auto" />}
          </button>
        </div>

        <nav className="flex-grow p-4 space-y-1">
          {[
            { label: "Dashboard", icon: <LayoutDashboard size={18} />, active: true },
            { label: "Schools", icon: <School size={18} /> },
            { label: "Trainers", icon: <UserCog size={18} /> },
            { label: "Accounting", icon: <IndianRupee size={18} /> },
          ].map((item, i) => (
            <Link key={i} href="#" className={`flex items-center gap-4 px-4 py-3 rounded-md transition-all ${item.active ? 'bg-[#800000] text-white shadow-lg' : 'text-zinc-500 hover:bg-zinc-900 hover:text-zinc-200'}`}>
              {item.icon}
              <span className={`text-[10px] font-bold uppercase tracking-widest ${!isSidebarOpen && 'hidden'}`}>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-zinc-900">
           <Link href="/" className="flex items-center gap-4 px-4 py-3 text-zinc-500 hover:text-red-500 transition-all group">
              <LogOut size={18} />
              <span className={`text-[10px] font-bold uppercase tracking-widest ${!isSidebarOpen && 'hidden'}`}>Exit System</span>
           </Link>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className={`flex-grow transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <header className="h-20 bg-white border-b border-zinc-200 flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <ShieldCheck size={20} className="text-[#800000]" />
            <h1 className="text-xl font-light text-zinc-900 uppercase tracking-tighter">Central <span className="font-normal text-[#800000]">Workspace</span></h1>
          </div>
          
          <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-[11px] font-bold text-zinc-900 uppercase">Super Admin</p>
                <p className="text-[9px] text-amber-600 font-bold uppercase tracking-widest">Master Credentials</p>
              </div>
              <div className="w-10 h-10 bg-zinc-100 border border-zinc-200 rounded-full flex items-center justify-center text-[#800000] font-black text-xs shadow-sm">HQ</div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-6 border border-zinc-200 rounded-sm shadow-sm relative overflow-hidden group hover:border-[#800000] transition-all">
                <div className={`absolute -right-2 -top-2 p-6 ${stat.color} text-white opacity-5 rounded-full`}>
                  {stat.icon}
                </div>
                <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                <p className="text-2xl font-light text-zinc-900">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* SCHOOL PROVISIONING CARD */}
            <div className="bg-white border border-zinc-200 rounded-sm shadow-sm overflow-hidden flex flex-col">
                <div className="p-5 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
                  <div>
                    <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">School Access Management</h3>
                    <p className="text-[9px] text-zinc-400 uppercase font-bold mt-0.5">Provision Institutional Accounts</p>
                  </div>
                  <School size={16} className="text-[#800000] opacity-40"/>
                </div>

                <div className="p-6 space-y-8 flex-grow">
                  {/* Form Fields with High Visibility Labels */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Institution Name</label>
                        <input type="text" value={schoolName} onChange={(e)=>setSchoolName(e.target.value)} placeholder="e.g. Model High School" className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-4 py-2.5 text-sm focus:bg-white focus:ring-1 focus:ring-[#800000] focus:border-[#800000] outline-none transition-all" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Unique School ID</label>
                        <input type="text" value={schoolIdInput} onChange={(e)=>setSchoolIdInput(e.target.value)} placeholder="TS-SCH-0000" className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-4 py-2.5 text-sm focus:bg-white focus:ring-1 focus:ring-[#800000] focus:border-[#800000] outline-none transition-all" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Default Access Password</label>
                        <input type="text" value={schoolPasswordInput} onChange={(e)=>setSchoolPasswordInput(e.target.value)} placeholder="Set secure password" className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-4 py-2.5 text-sm focus:bg-white focus:ring-1 focus:ring-[#800000] focus:border-[#800000] outline-none transition-all" />
                      </div>
                    </div>
                    <button onClick={createSchool} className="w-full bg-[#800000] text-white py-3.5 rounded-md text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-900 transition-all shadow-lg shadow-maroon-900/10 mt-2">
                      Initialize Account
                    </button>
                  </div>
                  
                  {/* Mini-Directory */}
                  <div className="space-y-3 pt-6 border-t border-zinc-100">
                    <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                        <Plus size={10} className="text-amber-600"/> Latest Registry Entries
                    </p>
                    <div className="space-y-2">
                      {schools.length === 0 && <p className="text-[10px] text-zinc-300 italic py-4 text-center">No schools registered in this session.</p>}
                      {schools.slice(-3).reverse().map(s=>(
                        <div key={s.id} className="flex items-center justify-between p-3 bg-zinc-50/50 border border-zinc-100 rounded-md group hover:bg-white transition-all">
                          <div>
                            <p className="text-xs font-bold text-zinc-800 uppercase leading-none mb-1">{s.name}</p>
                            <p className="text-[9px] text-zinc-400 uppercase font-bold">Registry ID: {s.id}</p>
                          </div>
                          <button onClick={()=>copyText(s.password)} className="p-2 hover:bg-[#800000]/10 rounded-full transition-colors text-[#800000] group-hover:scale-110" title="Copy Password">
                            <Copy size={14}/>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
            </div>

            {/* TRAINER PROVISIONING CARD */}
            <div className="bg-white border border-zinc-200 rounded-sm shadow-sm overflow-hidden flex flex-col">
              <div className="p-5 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
                <div>
                  <h3 className="text-xs font-bold text-zinc-900 uppercase tracking-widest">Trainer Allotment Hub</h3>
                  <p className="text-[9px] text-zinc-400 uppercase font-bold mt-0.5">Link Instructors to Institutions</p>
                </div>
                <UserCog size={16} className="text-zinc-900 opacity-40"/>
              </div>

              <div className="p-6 space-y-8 flex-grow">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Trainer Full Name</label>
                      <input type="text" value={trainerName} onChange={(e)=>setTrainerName(e.target.value)} placeholder="Full legal name" className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-4 py-2.5 text-sm focus:bg-white focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 outline-none transition-all" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Target Institution</label>
                      <select value={selectedSchoolForTrainer} onChange={(e)=>setSelectedSchoolForTrainer(e.target.value)} className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-4 py-2.5 text-sm outline-none cursor-pointer focus:bg-white">
                        <option value="">Choose Alloted School...</option>
                        {schools.map(s=>(<option key={s.id} value={s.id}>{s.name} ({s.id})</option>))}
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Trainer ID</label>
                        <input type="text" value={trainerIdInput} onChange={(e)=>setTrainerIdInput(e.target.value)} placeholder="TRN-0000" className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-4 py-2.5 text-sm focus:bg-white outline-none transition-all" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Access Key</label>
                        <input type="text" value={trainerPasswordInput} onChange={(e)=>setTrainerPasswordInput(e.target.value)} placeholder="Set password" className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-4 py-2.5 text-sm focus:bg-white outline-none transition-all" />
                      </div>
                    </div>
                  </div>
                  <button onClick={createTrainer} className="w-full bg-zinc-900 text-white py-3.5 rounded-md text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-all shadow-lg mt-2">
                    Appoint Instructor
                  </button>
                </div>

                <div className="space-y-3 pt-6 border-t border-zinc-100">
                    <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                        <Plus size={10} className="text-amber-600"/> Latest Appointments
                    </p>
                    <div className="space-y-2">
                      {trainers.length === 0 && <p className="text-[10px] text-zinc-300 italic py-4 text-center">No trainers appointed yet.</p>}
                      {trainers.slice(-3).reverse().map(t=>(
                        <div key={t.id} className="flex items-center justify-between p-3 bg-zinc-50/50 border border-zinc-100 rounded-md group hover:bg-white transition-all">
                          <div>
                            <p className="text-xs font-bold text-zinc-800 uppercase leading-none mb-1">{t.name}</p>
                            <div className="flex items-center gap-2">
                                <span className="text-[9px] text-[#800000] font-black uppercase tracking-tighter">ID: {t.id}</span>
                                <span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
                                <span className="text-[9px] text-zinc-400 font-bold uppercase tracking-tighter">School: {t.schoolId}</span>
                            </div>
                          </div>
                          <button onClick={()=>copyText(t.password)} className="p-2 hover:bg-zinc-100 rounded-full transition-colors text-zinc-600 group-hover:scale-110" title="Copy Password">
                            <Copy size={14}/>
                          </button>
                        </div>
                      ))}
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
