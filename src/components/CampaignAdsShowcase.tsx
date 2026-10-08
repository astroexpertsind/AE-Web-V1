import React, { useState } from 'react';
import { AstroExpertsLogo } from './AstroExpertsLogo';
import { ArrowRight, TrendingUp, Users, Calendar, CheckCircle2, FileText, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { trackEvent } from '../config/constants';

interface CampaignAdsShowcaseProps {
  onOpenAudit: () => void;
}

export const CampaignAdsShowcase: React.FC<CampaignAdsShowcaseProps> = ({ onOpenAudit }) => {
  const [activeAd, setActiveAd] = useState<1 | 2 | 3>(1);

  return (
    <section className="py-20 bg-[#F4F5F8] border-b border-zinc-200/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF5B00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF5B00]/25 bg-[#FF5B00]/10 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Astro Experts Growth Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight font-heading">
            Seen Our Ads? Here Is The Real System Behind Them.
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Explore the three core marketing frameworks we build and manage for astrologers, tarot masters, and occult consultants.
          </p>

          {/* Interactive Campaign Tabs */}
          <div className="pt-4 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <button
              onClick={() => setActiveAd(1)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeAd === 1
                  ? 'bg-[#FF5B00] text-white shadow-md shadow-[#FF5B00]/30 ring-2 ring-[#FF5B00]'
                  : 'bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              Ad 01 · Followers vs Clients
            </button>
            <button
              onClick={() => setActiveAd(2)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeAd === 2
                  ? 'bg-[#FF5B00] text-white shadow-md shadow-[#FF5B00]/30 ring-2 ring-[#FF5B00]'
                  : 'bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              Ad 02 · Strategic Pathway
            </button>
            <button
              onClick={() => setActiveAd(3)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeAd === 3
                  ? 'bg-[#FF5B00] text-white shadow-md shadow-[#FF5B00]/30 ring-2 ring-[#FF5B00]'
                  : 'bg-white text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-200'
              }`}
            >
              Ad 03 · Growth Gaps Audit
            </button>
          </div>
        </div>

        {/* ========================================================
            CAMPAIGN 01: GETTING FOLLOWERS BUT NOT CLIENTS?
           ======================================================== */}
        {activeAd === 1 && (
          <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-zinc-200/90 p-6 sm:p-12 shadow-xl animate-in fade-in zoom-in-95 duration-300">
            {/* Ad Header with Official Logo */}
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <AstroExpertsLogo size="lg" variant="light-bg" />
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 font-semibold">
                DONE-FOR-YOU MARKETING FOR OCCULT PROFESSIONALS
              </div>

              {/* Bold Condensed Headline from Ad 1 */}
              <div className="space-y-1">
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-zinc-950 font-condensed leading-none">
                  GETTING FOLLOWERS
                </h3>
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#FF5B00] font-condensed leading-none">
                  BUT NOT CLIENTS?
                </h3>
              </div>

              {/* Italic Serif Subline */}
              <p className="text-lg sm:text-xl font-ad-serif text-zinc-600 italic pt-1">
                “Your expertise deserves a better growth system.”
              </p>
            </div>

            {/* Visual Conversion Bridge from Ad 1 */}
            <div className="my-10 relative">
              <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
                {/* Left Card: ATTENTION */}
                <div className="md:col-span-5 rounded-2xl bg-zinc-50 border border-zinc-200/90 p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-600 font-mono">
                      ATTENTION
                    </span>
                    <div className="flex items-center gap-1.5 text-zinc-400">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <div className="w-2 h-2 rounded-full bg-pink-500" />
                    </div>
                  </div>

                  <div className="space-y-1 mb-4">
                    <div className="text-[11px] text-zinc-500 font-mono uppercase">Follower Growth</div>
                    <div className="text-3xl font-extrabold text-zinc-950 tracking-tight">14.2K Followers</div>
                  </div>

                  {/* Graph Line Mockup */}
                  <div className="h-14 w-full relative mb-3 flex items-end">
                    <svg viewBox="0 0 200 40" className="w-full h-full overflow-visible">
                      <path
                        d="M0 35 Q30 30, 60 25 T120 18 T180 8 L200 5"
                        fill="none"
                        stroke="#FF5B00"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <circle cx="200" cy="5" r="4" fill="#FF5B00" />
                    </svg>
                  </div>

                  <div className="pt-3 border-t border-zinc-200 flex items-center justify-between text-xs text-zinc-500">
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" /> +342 likes
                    </span>
                    <span>Engagement metrics</span>
                  </div>
                </div>

                {/* Middle: Conversion Stream Arrow */}
                <div className="md:col-span-1 flex flex-col items-center justify-center py-2 text-center">
                  <div className="hidden md:flex flex-col items-center">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 whitespace-nowrap mb-1">
                      ENQUIRIES
                    </div>
                    <div className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#FF5B00] whitespace-nowrap mb-2">
                      & BOOKINGS
                    </div>
                    <div className="flex items-center gap-1 text-zinc-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 animate-ping" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B00]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#FF5B00] mt-1" />
                  </div>
                  <div className="md:hidden flex items-center justify-center gap-2 my-2 text-xs text-[#FF5B00] font-bold">
                    <span>ENQUIRIES & BOOKINGS</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Right Card: CLIENTS */}
                <div className="md:col-span-5 rounded-2xl bg-zinc-50 border border-zinc-200/90 p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-600 font-mono">
                      CLIENTS
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>

                  {/* Confirmed booking notification badge */}
                  <div className="p-3.5 rounded-xl bg-white border border-emerald-200/80 shadow-xs mb-4">
                    <div className="flex items-center justify-between text-[11px] font-bold text-zinc-900 mb-1">
                      <span className="text-[#FF5B00] font-mono">NEW ENQUIRY</span>
                      <span className="text-zinc-500 font-medium">10:00 AM</span>
                    </div>
                    <div className="text-xs text-zinc-800 font-medium">
                      Consultation Confirmed · Pre-paid Kundli Review
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-zinc-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-zinc-900">Active Consultations</div>
                      <div className="text-[11px] text-zinc-500">Pre-screened & qualified</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Pill CTA from Ad 1 */}
            <div className="text-center pt-2">
              <button
                onClick={() => {
                  trackEvent('cta_click', { location: 'ad_showcase_1' });
                  onOpenAudit();
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FF5B00] hover:bg-[#E05000] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[#FF5B00]/25 transition-all cursor-pointer"
              >
                <span>GET YOUR GROWTH AUDIT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            CAMPAIGN 02: POSTING EVERY DAY. STILL NOT GETTING ENQUIRIES?
           ======================================================== */}
        {activeAd === 2 && (
          <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-zinc-200/90 p-6 sm:p-12 shadow-xl animate-in fade-in zoom-in-95 duration-300">
            {/* Header with Official Logo */}
            <div className="flex flex-col items-center text-center space-y-4 mb-8">
              <AstroExpertsLogo size="lg" variant="light-bg" />
              <div className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 font-semibold">
                DONE-FOR-YOU GROWTH SYSTEMS FOR OCCULT PROFESSIONALS
              </div>

              {/* Bold Headline from Ad 2 */}
              <div className="space-y-1">
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-zinc-950 font-condensed leading-none">
                  POSTING EVERY DAY.
                </h3>
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#FF5B00] font-condensed leading-none">
                  STILL NOT GETTING ENQUIRIES?
                </h3>
              </div>

              {/* Italic Quote Subline */}
              <p className="text-lg sm:text-xl font-ad-serif text-zinc-600 italic pt-1">
                “More content isn’t always the answer. Better strategy is.”
              </p>
            </div>

            {/* 3-Step Strategic Pathway from Ad 2 */}
            <div className="my-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Card 1: CONTENT */}
                <div className="rounded-2xl bg-zinc-50 border border-zinc-200/90 p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-500 font-mono mb-2">
                      STEP 01
                    </div>
                    <h4 className="text-xl font-extrabold tracking-tight uppercase text-zinc-950 font-condensed mb-3">
                      CONTENT
                    </h4>
                    <div className="p-3 rounded-lg bg-white border border-zinc-200 text-xs space-y-1 text-zinc-700 mb-3 shadow-xs">
                      <div className="font-bold text-zinc-950 flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5 text-[#FF5B00]" />
                        <span>Social Media Schedule</span>
                      </div>
                      <div className="text-[11px] text-zinc-500">Draft notes · Transit Breakdown</div>
                    </div>
                  </div>
                  <div className="text-[11px] text-zinc-500 pt-3 border-t border-zinc-200 font-medium">
                    DFY Content Strategy & Reels
                  </div>
                </div>

                {/* Card 2: TRUST */}
                <div className="rounded-2xl bg-zinc-50 border border-zinc-200/90 p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#FF5B00] font-mono mb-2">
                      STEP 02
                    </div>
                    <h4 className="text-xl font-extrabold tracking-tight uppercase text-zinc-950 font-condensed mb-3">
                      TRUST
                    </h4>
                    <div className="p-3 rounded-lg bg-white border border-zinc-200 text-xs space-y-1 text-zinc-700 mb-3 shadow-xs">
                      <div className="font-bold text-zinc-950 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-[#FF5B00]" />
                        <span>Strategic Roadmap</span>
                      </div>
                      <div className="text-[11px] text-zinc-500">Analytics · Positioning Audit</div>
                    </div>
                  </div>
                  <div className="text-[11px] text-zinc-500 pt-3 border-t border-zinc-200 font-medium">
                    Authority & Market Stature
                  </div>
                </div>

                {/* Card 3: ENQUIRIES */}
                <div className="rounded-2xl bg-zinc-50 border border-zinc-200/90 p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 font-mono mb-2">
                      STEP 03
                    </div>
                    <h4 className="text-xl font-extrabold tracking-tight uppercase text-zinc-950 font-condensed mb-3">
                      ENQUIRIES
                    </h4>
                    <div className="p-3 rounded-lg bg-white border border-zinc-200 text-xs space-y-1 text-zinc-700 mb-3 shadow-xs">
                      <div className="font-bold text-zinc-950 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Consultation Booking</span>
                      </div>
                      <div className="text-[11px] text-zinc-500">Confirmed appointments calendar</div>
                    </div>
                  </div>
                  <div className="text-[11px] text-zinc-500 pt-3 border-t border-zinc-200 font-medium">
                    Automated Inbound Inquiries
                  </div>
                </div>
              </div>

              <div className="text-center mt-6 text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">
                A STRATEGIC PATHWAY
              </div>
            </div>

            {/* Pill CTA from Ad 2 */}
            <div className="text-center pt-2">
              <button
                onClick={() => {
                  trackEvent('cta_click', { location: 'ad_showcase_2' });
                  onOpenAudit();
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FF5B00] hover:bg-[#E05000] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-[#FF5B00]/25 transition-all cursor-pointer"
              >
                <span>GET YOUR FREE GROWTH AUDIT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            CAMPAIGN 03: WHAT’S ACTUALLY BLOCKING YOUR BUSINESS GROWTH?
           ======================================================== */}
        {activeAd === 3 && (
          <div className="max-w-4xl mx-auto rounded-3xl bg-white text-zinc-950 p-6 sm:p-12 shadow-xl border border-zinc-200/90 animate-in fade-in zoom-in-95 duration-300">
            {/* Header with Official Logo (Light background variant) */}
            <div className="flex flex-col items-center text-center space-y-3 mb-8">
              <AstroExpertsLogo size="lg" variant="light-bg" />

              {/* Bold Headline from Ad 3 */}
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-zinc-950 font-heading mt-2">
                WHAT’S ACTUALLY BLOCKING YOUR BUSINESS GROWTH?
              </h3>

              <p className="text-sm sm:text-base text-zinc-600 max-w-xl">
                Find the gaps in your brand, content, lead generation and conversion journey.
              </p>
            </div>

            {/* 4-Pillar Gap Scanner Grid from Ad 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-8">
              {/* BRAND */}
              <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-extrabold tracking-tight text-zinc-950 font-heading">
                    BRAND
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FF5B00]/10 flex items-center justify-center text-[#FF5B00]">
                    <Users className="w-4 h-4" />
                  </div>
                </div>
                {/* Progress bar from ad */}
                <div className="w-full h-3 rounded-full bg-zinc-200 overflow-hidden mb-3">
                  <div className="h-full bg-zinc-900 rounded-full w-2/3" />
                </div>
                <div className="text-xs text-zinc-600 font-medium">
                  Identity Alignment · Positioning Clarity
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-extrabold tracking-tight text-zinc-950 font-heading">
                    CONTENT
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FF5B00]/10 flex items-center justify-center text-[#FF5B00]">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>
                {/* Progress bar from ad */}
                <div className="w-full h-3 rounded-full bg-zinc-200 overflow-hidden mb-3">
                  <div className="h-full bg-zinc-900 rounded-full w-4/5" />
                </div>
                <div className="text-xs text-zinc-600 font-medium">
                  Audience Relevance · Authority Building
                </div>
              </div>

              {/* LEADS */}
              <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-extrabold tracking-tight text-zinc-950 font-heading">
                    LEADS
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FF5B00]/10 flex items-center justify-center text-[#FF5B00]">
                    <Filter className="w-4 h-4" />
                  </div>
                </div>
                {/* Progress bar from ad */}
                <div className="w-full h-3 rounded-full bg-zinc-200 overflow-hidden mb-3">
                  <div className="h-full bg-zinc-900 rounded-full w-3/5" />
                </div>
                <div className="text-xs text-zinc-600 font-medium">
                  Traffic Sources · Qualification Gaps
                </div>
              </div>

              {/* CONVERSION */}
              <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-extrabold tracking-tight text-zinc-950 font-heading">
                    CONVERSION
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#FF5B00]/10 flex items-center justify-center text-[#FF5B00]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                {/* Progress bar from ad */}
                <div className="w-full h-3 rounded-full bg-zinc-200 overflow-hidden mb-3">
                  <div className="h-full bg-zinc-900 rounded-full w-3/4" />
                </div>
                <div className="text-xs text-zinc-600 font-medium">
                  Trust Building · Sales Process Gaps
                </div>
              </div>
            </div>

            {/* Label and Button from Ad 3 */}
            <div className="text-center pt-2 space-y-4">
              <div className="text-xs font-extrabold uppercase tracking-widest text-zinc-900 font-mono">
                FREE OCCULT BUSINESS GROWTH AUDIT
              </div>
              <button
                onClick={() => {
                  trackEvent('cta_click', { location: 'ad_showcase_3' });
                  onOpenAudit();
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#FF5B00] hover:bg-[#E05000] text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#FF5B00]/25 transition-all cursor-pointer"
              >
                <span>CHECK YOUR GROWTH GAPS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
