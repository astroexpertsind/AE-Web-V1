import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { trackEvent } from '../config/constants';

interface FAQSectionProps {
  onOpenAudit: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenAudit }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Who is Astro Experts for?',
      answer:
        'Astro Experts is built specifically for serious professionals in the occult industry, including Astrologers (Vedic, KP, Western, Nadi), Tarot Readers, Numerologists, Vastu Consultants, Spiritual Practitioners, Healers, and Occult Coaches. We serve practitioners who have genuine subject expertise and want a professional, scalable digital marketing system built around their business.',
    },
    {
      question: 'What services do you provide?',
      answer:
        'We provide end-to-end Done-For-You marketing and growth systems, including Strategic Positioning, Personal Brand & Profile Optimization, Content Marketing (scripts, carousels, video guidance), Meta Ads & Lead Generation, WhatsApp Enquiry & Booking Funnels, and ongoing Campaign Optimization.',
    },
    {
      question: 'Do you work only with astrologers?',
      answer:
        'No. While astrology is a major vertical, we work extensively with Tarot Readers, Numerologists, Vastu Consultants, Pranic & Reiki Healers, Sound Therapists, and mentors running occult training academies.',
    },
    {
      question: 'Do you provide Done-For-You services?',
      answer:
        'Yes, 100%. Astro Experts is a Done-For-You agency, not a coaching program. We build your assets, write your content frameworks, launch and manage your ad campaigns, configure your funnels, and optimize your conversion systems for you.',
    },
    {
      question: 'Can you help with lead generation?',
      answer:
        'Yes. We specialize in designing and managing customer acquisition funnels for the occult industry, using high-converting Meta advertising campaigns, lead magnets, and direct Click-to-WhatsApp inbound systems that attract serious, pre-qualified consultation seekers.',
    },
    {
      question: 'Do you manage Meta Ads?',
      answer:
        'Yes. We manage your Meta (Instagram and Facebook) advertising from audience targeting, copy, and creative direction to pixel tracking, budget optimization, and Click-to-WhatsApp funnels.',
    },
    {
      question: 'Do you work with coaches and course creators?',
      answer:
        'Yes. If you teach astrology, tarot, numerology, or vastu, we build launch funnels, webinar acquisition pipelines, and student qualification sequences to fill your course cohorts and masterclasses predictably.',
    },
    {
      question: 'How does the Growth Audit work?',
      answer:
        'The Growth Audit is a structured, confidential assessment of your current practice. We examine your brand positioning, social media profiles, content strategy, inquiry flow, and conversion journey to pinpoint exactly where you are losing potential clients and provide actionable recommendations.',
    },
    {
      question: 'How do I get started?',
      answer:
        'The first step is to request a Growth Audit by filling out our short questionnaire, or message us directly on WhatsApp (+91 96488 52456). We will evaluate your practice, discuss your objectives, and outline a tailored growth roadmap.',
    },
    {
      question: 'Do you guarantee results?',
      answer:
        'We don’t believe in guaranteeing specific business outcomes because results depend on multiple factors including offer, market, positioning, execution and customer behavior. Our focus is on building, implementing and optimizing a strong marketing system around your business.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#0E1116] border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Clear Answers About Our Agency
          </h2>
          <p className="text-base text-zinc-400 font-normal">
            Everything you need to know about partnering with Astro Experts.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-xl bg-[#141820] border border-white/[0.06] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-[#FF5B00]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-white/[0.04]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center text-xs text-zinc-400">
          Have a specific question about your practice?{' '}
          <button
            onClick={() => {
              trackEvent('cta_click', { location: 'faq_cta' });
              onOpenAudit();
            }}
            className="text-[#FF5B00] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Request your Growth Audit</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
};
