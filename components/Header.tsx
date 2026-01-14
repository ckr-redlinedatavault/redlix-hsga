import Link from "next/link";

export default function Header() {
  return (
    <header id="site-header" className="fixed top-0 left-0 w-full border-b border-zinc-200 bg-white z-[70] shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 md:flex-row md:py-5">
        
        {/* Left Side: Logo and Title */}
        <Link href="/" className="flex items-center gap-5 group">
          <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <img
              src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516854/logo_bivaq2.jpg"
              alt="HSGA Logo"
              className="h-20 w-auto object-contain md:h-28"
            />
          </div>

          <div className="flex flex-col max-w-md">
            <h1 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl md:text-3xl leading-[1.1]">
              Hindustan Scouts and Guides Association
              <span className="block text-[#800000]">Telangana, India</span>
            </h1>
            <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500 md:text-[11px]">
              Telangana State Headquarters
            </span>
          </div>
        </Link>

        {/* Right Side: Recognition and Affiliation */}
        <div className="flex flex-col border-t border-zinc-100 pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0 min-w-[260px]">
          <div className="text-center md:text-right space-y-1">
            <p className="text-[12px] font-semibold uppercase tracking-wide text-zinc-800 md:text-[13px] leading-tight">
              Recognized by <span className="text-[#800000] font-bold">Govt. of India</span>
            </p>
            <p className="text-[11px] font-semibold italic text-zinc-600">
              (Ministry of Youth Affairs and Sports)
            </p>
            
            <div className="h-[2px] w-16 bg-[#800000]/20 my-2 mx-auto md:ml-auto md:mr-0"></div>
            
            <p className="text-[11px] font-semibold uppercase leading-tight tracking-tight text-zinc-800 md:text-[12px]">
              Affiliated to World Federation of <br className="hidden md:block" /> 
              Independent Scout — <span className="text-[#800000]">Germany</span>
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}