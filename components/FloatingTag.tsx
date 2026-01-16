"use client";
import { useState } from "react";
import { X, ExternalLink } from "lucide-react";

export default function FloatingTag() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {isOpen && (
                <div className="w-80 bg-white/95 backdrop-blur-xl border border-zinc-200 p-5 rounded-xl shadow-2xl mb-2 animate-in slide-in-from-bottom-2 fade-in duration-300">
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-[10px] font-black uppercase tracking-widest text-[#800000]">Developer Notice</h3>
                        <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-zinc-900 transition-colors p-1 hover:bg-zinc-100 rounded-full">
                            <X size={14} />
                        </button>
                    </div>
                    <p className="text-[11px] font-medium text-zinc-600 leading-relaxed mb-5 border-l-2 border-[#800000] pl-3">
                        Please pay all the due amount to the developers.
                    </p>
                    <a 
                        href="https://redlix.co.in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-2 w-full py-2.5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg hover:bg-zinc-800 transition-all shadow-lg hover:shadow-xl"
                    >
                        Visit Redlix Page
                        <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-black hover:border-white/20 cursor-pointer"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 group-hover:text-white">
                    Made by <span className="text-red-500">Redlix</span>
                </span>
            </button>
        </div>
    );
}
