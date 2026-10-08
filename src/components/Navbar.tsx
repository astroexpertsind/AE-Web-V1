import React, { useState, useEffect } from 'react';
import { AstroExpertsLogo } from './AstroExpertsLogo';
import { BRAND, getWhatsAppUrl, getCallUrl, trackEvent } from '../config/constants';
import { Phone, MessageCircle, ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  openAuditForm: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage, openAuditForm }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'who-we-help', label: 'Who We Help' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200/90 shadow-sm py-3'
            : 'bg-white/85 backdrop-blur-sm border-b border-zinc-200/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B00] rounded-sm transition-transform hover:opacity-95"
            >
              <AstroExpertsLogo size="md" variant="light-bg" />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`transition-colors py-1 relative text-sm cursor-pointer ${
                    activePage === link.id
                      ? 'text-[#FF5B00] font-semibold'
                      : 'text-zinc-600 hover:text-black'
                  }`}
                >
                  {link.label}
                  {activePage === link.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF5B00] rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Desktop Action Area */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={getCallUrl()}
                onClick={() => trackEvent('phone_click', { location: 'navbar' })}
                className="text-xs font-semibold text-zinc-600 hover:text-black transition-colors flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-zinc-100"
                title={`Call ${BRAND.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#FF5B00]" />
                <span>{BRAND.phone}</span>
              </a>

              <button
                onClick={() => {
                  trackEvent('cta_click', { location: 'navbar', action: 'audit_modal' });
                  openAuditForm();
                }}
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#FF5B00] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-[#FF5B00]/25 hover:bg-[#E05000] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Get Growth Audit</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => {
                  trackEvent('cta_click', { location: 'navbar_mobile_pill' });
                  openAuditForm();
                }}
                className="px-3 py-1.5 rounded-full bg-[#FF5B00] text-white text-[11px] font-bold uppercase tracking-wider shadow-md hover:bg-[#E05000] transition-colors"
              >
                Growth Audit
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-zinc-700 hover:text-black hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B00]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/40 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white border-l border-zinc-200 p-6 flex flex-col justify-between shadow-2xl pt-24 animate-in slide-in-from-right duration-200">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-2">
                Navigation
              </div>
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      activePage === link.id
                        ? 'bg-[#FF5B00]/10 text-[#FF5B00] font-semibold'
                        : 'text-zinc-700 hover:text-black hover:bg-zinc-100'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNavClick('growth-audit')}
                  className={`text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    activePage === 'growth-audit'
                      ? 'bg-[#FF5B00]/10 text-[#FF5B00] font-semibold'
                      : 'text-zinc-700 hover:text-black hover:bg-zinc-100'
                  }`}
                >
                  Growth Audit Request
                </button>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-zinc-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openAuditForm();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#FF5B00] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#E05000] transition-colors"
              >
                <span>Request Growth Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { location: 'mobile_nav' })}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#1FAF38]/10 border border-[#1FAF38]/30 text-[#1FAF38] font-bold text-sm hover:bg-[#1FAF38]/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={getCallUrl()}
                onClick={() => trackEvent('phone_click', { location: 'mobile_nav' })}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 font-semibold text-sm hover:bg-zinc-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF5B00]" />
                <span>Call {BRAND.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
