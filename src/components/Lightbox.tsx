import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect } from 'react';
import { photos } from '../data/listing';

export function Lightbox({ index, onClose, onChange }: { index: number | null; onClose: () => void; onChange: (index: number) => void }) {
  useEffect(() => {
    if (index === null) return;
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onChange((index + 1) % photos.length);
      if (event.key === 'ArrowLeft') onChange((index - 1 + photos.length) % photos.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', key);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', key); };
  }, [index, onChange, onClose]);

  return <AnimatePresence>{index !== null && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[90] flex items-center justify-center bg-[#171717] p-8" role="dialog" aria-modal="true" aria-label="Photo viewer">
    <button onClick={onClose} aria-label="Close photo viewer" className="absolute right-7 top-6 z-10 grid h-12 w-12 place-items-center rounded-full text-white transition hover:bg-white/10"><X /></button>
    <button onClick={() => onChange((index - 1 + photos.length) % photos.length)} aria-label="Previous photo" className="absolute left-6 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/50 text-white hover:bg-white/10"><ChevronLeft /></button>
    <motion.img key={photos[index].id} initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .22 }} src={photos[index].src} alt={photos[index].alt} className="max-h-[88vh] max-w-[86vw] object-contain" />
    <button onClick={() => onChange((index + 1) % photos.length)} aria-label="Next photo" className="absolute right-6 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/50 text-white hover:bg-white/10"><ChevronRight /></button>
    <div className="absolute bottom-7 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white">{index + 1} / {photos.length}</div>
  </motion.div>}</AnimatePresence>;
}
