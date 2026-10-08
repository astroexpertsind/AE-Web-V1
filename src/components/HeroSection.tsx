import React, { useState } from 'react';
import { AstroExpertsLogo } from './AstroExpertsLogo';
import { ArrowRight, MessageCircle, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { BRAND, getWhatsAppUrl, getCallUrl, trackEvent } from '../config/constants';

interface HeroSectionProps {
  onOpenAudit: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAudit }) => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const growthStages = [
    {
      step: '01',
      title: 'EXPERTISE',
      subtitle: 'Your Core Craft',
      description: 'Your years of study in astrology, tarot, numerology, or vastu.',
      action: 'Unchanged & Honored',
    },
    {
      step: '02',
      title: 'BRAND',
      subtitle: 'Market Identity',
      description: 'Premium visual language, profile positioning, and clear messaging.',
      action: 'Astro Experts Builds',
    },
    {
      step: '03',
      title: 'AUTHORITY',
      subtitle: 'Trust & Proof',
      description: 'Strategic content pillars, high-signal Reels, and clear viewpoints.',
      action: 'Astro Experts Curates',
    },
    {
      step: '04',
      title: 'LEADS',
      subtitle: 'Inbound Inquiries',
      description: 'Targeted Meta ad funnels & WhatsApp chat lead acquisition systems.',
      action: 'Astro Experts Drives',
    },
    {
      step: '05',
      title: 'CLIENTS',
      subtitle: 'Qualified Buyers',
      description: 'Pre-screened consultations and structured inquiry workflows.',
      action: 'Consultation Booked',
    },
    {
      step: '06',
      title: 'GROWTH',
      subtitle: 'Scalable Practice',
      description: 'Data optimization and compounding organic and paid reputation.',
      action: 'Sustainable Scale',
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FBFBFC]">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF5B00]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-orange-400/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle fine geometric grid pattern in background */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Official Agency Brand Badge with Logo */}
          <div className="flex items-center justify-center mb-2">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white border border-zinc-200 shadow-sm">
              <AstroExpertsLogo size="sm" variant="light-bg" />
              <span className="w-1 h-3.5 bg-zinc-300 rounded-full" />
              <span className="text-[11px] font-bold text-zinc-600 uppercase tracking-wider">
                Official Agency Portal
              </span>
            </div>
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF5B00]/20 bg-[#FF5B00]/10 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B00] animate-pulse" />
            <span>THE GROWTH PARTNER FOR OCCULT PROFESSIONALS</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 leading-[1.1] font-heading">
            YOU HAVE THE EXPERTISE.{' '}
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FF5B00] via-[#FF6A1A] to-[#E05000]">
              WE BUILD THE SYSTEM AROUND IT.
            </span>
          </h1>

          {/* Supporting Headline */}
          <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed max-w-3xl mx-auto">
            Done-For-You Marketing & Growth Systems for Astrologers, Tarot Readers, Numerologists, Vastu Consultants & Occult Professionals.
          </p>

          {/* Ad Campaign Signature Italic Subline */}
          <p className="text-base sm:text-lg font-ad-serif text-[#E05000] italic font-semibold">
            “Your expertise deserves a better growth system.”
          </p>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                trackEvent('cta_click', { location: 'hero_primary', label: 'GET YOUR GROWTH AUDIT' });
                onOpenAudit();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FF5B00] text-white text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#FF5B00]/30 hover:bg-[#E05000] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>GET YOUR GROWTH AUDIT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { location: 'hero_secondary' })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white border border-zinc-200 text-zinc-800 text-sm font-bold hover:bg-zinc-50 hover:border-zinc-300 shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#1FAF38]" />
              <span>CHAT ON WHATSAPP</span>
            </a>
          </div>

          {/* Subtle Line Underneath */}
          <div className="pt-3 text-xs sm:text-sm font-semibold tracking-wide text-zinc-500 uppercase flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <span>Brand</span>
            <span className="text-zinc-300">·</span>
            <span>Content</span>
            <span className="text-zinc-300">·</span>
            <span>Lead Generation</span>
            <span className="text-zinc-300">·</span>
            <span>Conversion</span>
          </div>
        </div>

        {/* Sophisticated Growth System Visual / Diagram */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-white border border-zinc-200/90 p-6 sm:p-8 md:p-10 shadow-xl overflow-hidden">
            {/* Top Bar Indicator */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-zinc-100 gap-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF5B00] block">
                  The End-to-End Flywheel
                </span>
                <h3 className="text-lg font-bold text-zinc-900 mt-0.5">
                  The Astro Experts Occult Growth Architecture
                </h3>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Done-For-You Execution
                </span>
                <span className="text-zinc-300">|</span>
                <a 
                  href={getCallUrl()} 
                  className="hover:text-black transition-colors flex items-center gap-1 text-zinc-600 font-semibold"
                >
                  <Phone className="w-3 h-3 text-[#FF5B00]" />
                  <span>{BRAND.phone}</span>
                </a>
              </div>
            </div>

            {/* Stages Pipeline Horizontal / Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative">
              {growthStages.map((stage, idx) => {
                const isSelected = activeStage === idx;
                return (
                  <button
                    key={stage.title}
                    onClick={() => setActiveStage(idx)}
                    className={`text-left p-4 rounded-2xl border transition-all relative flex flex-col justify-between min-h-[140px] cursor-pointer ${
                      isSelected
                        ? 'bg-[#FF5B00]/5 border-[#FF5B00] ring-1 ring-[#FF5B00]/30 shadow-md'
                        : 'bg-zinc-50/70 border-zinc-200/70 hover:bg-zinc-100/70 hover:border-zinc-300'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className={`font-mono font-bold ${isSelected ? 'text-[#FF5B00]' : 'text-zinc-400'}`}>
                          {stage.step}
                        </span>
                        {idx < growthStages.length - 1 && (
                          <span className="hidden lg:inline text-zinc-400 text-[10px]">→</span>
                        )}
                      </div>
                      <div className="font-extrabold text-sm tracking-tight text-zinc-900 font-heading">
                        {stage.title}
                      </div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">
                        {stage.subtitle}
                      </div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-zinc-200/60 text-[10px] font-semibold text-zinc-400">
                      {stage.action}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Highlight Deep-Dive */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#FF5B00] uppercase tracking-wider">
                    Stage {growthStages[activeStage].step}: {growthStages[activeStage].title}
                  </span>
                  <span className="text-zinc-300">·</span>
                  <span className="text-xs text-zinc-500">
                    {growthStages[activeStage].subtitle}
                  </span>
                </div>
                <p className="text-sm text-zinc-700">
                  {growthStages[activeStage].description}
                </p>
              </div>

              <button
                onClick={() => {
                  trackEvent('cta_click', { location: 'hero_diagram_action', stage: growthStages[activeStage].title });
                  onOpenAudit();
                }}
                className="flex-shrink-0 text-xs font-bold uppercase tracking-wider text-white bg-[#FF5B00] hover:bg-[#E05000] px-5 py-2.5 rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <span>Audit This Gap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
