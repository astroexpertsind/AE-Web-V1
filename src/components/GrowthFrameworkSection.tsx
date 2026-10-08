import React from 'react';
import { Layers, ArrowDown, ChevronRight, Check } from 'lucide-react';
import { trackEvent } from '../config/constants';

interface GrowthFrameworkSectionProps {
  onOpenAudit: () => void;
}

export const GrowthFrameworkSection: React.FC<GrowthFrameworkSectionProps> = ({ onOpenAudit }) => {
  const steps = [
    {
      num: '01',
      title: 'POSITION',
      kicker: 'Clarity & Distinction',
      whatWeDo:
        'We define who you serve, what unique lens you bring to your occult discipline, and eliminate price resistance by positioning you as an undeniable authority.',
      deliverables: ['Target Archetype Mapping', 'Signature Offer Packaging', 'Value Proposition Scripting'],
    },
    {
      num: '02',
      title: 'BUILD AUTHORITY',
      kicker: 'Visual Dignity & Stature',
      whatWeDo:
        'We construct an authoritative digital presence across Instagram, landing pages, and profile assets that commands respect from serious clients.',
      deliverables: ['Profile Optimization', 'Editorial Aesthetics', 'Credibility & Social Anchors'],
    },
    {
      num: '03',
      title: 'CREATE DEMAND',
      kicker: 'Strategic Educational Content',
      whatWeDo:
        'Instead of trendy dances or generic horoscopes, we script and produce high-signal content that educates potential clients on the root causes of their life dilemmas.',
      deliverables: ['DFY Reels Scripts & Direction', 'Authority Carousels', 'Transit & Case Breakdown Posts'],
    },
    {
      num: '04',
      title: 'GENERATE LEADS',
      kicker: 'Predictable Inbound Flow',
      whatWeDo:
        'We launch targeted Meta advertising campaigns and lead magnet funnels that drive high-intent individuals directly into your WhatsApp and booking channels.',
      deliverables: ['Click-to-WhatsApp Meta Ads', 'High-Converting Landing Pages', 'Lead Magnet Architecture'],
    },
    {
      num: '05',
      title: 'CONVERT',
      kicker: 'Dignified Consultation Booking',
      whatWeDo:
        'We install automated WhatsApp pre-qualification workflows and frictionless booking calendars so enquiries turn into pre-paid, committed consultations.',
      deliverables: ['WhatsApp Qualification Scripts', 'Calendar & Payment Gateway Setup', 'Follow-up Nurture Sequences'],
    },
    {
      num: '06',
      title: 'OPTIMIZE',
      kicker: 'Iterative Practice Scaling',
      whatWeDo:
        'We audit conversion metrics, refine ad spend efficiency, expand client lifetime value, and prepare your practice for scalable group programs or course cohorts.',
      deliverables: ['CPA & Booking Rate Tracking', 'Creative Iteration & Scaling', 'Long-Term Growth Roadmap'],
    },
  ];

  return (
    <section className="py-24 bg-[#F8F9FA] border-y border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF5B00]/25 bg-[#FF5B00]/10 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            <span>Systemic Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight font-heading">
            THE ASTRO EXPERTS GROWTH SYSTEM
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Sustainable growth is never the result of isolated social media posting or random luck. We treat client acquisition as an integrated, predictable engineering system.
          </p>
        </div>

        {/* Vertical Stepped Architecture Flow */}
        <div className="max-w-4xl mx-auto space-y-4 relative">
          {steps.map((step, idx) => (
            <div key={step.num} className="relative">
              <div className="rounded-2xl bg-white border border-zinc-200/90 p-6 sm:p-8 hover:border-[#FF5B00]/40 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  {/* Left Column: Number & Title */}
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs font-extrabold text-[#FF5B00] px-2 py-0.5 rounded-md bg-[#FF5B00]/10 border border-[#FF5B00]/25">
                        STAGE {step.num}
                      </span>
                      <span className="text-xs text-zinc-500 font-medium">{step.kicker}</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-zinc-950 font-heading tracking-tight">
                      {step.title}
                    </h3>
                  </div>

                  {/* Right Column: Execution & Deliverables */}
                  <div className="md:w-2/3 space-y-4">
                    <p className="text-sm text-zinc-700 leading-relaxed font-normal">
                      {step.whatWeDo}
                    </p>

                    <div className="pt-3 border-t border-zinc-100 flex flex-wrap gap-2">
                      {step.deliverables.map((item, i) => (
                        <div
                          key={i}
                          className="text-[11px] font-medium text-zinc-700 bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded-md flex items-center gap-1.5"
                        >
                          <Check className="w-3 h-3 text-[#FF5B00]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting arrow between steps */}
              {idx < steps.length - 1 && (
                <div className="flex justify-center my-2 text-zinc-400">
                  <ArrowDown className="w-5 h-5 text-zinc-400 animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              trackEvent('cta_click', { location: 'growth_system_framework' });
              onOpenAudit();
            }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FF5B00] hover:bg-[#E05000] text-white text-xs font-bold uppercase tracking-wider shadow-xl shadow-[#FF5B00]/25 transition-all cursor-pointer"
          >
            <span>INSTALL THIS SYSTEM IN YOUR PRACTICE</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
