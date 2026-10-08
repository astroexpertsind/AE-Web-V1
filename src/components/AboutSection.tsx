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
    <section className={`${isStandalonePage ? 'pt-32 pb-24' : 'py-24'} bg-[#0B0D11] relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            <span>Our Foundation & Mission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            WE UNDERSTAND THE OCCULT BUSINESS.
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Built specifically to solve a critical void in modern digital growth.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-[#12151B] border border-white/[0.08] p-8 sm:p-12 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/[0.06] gap-4">
            <AstroExpertsLogo size="lg" variant="dark-bg" />
            <div className="text-right sm:text-right">
              <span className="text-[11px] font-mono text-[#FF5B00] uppercase font-bold block">
                Brand Identifier
              </span>
              <span className="text-xs text-zinc-400">
                Done-For-You Growth Infrastructure
              </span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none space-y-5 text-zinc-300 leading-relaxed text-sm sm:text-base">
            <p>
              Occult professionals often have deep expertise but limited access to specialized marketing strategy, professional branding and structured client-acquisition systems.
            </p>
            <p>
              Generic marketing agencies do not grasp the sensitivities, ethics, or nuanced client motivations in astrology, tarot, numerology, and healing. They either propose gimmicky social media trends that erode your dignity, or apply generic lead-gen formulas that deliver irrelevant inquiries.
            </p>
            <p>
              <strong className="text-white">Astro Experts exists to bridge that gap.</strong> We provide end-to-end Done-For-You implementation. We do not ask you to learn ad management software or write video scripts late at night after a full day of reading charts. Our team engineers the marketing infrastructure, so you can devote your energy entirely to your craft and your clients.
            </p>
          </div>

          {/* Core Agency Commitments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6 border-t border-white/[0.06]">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="w-9 h-9 rounded-lg bg-[#FF5B00]/10 flex items-center justify-center text-[#FF5B00] mb-3">
                <Target className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Occult-Only Focus</h4>
              <p className="text-xs text-zinc-400">
                100% of our systems, copy, and funnels are crafted specifically for the Indian and global occult ecosystem.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="w-9 h-9 rounded-lg bg-[#FF5B00]/10 flex items-center justify-center text-[#FF5B00] mb-3">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Done-For-You Execution</h4>
              <p className="text-xs text-zinc-400">
                We are not a coaching course. We build the brand, write the content, run the ads, and optimize the funnels for you.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <div className="w-9 h-9 rounded-lg bg-[#FF5B00]/10 flex items-center justify-center text-[#FF5B00] mb-3">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Dignity & Integrity</h4>
              <p className="text-xs text-zinc-400">
                Zero cheap gimmicks, zero fear-based manipulation, and zero false claims. We preserve your sacred authority.
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06]">
            <span className="text-xs text-zinc-400">
              Ready to explore what an engineered system would look like for your practice?
            </span>
            <button
              onClick={() => {
                trackEvent('cta_click', { location: 'about_section' });
                onOpenAudit();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#FF5B00] hover:bg-[#E05000] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
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
