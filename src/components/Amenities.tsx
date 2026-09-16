import { useState } from 'react';
import { amenities } from '../data/listing';
import { X } from 'lucide-react';

export function Amenities() {
  const [open, setOpen] = useState(false);
  return <section id="amenities" className="scroll-mt-36 border-t border-neutral-200 py-10"><h2 className="text-[22px] font-semibold">What this place offers</h2><div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6">{amenities.slice(0, 10).map(([icon, text]) => <div key={text} className="flex items-center gap-4 text-[15px]"><span className="text-xl">{icon}</span><span>{text}</span></div>)}</div><button onClick={() => setOpen(true)} className="mt-8 rounded-lg border border-neutral-800 px-5 py-3 text-sm font-semibold hover:bg-neutral-50">Show all 50 amenities</button>
  {open && <div className="fixed inset-0 z-[70] grid place-items-center bg-black/50 p-6" role="dialog" aria-modal="true"><div className="max-h-[82vh] w-full max-w-[720px] overflow-y-auto rounded-2xl bg-white p-7 shadow-modal"><div className="flex items-center justify-between border-b pb-5"><h3 className="text-2xl font-semibold">What this place offers</h3><button onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full hover:bg-neutral-100" aria-label="Close"><X /></button></div><div className="grid grid-cols-2 gap-6 py-7">{amenities.map(([icon, text]) => <div key={text} className="flex items-center gap-4 text-[15px]"><span className="text-xl">{icon}</span><span>{text}</span></div>)}</div><button onClick={() => setOpen(false)} className="rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white">Done</button></div></div>}
  </section>;
}
