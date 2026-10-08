import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Globe, MapPin, ArrowRight, CheckCircle2, Send } from 'lucide-react';
import { BRAND, getWhatsAppUrl, getCallUrl, trackEvent } from '../config/constants';

interface ContactSectionProps {
  onOpenAudit: () => void;
  isStandalonePage?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenAudit, isStandalonePage = false }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    trackEvent('contact_form_submit', { name, phone });

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, message }),
    }).catch((err) => console.warn('Contact API error:', err));

    setSubmitted(true);
  };

  return (
    <section className={`${isStandalonePage ? 'pt-32 pb-24' : 'py-24'} bg-[#0E1116] border-t border-white/[0.04]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            Contact Astro Experts
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            Speak directly with our growth strategists about architecting your occult practice’s marketing system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Official Contact Info */}
          <div className="rounded-2xl bg-[#141820] border border-white/[0.08] p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white font-heading">
                Direct Touchpoints
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Whether you’re an established astrologer seeking to scale consultations or an occult educator launching a cohort, we are available via phone, WhatsApp, and email.
              </p>

              <div className="space-y-4 pt-2">
                {/* Phone */}
                <a
                  href={getCallUrl()}
                  onClick={() => trackEvent('phone_click', { location: 'contact_page' })}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#FF5B00]/40 flex items-center gap-4 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF5B00]/10 flex items-center justify-center text-[#FF5B00] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-zinc-500">Official Phone</div>
                    <div className="text-base font-bold text-white">{BRAND.phone}</div>
                    <div className="text-[11px] text-zinc-400">Direct consultation line</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { location: 'contact_page' })}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#25D366]/40 flex items-center gap-4 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-zinc-500">Official WhatsApp</div>
                    <div className="text-base font-bold text-white">{BRAND.phone}</div>
                    <div className="text-[11px] text-zinc-400">Instant response via WhatsApp</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BRAND.email}`}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] flex items-center gap-4 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center text-zinc-300 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-zinc-500">Official Email</div>
                    <div className="text-base font-bold text-white">{BRAND.email}</div>
                    <div className="text-[11px] text-zinc-400">Confidential inquiries</div>
                  </div>
                </a>

                {/* Website */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center text-zinc-300 flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-zinc-500">Official Website</div>
                    <div className="text-base font-bold text-white">{BRAND.websiteDisplay}</div>
                    <div className="text-[11px] text-zinc-400">Dedicated occult marketing portal</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] text-xs text-zinc-500">
              Operating nationally across India & globally for occult consultants.
            </div>
          </div>

          {/* Quick Contact / Message Box */}
          <div className="rounded-2xl bg-[#12151B] border border-white/[0.08] p-8 sm:p-10 flex flex-col justify-between">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                <h4 className="text-2xl font-bold text-white font-heading">
                  Message Sent Successfully
                </h4>
                <p className="text-sm text-zinc-300 max-w-sm mx-auto">
                  Thank you for reaching out. Our growth specialist will connect with you via WhatsApp or phone shortly.
                </p>
                <div className="pt-4">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1FAF38] text-white text-xs font-bold uppercase tracking-wider"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open Direct WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-bold text-white font-heading mb-1">
                    Send A Quick Message
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Prefer a written message before booking an audit? Tell us about your practice.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Pt. Arvind Trivedi"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.08] text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF5B00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Phone Number (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 96488 52456"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.08] text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF5B00]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                    Message / Question
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your current practice, challenges, or goals..."
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/[0.08] text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#FF5B00]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-[#FF5B00] hover:bg-[#E05000] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF5B00]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={onOpenAudit}
                    className="text-xs text-zinc-400 hover:text-white underline cursor-pointer"
                  >
                    Or fill the comprehensive Growth Audit questionnaire →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
