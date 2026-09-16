import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { galleryCategories, photos } from '../data/listing';

export function PhotoTour({ open, startIndex = 0, onClose, onLightbox }: { open: boolean; startIndex?: number; onClose: () => void; onLightbox: (index: number) => void }) {
  const [category, setCategory] = useState('All photos');
  const filtered = useMemo(() => category === 'All photos' ? photos : photos.filter((photo) => photo.category === category), [category]);
  return <AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] overflow-y-auto bg-[#f7f7f5]" role="dialog" aria-modal="true" aria-label="Photo tour">
    <div className="sticky top-0 z-20 border-b border-white/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1240px] items-center gap-5 px-7 py-4">
        <button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full hover:bg-neutral-100" aria-label="Close photo tour"><ArrowLeft /></button>
        <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1">
          {galleryCategories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${category === item ? 'bg-black text-white' : 'hover:bg-neutral-100'}`}>{item}</button>)}
        </div>
        <button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full hover:bg-neutral-100" aria-label="Close"><X /></button>
      </div>
    </div>
    <main className="mx-auto max-w-[1100px] px-8 py-10">
      <div className="mb-10 flex items-end justify-between"><div><p className="text-sm font-semibold text-neutral-500">Photo tour</p><h2 className="mt-1 text-3xl font-semibold tracking-tight">All photos</h2></div><span className="text-sm text-neutral-500">{filtered.length} photos</span></div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {filtered.map((photo) => {
          const actual = photos.findIndex((item) => item.id === photo.id);
          return <button key={photo.id} onClick={() => onLightbox(actual)} className="group relative overflow-hidden rounded-[22px] border border-white bg-white p-1 text-left shadow-[0_16px_40px_rgba(0,0,0,.10)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
            <img src={photo.src} alt={photo.alt} className="aspect-[4/3] h-full w-full rounded-[18px] object-cover transition duration-700 group-hover:scale-[1.045]" />
            <span className="absolute bottom-3 left-3 rounded-full bg-black/65 px-3 py-1.5 text-xs font-medium text-white">{photo.category}</span>
            <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 opacity-0 transition group-hover:opacity-100"><ChevronRight className="h-4 w-4" /></span>
          </button>;
        })}
      </div>
    </main>
  </motion.div>}</AnimatePresence>;
}
