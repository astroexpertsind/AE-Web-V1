import React from 'react';
import { Target, Sparkles, Video, Magnet, KeyRound, ArrowRight } from 'lucide-react';
import { trackEvent } from '../config/constants';

interface SolutionSectionProps {
  onOpenAudit: () => void;
  onNavigateToServices?: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenAudit, onNavigateToServices }) => {
  const blocks = [
    {
      step: '01',
      title: 'POSITIONING',
      icon: Target,
      tagline: 'Market Differentiation & Authority Angle',
      summary: 'Clarify what you stand for, who you serve and why clients should choose you.',
      details: [
        'Niche definition across Vedic, Tarot, Numerology, or Vastu',
        'High-ticket offer architecture & pricing structuring',
        'Unique mechanism articulation so you are never a commodity',
      ],
    },
    {
      step: '02',
      title: 'PERSONAL BRAND',
      icon: Sparkles,
      tagline: 'Visual Dignity & Digital Stature',
      summary: 'Build a professional digital identity around your expertise.',
      details: [
        'Editorial Instagram & website profile redesign',
        'Cohesive visual direction honoring your occult lineage',
        'Bio optimization, pinned assets, and credibility anchors',
      ],
    },
    {
      step: '03',
      title: 'CONTENT SYSTEM',
      icon: Video,
      tagline: 'Strategic Authority & Educational Demand',
      summary: 'Create strategic content designed to communicate authority and generate demand.',
      details: [
        'Done-For-You content pillars tailored to your craft',
        'High-signal short-form Reels scripts & visual templates',
        'Educational breakdowns converting skepticism into respect',
      ],
    },
    {
      step: '04',
      title: 'LEAD GENERATION',
      icon: Magnet,
      tagline: 'Predictable Inbound Flow',
      summary: 'Build systems designed to attract relevant enquiries.',
      details: [
        'High-converting Meta ad campaigns (Click-to-WhatsApp & Lead Forms)',
        'Strategic lead magnets addressing urgent life questions',
        'Custom high-speed landing pages built for occult consultation conversion',
      ],
    },
    {
      step: '05',
      title: 'CONVERSION',
      icon: KeyRound,
      tagline: 'Enquiry to Paid Consultation',
      summary: 'Create a clear path from enquiry to consultation or purchase.',
      details: [
        'Structured WhatsApp qualification flows to filter non-serious leads',
        'Automated calendar booking & consultation pre-briefing',
        'Dignified follow-up protocols without pushy or salesy tactics',
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#F8F9FA] border-b border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF5B00]/25 bg-[#FF5B00]/10 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            <span>The Unified Solution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight font-heading">
            Build A Marketing System Around Your Expertise.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Astro Experts combines strategy, branding, content, lead generation and conversion into a single Done-For-You growth system.
          </p>
        </div>

        {/* 5 Service Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blocks.map((blk, idx) => {
            const Icon = blk.icon;
            const isLast = idx === 4;
            return (
              <div
                key={blk.step}
                className={`rounded-2xl bg-white border border-zinc-200/90 p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#FF5B00]/40 hover:-translate-y-1 hover:shadow-lg ${
                  isLast ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-extrabold text-[#FF5B00] px-2.5 py-1 rounded-md bg-[#FF5B00]/10 border border-[#FF5B00]/25">
                      SYSTEM {blk.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/70 flex items-center justify-center text-[#FF5B00]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-zinc-950 mb-1 font-heading">
                    {blk.title}
                  </h3>

                  <div className="text-xs text-[#E05000] font-semibold mb-3">
                    {blk.tagline}
                  </div>

                  <p className="text-sm text-zinc-700 font-medium mb-6">
                    {blk.summary}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-zinc-100">
                    {blk.details.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-zinc-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B00] mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <span className="text-zinc-500 font-medium">Fully Done-For-You</span>
                  <button
                    onClick={() => {
                      trackEvent('cta_click', { location: 'solution_block', block: blk.title });
                      onOpenAudit();
                    }}
                    className="text-[#FF5B00] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Audit {blk.title.toLowerCase()}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}

          {/* Quick Summary Card */}
          <div className="rounded-2xl bg-gradient-to-br from-orange-500/5 via-white to-orange-500/10 border-2 border-[#FF5B00]/30 p-8 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF5B00] block mb-2">
                Why It Works
              </span>
              <h3 className="text-xl font-bold text-zinc-950 mb-3 font-heading">
                Integrated Systems Beat Random Tactics
              </h3>
              <p className="text-xs text-zinc-700 leading-relaxed">
                When positioning, content, advertising, and conversion funnels are engineered as one continuous machine, every rupee and hour invested feeds into a predictable engine.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-orange-200/60">
              <button
                onClick={() => {
                  trackEvent('cta_click', { location: 'solution_view_all_services' });
                  if (onNavigateToServices) onNavigateToServices();
                  else onOpenAudit();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-[#FF5B00] hover:bg-[#E05000] text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#FF5B00]/25"
              >
                <span>Explore Full Service Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
