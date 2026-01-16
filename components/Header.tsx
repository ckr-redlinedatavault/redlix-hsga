import Link from "next/link";

export default function Header() {
  return (
    <header id="site-header" className="fixed top-0 left-0 w-full border-b border-zinc-200 bg-white z-[70] shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-1 md:flex-row md:py-4">
        
        {/* Left Side: Main Content (Weight Reduced) */}
        <Link href="/" className="flex items-center gap-5 group">
          <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <img
              src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516854/logo_bivaq2.jpg"
              alt="HSGA Logo"
              className="h-10 w-auto object-contain md:h-20 lg:h-28"
            />
          </div>

          <div className="flex flex-col max-w-md">
            {/* Reduced from font-black to font-semibold */}
            <h1 className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg md:text-2xl leading-tight">
              Hindustan Scouts and Guides Association
              {/* Reduced weight for the location span */}
              <span className="block text-[#800000] font-medium">Telangana, India</span>
            </h1>
            {/* Reduced from font-bold to font-normal */}
            <span className="mt-0.5 text-[9px] font-normal uppercase tracking-[0.25em] text-zinc-500 md:text-[11px]">
              Telangana State Headquarters
            </span>
          </div>
        </Link>

        {/* Right Side: Recognition and Affiliation (Bold Only) */}
        <div className="hidden md:flex flex-col border-l border-zinc-200 md:pl-8 min-w-[260px]">
          <div className="text-center md:text-right space-y-1">
            {/* Entire section set to font-bold */}
            <p className="text-[12px] font-bold uppercase tracking-wide text-zinc-800 md:text-[13px] leading-tight">
              Recognized by <span className="text-[#800000]">Govt. of India</span>
            </p>
            <p className="text-[11px] font-bold italic text-zinc-600">
              (Ministry of Youth Affairs and Sports)
            </p>
            
            <div className="h-[2px] w-16 bg-[#800000]/20 my-2 mx-auto md:ml-auto md:mr-0"></div>
            
            <p className="text-[11px] font-bold uppercase leading-tight tracking-tight text-zinc-800 md:text-[12px]">
              Affiliated to World Federation of <br className="hidden md:block" /> 
              Independent Scout — <span className="text-[#800000]">Germany</span>
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}
