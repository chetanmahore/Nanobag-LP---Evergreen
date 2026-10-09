import React, { useState } from 'react';
import { ArrowRight, Check, ShieldCheck, Sparkles, Feather, Scale, Package, Copy } from 'lucide-react';

interface HeroSectionProps {
  onSuccessfulSubmit: (email: string) => void;
  unlockedCode: string | null;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSuccessfulSubmit, unlockedCode }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeBagState, setActiveBagState] = useState<'folded' | 'unfolded'>('unfolded');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccessfulSubmit(email);
    }, 600);
  };

  const handleCopyCode = () => {
    if (unlockedCode) {
      navigator.clipboard.writeText(unlockedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-neutral-950 text-white">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Hero Conversion Module */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>WELCOME OFFER</span>
              <span className="text-emerald-600">·</span>
              <span className="text-emerald-200">Limited First-Order Perk</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-[1.08] font-display">
              Never Be Caught <br className="hidden sm:inline" />
              Without a Bag Again.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed text-balance">
              The world's most versatile ultralight, pocket-sized bag. <br className="hidden sm:inline" />
              Stronger than steel, weighing just <span className="text-emerald-400 font-semibold">22 grams</span>.
            </p>

            {/* Hero Conversion Module */}
            <div className="pt-2 max-w-xl">
              {unlockedCode ? (
                /* Unlocked State */
                <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/90 to-neutral-900 border border-emerald-500/50 shadow-xl shadow-emerald-950/30">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2 text-emerald-300 text-sm font-semibold">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      <span>10% Welcome Discount Unlocked!</span>
                    </div>
                    <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                      ACTIVE
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <div className="w-full bg-black/60 border border-neutral-700 rounded-xl px-4 py-3 flex items-center justify-between font-mono text-lg font-bold tracking-wider text-emerald-400">
                      <span>{unlockedCode}</span>
                      <span className="text-xs font-sans text-neutral-400 font-normal">Use at nanobag.com</span>
                    </div>
                    <button
                      onClick={handleCopyCode}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-sm flex items-center justify-center gap-2 whitespace-nowrap transition-all shadow-md active:scale-95 cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-950 stroke-[3]" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-neutral-400 mt-2.5">
                    We also sent a backup confirmation link to your inbox. Valid for your first order across all Nanobag models.
                  </p>
                </div>
              ) : (
                /* Capture Form */
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <div className="relative flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError('');
                        }}
                        placeholder="Enter your email address..."
                        className="w-full px-4 py-3.5 rounded-xl bg-neutral-900 border border-neutral-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 text-white placeholder-neutral-500 text-sm transition-all outline-none"
                        aria-label="Email address for 10% discount"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3.5 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-60 text-black font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Unlocking...</span>
                      ) : (
                        <>
                          <span>UNLOCK 10% OFF</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {error && (
                    <p className="text-xs text-rose-400 font-medium pl-1">
                      {error}
                    </p>
                  )}

                  {/* Anti-spam and value assurance */}
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-neutral-400 pt-1">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Instant code on screen</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>No spam, unsubscribe anytime</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Worldwide shipping</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Quick Social Proof metrics strip */}
            <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-8 text-neutral-400 text-xs">
              <div>
                <span className="text-white font-bold text-base block font-display">100,000+</span>
                <span>Active Daily Carriers</span>
              </div>
              <div>
                <span className="text-white font-bold text-base block font-display">4.9 / 5.0</span>
                <span>Average User Rating</span>
              </div>
              <div>
                <span className="text-emerald-400 font-bold text-base block font-display">30 kg / 66 lbs</span>
                <span>Certified Strength</span>
              </div>
              <div>
                <span className="text-white font-bold text-base block font-display">22 Grams</span>
                <span>Featherlight Weight</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Product Interactive Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-neutral-900/90 border border-neutral-800 p-6 sm:p-8 backdrop-blur-sm shadow-2xl">
              
              {/* Interactive Viewport Toggle */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Product View:
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-xl border border-neutral-800">
                  <button
                    onClick={() => setActiveBagState('unfolded')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                      activeBagState === 'unfolded'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    19L Unfolded
                  </button>
                  <button
                    onClick={() => setActiveBagState('folded')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                      activeBagState === 'folded'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Plum-Sized Pocket
                  </button>
                </div>
              </div>

              {/* Graphic Display Arena */}
              <div className="relative h-72 sm:h-80 w-full rounded-2xl bg-neutral-950/80 border border-neutral-800/80 flex items-center justify-center p-6 overflow-hidden group">
                
                {/* Visual Technical Grid */}
                <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

                {activeBagState === 'unfolded' ? (
                  /* Unfolded Bag Vector Illustration */
                  <div className="relative w-full h-full flex flex-col items-center justify-center transition-all duration-300">
                    <svg viewBox="0 0 280 260" className="w-56 h-56 text-emerald-400 drop-shadow-[0_10px_25px_rgba(16,185,129,0.25)]">
                      {/* Bag Handles */}
                      <path
                        d="M80,85 C80,25 110,15 140,15 C170,15 200,25 200,85"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="10"
                        strokeLinecap="round"
                        className="opacity-90"
                      />
                      {/* Main Bag Body */}
                      <path
                        d="M60,85 L220,85 L235,235 C235,248 220,255 140,255 C60,255 45,248 45,235 Z"
                        fill="#064e3b"
                        stroke="#34d399"
                        strokeWidth="3.5"
                      />
                      {/* Diamond Ripstop Grid Lines Simulation */}
                      <path
                        d="M70,110 L210,110 M65,140 L215,140 M60,170 L220,170 M55,200 L225,200 M50,230 L230,230"
                        stroke="#10b981"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        className="opacity-60"
                      />
                      <path
                        d="M95,85 L65,240 M140,85 L140,255 M185,85 L215,240"
                        stroke="#10b981"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        className="opacity-60"
                      />
                      {/* Nanobag Logo on Bag */}
                      <rect x="110" y="145" width="60" height="26" rx="5" fill="#022c22" stroke="#6ee7b7" strokeWidth="1.5" />
                      <text x="140" y="162" textAnchor="middle" fill="#6ee7b7" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                        NANOBAG
                      </text>
                    </svg>

                    {/* Live overlay badge */}
                    <div className="absolute bottom-2 left-2 bg-neutral-900/90 border border-neutral-700/80 px-2.5 py-1 rounded-lg text-[11px] text-neutral-300">
                      Volume: <span className="text-emerald-400 font-bold">19 Liters</span>
                    </div>
                    <div className="absolute top-2 right-2 bg-neutral-900/90 border border-neutral-700/80 px-2.5 py-1 rounded-lg text-[11px] text-neutral-300">
                      Holds: <span className="text-emerald-400 font-bold">30 kg / 66 lbs</span>
                    </div>
                  </div>
                ) : (
                  /* Folded Bag Vector Illustration */
                  <div className="relative w-full h-full flex flex-col items-center justify-center transition-all duration-300">
                    <div className="relative flex items-center justify-center">
                      {/* Hand Palm Silhouette background outline */}
                      <svg viewBox="0 0 200 200" className="w-52 h-52 text-neutral-800">
                        <path
                          d="M40,140 C40,90 80,60 120,60 C160,60 170,110 160,150 C150,180 100,190 60,180 Z"
                          fill="currentColor"
                          className="opacity-30"
                        />
                      </svg>

                      {/* Packed Nanobag Pouch */}
                      <div className="absolute w-24 h-24 rounded-full bg-gradient-to-tr from-emerald-950 via-emerald-800 to-emerald-600 border-2 border-emerald-400 shadow-[0_0_35px_rgba(16,185,129,0.4)] flex flex-col items-center justify-center text-center p-2">
                        <Package className="w-6 h-6 text-emerald-200 mb-1" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider font-display">
                          NANOBAG
                        </span>
                        <span className="text-[9px] font-mono text-emerald-300">
                          22 grams
                        </span>
                        {/* Hanging Loop */}
                        <div className="absolute -top-3 w-5 h-5 rounded-full border-2 border-emerald-400" />
                      </div>
                    </div>

                    {/* Scale callouts */}
                    <div className="absolute bottom-2 left-2 bg-neutral-900/90 border border-neutral-700/80 px-2.5 py-1 rounded-lg text-[11px] text-neutral-300">
                      Size: <span className="text-emerald-400 font-bold">5 cm (Plum size)</span>
                    </div>
                    <div className="absolute top-2 right-2 bg-neutral-900/90 border border-neutral-700/80 px-2.5 py-1 rounded-lg text-[11px] text-neutral-300">
                      Weight: <span className="text-emerald-400 font-bold">22g (0.77 oz)</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Technical Spec Matrix */}
              <div className="grid grid-cols-3 gap-3 mt-4 text-center">
                <div className="bg-neutral-950/60 p-2.5 rounded-xl border border-neutral-800/80">
                  <span className="text-[10px] uppercase text-neutral-400 block font-semibold">Fabric</span>
                  <span className="text-xs font-bold text-neutral-200">Diamond Ripstop</span>
                </div>
                <div className="bg-neutral-950/60 p-2.5 rounded-xl border border-neutral-800/80">
                  <span className="text-[10px] uppercase text-neutral-400 block font-semibold">Thickness</span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">0.05 mm</span>
                </div>
                <div className="bg-neutral-950/60 p-2.5 rounded-xl border border-neutral-800/80">
                  <span className="text-[10px] uppercase text-neutral-400 block font-semibold">Warranty</span>
                  <span className="text-xs font-bold text-neutral-200">Lifetime Cover</span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs text-neutral-400">
                  💡 Packs into its own integrated pouch in 3 seconds. <span className="text-neutral-300 font-medium">No folding required—just stuff it in.</span>
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
