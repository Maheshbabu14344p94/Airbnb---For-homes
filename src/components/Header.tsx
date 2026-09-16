import { Globe2, Menu, Search, Sparkles } from 'lucide-react';
import { AirbnbMark } from './Icon';

export function Header({ onSearch }: { onSearch: () => void }) {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4 md:px-8 md:pt-5">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-3">
        <a href="#top" aria-label="Airbnb home" className="glass-pill grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/70 bg-white/85 shadow-[0_10px_30px_rgba(0,0,0,.08)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:scale-105">
          <AirbnbMark />
        </a>

        <button onClick={onSearch} className="group hidden h-12 items-center rounded-full border border-white/80 bg-white/90 px-2 shadow-[0_12px_35px_rgba(0,0,0,.09)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:shadow-[0_16px_45px_rgba(0,0,0,.13)] md:flex">
          <span className="px-4 text-sm font-semibold text-neutral-800">Anywhere</span>
          <span className="border-l border-neutral-200 px-4 text-sm font-semibold text-neutral-800">Anytime</span>
          <span className="border-l border-neutral-200 px-4 text-sm text-neutral-500">Add guests</span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#ff385c] text-white shadow-[0_5px_16px_rgba(255,56,92,.28)] transition group-hover:scale-105"><Search className="h-4 w-4" /></span>
        </button>

        <div className="flex items-center gap-1 rounded-full border border-white/80 bg-white/85 p-1 shadow-[0_10px_30px_rgba(0,0,0,.08)] backdrop-blur-xl">
          <button onClick={onSearch} className="grid h-9 w-9 place-items-center rounded-full hover:bg-neutral-100 md:hidden" aria-label="Search"><Search className="h-4 w-4" /></button>
          <button className="hidden rounded-full px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-100 lg:block">Airbnb your home</button>
          <button className="grid h-9 w-9 place-items-center rounded-full hover:bg-neutral-100" aria-label="Choose language"><Globe2 className="h-4 w-4" /></button>
          <button className="flex h-9 items-center gap-2 rounded-full border border-neutral-200 bg-white px-2.5 shadow-sm transition hover:shadow-md" aria-label="Open account menu"><Menu className="h-4 w-4" /><span className="grid h-7 w-7 place-items-center rounded-full bg-neutral-900 text-[10px] font-bold text-white">MH</span></button>
        </div>
      </div>
      <div className="mx-auto mt-3 hidden max-w-[1320px] items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400 lg:flex"><Sparkles className="h-3 w-3" /> premium stay preview</div>
    </header>
  );
}
