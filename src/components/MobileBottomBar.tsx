import React from 'react';
import { MessageCircle, ArrowRight, Phone } from 'lucide-react';
import { getWhatsAppUrl, getCallUrl, trackEvent } from '../config/constants';

interface MobileBottomBarProps {
  onOpenAudit: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenAudit }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-zinc-200/90 p-3 shadow-lg safe-area-bottom">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        <button
          onClick={() => {
            trackEvent('cta_click', { location: 'mobile_sticky_bar', label: 'GET GROWTH AUDIT' });
            onOpenAudit();
          }}
          className="w-full flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#FF5B00] hover:bg-[#E05000] text-white font-extrabold text-[11px] uppercase tracking-wider shadow-md shadow-[#FF5B00]/25 transition-all cursor-pointer"
        >
          <span>GET GROWTH AUDIT</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_click', { location: 'mobile_sticky_bar' })}
          className="w-full flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#1FAF38] hover:bg-[#1FAF38]/90 text-white font-extrabold text-[11px] uppercase tracking-wider shadow-md transition-all"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WHATSAPP</span>
        </a>
      </div>
    </div>
  );
};
