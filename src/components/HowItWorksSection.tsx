import React from 'react';
import { Search, ClipboardCheck, Compass, Cog, LineChart, ArrowRight } from 'lucide-react';
import { trackEvent } from '../config/constants';

interface HowItWorksSectionProps {
  onOpenAudit: () => void;
  isStandalonePage?: boolean;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenAudit, isStandalonePage = false }) => {
  const steps = [
    {
      step: '01',
      title: 'DISCOVER',
      icon: Search,
      subtitle: 'In-Depth Practice Immersion',
      description: 'Understand your business, expertise, offers, audience and current marketing.',
      points: [
        'Review your occult specialization and consultation methodology',
        'Analyze your current client profiles and pricing structure',
        'Map your authentic voice and boundaries',
      ],
    },
    {
      step: '02',
      title: 'AUDIT',
      icon: ClipboardCheck,
      subtitle: 'Systemic Gap Identification',
      description: 'Identify gaps across positioning, branding, content, lead generation and conversion.',
      points: [
        'Inspect your Instagram, bio, content retention, and traffic sources',
        'Evaluate your current inquiry flow and drop-off points',
        'Identify untapped revenue opportunities in your practice',
      ],
    },
    {
      step: '03',
      title: 'STRATEGIZE',
      icon: Compass,
      subtitle: 'Custom Growth Roadmap',
      description: 'Build a customized growth roadmap tailored specifically to your occult discipline.',
      points: [
        'Design signature offer packaging and pricing model',
        'Architect content pillars and advertising target profiles',
        'Establish conversion funnels and WhatsApp booking sequences',
      ],
    },
    {
      step: '04',
      title: 'IMPLEMENT',
      icon: Cog,
      subtitle: 'Done-For-You Production & Launch',
      description: 'Our team executes the agreed marketing system without burdening your schedule.',
      points: [
        'Write, design, and optimize all digital brand assets and profiles',
        'Launch targeted Meta ad campaigns and Click-to-WhatsApp funnels',
        'Deploy automated lead qualification and calendar booking',
      ],
    },
    {
      step: '05',
      title: 'OPTIMIZE',
      icon: LineChart,
      subtitle: 'Data-Driven Practice Scale',
      description: 'Track performance, learn from data and continuously improve the system.',
      points: [
        'Monitor cost-per-lead, inquiry-to-booking ratio, and client quality',
        'A/B test ad creative, messaging angles, and offer packaging',
        'Plan expansion into group mentorships or occult academies',
      ],
    },
  ];

  return (
    <section className={`${isStandalonePage ? 'pt-32 pb-24' : 'py-24'} bg-white border-b border-zinc-200/80`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF5B00]/25 bg-[#FF5B00]/10 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            <span>Structured Engagement</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight font-heading">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            A clear, collaborative, five-step path from fragmented marketing to an engineered growth machine.
          </p>
        </div>

        {/* 5-Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.step}
                className="group rounded-2xl bg-zinc-50 border border-zinc-200/90 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#FF5B00]/40 hover:bg-white hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-extrabold text-[#FF5B00]">
                      {st.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-200/60 flex items-center justify-center text-[#FF5B00]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-950 mb-1 font-heading">
                    {st.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#E05000] mb-3">
                    {st.subtitle}
                  </div>

                  <p className="text-xs text-zinc-600 mb-4 leading-relaxed">
                    {st.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-zinc-200">
                    {st.points.map((pt, pIdx) => (
                      <div key={pIdx} className="text-[10px] text-zinc-600 flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#FF5B00] mt-1.5 flex-shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-zinc-200 text-[10px] text-zinc-400 font-mono">
                  PHASE {st.step}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              trackEvent('cta_click', { location: 'how_it_works', label: 'START WITH A GROWTH AUDIT' });
              onOpenAudit();
            }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FF5B00] hover:bg-[#E05000] text-white text-xs font-bold uppercase tracking-wider shadow-xl shadow-[#FF5B00]/25 transition-all cursor-pointer"
          >
            <span>START WITH A GROWTH AUDIT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
