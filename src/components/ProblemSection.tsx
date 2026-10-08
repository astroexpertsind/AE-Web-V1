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
    <section className="py-24 bg-white border-y border-zinc-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF5B00]/25 bg-[#FF5B00]/10 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            <span>The Practitioner Dilemma</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight font-heading">
            POSTING EVERY DAY.{' '}
            <span className="text-[#FF5B00]">STILL NOT GETTING ENQUIRIES?</span>
          </h2>
          <p className="text-lg sm:text-xl font-ad-serif text-[#E05000] italic font-semibold">
            “More content isn’t always the answer. Better strategy is.”
          </p>
          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed pt-1">
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
                className="group relative rounded-2xl bg-zinc-50 border border-zinc-200/90 p-7 transition-all duration-300 hover:border-[#FF5B00]/50 hover:bg-white hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-[#FF5B00] group-hover:scale-105 group-hover:bg-[#FF5B00]/15 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-zinc-400">
                      GAP {prob.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-zinc-950 mb-2 font-heading transition-colors">
                    {prob.title}
                  </h3>

                  <p className="text-sm font-semibold text-zinc-800 mb-3">
                    {prob.description}
                  </p>

                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {prob.deepDive}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500">
                  <span>Occult Business Bottleneck</span>
                  <span className="text-[#FF5B00] font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
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
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FF5B00] hover:bg-[#E05000] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg shadow-[#FF5B00]/25"
          >
            <span>IDENTIFY YOUR GROWTH GAPS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
