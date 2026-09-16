import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowDown, ArrowUpRight, CheckCircle2, ChevronUp, Compass, Heart, Move3D, Sparkles, Star } from 'lucide-react';
import { Header } from './components/Header';
import { ListingHero } from './components/ListingHero';
import { ListingTabs } from './components/ListingTabs';
import { BookingCard } from './components/BookingCard';
import { Amenities } from './components/Amenities';
import { Description } from './components/Description';
import { Reviews } from './components/Reviews';
import { LocationHost } from './components/LocationHost';
import { Lightbox } from './components/Lightbox';
import { PhotoTour } from './components/PhotoTour';
import { SearchOverlay } from './components/SearchOverlay';
import { photos, listing } from './data/listing';

function FloatingSection({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <div ref={ref} style={{ perspective: 1400 }} className={`relative ${className}`}>
      <motion.div
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setTilt({ x: ((e.clientX - r.left) / r.width - 0.5) * 2.2, y: ((e.clientY - r.top) / r.height - 0.5) * -2.2 });
        }}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        drag
        dragConstraints={{ left: -18, right: 18, top: -12, bottom: 12 }}
        dragElastic={0.12}
        whileDrag={{ scale: 1.012, cursor: 'grabbing' }}
        animate={{ rotateX: tilt.y, rotateY: tilt.x }}
        transition={{ type: 'spring', stiffness: 180, damping: 24 }}
        className="floating-surface relative cursor-grab rounded-[30px] border border-white/80 bg-white/72 shadow-[0_28px_80px_rgba(31,38,46,.12)] backdrop-blur-xl transition-shadow hover:shadow-[0_35px_95px_rgba(31,38,46,.16)]"
      >
        {children}
      </motion.div>
    </div>
  );
}

