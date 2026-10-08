import React from 'react';
import { AstroExpertsLogo } from './AstroExpertsLogo';
import { ShieldCheck, Target, Layers, ArrowRight } from 'lucide-react';
import { trackEvent } from '../config/constants';

interface AboutSectionProps {
  onOpenAudit: () => void;
  isStandalonePage?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAudit, isStandalonePage = false }) => {
  return (
    <section className={`${isStandalonePage ? 'pt-32 pb-24' : 'py-24'} bg-white border-t border-zinc-200/80 relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF5B00]/25 bg-[#FF5B00]/10 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            <span>Our Foundation & Mission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight font-heading">
            WE UNDERSTAND THE OCCULT BUSINESS.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Built specifically to solve a critical void in modern digital growth.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-zinc-50 border border-zinc-200/90 p-8 sm:p-12 space-y-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-zinc-200 gap-4">
            <AstroExpertsLogo size="lg" variant="light-bg" />
            <div className="text-left sm:text-right">
              <span className="text-[11px] font-mono text-[#FF5B00] uppercase font-bold block">
                Brand Identifier
              </span>
              <span className="text-xs text-zinc-500">
                Done-For-You Growth Infrastructure
              </span>
            </div>
          </div>

          <div className="space-y-5 text-zinc-700 leading-relaxed text-sm sm:text-base">
            <p>
              Occult professionals often have deep expertise but limited access to specialized marketing strategy, professional branding and structured client-acquisition systems.
            </p>
            <p>
              Generic marketing agencies do not grasp the sensitivities, ethics, or nuanced client motivations in astrology, tarot, numerology, and healing. They either propose gimmicky social media trends that erode your dignity, or apply generic lead-gen formulas that deliver irrelevant inquiries.
            </p>
            <p>
              <strong className="text-zinc-950">Astro Experts exists to bridge that gap.</strong> We provide end-to-end Done-For-You implementation. We do not ask you to learn ad management software or write video scripts late at night after a full day of reading charts. Our team engineers the marketing infrastructure, so you can devote your energy entirely to your craft and your clients.
            </p>
          </div>

          {/* Core Agency Commitments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6 border-t border-zinc-200">
            <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/70 flex items-center justify-center text-[#FF5B00] mb-3">
                <Target className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-zinc-950 mb-1">Occult-Only Focus</h4>
              <p className="text-xs text-zinc-600">
                100% of our systems, copy, and funnels are crafted specifically for the Indian and global occult ecosystem.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/70 flex items-center justify-center text-[#FF5B00] mb-3">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-zinc-950 mb-1">Done-For-You Execution</h4>
              <p className="text-xs text-zinc-600">
                We are not a coaching course. We build the brand, write the content, run the ads, and optimize the funnels for you.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/70 flex items-center justify-center text-[#FF5B00] mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-zinc-950 mb-1">Dignity & Integrity</h4>
              <p className="text-xs text-zinc-600">
                Zero cheap gimmicks, zero fear-based manipulation, and zero false claims. We preserve your sacred authority.
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-200">
            <span className="text-xs text-zinc-600">
              Ready to explore what an engineered system would look like for your practice?
            </span>
            <button
              onClick={() => {
                trackEvent('cta_click', { location: 'about_section' });
                onOpenAudit();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FF5B00] hover:bg-[#E05000] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#FF5B00]/25"
            >
              <span>Get Your Growth Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
