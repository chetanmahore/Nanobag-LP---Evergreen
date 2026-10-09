import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'How does the 10% discount code work?',
    answer:
      'As soon as you enter your email address above, your personalized 10% discount coupon will appear directly on screen and be sent to your inbox. You can paste it into the promo box at checkout on nanobag.com for an immediate 10% deduction across any bag or bundle.'
  },
  {
    question: 'How can a 22-gram bag hold 30 kg (66 lbs) without tearing?',
    answer:
      'Nanobag is engineered using custom-woven diamond ripstop nylon polymer. The microscopic diamond grid distributes mechanical load across millions of micro-threads, while the handles feature heavy-duty bar-tack reinforced box stitching identical to high-altitude climbing harnesses.'
  },
  {
    question: 'Do I have to fold it neatly to get it back into the pouch?',
    answer:
      'Absolutely not! Nobody has time for bag origami in a checkout line. Nanobag features an attached, stretch-integrated micro pouch. You literally just scrunch and stuff the fabric into the pouch in under 3 seconds. It pops back out wrinkle-free.'
  },
  {
    question: 'Is Nanobag water-resistant and machine washable?',
    answer:
      'Yes! The diamond ripstop fabric is treated with a durable water-repellent coating that easily resists sudden rain and spills. If it gets dirty after groceries or outdoor trips, simply toss it into the washing machine on cold, and it air-dries completely in 15–20 minutes.'
  },
  {
    question: 'What is the Nanobag guarantee?',
    answer:
      'Every genuine Nanobag comes backed by our comprehensive lifetime guarantee. If your bag ever fails due to a manufacturing or material defect under normal everyday carry use, we will replace it free of charge.'
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Yes, we ship to over 160 countries worldwide. Orders over $40 qualify for free tracked standard shipping.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-neutral-900/40 border-t border-neutral-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mt-2 text-neutral-400 text-sm sm:text-base">
            Everything you need to know about Nanobag and our welcome offer.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-800/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-emerald-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
