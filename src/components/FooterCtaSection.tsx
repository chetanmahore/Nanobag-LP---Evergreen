import React, { useState } from 'react';
import { ArrowRight, Check, Copy, Sparkles, ShieldCheck } from 'lucide-react';

interface FooterCtaSectionProps {
  onSuccessfulSubmit: (email: string) => void;
  unlockedCode: string | null;
}

export const FooterCtaSection: React.FC<FooterCtaSectionProps> = ({ onSuccessfulSubmit, unlockedCode }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleCopy = () => {
    if (unlockedCode) {
      navigator.clipboard.writeText(unlockedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 border-t border-neutral-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pill Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>JOIN 100,000+ EDC CARRIERS</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display text-balance mb-4">
          READY TO SIMPLIFY YOUR EVERYDAY CARRY?
        </h2>

        {/* Subhead */}
        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-8 text-balance">
          Never carry bulky bags again. Enter your email to unlock your exclusive 10% welcome discount code and claim free worldwide shipping.
        </p>

        {/* Footer Conversion Module */}
        <div className="max-w-xl mx-auto">
          {unlockedCode ? (
            <div className="p-6 rounded-2xl bg-neutral-900/90 border border-emerald-500/50 shadow-2xl space-y-4">
              <div className="flex items-center justify-center gap-2 text-emerald-400 font-semibold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Your 10% Code Is Active</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="w-full bg-black/60 border border-neutral-700 rounded-xl px-4 py-3 font-mono text-xl font-bold tracking-widest text-emerald-400 text-center">
                  {unlockedCode}
                </div>
                <button
                  onClick={handleCopy}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-sm flex items-center justify-center gap-2 whitespace-nowrap transition-all shadow-md active:scale-95 cursor-pointer"
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
              <p className="text-xs text-neutral-400">
                Code ready to apply at checkout on <strong className="text-white">nanobag.com</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Enter your email address..."
                  className="w-full px-5 py-4 rounded-xl bg-neutral-900 border border-neutral-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 text-white placeholder-neutral-500 text-sm outline-none transition-all"
                  aria-label="Enter your email address to unlock 10% off"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-4 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-60 text-black font-bold text-sm rounded-xl transition-all shadow-lg shadow-emerald-500/20 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
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
                <p className="text-xs text-rose-400 font-medium text-left pl-1">
                  {error}
                </p>
              )}

              <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-neutral-400 pt-2">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  Instant on-screen delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  100% Privacy guaranteed
                </span>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
