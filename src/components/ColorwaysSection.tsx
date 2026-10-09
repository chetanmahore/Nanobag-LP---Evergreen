import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

interface ColorwaysSectionProps {
  onUnlockClick: () => void;
}

const COLORWAYS = [
  {
    id: 'deep-space',
    name: 'Deep Space Galaxy',
    description: 'Our most backed signature Kickstarter pattern featuring celestial nebula purples and deep starry skies.',
    badge: 'Best Seller',
    gradient: 'from-indigo-900 via-purple-900 to-neutral-950',
    primaryColor: '#818cf8',
    bagColor: '#312e81'
  },
  {
    id: 'stealth-black',
    name: 'Stealth Matte Black',
    description: 'Clean, understated, and timeless. The EDC enthusiast essential that matches any outfit or suit.',
    badge: 'Minimalist Pick',
    gradient: 'from-neutral-900 via-neutral-950 to-black',
    primaryColor: '#a3a3a3',
    bagColor: '#171717'
  },
  {
    id: 'emerald-rainforest',
    name: 'Emerald Rainforest',
    description: 'Rich organic botanical greens inspired by ancient canopy leaves and earth-positive living.',
    badge: 'Eco Edition',
    gradient: 'from-emerald-950 via-teal-950 to-neutral-950',
    primaryColor: '#34d399',
    bagColor: '#064e3b'
  },
  {
    id: 'ocean-cobalt',
    name: 'Pacific Ocean Cobalt',
    description: 'Vibrant oceanic blues representing marine conservation and ocean cleanup initiatives.',
    badge: 'Limited Run',
    gradient: 'from-blue-950 via-cyan-950 to-neutral-950',
    primaryColor: '#38bdf8',
    bagColor: '#0c4a6e'
  },
  {
    id: 'retro-sunset',
    name: 'Retro Sunset Gradient',
    description: 'Warm golden hour gradients and nostalgic 80s dusk tones for a lively pop of color.',
    badge: 'Backer Favorite',
    gradient: 'from-amber-950 via-rose-950 to-neutral-950',
    primaryColor: '#fb923c',
    bagColor: '#7c2d12'
  }
];

export const ColorwaysSection: React.FC<ColorwaysSectionProps> = ({ onUnlockClick }) => {
  const [selectedColor, setSelectedColor] = useState(COLORWAYS[0]);

  return (
    <section className="py-20 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <span>Signature Aesthetics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            EXPRESS YOUR EVERYDAY CARRY STYLE
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Choose from over 20+ artist-commissioned patterns and sleek stealth monochromes. Your 10% welcome coupon applies to any colorway.
          </p>
        </div>

        {/* Interactive Colorway Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-neutral-900/60 rounded-3xl p-6 sm:p-10 border border-neutral-800">
          
          {/* Visual Canvas */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className={`w-full max-w-md h-72 sm:h-80 rounded-2xl bg-gradient-to-br ${selectedColor.gradient} border border-neutral-700/60 shadow-2xl flex flex-col items-center justify-center p-6 relative overflow-hidden transition-all duration-500`}>
              
              {/* Graphic bag silhouette reflecting color */}
              <svg viewBox="0 0 200 220" className="w-48 h-48 drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]">
                {/* Straps */}
                <path
                  d="M60,65 C60,20 85,15 100,15 C115,15 140,20 140,65"
                  fill="none"
                  stroke={selectedColor.primaryColor}
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                {/* Bag body */}
                <path
                  d="M45,65 L155,65 L168,195 C168,206 155,212 100,212 C45,212 32,206 32,195 Z"
                  fill={selectedColor.bagColor}
                  stroke={selectedColor.primaryColor}
                  strokeWidth="2.5"
                />
                {/* Diamond grid lines */}
                <path
                  d="M40,110 L160,110 M38,150 L162,150 M70,65 L50,200 M100,65 L100,212 M130,65 L150,200"
                  stroke={selectedColor.primaryColor}
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="opacity-40"
                />
                {/* Logo badge */}
                <rect x="75" y="115" width="50" height="20" rx="4" fill="#000000" fillOpacity="0.6" stroke={selectedColor.primaryColor} strokeWidth="1" />
                <text x="100" y="129" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
                  NANOBAG
                </text>
              </svg>

              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-semibold text-white border border-white/10">
                {selectedColor.badge}
              </div>
            </div>
          </div>

          {/* Colorway Selection Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block mb-1">
                Selected Pattern
              </span>
              <h3 className="text-2xl font-bold text-white font-display">
                {selectedColor.name}
              </h3>
              <p className="text-neutral-300 text-sm mt-2 leading-relaxed">
                {selectedColor.description}
              </p>
            </div>

            {/* Selector Buttons */}
            <div className="space-y-2.5">
              <span className="text-xs uppercase font-semibold text-neutral-400 block">
                Tap to preview palette:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {COLORWAYS.map((c) => {
                  const isActive = c.id === selectedColor.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setSelectedColor(c)}
                      className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isActive
                          ? 'bg-neutral-800 border-emerald-400 ring-1 ring-emerald-400/50'
                          : 'bg-neutral-950/70 border-neutral-800 hover:border-neutral-700'
                      }`}
                    >
                      <span
                        className="w-5 h-5 rounded-full border border-white/20 shrink-0"
                        style={{ backgroundColor: c.primaryColor }}
                      />
                      <div className="overflow-hidden">
                        <span className="text-xs font-bold text-white block truncate">
                          {c.name}
                        </span>
                        <span className="text-[10px] text-neutral-400 block">
                          {c.badge}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick action */}
            <div className="pt-2">
              <button
                onClick={onUnlockClick}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Claim 10% Off {selectedColor.name}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
