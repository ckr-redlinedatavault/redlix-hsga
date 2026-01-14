"use client";

export default function FloatingTag() {
    return (
        <div className="fixed bottom-6 right-6 z-[100] animate-in fade-in slide-in-from-bottom-4 duration-700">
            <a
                href="https://redlix.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-black hover:border-white/20"
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 group-hover:text-white">
                    Made by <span className="text-red-500">Redlix</span>
                </span>
            </a>
        </div>
    );
}
