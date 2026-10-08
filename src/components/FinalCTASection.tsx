import React from 'react';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { BRAND, getWhatsAppUrl, getCallUrl, trackEvent } from '../config/constants';

interface FinalCTASectionProps {
  onOpenAudit: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onOpenAudit }) => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF5B00]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-3xl bg-gradient-to-br from-orange-500/[0.05] via-white to-orange-500/[0.08] border-2 border-[#FF5B00]/25 p-8 sm:p-14 text-center shadow-xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 bg-white text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-6 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5B00]" />
            <span>Ready To Professionalize Your Practice?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 tracking-tight font-heading leading-tight mb-4">
            YOUR EXPERTISE DESERVES A GROWTH SYSTEM.
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            Let’s build the marketing infrastructure around your occult business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-8">
            <button
              onClick={() => {
                trackEvent('cta_click', { location: 'final_cta_primary', label: 'GET YOUR GROWTH AUDIT' });
                onOpenAudit();
              }}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FF5B00] hover:bg-[#E05000] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#FF5B00]/25 transition-all cursor-pointer"
            >
              <span>GET YOUR GROWTH AUDIT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('whatsapp_click', { location: 'final_cta_secondary' })}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-800 text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#1FAF38]" />
              <span>CHAT ON WHATSAPP</span>
            </a>
          </div>

          <div className="pt-6 border-t border-zinc-200/80 flex items-center justify-center gap-2 text-xs text-zinc-500">
            <span>Direct consultation desk:</span>
            <a
              href={getCallUrl()}
              onClick={() => trackEvent('phone_click', { location: 'final_cta_phone' })}
              className="text-zinc-950 hover:text-[#FF5B00] font-bold flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF5B00]" />
              <span>{BRAND.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