function Landing({ onEnter }: { onEnter: () => void }) {
  const dragX = useMotionValue(0);
  const springX = useSpring(dragX, { stiffness: 150, damping: 24 });
  const rotateY = useTransform(springX, [-720, 0, 720], [-180, 0, 180]);
  const rotateX = useTransform(springX, [-720, 0, 720], [4, 0, -4]);
  const [autoSpin, setAutoSpin] = useState(true);
  const images = useMemo(() => [photos[0], photos[1], photos[2], photos[3]], []);

  useEffect(() => {
    if (!autoSpin) return;
    const timer = window.setInterval(() => dragX.set(dragX.get() > 540 ? -540 : dragX.get() + 90), 1600);
    return () => window.clearInterval(timer);
  }, [autoSpin, dragX]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#ecece8] text-[#17191b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,.95),rgba(236,236,232,.72)_42%,rgba(219,218,212,.98))]" />
      <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-[#ff385c]/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#8aa8c9]/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col px-6 py-5 md:px-10 lg:px-14">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-white/85 shadow-[0_15px_40px_rgba(0,0,0,.1)] backdrop-blur-xl">
              <span className="text-2xl font-bold text-[#ff385c]">⌂</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-[11px] font-bold uppercase tracking-[.28em] text-neutral-400">Airbnb-style</p>
              <p className="text-sm font-semibold">Stay in Goa</p>
            </div>
          </div>
          <div className="hidden items-center gap-8 rounded-full border border-white/90 bg-white/80 px-7 py-3 text-sm font-semibold shadow-[0_16px_50px_rgba(0,0,0,.09)] backdrop-blur-xl md:flex">
            <span>Explore</span><span>Homes</span><span>Experiences</span><span>About</span>
          </div>
          <button onClick={onEnter} className="group flex items-center gap-2 rounded-full border border-white/90 bg-white/90 px-5 py-3 text-sm font-semibold shadow-[0_16px_45px_rgba(0,0,0,.1)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,.14)]">
            Explore stay <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </header>

        <div className="flex flex-1 items-center justify-center py-8">
          <div className="grid w-full items-center gap-8 lg:grid-cols-[.72fr_1.7fr_.72fr]">
            <div className="hidden lg:block">
              <motion.div animate={{ y: [0, -12, 0], rotate: [-2, 1, -2] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="rounded-[32px] border border-white/90 bg-white/65 p-6 shadow-[0_35px_80px_rgba(0,0,0,.12)] backdrop-blur-xl">
                <Compass className="h-6 w-6 text-[#ff385c]" />
                <p className="mt-10 text-2xl font-semibold leading-tight">A stay that feels like a memory.</p>
                <p className="mt-3 text-sm leading-6 text-neutral-500">Warm light, calm rooms and a private jacuzzi in Candolim.</p>
              </motion.div>
            </div>

            <div className="min-w-0 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/65 px-4 py-2 text-[10px] font-bold uppercase tracking-[.25em] text-neutral-500 shadow-sm backdrop-blur-xl">
                <Sparkles className="h-3.5 w-3.5 text-[#ff385c]" /> premium stay preview
              </div>
              <h1 className="mx-auto max-w-[900px] text-[52px] font-semibold leading-[.92] tracking-[-.065em] sm:text-[72px] lg:text-[92px]">A home worth <span className="font-serif italic font-normal">turning toward.</span></h1>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-neutral-500 sm:text-base">Explore a cinematic Goa retreat through a floating 3D home gallery. Drag, rotate and step inside the stay.</p>

              <div className="mx-auto mt-9 w-full max-w-[880px]" style={{ perspective: 1800 }}>
                <motion.div
                  drag="x"
                  dragConstraints={{ left: -720, right: 720 }}
                  dragElastic={0.12}
                  style={{ rotateY, rotateX, x: springX, transformStyle: 'preserve-3d' }}
                  onDragStart={() => setAutoSpin(false)}
                  onDragEnd={() => setAutoSpin(true)}
                  className="relative mx-auto h-[330px] w-[82%] cursor-grab active:cursor-grabbing sm:h-[430px] lg:h-[490px]"
                >
                  <div className="absolute inset-x-[8%] bottom-[-30px] h-16 rounded-full bg-black/20 blur-3xl" />
                  <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
                    <div className="absolute inset-0 overflow-hidden rounded-[38px] border border-white/90 bg-white/25 p-2 shadow-[0_45px_100px_rgba(0,0,0,.22)] backdrop-blur-md" style={{ backfaceVisibility: 'hidden' }}>
                      <img src={images[0].src} alt="Luxury living room" className="h-full w-full rounded-[30px] object-cover" draggable={false} />
                      <div className="absolute inset-0 rounded-[30px] bg-gradient-to-t from-black/45 via-transparent to-white/10" />
                      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-left text-white">
                        <div><p className="text-xl font-semibold sm:text-2xl">Relax with a view</p><p className="mt-1 text-xs text-white/75">Candolim · Goa · India</p></div>
                        <span className="rounded-full border border-white/35 bg-white/15 px-3 py-2 text-xs font-semibold backdrop-blur-xl">360° home view</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 overflow-hidden rounded-[38px] border border-white/90 bg-white/25 p-2 shadow-[0_45px_100px_rgba(0,0,0,.22)] backdrop-blur-md" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
                      <img src={images[2].src} alt="Luxury kitchen" className="h-full w-full rounded-[30px] object-cover" draggable={false} />
                      <div className="absolute inset-0 rounded-[30px] bg-gradient-to-t from-black/45 via-transparent to-white/10" />
                      <div className="absolute bottom-6 left-6 right-6 text-left text-white"><p className="text-xl font-semibold sm:text-2xl">Modern kitchen</p><p className="mt-1 text-xs text-white/75">Turn the home to discover another angle.</p></div>
                    </div>
                  </div>
                  {images.slice(1).map((image, i) => (
                    <div key={image.id} className="absolute left-1/2 top-1/2 hidden h-[55%] w-[28%] overflow-hidden rounded-[24px] border border-white/80 shadow-[0_30px_60px_rgba(0,0,0,.18)] lg:block" style={{ transform: `translate(-50%,-50%) translateX(${(i - 1) * 270}px) translateZ(${-110 - i * 35}px) rotateY(${(i - 1) * -8}deg)`, opacity: .9 }}>
                      <img src={image.src} alt={image.alt} className="h-full w-full object-cover" draggable={false} />
                    </div>
                  ))}
                  <div className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-black/35 text-white shadow-xl backdrop-blur-xl">
                    <Move3D className="h-5 w-5" />
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button onClick={onEnter} className="group inline-flex items-center gap-3 rounded-full bg-[#17191b] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,.18)] transition hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(0,0,0,.22)]">Step inside the home <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></button>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/60 px-5 py-3 text-xs font-medium text-neutral-500 backdrop-blur-xl"><Move3D className="h-4 w-4" /> Drag left / right to rotate 360°</span>
              </div>
            </div>

            <div className="hidden lg:block">
              <motion.div animate={{ y: [0, 13, 0], rotate: [2, -1, 2] }} transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }} className="overflow-hidden rounded-[32px] border border-white/90 bg-white/65 shadow-[0_35px_80px_rgba(0,0,0,.12)] backdrop-blur-xl">
                <img src={photos[7].src} alt="Goa pool" className="h-52 w-full object-cover" />
                <div className="p-5"><p className="text-xs uppercase tracking-[.2em] text-neutral-400">Private mood</p><p className="mt-2 text-lg font-semibold">Slow mornings. Golden evenings.</p></div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 pb-2 text-[10px] font-bold uppercase tracking-[.25em] text-neutral-400"><ArrowDown className="h-3.5 w-3.5 animate-bounce" /> scroll to discover</div>
      </div>
    </section>
  );
}

function App() {
  const shellRef = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  const [saved, setSaved] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [reserved, setReserved] = useState(false);
  const [backTop, setBackTop] = useState(false);

  useEffect(() => {
    if (!entered) return;
    const ctx = gsap.context(() => {
      gsap.from('.reveal', { opacity: 0, y: 24, duration: 0.85, stagger: 0.07, ease: 'power3.out', delay: 0.15 });
    }, shellRef);
    const scroll = () => setBackTop(window.scrollY > 700);
    window.addEventListener('scroll', scroll, { passive: true });
    return () => { ctx.revert(); window.removeEventListener('scroll', scroll); };
  }, [entered]);

  const share = async () => {
    const url = window.location.href;
    if (navigator.share) await navigator.share({ title: document.title, url });
    else { await navigator.clipboard?.writeText(url); window.alert('Link copied to clipboard.'); }
  };

  if (!entered) return <Landing onEnter={() => { setEntered(true); window.setTimeout(() => document.getElementById('stay')?.scrollIntoView({ behavior: 'smooth' }), 60); }} />;

  return <div ref={shellRef} id="top" className="min-h-screen overflow-x-hidden bg-[#f4f4f1] text-[#222] selection:bg-[#ff385c]/20">
    <Header onSearch={() => setSearchOpen(true)} />
    <main id="stay" className="mx-auto max-w-[1320px] px-5 md:px-8">
      <ListingHero saved={saved} onSave={() => setSaved((v) => !v)} onShare={share} onOpenGallery={(index = 0) => { setTourOpen(true); setLightbox(null); }} />
      <ListingTabs onReserve={() => setReserved(true)} />

      <div className="grid grid-cols-[minmax(0,1fr)_390px] gap-12 pb-20 pt-10 lg:gap-16">
        <div className="min-w-0">
          <FloatingSection className="reveal mb-8">
            <section className="p-7 md:p-9">
              <div className="flex items-center justify-between gap-6"><div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-neutral-400">Goa · Candolim</p><h2 className="mt-2 text-[28px] font-semibold tracking-[-.04em]">Entire serviced apartment in Candolim, India</h2><p className="mt-2 text-[15px] text-neutral-600">3 guests · 1 bedroom · 1 bed · 1 bathroom</p></div><div className="hidden rounded-full border border-neutral-200 bg-white/80 px-4 py-2 text-sm font-semibold shadow-sm sm:block"><Star className="mr-1 inline h-3.5 w-3.5 fill-[#ff385c] text-[#ff385c]" />4.95</div></div>
              <div className="mt-7 flex items-center justify-between rounded-[22px] border border-neutral-200/80 bg-white/65 p-5 shadow-sm"><div><p className="font-semibold">Guest favourite</p><p className="mt-1 text-sm text-neutral-600">One of the most loved homes on Airbnb, according to guests</p></div><div className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold shadow-sm">🏵️ 4.95</div></div>
            </section>
          </FloatingSection>

          <FloatingSection className="reveal mb-8"><Amenities /></FloatingSection>
          <FloatingSection className="reveal mb-8"><Description /></FloatingSection>
          <FloatingSection className="reveal mb-8"><Reviews /></FloatingSection>
          <FloatingSection className="reveal mb-8"><LocationHost /></FloatingSection>
        </div>
        <div className="hidden lg:block"><div className="sticky top-[120px]" style={{ perspective: 1200 }}><motion.div animate={{ y: [0, -7, 0], rotateZ: [-.2, .2, -.2] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}><BookingCard onReserve={() => setReserved(true)} /></motion.div></div></div>
      </div>

      <section className="relative py-12" style={{ perspective: 1400 }}>
        <motion.div whileHover={{ rotateX: -2, rotateY: 2, y: -5 }} transition={{ type: 'spring', stiffness: 180, damping: 20 }} className="relative overflow-hidden rounded-[36px] border border-white/90 bg-[#17191b] px-8 py-14 text-white shadow-[0_35px_90px_rgba(0,0,0,.2)] md:px-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#ff385c]/25 blur-3xl" /><div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#7e9ec2]/20 blur-3xl" />
          <div className="relative grid items-end gap-8 md:grid-cols-[1fr_auto]"><div><p className="text-[10px] font-bold uppercase tracking-[.25em] text-white/50">A little extra depth</p><h2 className="mt-3 max-w-2xl text-4xl font-semibold tracking-[-.045em] sm:text-6xl">Good homes deserve to <span className="font-serif italic font-normal">float.</span></h2><p className="mt-5 max-w-xl text-sm leading-6 text-white/65">Move your cursor over the cards, drag the hero, and open any photo to explore the stay like a 3D gallery.</p></div><button onClick={() => setTourOpen(true)} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-1">Open photo tour <ArrowUpRight className="h-4 w-4" /></button></div>
        </motion.div>
      </section>
    </main>

    <footer className="border-t border-neutral-200 bg-white/60 py-12 backdrop-blur-xl"><div className="mx-auto flex max-w-[1280px] items-center justify-between px-8 text-sm text-neutral-600"><span>© 2026 Airbnb-style demo · PlayPower Labs take-home</span><div className="flex items-center gap-3"><Heart className="h-4 w-4 fill-[#ff385c] text-[#ff385c]" /> Crafted as a premium interaction study</div></div></footer>

    {backTop && <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-7 right-7 z-50 grid h-12 w-12 place-items-center rounded-full bg-black text-white shadow-lg transition hover:-translate-y-1" aria-label="Back to top"><ChevronUp /></button>}
    <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    <PhotoTour open={tourOpen} onClose={() => { setTourOpen(false); setLightbox(null); }} onLightbox={(index) => setLightbox(index)} />
    <Lightbox index={lightbox} onClose={() => setLightbox(null)} onChange={(index) => setLightbox(index)} />
    {reserved && <div className="fixed inset-0 z-[100] grid place-items-center bg-black/45 p-6 backdrop-blur-sm"><motion.div initial={{ opacity: 0, scale: .94, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} className="w-full max-w-[430px] rounded-[30px] border border-white/70 bg-white p-8 text-center shadow-[0_35px_100px_rgba(0,0,0,.3)]"><CheckCircle2 className="mx-auto h-12 w-12 text-[#00a699]" /><h2 className="mt-5 text-2xl font-semibold">Reservation ready</h2><p className="mt-2 text-sm leading-6 text-neutral-600">This front-end demo has captured your reservation intent. No payment has been made.</p><button onClick={() => setReserved(false)} className="mt-6 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5">Continue</button></motion.div></div>}
  </div>;
}

export default App;
