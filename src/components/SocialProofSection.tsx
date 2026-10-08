import React from 'react';
import { Lock, FileCheck, Shield, ArrowRight } from 'lucide-react';
import { trackEvent } from '../config/constants';

interface SocialProofSectionProps {
  onOpenAudit: () => void;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({ onOpenAudit }) => {
  return (
    <section className="py-24 bg-white border-y border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF5B00]/25 bg-[#FF5B00]/10 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            <span>Verified Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight font-heading">
            CLIENT RESULTS & CASE STUDIES
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            We hold strict confidentiality for every astrologer, tarot master, and occult consultant we partner with.
          </p>
        </div>

        {/* Tasteful, Transparent Placeholder Box */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-zinc-50 border border-zinc-200/90 p-8 sm:p-12 text-center relative overflow-hidden shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF5B00] mx-auto mb-6">
            <Lock className="w-6 h-6" />
          </div>

          <h3 className="text-2xl font-bold text-zinc-950 mb-3 font-heading">
            CLIENT CASE STUDIES COMING SOON
          </h3>

          <p className="text-sm text-zinc-600 leading-relaxed max-w-xl mx-auto mb-6">
            Astro Experts operates under strict Non-Disclosure Agreements (NDAs) with our initial cohorts of specialized occult practitioners while bespoke growth systems and campaigns are currently underway. Verified case studies with audited inquiry metrics and client attribution will be published here upon clearance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-200 text-left max-w-lg mx-auto mb-8">
            <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-2xs">
              <div className="text-[11px] font-bold uppercase text-zinc-500">Strict Privacy</div>
              <div className="text-xs text-zinc-800 mt-0.5 font-medium">Discreet brand handling</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-2xs">
              <div className="text-[11px] font-bold uppercase text-zinc-500">Zero Fabrications</div>
              <div className="text-xs text-zinc-800 mt-0.5 font-medium">Only real, audited data</div>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-2xs">
              <div className="text-[11px] font-bold uppercase text-zinc-500">Tailored Systems</div>
              <div className="text-xs text-zinc-800 mt-0.5 font-medium">Custom to your discipline</div>
            </div>
          </div>

          <button
            onClick={() => {
              trackEvent('cta_click', { location: 'case_studies_placeholder' });
              onOpenAudit();
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border border-zinc-300 hover:bg-[#FF5B00] hover:border-[#FF5B00] hover:text-white text-zinc-800 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
          >
            <span>Request A Private System Assessment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
