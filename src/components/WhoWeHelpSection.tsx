import React from 'react';
import { Sparkles, Orbit, Compass, LayoutGrid, HeartHandshake, GraduationCap, Hexagon, ArrowRight } from 'lucide-react';
import { trackEvent } from '../config/constants';

interface WhoWeHelpSectionProps {
  onOpenAudit: () => void;
  isStandalonePage?: boolean;
}

export const WhoWeHelpSection: React.FC<WhoWeHelpSectionProps> = ({ onOpenAudit, isStandalonePage = false }) => {
  const audiences = [
    {
      title: 'Astrologers',
      discipline: 'Vedic, KP, Western, Nadi, Jaimini',
      icon: Orbit,
      challenge:
        'Competing against generic daily horoscope creators while having decades of deep chart-reading expertise.',
      solution:
        'Build stronger positioning, authority content and a structured consultation acquisition system around your astrology practice.',
      keyOutcomes: [
        'Shift from low-ticket single questions to comprehensive chart reviews',
        'Authority content explaining transits and dashas with intellectual rigor',
        'Structured calendar booking minimizing scheduling back-and-forth',
      ],
    },
    {
      title: 'Tarot Readers',
      discipline: 'Intuitive, Predictive, Rider-Waite, Thoth',
      icon: LayoutGrid,
      challenge:
        'Over-reliance on repetitive "pick-a-card" reels that generate views but attract low-intent audiences.',
      solution:
        'Turn your expertise into a professional personal brand with strategic content and enquiry-generation systems.',
      keyOutcomes: [
        'Establish personal brand dignity beyond viral entertainment trends',
        'Lead funnels attracting clients seeking deep intuitive life direction',
        'Pre-qualification WhatsApp flows preventing freebie seekers',
      ],
    },
    {
      title: 'Numerologists',
      discipline: 'Chaldean, Pythagorean, Vedic Numerology',
      icon: Hexagon,
      challenge:
        'Difficulty conveying the immense business and personal transformation value of name corrections and signature audits.',
      solution:
        'Position your signature name, destiny, and corporate numerology audits with clear lead magnets and conversion funnels.',
      keyOutcomes: [
        'Position corporate and baby-naming packages as premium advisory',
        'Automated calculation lead magnets capturing high-intent inquiries',
        'Targeted advertising focused on high-net-worth professionals and founders',
      ],
    },
    {
      title: 'Vastu Consultants',
      discipline: 'Residential, Commercial, Industrial, Astro-Vastu',
      icon: Compass,
      challenge:
        'High client lifetime value, but high friction finding serious property owners and developers without relying purely on sporadic referrals.',
      solution:
        'Reach high-intent homeowners and commercial enterprises with professional case studies and targeted lead generation.',
      keyOutcomes: [
        'B2B & premium residential positioning showcasing architectural credibility',
        'Lead generation campaigns targeting new homeowners and commercial renovations',
        'Standardized project proposals and consultation tiers',
      ],
    },
    {
      title: 'Spiritual Practitioners & Healers',
      discipline: 'Pranic Healing, Reiki, Theta, Energy Work, Sound Therapy',
      icon: HeartHandshake,
      challenge:
        'Communicating intangible healing shifts without sounding vague or encountering skepticism on social platforms.',
      solution:
        'Communicate the sanctity and depth of your healing modalities with dignity, establishing deep trust and high-ticket client retention.',
      keyOutcomes: [
        'Subtle, respectful branding honoring sacred lineages and boundaries',
        'Educational frameworks elucidating energy work without sensationalism',
        'Structured multi-session transformation packages rather than ad-hoc hours',
      ],
    },
    {
      title: 'Occult Coaches & Trainers',
      discipline: 'Occult Academies, Astrology Mentors, Tarot Teachers',
      icon: GraduationCap,
      challenge:
        'Hitting an operational ceiling doing 1-on-1 consultations and struggling to launch or fill cohort-based courses predictably.',
      solution:
        'Scale your mentorship programs, academy cohorts, and occult masterclasses through automated webinar and WhatsApp application funnels.',
      keyOutcomes: [
        'Cohort launch funnels that fill classes with dedicated, committed students',
        'Student qualification screening to maintain teaching caliber',
        'WhatsApp broadcast nurturing and automated reminder sequences',
      ],
    },
  ];

  return (
    <section className={`${isStandalonePage ? 'pt-32 pb-24' : 'py-24'} bg-white border-b border-zinc-200/80`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF5B00]/25 bg-[#FF5B00]/10 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            <span>Industry Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight font-heading">
            Built For The Occult Industry.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            We don’t generalize. We understand the nuances, ethics, terminology, and delicate client psychology unique to occult and esoteric disciplines.
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            return (
              <div
                key={aud.title}
                className="group rounded-2xl bg-zinc-50 border border-zinc-200/90 p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#FF5B00]/40 hover:bg-white hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/70 flex items-center justify-center text-[#FF5B00] group-hover:scale-105 group-hover:bg-[#FF5B00]/15 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      Specialization
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-950 mb-1 font-heading">
                    {aud.title}
                  </h3>
                  <div className="text-xs text-[#E05000] font-semibold mb-4">
                    {aud.discipline}
                  </div>

                  <div className="mb-4 p-3.5 rounded-xl bg-white border border-zinc-200 shadow-2xs">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 mb-1">
                      Typical Challenge
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {aud.challenge}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-800 mb-1.5">
                      The Astro Experts Growth Solution
                    </div>
                    <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                      {aud.solution}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-zinc-200">
                    {aud.keyOutcomes.map((outcome, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-2 text-[11px] text-zinc-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B00] mt-1 flex-shrink-0" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-200 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400">DFY Growth System</span>
                  <button
                    onClick={() => {
                      trackEvent('cta_click', { location: 'audience_card', profession: aud.title });
                      onOpenAudit();
                    }}
                    className="text-xs font-bold text-[#FF5B00] hover:text-[#E05000] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Audit My Practice</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Other Occult Professionals Note */}
        <div className="mt-12 p-6 rounded-2xl bg-orange-50/40 border border-orange-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-zinc-950 font-heading">
              Palmists, Gemstone Advisors, Past-Life Regressionists, Energy Workers & Other Occult Professionals
            </h4>
            <p className="text-xs text-zinc-600">
              If your business relies on occult knowledge and personalized consultations, our growth architecture applies directly to your client journey.
            </p>
          </div>
          <button
            onClick={() => {
              trackEvent('cta_click', { location: 'other_professionals' });
              onOpenAudit();
            }}
            className="flex-shrink-0 px-6 py-3 rounded-full bg-[#FF5B00] hover:bg-[#E05000] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md shadow-[#FF5B00]/20"
          >
            Request Custom Audit
          </button>
        </div>
      </div>
    </section>
  );
};
