import Link from "next/link";

export default function Header() {
  return (
    <header id="site-header" className="fixed top-0 left-0 w-full border-b border-zinc-100 bg-white z-[70]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-5 md:flex-row md:py-6">
        
        <Link href="/" className="flex items-center gap-6 group">
          
          <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <img
              src="https://res.cloudinary.com/dq2suftps/image/upload/v1722516854/logo_bivaq2.jpg"
              alt="HSGA Logo"
              className="h-24 w-auto object-contain md:h-32"
            />
          </div>

          <div className="flex flex-col max-w-md">
            <h1 className="text-xl font-black tracking-tight text-slate-900 sm:text-2xl md:text-3xl leading-[1.1]">
              Hindustan Scouts and Guides Association
              <span className="block text-blue-700">TELANGANA, INDIA</span>
            </h1>
            <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 md:text-[11px]">
              Telangana State Headquarters
            </span>
          </div>
        </Link>

        <div className="flex flex-col border-t border-zinc-100 pt-4 md:border-l md:border-t-0 md:pl-10 md:pt-0 max-w-[280px]">
          <div className="text-center md:text-right">
            <p className="text-[11px] font-bold uppercase tracking-wide text-zinc-900 md:text-[12px] leading-tight">
              Recognized by <span className="text-blue-700">Govt. of India</span>
            </p>
            <p className="text-[10px] font-medium italic text-zinc-500 mb-2">
              (Ministry of Youth Affairs and Sports)
            </p>
            
            <div className="h-[1px] w-12 bg-zinc-200 my-2 mx-auto md:ml-auto md:mr-0"></div>
            
            <p className="text-[10px] font-bold uppercase leading-tight tracking-tight text-zinc-700 md:text-[11px]">
              Affiliated to World Federation of <br className="hidden md:block" /> 
              Independent Scout-Germany
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}
