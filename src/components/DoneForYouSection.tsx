import React from 'react';
import { UserCheck, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '../config/constants';

interface DoneForYouSectionProps {
  onOpenAudit: () => void;
}

export const DoneForYouSection: React.FC<DoneForYouSectionProps> = ({ onOpenAudit }) => {
  const practitionerRoles = [
    { title: 'Your True Craft', desc: 'Analyzing kundlis, reading spreads, calculating charts, evaluating floorplans' },
    { title: 'Client Care & Empathy', desc: 'Providing transformational guidance and spiritual clarity to seekers' },
    { title: 'Paid Consultations', desc: 'Conducting high-impact 1-on-1 sessions without marketing distractions' },
    { title: 'Business Vision', desc: 'Deciding the future direction and depth of your occult practice' },
  ];

  const agencyDeliverables = [
    { title: 'Growth Strategy', desc: 'Offer packaging, pricing tier models, and market positioning' },
    { title: 'Branding & Aesthetics', desc: 'Premium visual identity, social media presence, and design direction' },
    { title: 'Content Engine', desc: 'High-signal scripts, video concepts, authority carousels, and hooks' },
    { title: 'Lead Generation', desc: 'Meta ad campaigns, Click-to-WhatsApp ads, and custom landing pages' },
    { title: 'Conversion Systems', desc: 'Pre-screening WhatsApp workflows, calendar scheduling, and follow-ups' },
    { title: 'Ongoing Optimization', desc: 'Performance analytics, audience tracking, and campaign refinement' },
  ];

  return (
    <section className="py-24 bg-[#0B0D11] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF5B00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            <span>Clear Division of Responsibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
            Focus On Your Expertise.{' '}
            <span className="block text-[#FF5B00]">We’ll Handle The Marketing.</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            You shouldn’t have to be the practitioner, content strategist, designer, advertiser, funnel builder and marketing manager at the same time.
          </p>
        </div>

        {/* Side-by-Side Comparison Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Column 1: YOU (The Practitioner) */}
          <div className="rounded-2xl bg-[#12151B] border border-white/[0.08] p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white">
                    <UserCheck className="w-5 h-5 text-zinc-300" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                      Your Sole Focus
                    </span>
                    <h3 className="text-xl font-bold text-white font-heading">
                      YOU (The Occult Master)
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded">
                  Craft & Guidance
                </span>
              </div>

              <div className="space-y-4">
                {practitionerRoles.map((role, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-white">{role.title}</div>
                      <div className="text-xs text-zinc-400 mt-0.5">{role.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06] text-xs text-zinc-400">
              No more wasting precious consultation hours trying to edit reels or decipher Meta Ads Manager.
            </div>
          </div>

          {/* Column 2: ASTRO EXPERTS (Done-For-You Agency) */}
          <div className="rounded-2xl bg-gradient-to-b from-[#181C24] to-[#12151B] border-2 border-[#FF5B00]/60 p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute top-3 right-4 px-2.5 py-0.5 rounded-full bg-[#FF5B00] text-white text-[10px] font-extrabold uppercase tracking-wider">
              100% Done-For-You
            </div>

            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF5B00]/20 border border-[#FF5B00]/40 flex items-center justify-center text-[#FF5B00]">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF5B00] block">
                      Our Infrastructure
                    </span>
                    <h3 className="text-xl font-bold text-white font-heading">
                      ASTRO EXPERTS
                    </h3>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {agencyDeliverables.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-[#FF5B00]/20 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5B00] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">{item.title}</div>
                      <div className="text-[11px] text-zinc-300 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <div className="text-xs text-zinc-300 mb-3">
                We handle the strategy, build the digital assets, run the acquisition campaigns, and optimize your conversions.
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <button
            onClick={() => {
              trackEvent('cta_click', { location: 'done_for_you_section' });
              onOpenAudit();
            }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#FF5B00] hover:bg-[#E05000] text-white text-xs font-bold uppercase tracking-wider shadow-xl shadow-[#FF5B00]/20 transition-all cursor-pointer"
          >
            <span>LET’S BUILD YOUR GROWTH SYSTEM</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
