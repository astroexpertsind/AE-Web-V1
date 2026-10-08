import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { BRAND, getWhatsAppUrl, getCallUrl, trackEvent } from '../config/constants';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-40 flex flex-col items-end gap-2">
      {/* Subtle popup card for desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-white border border-zinc-200 shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-xs">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-[#1FAF38]/15 flex items-center justify-center text-[#1FAF38]">
              <MessageCircle className="w-4 h-4" />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
          </div>

          <div className="text-left pr-2">
            <div className="text-xs font-bold text-zinc-950 leading-tight">
              Astro Experts Desk
            </div>
            <div className="text-[10px] text-zinc-500">
              Chat on WhatsApp or Call
            </div>
          </div>

          <button
            onClick={() => setShowTooltip(false)}
            className="text-zinc-400 hover:text-zinc-700 p-1 rounded-md transition-colors cursor-pointer"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button Group */}
      <div className="flex items-center gap-2">
        <a
          href={getCallUrl()}
          onClick={() => trackEvent('phone_click', { location: 'floating_action' })}
          className="hidden sm:flex w-11 h-11 rounded-full bg-white border border-zinc-200 text-zinc-700 hover:text-zinc-950 hover:border-[#FF5B00] items-center justify-center shadow-md transition-all cursor-pointer"
          title={`Call Astro Experts at ${BRAND.phone}`}
          aria-label={`Call ${BRAND.phone}`}
        >
          <Phone className="w-4 h-4 text-[#FF5B00]" />
        </a>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('whatsapp_click', { location: 'floating_action' })}
          className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/35 hover:scale-105 active:scale-95 transition-all"
          aria-label="Chat on WhatsApp with Astro Experts"
        >
          <MessageCircle className="w-7 h-7" />
          {/* Pulsing ring indicator */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-[#25D366]"></span>
          </span>
        </a>
      </div>
    </div>
  );
};
