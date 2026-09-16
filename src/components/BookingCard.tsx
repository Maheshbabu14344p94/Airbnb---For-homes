import { CalendarDays, ChevronDown, Minus, Plus, Star } from 'lucide-react';
import { useState } from 'react';
import { listing } from '../data/listing';

export function BookingCard({ onReserve }: { onReserve: () => void }) {
  const [guests, setGuests] = useState(2);
  const [openGuests, setOpenGuests] = useState(false);
  const subtotal = listing.price * listing.nights;
  const total = subtotal + listing.cleaning + listing.serviceFee + listing.taxes;
  return <aside className="sticky top-[150px] rounded-[26px] border border-white bg-white/90 p-6 shadow-[0_22px_60px_rgba(0,0,0,.14)] backdrop-blur-xl">
    <div className="flex items-baseline justify-between"><div><span className="text-[22px] font-semibold">₹{listing.price.toLocaleString('en-IN')}</span> <span className="text-sm">night</span></div><span className="flex items-center gap-1 text-sm"><Star className="h-3.5 w-3.5 fill-black" /> {listing.rating} · {listing.reviews}</span></div>
    <div className="mt-5 overflow-hidden rounded-xl border border-neutral-500">
      <div className="grid grid-cols-2 divide-x divide-neutral-500"><button className="p-3 text-left hover:bg-neutral-50"><span className="block text-[10px] font-bold uppercase">Check-in</span><span className="text-sm text-neutral-500">Add date</span></button><button className="p-3 text-left hover:bg-neutral-50"><span className="block text-[10px] font-bold uppercase">Checkout</span><span className="text-sm text-neutral-500">Add date</span></button></div>
      <div className="relative border-t border-neutral-500"><button onClick={() => setOpenGuests(!openGuests)} className="flex w-full items-center justify-between p-3 text-left"><span><span className="block text-[10px] font-bold uppercase">Guests</span><span className="text-sm">{guests} guests</span></span><ChevronDown className="h-4 w-4" /></button>
      {openGuests && <div className="absolute left-0 right-0 top-full z-20 mt-2 rounded-xl border border-neutral-200 bg-white p-4 shadow-soft"><div className="flex items-center justify-between"><div><p className="font-medium">Guests</p><p className="text-xs text-neutral-500">Maximum 3</p></div><div className="flex items-center gap-3"><button onClick={() => setGuests(Math.max(1, guests - 1))} className="grid h-8 w-8 place-items-center rounded-full border"><Minus className="h-4 w-4" /></button><span>{guests}</span><button onClick={() => setGuests(Math.min(3, guests + 1))} className="grid h-8 w-8 place-items-center rounded-full border"><Plus className="h-4 w-4" /></button></div></div></div>}</div>
    </div>
    <button onClick={onReserve} className="mt-4 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#ff385c] to-[#e61e4d] py-3.5 font-semibold text-white shadow-[0_10px_25px_rgba(255,56,92,.22)] transition duration-300 hover:-translate-y-0.5 hover:brightness-95">Reserve</button>
    <p className="mt-3 text-center text-sm text-neutral-500">You won't be charged yet</p>
    <div className="mt-5 space-y-3 text-sm"><div className="flex justify-between"><span className="underline">₹{listing.price.toLocaleString('en-IN')} × {listing.nights} nights</span><span>₹{subtotal.toLocaleString('en-IN')}</span></div><div className="flex justify-between"><span className="underline">Cleaning fee</span><span>₹{listing.cleaning.toLocaleString('en-IN')}</span></div><div className="flex justify-between"><span className="underline">Airbnb service fee</span><span>₹{listing.serviceFee.toLocaleString('en-IN')}</span></div><div className="flex justify-between"><span className="underline">Taxes</span><span>₹{listing.taxes.toLocaleString('en-IN')}</span></div></div>
    <div className="mt-5 flex justify-between border-t border-neutral-200 pt-5 font-semibold"><span>Total before taxes</span><span>₹{total.toLocaleString('en-IN')}</span></div>
    <div className="mt-3 flex items-center gap-2 text-xs text-neutral-500"><CalendarDays className="h-4 w-4" /> Free cancellation before 17 October</div>
  </aside>;
}
