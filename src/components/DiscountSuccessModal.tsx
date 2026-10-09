import React, { useState } from 'react';
import { Check, Copy, Sparkles, X, ExternalLink, ShieldCheck, ArrowRight } from 'lucide-react';

interface DiscountSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  couponCode: string;
  email: string;
}

export const DiscountSuccessModal: React.FC<DiscountSuccessModalProps> = ({
  isOpen,
  onClose,
  couponCode,
  email
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-neutral-900 border border-emerald-500/40 p-6 sm:p-8 text-white shadow-2xl shadow-emerald-950/50">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1 rounded-lg hover:bg-neutral-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 mx-auto flex items-center justify-center text-emerald-400 shadow-inner">
            <Sparkles className="w-7 h-7" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block">
            Welcome to the Nanobag Community
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
            Your 10% Discount Is Ready!
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300">
            We've unlocked 10% off for <span className="text-white font-medium">{email}</span>. Use the code below during checkout on nanobag.com.
          </p>
        </div>

        {/* Coupon Code Block */}
        <div className="bg-neutral-950 border border-emerald-500/30 rounded-2xl p-4 sm:p-5 text-center mb-6">
          <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
            Exclusive Promo Code
          </span>
          <div className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-widest my-2 select-all">
            {couponCode}
          </div>
          <button
            onClick={handleCopy}
            className="w-full mt-2 py-3 px-4 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Code Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy 10% Off Code</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Highlights */}
        <div className="space-y-2 text-xs text-neutral-300 mb-6 border-y border-neutral-800 py-3">
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Applies to all Nanobag models (Classic, Pack, Sling, Micro, XL)</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Free tracked worldwide shipping on orders over $40</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Backed by full Nanobag lifetime replacement guarantee</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://nanobag.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs sm:text-sm text-center flex items-center justify-center gap-2 transition-colors"
          >
            <span>Shop on nanobag.com</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
          </a>
          <button
            onClick={onClose}
            className="py-3 px-4 rounded-xl bg-transparent hover:bg-neutral-800/50 text-neutral-400 hover:text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
          >
            Keep Exploring
          </button>
        </div>

      </div>
    </div>
  );
};
