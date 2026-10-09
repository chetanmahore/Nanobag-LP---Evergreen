import React, { useState } from 'react';
import { Shield, Feather, Droplets, RefreshCw, Check, Sparkles } from 'lucide-react';

export const SpecsSection: React.FC = () => {
  const [loadWeight, setLoadWeight] = useState(15); // kg

  return (
    <section id="specs" className="py-20 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <span>Engineering & Materials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            STRONGER THAN STEEL. LIGHTER THAN AIR.
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Crafted from custom high-tenacity diamond ripstop polymer. Thinner than a single human hair, yet certified to hold up to 30 kilograms (66 lbs).
          </p>
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400 mb-4">
              <Feather className="w-5 h-5" />
            </div>
            <span className="text-2xl font-black text-white font-mono block mb-1">
              22 Grams
            </span>
            <h3 className="text-sm font-bold text-neutral-200 mb-2">
              Ultralight Weight
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Lighter than a set of keys or three sheets of paper. Zero weight penalty in your pocket or backpack.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400 mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <span className="text-2xl font-black text-emerald-400 font-mono block mb-1">
              30 kg / 66 lbs
            </span>
            <h3 className="text-sm font-bold text-neutral-200 mb-2">
              Breaking Strength
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Carries over 1,500 times its own body weight without tearing. Load it with cast iron pans or heavy melons.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400 mb-4">
              <Droplets className="w-5 h-5" />
            </div>
            <span className="text-2xl font-black text-white font-mono block mb-1">
              0.05 mm
            </span>
            <h3 className="text-sm font-bold text-neutral-200 mb-2">
              Water-Resistant Weave
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Precision diamond weave repels moisture and accidental drink spills. Cleans effortlessly under the tap.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-center text-emerald-400 mb-4">
              <RefreshCw className="w-5 h-5" />
            </div>
            <span className="text-2xl font-black text-white font-mono block mb-1">
              3 Seconds
            </span>
            <h3 className="text-sm font-bold text-neutral-200 mb-2">
              Integrated Stash Pouch
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Never fold again. The attached micro pouch lets you stuff the bag back into pocket size in seconds flat.
            </p>
          </div>
        </div>

        {/* Interactive Load Tester / Comparison Module */}
        <div className="rounded-3xl bg-neutral-900/90 border border-neutral-800 p-6 sm:p-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Interactive Load Strength Simulator
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Drag the slider to test Nanobag's tensile resilience under different carry payloads.
              </p>
            </div>

            {/* Range Slider */}
            <div className="bg-neutral-950 p-6 rounded-2xl border border-neutral-800 space-y-4">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-neutral-400">Load Weight:</span>
                <span className="text-emerald-400 text-base font-mono font-bold">
                  {loadWeight} kg / {Math.round(loadWeight * 2.20462)} lbs
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="30"
                value={loadWeight}
                onChange={(e) => setLoadWeight(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />

              <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                <span>1 kg (Light snacks)</span>
                <span>15 kg (Full grocery cart)</span>
                <span>30 kg (Max limit)</span>
              </div>

              {/* Dynamic Feedback Card */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-neutral-800 text-xs">
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-neutral-400 block text-[10px] uppercase font-semibold">Nanobag Status</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5 mt-1">
                    <Check className="w-3.5 h-3.5" />
                    Holds with ease
                  </span>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    Diamond ripstop handles distribute pressure comfortably.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-neutral-400 block text-[10px] uppercase font-semibold">Single-Use Plastic</span>
                  <span className={`font-bold flex items-center gap-1.5 mt-1 ${loadWeight > 4 ? 'text-rose-400' : 'text-amber-400'}`}>
                    {loadWeight > 4 ? '❌ Tears & Snaps' : '⚠️ Straining'}
                  </span>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    {loadWeight > 4 ? 'Breaks and ends up in landfill.' : 'Handles stretch painfully.'}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-neutral-400 block text-[10px] uppercase font-semibold">Canvas Tote Bag</span>
                  <span className="text-neutral-300 font-bold flex items-center gap-1.5 mt-1">
                    Heavy & Bulky (350g)
                  </span>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    Takes up entire backpack, 16x heavier than Nanobag.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
