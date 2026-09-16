import { useState } from 'react';
import { listing, photos } from '../data/listing';

export function Description() {
  const [expanded, setExpanded] = useState(false);
  return <>
    <section className="border-t border-neutral-200 py-10"><div className="flex items-center justify-between"><div><h2 className="text-[22px] font-semibold">Where you'll sleep</h2><p className="mt-1 text-sm text-neutral-500">Sofa · Air conditioning · Ceiling fan · TV</p></div></div><div className="mt-6 grid grid-cols-2 gap-4"><div className="overflow-hidden rounded-xl border border-neutral-200"><img src={photos[0].src} alt="Living room" className="h-48 w-full object-cover" /><div className="p-4"><p className="font-semibold">Living room</p><p className="mt-1 text-sm text-neutral-500">Sofa</p></div></div><div className="overflow-hidden rounded-xl border border-neutral-200"><img src={photos[3].src} alt="Bedroom" className="h-48 w-full object-cover" /><div className="p-4"><p className="font-semibold">Bedroom</p><p className="mt-1 text-sm text-neutral-500">1 double bed</p></div></div></div></section>
    <section className="border-t border-neutral-200 py-10"><h2 className="text-[22px] font-semibold">About this place</h2><div className={`mt-5 whitespace-pre-line text-[15px] leading-7 text-neutral-700 ${expanded ? '' : 'line-clamp-5'}`}>{listing.description}</div><button onClick={() => setExpanded(!expanded)} className="mt-4 font-semibold underline">{expanded ? 'Show less' : 'Show more'}</button></section>
  </>;
}
