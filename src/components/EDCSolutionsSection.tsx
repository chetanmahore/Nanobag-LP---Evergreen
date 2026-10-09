import React, { useState } from 'react';
import { Check, ArrowRight, Shield, Zap, Sparkles } from 'lucide-react';
import { EDCSolution } from '../types';

interface EDCSolutionsSectionProps {
  onSelectSolution: (solution: EDCSolution) => void;
}

const SOLUTIONS: EDCSolution[] = [
  {
    id: 'travel-outdoor-edc',
    emoji: '🚲',
    title: 'Travel, Outdoor, EDC',
    shortDescription: 'Featherlight gear for active routines & daily movement.',
    recommendedModel: 'Nanobag Pack (Backpack)',
    volume: '14 Liters',
    weight: '24 Grams',
    maxLoad: '30 kg / 66 lbs',
    packSize: '5.2 cm',
    benefits: [
      'Ergonomic shoulder straps for cycling and hiking',
      'Clips directly onto your keyring or carabiner',
      'Water-resistant diamond ripstop repels unexpected drizzle'
    ],
    idealPackItems: ['Windbreaker', 'Trail snacks', 'Hydration flask', 'Compact camera'],
    colorHex: '#10b981'
  },
  {
    id: 'eco-conscious',
    emoji: '🌍',
    title: 'Eco-Conscious Consumers',
    shortDescription: 'Ditch single-use plastics with sustainable everyday solutions.',
    recommendedModel: 'Nanobag 7.0 Classic',
    volume: '19 Liters',
    weight: '22 Grams',
    maxLoad: '30 kg / 66 lbs',
    packSize: '5.0 cm',
    benefits: [
      'Replaces over 300+ single-use plastic grocery bags yearly',
      'Machine washable and quick-drying in under 20 minutes',
      'Lifetime durability reduces consumer textile waste'
    ],
    idealPackItems: ['Weekly farmers market haul', 'Organic produce', 'Bread loaves', 'Bulk pantry jars'],
    colorHex: '#059669'
  },
  {
    id: 'urban-commuters',
    emoji: '🏙️',
    title: 'Urban Commuters & Pro',
    shortDescription: 'Practical, compact solutions for transit & work essentials.',
    recommendedModel: 'Nanobag Sling',
    volume: '19 Liters',
    weight: '23 Grams',
    maxLoad: '30 kg / 66 lbs',
    packSize: '5.1 cm',
    benefits: [
      'Crossbody carry keeps hands free for subway cards & coffees',
      'Fits neatly inside slim laptop briefcases without adding bulk',
      'Discreet minimalist design appropriate for office and transit'
    ],
    idealPackItems: ['Tablet / 13" laptop', 'Over-ear headphones', 'Gym clothes', 'Foldable umbrella'],
    colorHex: '#0d9488'
  },
  {
    id: 'minimalists-tech',
    emoji: '⚡',
    title: 'Minimalists & Tech Shoppers',
    shortDescription: 'Packs down to the size of a plum for smart everyday carry.',
    recommendedModel: 'Nanobag Micro',
    volume: '12 Liters',
    weight: '16 Grams',
    maxLoad: '25 kg / 55 lbs',
    packSize: '4.2 cm',
    benefits: [
      'Ultra-micro footprint: smaller than your AirPods Pro case',
      'Thinner than a silk handkerchief yet un-rippable polymer',
      'Always in your fifth pocket, zero cognitive carry burden'
    ],
    idealPackItems: ['Mechanical keyboard', 'Tech cables & chargers', 'Book or e-reader', 'Impulse tech purchases'],
    colorHex: '#0284c7'
  },
  {
    id: 'adventure-travelers',
    emoji: '🎒',
    title: 'Adventure Travelers & Lifestyle',
    shortDescription: 'Featherlight bags built for mobile lives & adventures.',
    recommendedModel: 'Nanobag XL Shopping & Gear',
    volume: '25 Liters',
    weight: '26 Grams',
    maxLoad: '30 kg / 66 lbs',
    packSize: '5.5 cm',
    benefits: [
      'Takes 0% precious luggage space in your one-bag travel setup',
      'Expands into a full beach tote or airline personal item in seconds',
      'Dries instantly after seawater or tropical rain showers'
    ],
    idealPackItems: ['Beach towel', 'Souvenirs & duty-free haul', 'Hostel laundry', 'Extra airport layer'],
    colorHex: '#22c55e'
  }
];

