import React from 'react';
import { AstroExpertsLogo } from './AstroExpertsLogo';
import { BRAND, getWhatsAppUrl, getCallUrl, trackEvent } from '../config/constants';
import { Phone, MessageCircle, Mail, Globe, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenAudit: () => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAudit, onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'who-we-help', label: 'Who We Help' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'about', label: 'About' },
    { id: 'growth-audit', label: 'Growth Audit' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#F4F5F8] border-t border-zinc-200 text-zinc-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <button
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
              className="text-left focus:outline-none"
            >
              <AstroExpertsLogo size="md" variant="light-bg" />
            </button>
            <p className="text-zinc-700 text-xs font-medium leading-relaxed max-w-sm">
              {BRAND.tagline}
            </p>
            <div className="text-[11px] text-zinc-500 leading-normal">
              Specialized Done-For-You marketing, positioning, authority content, and lead-generation infrastructure built exclusively for serious occult professionals.
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      if (link.id === 'growth-audit') {
                        onOpenAudit();
                      } else {
                        onNavigate(link.id);
                        scrollToTop();
                      }
                    }}
                    className="text-zinc-600 hover:text-[#FF5B00] transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950">
              Direct Contact
            </h4>
            <div className="space-y-3">
              <a
                href={getCallUrl()}
                onClick={() => trackEvent('phone_click', { location: 'footer' })}
                className="flex items-center gap-2.5 text-zinc-700 hover:text-[#FF5B00] transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-[#FF5B00] flex-shrink-0" />
                <span>{BRAND.phone}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { location: 'footer' })}
                className="flex items-center gap-2.5 text-zinc-700 hover:text-[#1FAF38] transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4 text-[#1FAF38] flex-shrink-0" />
                <span>WhatsApp: {BRAND.phone}</span>
              </a>

              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2.5 text-zinc-700 hover:text-[#FF5B00] transition-colors"
              >
                <Mail className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                <span>{BRAND.email}</span>
              </a>

              <div className="flex items-center gap-2.5 text-zinc-600">
                <Globe className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                <span>{BRAND.websiteDisplay}</span>
              </div>
            </div>
          </div>

          {/* Business Positioning Notice */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950">
              Our Distinction
            </h4>
            <p className="text-[11px] text-zinc-600 leading-relaxed">
              We do not provide generic digital agency templates or coaching courses. Astro Experts is a dedicated Done-For-You growth agency engineered for the Indian and global occult market.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenAudit}
                className="w-full py-2.5 px-4 rounded-xl bg-white border border-zinc-300 hover:border-[#FF5B00] hover:text-[#FF5B00] text-zinc-800 text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs cursor-pointer"
              >
                Request Growth Audit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="mt-14 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © 2026 {BRAND.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-zinc-900 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-zinc-900 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-zinc-900 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
