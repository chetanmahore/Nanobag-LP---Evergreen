import React from 'react';
import { Tag, Bell, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

interface CommunityPerksSectionProps {
  onUnlockClick: () => void;
}

export const CommunityPerksSection: React.FC<CommunityPerksSectionProps> = ({ onUnlockClick }) => {
  const perks = [
    {
      icon: <Tag className="w-6 h-6 text-emerald-400" />,
      title: 'Instant 10% Off Your First Order',
      description:
        'Get a direct promo code instantly delivered to your screen and inbox. Valid across all models, multi-packs, and limited colorways.',
      highlight: 'Saves an average of $6–$18 on your first kit'
    },
    {
      icon: <Bell className="w-6 h-6 text-emerald-400" />,
      title: 'Member-Only Gear Drops & Updates',
      description:
        'Be first in line for secret production runs, artist collaborations, and exclusive backer discounts before they sell out.',
      highlight: 'VIP access 48 hours before public drops'
    },
    {
      icon: <Compass className="w-6 h-6 text-emerald-400" />,
      title: 'Tips on Sustainable Travel & EDC',
      description:
        'Curated ultralight packing frameworks, airport one-bag travel guides, and zero-waste hacks from our global community.',
      highlight: 'Join over 100,000 conscious travelers'
    }
  ];

  return (
    <section id="community" className="py-20 bg-neutral-900/60 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <span>Exclusive Membership Benefits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            WHY JOIN THE NANOBAG COMMUNITY?
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            More than just a bag—you're joining a global movement to eliminate single-use plastics without sacrificing convenience.
          </p>
        </div>

        {/* 3 Main Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {perks.map((perk, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-emerald-500/40 transition-all">
                  {perk.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {perk.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  {perk.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80">
                <span className="text-xs font-semibold text-emerald-400/90 block">
                  ★ {perk.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Strip */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-950/80 via-neutral-900 to-emerald-950/80 border border-emerald-800/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Ready to claim your 10% welcome coupon?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300">
              Zero commitments, no spam, and takes less than 5 seconds to activate.
            </p>
          </div>
          <button
            onClick={onUnlockClick}
            className="px-6 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-sm whitespace-nowrap transition-all shadow-md active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>Unlock My 10% Discount</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
