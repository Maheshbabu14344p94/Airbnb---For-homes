import type { LucideIcon } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';

export function AirbnbMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36" className="h-8 w-8 text-[#ff385c]">
      <path fill="currentColor" d="M18 4.5c2.2 0 3.9 1.5 5.2 4l8.3 16.2c1.5 3 .2 6.1-2.6 7.1-2.9 1-5.7-.5-7.1-3.1L18 24.1l-3.8 7.1c-1.4 2.6-4.2 4.1-7.1 3.1-2.8-1-4.1-4.1-2.6-7.1L12.8 8.5c1.3-2.5 3-4 5.2-4Zm0 4.6c-.7 0-1.3.6-1.8 1.5L8.3 29.1c-.6 1.2-.1 2.2.9 2.6 1 .4 2-.1 2.6-1.2L18 19l6.2 11.5c.6 1.1 1.6 1.6 2.6 1.2 1-.4 1.5-1.4.9-2.6L19.8 10.6c-.5-.9-1.1-1.5-1.8-1.5Z" />
    </svg>
  );
}

export function AirbnbWordmark() {
  return <span className="text-[26px] font-semibold tracking-[-0.055em] text-[#ff385c]">airbnb</span>;
}

export function IconButton({ icon: Icon, label, onClick, active = false }: { icon: LucideIcon; label: string; onClick?: () => void; active?: boolean }) {
  return (
    <button aria-label={label} title={label} onClick={onClick} className={`grid h-10 w-10 place-items-center rounded-full transition hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black ${active ? 'bg-neutral-100' : ''}`}>
      <Icon className="h-5 w-5" strokeWidth={1.8} />
    </button>
  );
}

export function UserAvatar() {
  return <CircleUserRound className="h-8 w-8 text-neutral-700" strokeWidth={1.5} />;
}