export const EDCSolutionsSection: React.FC<EDCSolutionsSectionProps> = ({ onSelectSolution }) => {
  const [selectedId, setSelectedId] = useState<string>('travel-outdoor-edc');

  const activeSolution = SOLUTIONS.find((s) => s.id === selectedId) || SOLUTIONS[0];

  return (
    <section id="solutions" className="py-20 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <span>Tailored Carry Modes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            FIND YOUR EVERYDAY CARRY SOLUTION
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Whether you commute by bike, travel the globe, or grab groceries on the way home, there's a Nanobag crafted for your lifestyle.
          </p>
        </div>

        {/* 5 Persona Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {SOLUTIONS.map((item, idx) => {
            const isSelected = item.id === selectedId;
            const isFifth = idx === 4;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-200 border ${
                  isSelected
                    ? 'bg-neutral-900/90 border-emerald-500 shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-500/50'
                    : 'bg-neutral-900/50 hover:bg-neutral-900 border-neutral-800 hover:border-neutral-700'
                } ${isFifth ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Header with Emoji & Title */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center" role="img" aria-label={item.title}>
                      {item.emoji}
                    </span>
                    <h3 className="font-bold text-base text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-2" />
                  )}
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed mb-4">
                  {item.shortDescription}
                </p>

                <div className="flex items-center justify-between text-xs text-neutral-400 border-t border-neutral-800/80 pt-3">
                  <span>Model: <strong className="text-white">{item.recommendedModel}</strong></span>
                  <span className="text-emerald-400 font-mono font-medium">{item.volume}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Inspection Drawer for Selected Routine */}
        <div className="rounded-3xl bg-neutral-900/80 border border-neutral-800 p-6 sm:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side: Persona Details & Recommended Bag */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl" role="img" aria-label={activeSolution.title}>
                  {activeSolution.emoji}
                </span>
                <div>
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                    Routine Match
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {activeSolution.title}
                  </h4>
                </div>
              </div>

              <p className="text-neutral-300 text-sm leading-relaxed">
                {activeSolution.shortDescription} Designed to withstand the rigors of heavy daily use without adding a single gram of unnecessary bulk to your pack.
              </p>

              {/* What It Solves List */}
              <div className="space-y-2 pt-1">
                {activeSolution.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* What fits inside */}
              <div className="pt-2">
                <span className="text-xs uppercase font-semibold text-neutral-400 block mb-2">
                  Typical Daily Carry Loadout:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeSolution.idealPackItems.map((item, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-300">
                      • {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Recommendation Action Card */}
            <div className="lg:col-span-5 bg-neutral-950 rounded-2xl p-6 border border-neutral-800/80 flex flex-col justify-between space-y-5">
              <div>
                <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
                  Ideal Spec Profile
                </span>
                <h5 className="text-lg font-bold text-white">
                  {activeSolution.recommendedModel}
                </h5>

                <div className="grid grid-cols-3 gap-2 my-4 text-center">
                  <div className="bg-neutral-900/60 p-2 rounded-xl border border-neutral-800">
                    <span className="text-[10px] text-neutral-400 block">Weight</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono">{activeSolution.weight}</span>
                  </div>
                  <div className="bg-neutral-900/60 p-2 rounded-xl border border-neutral-800">
                    <span className="text-[10px] text-neutral-400 block">Volume</span>
                    <span className="text-xs font-bold text-white font-mono">{activeSolution.volume}</span>
                  </div>
                  <div className="bg-neutral-900/60 p-2 rounded-xl border border-neutral-800">
                    <span className="text-[10px] text-neutral-400 block">Packed</span>
                    <span className="text-xs font-bold text-white font-mono">{activeSolution.packSize}</span>
                  </div>
                </div>

                <div className="text-xs text-neutral-400 flex items-center justify-between border-t border-neutral-800 pt-3">
                  <span>Max Rated Weight:</span>
                  <span className="font-bold text-white">{activeSolution.maxLoad}</span>
                </div>
              </div>

              <button
                onClick={() => onSelectSolution(activeSolution)}
                className="w-full py-3 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Unlock 10% Off For This Bag</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
