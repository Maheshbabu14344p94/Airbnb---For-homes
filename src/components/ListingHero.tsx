import { Heart, Share2, Star, ArrowUpRight, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { photos, listing } from '../data/listing';
import { useState, type MouseEvent } from 'react';

export function ListingHero({ saved, onSave, onShare, onOpenGallery }: { saved: boolean; onSave: () => void; onShare: () => void; onOpenGallery: (index?: number) => void }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -7;
    setTilt({ x, y });
  };

  return (
    <section id="photos" className="pt-7 md:pt-9">
      <div className="reveal flex items-end justify-between gap-6">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff385c]" /> curated stay
          </div>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: 'easeOut' }} className="max-w-[900px] text-[28px] font-semibold leading-[1.05] tracking-[-0.045em] text-[#222] md:text-[38px]">{listing.title}</motion.h1>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm font-medium text-neutral-600"><span className="inline-flex items-center gap-1 text-neutral-900"><Star className="h-3.5 w-3.5 fill-current" /> {listing.rating}</span><span>·</span><button className="underline underline-offset-2">{listing.reviews} reviews</button><span>·</span><button className="underline underline-offset-2">Candolim, Goa, India</button></div>
        </div>
        <div className="hidden items-center gap-1 md:flex">
          <button onClick={onShare} className="group flex items-center gap-2 rounded-full border border-transparent px-4 py-2.5 text-sm font-semibold transition hover:border-neutral-200 hover:bg-white"><Share2 className="h-4 w-4 transition group-hover:-translate-y-0.5" /> Share</button>
          <button onClick={onSave} className="group flex items-center gap-2 rounded-full border border-transparent px-4 py-2.5 text-sm font-semibold transition hover:border-neutral-200 hover:bg-white"><Heart className={`h-4 w-4 transition group-hover:scale-110 ${saved ? 'fill-[#ff385c] text-[#ff385c]' : ''}`} /> {saved ? 'Saved' : 'Save'}</button>
        </div>
      </div>

      <div onMouseMove={handleMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })} style={{ perspective: 1600 }} className="relative mt-6">
        <motion.div animate={{ rotateX: tilt.y, rotateY: tilt.x }} transition={{ type: 'spring', stiffness: 180, damping: 20 }} className="group relative grid h-[450px] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-[28px] bg-neutral-200 p-1.5 shadow-[0_28px_70px_rgba(0,0,0,.16)] md:h-[500px]">
          <button onClick={() => onOpenGallery(0)} className="photo-tile relative col-span-2 row-span-2 overflow-hidden rounded-[22px] bg-neutral-100 text-left">
            <img src={photos[0].src} alt={photos[0].alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10" />
            <div className="absolute bottom-5 left-5 rounded-full border border-white/40 bg-white/80 px-3 py-2 text-xs font-semibold text-neutral-900 shadow-lg backdrop-blur-xl">Signature living room</div>
          </button>
          {photos.slice(1, 5).map((photo, index) => (
            <button key={photo.id} onClick={() => onOpenGallery(index + 1)} className="photo-tile group/tile relative overflow-hidden rounded-[18px] bg-neutral-100 text-left">
              <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover transition duration-700 group-hover/tile:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-70" />
              {index === 3 && <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/95 px-4 py-2.5 text-sm font-semibold text-neutral-900 shadow-xl"><Camera className="h-4 w-4" /> Show all photos</span>}
            </button>
          ))}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60 bg-black/45 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-xl lg:block">3D preview</div>
        </motion.div>
        <div className="pointer-events-none absolute -bottom-5 left-[9%] right-[9%] -z-10 h-10 rounded-full bg-black/15 blur-2xl" />
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-neutral-500"><span>Move across the gallery for a subtle depth effect.</span><span className="hidden items-center gap-1 sm:flex">View full photo tour <ArrowUpRight className="h-3.5 w-3.5" /></span></div>
    </section>
  );
}
