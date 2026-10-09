import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [modalContent, setModalContent] = useState<string | null>(null);

  const openPrivacy = () => {
    setModalContent(
      'Privacy Policy: Nanobag values your privacy. We collect your email solely to provide your 10% welcome discount, order updates, and optional community gear drops. We never sell or rent your personal information to third parties. You can unsubscribe anytime with one click.'
    );
  };

  const openTerms = () => {
    setModalContent(
      'Terms of Offer: The 10% welcome discount is valid for first-time customers on nanobag.com across all individual bags and multi-packs. Coupon code cannot be combined with clearance liquidation items. Nanobag reserves the right to modify promotional terms.'
    );
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-12 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          {/* Brand & Mission */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="text-white font-extrabold tracking-tight text-lg font-display">
              NANOBAG
            </span>
            <span className="hidden sm:inline text-neutral-700">|</span>
            <span className="text-neutral-400">
              The world's most versatile ultralight pocket-sized bag. Official lead gen portal for <strong className="text-neutral-300">nanobag.com</strong>
            </span>
          </div>

          {/* Quick Nav Anchor Links */}
          <div className="flex items-center gap-6 text-neutral-300">
            <a href="#solutions" className="hover:text-emerald-400 transition-colors">EDC Solutions</a>
            <a href="#specs" className="hover:text-emerald-400 transition-colors">Tech Specs</a>
            <a href="#community" className="hover:text-emerald-400 transition-colors">Community</a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a>
          </div>
        </div>

        {/* Legal Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-center sm:text-left">
          <div>
            © 2026 Nanobag. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={openPrivacy}
              className="hover:text-neutral-300 underline underline-offset-4 cursor-pointer transition-colors"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={openTerms}
              className="hover:text-neutral-300 underline underline-offset-4 cursor-pointer transition-colors"
            >
              Terms & Conditions
            </button>
            <span>·</span>
            <a
              href="https://nanobag.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              Visit nanobag.com →
            </a>
          </div>
        </div>

        {/* Modal for Privacy/Terms */}
        {modalContent && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-md w-full p-6 text-neutral-200 space-y-4">
              <h3 className="text-base font-bold text-white font-display">Information</h3>
              <p className="text-sm leading-relaxed text-neutral-300">{modalContent}</p>
              <button
                onClick={() => setModalContent(null)}
                className="w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </footer>
  );
};
