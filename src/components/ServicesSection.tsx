import React from 'react';
import { Compass, Palette, Video, Megaphone, GitFork, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { trackEvent } from '../config/constants';

interface ServicesSectionProps {
  onOpenAudit: () => void;
  isStandalonePage?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenAudit, isStandalonePage = false }) => {
  const serviceCategories = [
    {
      title: 'Strategic Positioning',
      icon: Compass,
      description: 'Define your authority and carve a defensible niche in a crowded occult market.',
      capabilities: [
        { name: 'Market Positioning', desc: 'Pinpoint your exact distinction among peer practitioners.' },
        { name: 'Offer Positioning', desc: 'Structure high-value consultation & deep-reading packages.' },
        { name: 'Audience Definition', desc: 'Identify clients seeking serious astrological & spiritual answers.' },
        { name: 'Personal Brand Strategy', desc: 'Align your personal philosophy with commercial market demand.' },
      ],
    },
    {
      title: 'Brand & Digital Presence',
      icon: Palette,
      description: 'Eliminate cheap stereotypes with a refined, credible digital storefront.',
      capabilities: [
        { name: 'Brand Identity', desc: 'Modern typography, curated palettes, and dignified visual signatures.' },
        { name: 'Instagram Optimization', desc: 'Bio, link-in-bio architecture, highlights, and cohesive grid aesthetic.' },
        { name: 'Profile Positioning', desc: 'Turn casual profile visits into respectful incoming enquiries.' },
        { name: 'Visual Direction & Messaging', desc: 'Clear copy guidelines that elevate your occult mastery.' },
      ],
    },
    {
      title: 'Content Marketing',
      icon: Video,
      description: 'Systematic content designed to educate, establish authority, and compel action.',
      capabilities: [
        { name: 'Content Strategy', desc: 'Monthly editorial roadmaps aligned with business milestones.' },
        { name: 'Content Pillars', desc: 'Balanced framework of educational, authority, and conversion topics.' },
        { name: 'Reels Strategy', desc: 'Short-form scripts with high-retention hooks and dignity.' },
        { name: 'Social Media & Conversion Content', desc: 'Posts that naturally transition readers into DM and WhatsApp enquiries.' },
      ],
    },
    {
      title: 'Lead Generation',
      icon: Megaphone,
      description: 'Targeted customer acquisition infrastructure built specifically for the occult industry.',
      capabilities: [
        { name: 'Meta Advertising', desc: 'High-ROAS Instagram & Facebook ad campaigns managed end-to-end.' },
        { name: 'Lead Generation Campaigns', desc: 'Pre-screened inbound lead pipelines for consultations.' },
        { name: 'Lead Magnets', desc: 'High-value transits guides, birth chart checklists, and Vastu audits.' },
        { name: 'WhatsApp Lead Systems & Funnels', desc: 'Direct click-to-WhatsApp ads with high intent qualification.' },
      ],
    },
    {
      title: 'Conversion Systems',
      icon: GitFork,
      description: 'Turn cold traffic and DM inquiries into confirmed, pre-paid consultations.',
      capabilities: [
        { name: 'Lead Qualification', desc: 'Intelligent screening to filter out tire-kickers and non-serious queries.' },
        { name: 'WhatsApp Workflows', desc: 'Automated response templates, reminders, and payment gateway integration.' },
        { name: 'Consultation Funnels', desc: 'Smooth scheduling flows minimizing calendar friction and no-shows.' },
        { name: 'Follow-Up Systems', desc: 'Structured retention and referral triggers for repeat consultations.' },
      ],
    },
    {
      title: 'Growth Strategy',
      icon: TrendingUp,
      description: 'Continuous optimization grounded in hard metrics, not subjective guesswork.',
      capabilities: [
        { name: 'Analytics & Attribution', desc: 'Clarity on cost-per-lead, enquiry volume, and consultation booking rate.' },
        { name: 'Campaign Optimization', desc: 'A/B testing ad creative, copy angles, and audience subsets.' },
        { name: 'Growth Planning', desc: 'Quarterly roadmap for scaling client capacity and course offerings.' },
        { name: 'Performance Review', desc: 'Regular transparent reporting on pipeline health and ROI.' },
      ],
    },
  ];

  return (
    <section className={`${isStandalonePage ? 'pt-32 pb-24' : 'py-24'} bg-[#0E1116] border-t border-white/[0.04]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            <span>Services & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Specialized Marketing Architecture For Occult Leaders
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Every practice is unique. We do not sell one-size-fits-all packages. Astro Experts designs and implements customized systems tailored to your specific discipline, capacity, and commercial goals.
          </p>
        </div>

        {/* Note on Tailored Scope */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center text-xs text-zinc-400">
          <span className="text-[#FF5B00] font-semibold">Important Note: </span>
          Not every client needs every service. We begin with a Growth Audit to identify your exact bottlenecks, then deploy only the marketing systems that move your practice forward.
        </div>

        {/* 6 Comprehensive Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="rounded-2xl bg-[#141820] border border-white/[0.06] p-7 flex flex-col justify-between hover:border-[#FF5B00]/40 hover:bg-[#161B24] transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FF5B00]/10 border border-[#FF5B00]/20 flex items-center justify-center text-[#FF5B00] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-heading">
                    {svc.title}
                  </h3>

                  <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                    {svc.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                    {svc.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="space-y-0.5">
                        <div className="text-xs font-semibold text-zinc-200 flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[#FF5B00] flex-shrink-0" />
                          <span>{cap.name}</span>
                        </div>
                        <div className="text-[11px] text-zinc-400 pl-5 leading-normal">
                          {cap.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500 font-mono">DONE-FOR-YOU</span>
                  <button
                    onClick={() => {
                      trackEvent('cta_click', { location: 'service_card', service: svc.title });
                      onOpenAudit();
                    }}
                    className="text-xs font-bold text-[#FF5B00] hover:text-[#FFA066] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Request Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#181C24] via-[#1A202A] to-[#181C24] border border-white/[0.08] text-center max-w-4xl mx-auto space-y-4">
          <h3 className="text-xl font-bold text-white font-heading">
            Not sure which systems your practice needs right now?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            Our Growth Audit systematically analyzes your profile, content, audience sentiment, and enquiry channels to pinpoint exactly where revenue is leaking.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                trackEvent('cta_click', { location: 'services_bottom_banner' });
                onOpenAudit();
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF5B00] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#E05000] shadow-lg shadow-[#FF5B00]/20 transition-all cursor-pointer"
            >
              <span>GET YOUR GROWTH AUDIT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
