import { useEffect, useState } from 'react';

const tabs = [['photos', 'Photos'], ['amenities', 'Amenities'], ['reviews', 'Reviews'], ['location', 'Location']];

export function ListingTabs({ onReserve }: { onReserve: () => void }) {
  const [active, setActive] = useState('photos');
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 140;
      const next = [...tabs].reverse().find(([id]) => (document.getElementById(id)?.offsetTop ?? Infinity) <= y);
      if (next) setActive(next[0]);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return (
    <nav className="sticky top-[80px] z-30 mt-6 border-y border-neutral-200 bg-white/95 backdrop-blur" aria-label="Listing sections">
      <div className="flex h-16 items-center justify-between">
        <div className="flex h-full items-center gap-7">
          {tabs.map(([id, label]) => <a key={id} href={`#${id}`} className={`relative flex h-full items-center text-sm font-medium ${active === id ? 'text-black' : 'text-neutral-500'}`}><span>{label}</span>{active === id && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />}</a>)}
        </div>
        <button onClick={onReserve} className="rounded-lg bg-[#222] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-black">Reserve</button>
      </div>
    </nav>
  );
}
