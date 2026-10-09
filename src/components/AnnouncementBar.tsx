import React, { useState, useEffect } from 'react';
import { Tag, X, ArrowRight } from 'lucide-react';

interface AnnouncementBarProps {
  onCtaClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState(14 * 60 + 59); // 14 mins 59 secs

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Welcome Announcement"
      className="sticky top-0 z-50 bg-gradient-to-r from-emerald-950 via-neutral-900 to-emerald-950 border-b border-emerald-800/40 text-emerald-200 text-xs md:text-sm font-medium transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-2.5 flex items-center justify-between gap-3">
        {/* Left / Center Message */}
        <div className="flex items-center gap-2 mx-auto sm:mx-0 overflow-hidden text-center sm:text-left">
          <span className="shrink-0 text-base" role="img" aria-label="sprout">🌿</span>
          <span className="font-semibold tracking-tight text-white whitespace-nowrap">
            WELCOME TO NANOBAG:
          </span>
          <span className="text-emerald-300 truncate">
            UNLOCK 10% OFF YOUR FIRST ORDER TODAY
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5 ml-2 text-xs font-mono tabular-nums text-emerald-400/90 bg-emerald-900/40 px-2 py-0.5 rounded border border-emerald-700/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Offer expires in {formattedTime}
          </span>
        </div>

        {/* Right CTA / Dismiss */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-300 hover:text-white hover:underline transition-colors whitespace-nowrap"
          >
            Claim 10% Off
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss banner"
            className="text-neutral-400 hover:text-neutral-200 p-0.5 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
