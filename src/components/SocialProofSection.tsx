import React from 'react';
import { Lock, FileCheck, Shield, ArrowRight } from 'lucide-react';
import { trackEvent } from '../config/constants';

interface SocialProofSectionProps {
  onOpenAudit: () => void;
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({ onOpenAudit }) => {
  return (
    <section className="py-24 bg-[#0E1116] border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            <span>Verified Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            CLIENT RESULTS & CASE STUDIES
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            We hold strict confidentiality for every astrologer, tarot master, and occult consultant we partner with.
          </p>
        </div>

        {/* Tasteful, Transparent Placeholder Box */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-[#141820] border border-white/[0.08] p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#FF5B00] mx-auto mb-6">
            <Lock className="w-6 h-6" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3 font-heading">
            CLIENT CASE STUDIES COMING SOON
          </h3>

          <p className="text-sm text-zinc-300 leading-relaxed max-w-xl mx-auto mb-6">
            Astro Experts operates under strict Non-Disclosure Agreements (NDAs) with our initial cohorts of specialized occult practitioners while bespoke growth systems and campaigns are currently underway. Verified case studies with audited inquiry metrics and client attribution will be published here upon clearance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.06] text-left max-w-lg mx-auto mb-8">
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <div className="text-[11px] font-bold uppercase text-zinc-400">Strict Privacy</div>
              <div className="text-xs text-zinc-300 mt-0.5">Discreet brand handling</div>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <div className="text-[11px] font-bold uppercase text-zinc-400">Zero Fabrications</div>
              <div className="text-xs text-zinc-300 mt-0.5">Only real, audited data</div>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <div className="text-[11px] font-bold uppercase text-zinc-400">Tailored Systems</div>
              <div className="text-xs text-zinc-300 mt-0.5">Custom to your discipline</div>
            </div>
          </div>

          <button
            onClick={() => {
              trackEvent('cta_click', { location: 'case_studies_placeholder' });
              onOpenAudit();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] border border-white/[0.12] hover:bg-[#FF5B00] hover:border-[#FF5B00] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
          >
            <span>Request A Private System Assessment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
