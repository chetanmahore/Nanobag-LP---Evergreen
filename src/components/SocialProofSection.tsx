import React, { useState } from 'react';
import { Star, CheckCircle, Quote, ThumbsUp, Sparkles } from 'lucide-react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah T.',
    location: 'Portland, OR',
    role: 'Urban Commuter & Cyclist',
    rating: 5,
    quote: 'I take my Nanobag everywhere. Fits in my pocket and holds my entire grocery run!',
    verifiedBacker: true,
    backerId: 'Kickstarter Backer #4,812',
    useCase: 'Daily Groceries'
  },
  {
    name: 'David R.',
    location: 'Berlin, Germany',
    role: 'One-Bag Travel Enthusiast',
    rating: 5,
    quote: 'I traveled 4 months across Southeast Asia with only a 30L backpack. Nanobag was my daily grocery, laundry, and beach tote. It truly feels like weightless magic.',
    verifiedBacker: true,
    backerId: 'Verified Buyer',
    useCase: 'Global Travel'
  },
  {
    name: 'Elena V.',
    location: 'Montreal, Canada',
    role: 'Sustainability Educator',
    rating: 5,
    quote: 'I used to keep thick canvas bags in my car, but constantly forgot them. Having Nanobag permanently on my keyring solved the single-use plastic problem forever.',
    verifiedBacker: true,
    backerId: 'Kickstarter Backer #12,904',
    useCase: 'Zero Waste Living'
  },
  {
    name: 'Marcus K.',
    location: 'Tokyo, Japan',
    role: 'Software Architect & Minimalist',
    rating: 5,
    quote: 'The diamond ripstop material is unbelievable. I loaded 2 six-packs of beer and 4 heavy glass containers—zero stretching or seam stress. Mind-blowing engineering.',
    verifiedBacker: true,
    backerId: 'Verified Buyer',
    useCase: 'Heavy Carry Testing'
  }
];

export const SocialProofSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Daily Groceries' | 'Global Travel' | 'Zero Waste Living' | 'Heavy Carry Testing'>('All');

  const filteredTestimonials = filter === 'All' 
    ? TESTIMONIALS 
    : TESTIMONIALS.filter(t => t.useCase === filter);

  return (
    <section id="reviews" className="py-20 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 text-xs font-semibold mb-3">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-bold">4.9 / 5.0 Average Rating</span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-300">14,200+ Verified Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            TRUSTED BY OVER 100,000 DAILY USERS
          </h2>
          <p className="mt-3 text-neutral-400 text-sm sm:text-base leading-relaxed">
            From quick supermarket stops to backcountry expeditions, see how real people carry everyday with Nanobag.
          </p>
        </div>

        {/* Hero Spotlight Testimonial (Exact User Wireframe Quote) */}
        <div className="mb-12 rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-emerald-950/40 border border-neutral-800 p-8 sm:p-10 relative overflow-hidden shadow-2xl">
          <Quote className="absolute -top-3 -right-3 w-32 h-32 text-emerald-500/5 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <div className="flex justify-center items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-snug font-display">
              “I take my Nanobag everywhere. Fits in my pocket and holds my entire grocery run!”
            </blockquote>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-neutral-400 pt-2">
              <span className="font-bold text-white text-base">Sarah T.</span>
              <span className="hidden sm:inline text-neutral-600">·</span>
              <span className="text-emerald-400 flex items-center gap-1 text-xs">
                <CheckCircle className="w-3.5 h-3.5" />
                Verified Kickstarter Backer
              </span>
              <span className="hidden sm:inline text-neutral-600">·</span>
              <span className="text-neutral-400 text-xs">Nanobag 7.0 User</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {(['All', 'Daily Groceries', 'Global Travel', 'Zero Waste Living', 'Heavy Carry Testing'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                filter === cat
                  ? 'bg-emerald-400 text-black font-semibold shadow-sm'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Additional Verified Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredTestimonials.slice(1).map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed italic mb-5">
                  "{t.quote}"
                </p>
              </div>

              <div className="border-t border-neutral-800/80 pt-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.name}</h4>
                    <span className="text-[11px] text-neutral-400 block">{t.location}</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Press & Media Trust Bar */}
        <div className="mt-16 pt-10 border-t border-neutral-900 text-center">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold block mb-6">
            FEATURED IN LEADING OUTDOOR & EVERYDAY CARRY PUBLICATIONS
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-neutral-500 font-display font-bold text-sm sm:text-base tracking-wider uppercase opacity-75">
            <span>GEAR PATROL</span>
            <span>CARRYOLOGY</span>
            <span>WIRED</span>
            <span>KICKSTARTER STAFF PICK</span>
            <span>TREEHUGGER</span>
          </div>
        </div>

      </div>
    </section>
  );
};
