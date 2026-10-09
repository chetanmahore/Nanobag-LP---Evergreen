import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onUnlockClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onUnlockClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-[37px] sm:top-[41px] z-40 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a 
          href="#" 
          className="text-xl sm:text-2xl font-extrabold tracking-tighter text-white whitespace-nowrap shrink-0 font-display flex items-center gap-2 group"
        >
          <span className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
              <path d="M12 22V12" />
              <path d="M20 7l-8 5-8-5" />
            </svg>
          </span>
          <span>NANOBAG</span>
        </a>

        {/* Zone 2: 4-5 concise single-line text links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a href="#solutions" className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
            Everyday Carry
          </a>
          <a href="#specs" className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
            Tech Specs
          </a>
          <a href="#community" className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
            Why Join
          </a>
          <a href="#reviews" className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
            Reviews
          </a>
          <a href="#faq" className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onUnlockClick}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-black bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm hover:shadow-emerald-500/20 transition-all active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
          >
            Unlock 10% Off
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden text-neutral-400 hover:text-white p-1"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-900 border-b border-neutral-800 px-6 py-4 space-y-3">
          <a 
            href="#solutions" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-200 hover:text-emerald-400 py-1"
          >
            Everyday Carry Solutions
          </a>
          <a 
            href="#specs" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-200 hover:text-emerald-400 py-1"
          >
            Tech Specs & Strength
          </a>
          <a 
            href="#community" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-200 hover:text-emerald-400 py-1"
          >
            Why Join Community
          </a>
          <a 
            href="#reviews" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-200 hover:text-emerald-400 py-1"
          >
            Reviews & Social Proof
          </a>
          <a 
            href="#faq" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-neutral-200 hover:text-emerald-400 py-1"
          >
            FAQ
          </a>
        </div>
      )}
    </header>
  );
};
