import React from 'react';
import { EyeOff, Shuffle, Users, ShieldAlert, ArrowRight } from 'lucide-react';
import { trackEvent } from '../config/constants';

interface ProblemSectionProps {
  onOpenAudit: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenAudit }) => {
  const problems = [
    {
      number: '01',
      icon: EyeOff,
      title: 'Getting Attention, Not Enquiries',
      description: 'Content gets views but doesn’t consistently create conversations.',
      deepDive:
        'A viral Reel or sporadic spike in likes feels good, but without a systematic funnel mechanism, engagement never converts into high-ticket consultations or serious clients.',
    },
    {
      number: '02',
      icon: Shuffle,
      title: 'Posting Without A System',
      description: 'Content is being created, but without a clear business strategy.',
      deepDive:
        'Random daily planetary updates or card pulls without distinct authority pillars, offer positioning, or targeted lead hooks leave your profile feeling disjointed and unpredictable.',
    },
    {
      number: '03',
      icon: Users,
      title: 'Depending On Referrals',
      description: 'Referrals work, but they don’t create a structured acquisition system.',
      deepDive:
        'Word-of-mouth is a testament to your skill, but you cannot forecast, control, or scale word-of-mouth. When referrals dip, revenue unpredictability creates constant stress.',
    },
    {
      number: '04',
      icon: ShieldAlert,
      title: 'Great Expertise, Weak Positioning',
      description: 'The practitioner is highly skilled, but the digital brand doesn’t communicate that authority.',
      deepDive:
        'You have 10+ years of rigorous study or deep lineage, yet prospective clients compare you against amateur hobbyists because your visual branding and profile fail to signal mastery.',
    },
  ];

  return (
    <section className="py-24 bg-[#0E1116] border-y border-white/[0.04] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            <span>The Practitioner Dilemma</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            POSTING EVERY DAY. <span className="text-[#FF5B00]">STILL NOT GETTING ENQUIRIES?</span>
          </h2>
          <p className="text-lg sm:text-xl font-ad-serif text-zinc-300 italic">
            “More content isn’t always the answer. Better strategy is.”
          </p>
          <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed pt-1">
            Your expertise isn’t the problem. Many occult professionals have years of experience, strong knowledge and genuine expertise — but their marketing doesn’t communicate that value or consistently create business opportunities.
          </p>
        </div>

        {/* 4 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.number}
                className="group relative rounded-2xl bg-[#141820] border border-white/[0.06] p-7 transition-all duration-300 hover:border-[#FF5B00]/40 hover:bg-[#161B24] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#FF5B00] group-hover:scale-105 group-hover:bg-[#FF5B00]/10 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-500">
                      GAP {prob.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-white transition-colors">
                    {prob.title}
                  </h3>

                  <p className="text-sm font-semibold text-zinc-300 mb-3">
                    {prob.description}
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {prob.deepDive}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-zinc-500">
                  <span>Occult Business Bottleneck</span>
                  <span className="text-[#FF5B00] font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Needs system fix →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => {
              trackEvent('cta_click', { location: 'problem_section', label: 'IDENTIFY YOUR GROWTH GAPS' });
              onOpenAudit();
            }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white/[0.05] border border-white/[0.15] hover:border-[#FF5B00] hover:bg-[#FF5B00] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg"
          >
            <span>IDENTIFY YOUR GROWTH GAPS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
