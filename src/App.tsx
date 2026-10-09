import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EDCSolutionsSection } from './components/EDCSolutionsSection';
import { SpecsSection } from './components/SpecsSection';
import { CommunityPerksSection } from './components/CommunityPerksSection';
import { SocialProofSection } from './components/SocialProofSection';
import { ColorwaysSection } from './components/ColorwaysSection';
import { FaqSection } from './components/FaqSection';
import { FooterCtaSection } from './components/FooterCtaSection';
import { Footer } from './components/Footer';
import { DiscountSuccessModal } from './components/DiscountSuccessModal';
import { EDCSolution } from './types';

export default function App() {
  const [unlockedCode, setUnlockedCode] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Check localStorage for existing unlocked state
  useEffect(() => {
    try {
      const savedCode = localStorage.getItem('nanobag_promo_code');
      const savedEmail = localStorage.getItem('nanobag_user_email');
      if (savedCode) {
        setUnlockedCode(savedCode);
      }
      if (savedEmail) {
        setUserEmail(savedEmail);
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, []);

  const handleLeadCapture = (email: string, personaInterest?: string) => {
    const promoCode = 'NANOFIRST10';
    setUserEmail(email);
    setUnlockedCode(promoCode);
    setIsModalOpen(true);

    try {
      localStorage.setItem('nanobag_promo_code', promoCode);
      localStorage.setItem('nanobag_user_email', email);
      if (personaInterest) {
        localStorage.setItem('nanobag_persona_interest', personaInterest);
      }
    } catch {
      // Ignore storage errors
    }
  };

  const scrollToHeroConversion = () => {
    if (unlockedCode) {
      setIsModalOpen(true);
      return;
    }
    const heroInput = document.querySelector('input[type="email"]') as HTMLInputElement;
    if (heroInput) {
      heroInput.focus();
      heroInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectSolution = (solution: EDCSolution) => {
    if (unlockedCode) {
      setIsModalOpen(true);
    } else {
      scrollToHeroConversion();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-100 selection:bg-emerald-500 selection:text-black">
      {/* Top Announcement Bar (Sticky) */}
      <AnnouncementBar onCtaClick={scrollToHeroConversion} />

      {/* Minimalist Top Navigation Header */}
      <Navbar onUnlockClick={scrollToHeroConversion} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section & Lead Gen Conversion Module */}
        <HeroSection
          onSuccessfulSubmit={handleLeadCapture}
          unlockedCode={unlockedCode}
        />

        {/* Find Your Everyday Carry Solution (5 Personas) */}
        <EDCSolutionsSection onSelectSolution={handleSelectSolution} />

        {/* Technical Specs & Strength Simulator */}
        <SpecsSection />

        {/* Why Join The Nanobag Community? */}
        <CommunityPerksSection onUnlockClick={scrollToHeroConversion} />

        {/* Social Proof (100,000+ daily users & Sarah T. Quote) */}
        <SocialProofSection />

        {/* Colorways & Pattern Previewer */}
        <ColorwaysSection onUnlockClick={scrollToHeroConversion} />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Footer CTA Module */}
        <FooterCtaSection
          onSuccessfulSubmit={handleLeadCapture}
          unlockedCode={unlockedCode}
        />
      </main>

      {/* Minimalist Footer & Legal */}
      <Footer />

      {/* Discount Success Modal */}
      <DiscountSuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        couponCode={unlockedCode || 'NANOFIRST10'}
        email={userEmail}
      />
    </div>
  );
}
