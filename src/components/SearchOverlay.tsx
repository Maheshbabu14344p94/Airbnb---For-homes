import { AnimatePresence, motion } from 'framer-motion';
import { CalendarDays, MapPin, Users, X } from 'lucide-react';

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  return <AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[75] bg-black/40 p-8" onMouseDown={onClose}>
    <motion.div initial={{ y: -16, opacity: 0, scale: .98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: -16, opacity: 0 }} onMouseDown={(e) => e.stopPropagation()} className="mx-auto mt-16 max-w-[900px] rounded-3xl bg-white p-7 shadow-modal">
      <div className="flex items-center justify-between"><div><p className="text-sm font-semibold text-neutral-500">Start your search</p><h2 className="mt-1 text-2xl font-semibold">Find a place for your next trip</h2></div><button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full hover:bg-neutral-100" aria-label="Close"><X /></button></div>
      <div className="mt-7 grid grid-cols-3 overflow-hidden rounded-2xl border border-neutral-300 shadow-sm"><button className="flex items-center gap-3 border-r p-5 text-left hover:bg-neutral-50"><MapPin /><span><span className="block text-xs font-bold uppercase">Location</span><span className="text-sm text-neutral-500">Candolim, Goa</span></span></button><button className="flex items-center gap-3 border-r p-5 text-left hover:bg-neutral-50"><CalendarDays /><span><span className="block text-xs font-bold uppercase">Dates</span><span className="text-sm text-neutral-500">Add dates</span></span></button><button className="flex items-center gap-3 p-5 text-left hover:bg-neutral-50"><Users /><span><span className="block text-xs font-bold uppercase">Guests</span><span className="text-sm text-neutral-500">2 guests</span></span></button></div>
      <div className="mt-6 flex justify-end"><button onClick={onClose} className="rounded-xl bg-[#ff385c] px-7 py-3 font-semibold text-white">Search</button></div>
    </motion.div>
  </motion.div>}</AnimatePresence>;
}
