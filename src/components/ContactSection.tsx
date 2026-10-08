import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Phone, MessageCircle, Mail, Globe, MapPin, ArrowRight, CheckCircle2, Send } from 'lucide-react';
import { BRAND, getWhatsAppUrl, getCallUrl, trackEvent } from '../config/constants';

interface ContactSectionProps {
  onOpenAudit: () => void;
  isStandalonePage?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenAudit, isStandalonePage = false }) => {
  const [formspreeState, handleFormspreeSubmit] = useForm('mljgjyrq');

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (formspreeState.succeeded) {
      setSubmitted(true);
    }
  }, [formspreeState.succeeded]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !phone) return;
    trackEvent('contact_form_submit', { name, phone });

    // Local Node.js API
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, message }),
    }).catch((err) => console.warn('Contact API error:', err));

    // Submit to Formspree
    try {
      await handleFormspreeSubmit(e);
      setSubmitted(true);
    } catch (err) {
      console.warn('Formspree submit fallback:', err);
      setSubmitted(true);
    }
  };

  return (
    <section className={`${isStandalonePage ? 'pt-32 pb-24' : 'py-24'} bg-[#F8F9FA] border-t border-zinc-200/80`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF5B00]/25 bg-[#FF5B00]/10 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
            <span>Direct Channels</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight font-heading">
            Contact Astro Experts
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            Speak directly with our growth strategists about architecting your occult practice’s marketing system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Official Contact Info */}
          <div className="rounded-3xl bg-white border border-zinc-200 p-8 sm:p-10 flex flex-col justify-between space-y-8 shadow-sm">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-zinc-950 font-heading">
                Direct Touchpoints
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Whether you’re an established astrologer seeking to scale consultations or an occult educator launching a cohort, we are available via phone, WhatsApp, and email.
              </p>

              <div className="space-y-4 pt-2">
                {/* Phone */}
                <a
                  href={getCallUrl()}
                  onClick={() => trackEvent('phone_click', { location: 'contact_page' })}
                  className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-[#FF5B00]/40 hover:bg-orange-50/20 flex items-center gap-4 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200/70 flex items-center justify-center text-[#FF5B00] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-zinc-400">Official Phone</div>
                    <div className="text-base font-bold text-zinc-950">{BRAND.phone}</div>
                    <div className="text-[11px] text-zinc-500">Direct consultation line</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { location: 'contact_page' })}
                  className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-[#1FAF38]/40 hover:bg-emerald-50/20 flex items-center gap-4 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-[#1FAF38] flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-zinc-400">Official WhatsApp</div>
                    <div className="text-base font-bold text-zinc-950">{BRAND.phone}</div>
                    <div className="text-[11px] text-zinc-500">Instant response via WhatsApp</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BRAND.email}`}
                  className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 flex items-center gap-4 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-600 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-zinc-400">Official Email</div>
                    <div className="text-base font-bold text-zinc-950">{BRAND.email}</div>
                    <div className="text-[11px] text-zinc-500">Confidential inquiries</div>
                  </div>
                </a>

                {/* Website */}
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-600 flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase text-zinc-400">Official Website</div>
                    <div className="text-base font-bold text-zinc-950">{BRAND.websiteDisplay}</div>
                    <div className="text-[11px] text-zinc-500">Dedicated occult marketing portal</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100 text-xs text-zinc-500">
              Operating nationally across India & globally for occult consultants.
            </div>
          </div>

          {/* Quick Contact / Message Box */}
          <div className="rounded-3xl bg-white border border-zinc-200 p-8 sm:p-10 flex flex-col justify-between shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h4 className="text-2xl font-bold text-zinc-950 font-heading">
                  Message Sent Successfully
                </h4>
                <p className="text-sm text-zinc-600 max-w-sm mx-auto">
                  Thank you for reaching out. Our growth specialist will connect with you via WhatsApp or phone shortly.
                </p>
                <div className="pt-4">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1FAF38] hover:bg-[#1FAF38]/90 text-white text-xs font-bold uppercase tracking-wider shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open Direct WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} action="https://formspree.io/f/mljgjyrq" method="POST" className="space-y-5">
                <input type="hidden" name="_subject" value={`New Contact Inquiry from ${name}`} />
                <input type="hidden" name="form_name" value="Quick Contact Message" />

                <div>
                  <h3 className="text-2xl font-bold text-zinc-950 font-heading mb-1">
                    Send A Quick Message
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Prefer a written message before booking an audit? Tell us about your practice.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Pt. Arvind Trivedi"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-sm text-zinc-900 placeholder-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5B00]/20 focus:border-[#FF5B00]"
                  />
                  <ValidationError prefix="Name" field="name" errors={formspreeState.errors} className="text-[11px] text-red-500 mt-1 block font-medium" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                    Phone Number (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 96488 52456"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-sm text-zinc-900 placeholder-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5B00]/20 focus:border-[#FF5B00]"
                  />
                  <ValidationError prefix="Phone" field="phone" errors={formspreeState.errors} className="text-[11px] text-red-500 mt-1 block font-medium" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                    Message / Question
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your current practice, challenges, or goals..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-sm text-zinc-900 placeholder-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5B00]/20 focus:border-[#FF5B00]"
                  />
                  <ValidationError prefix="Message" field="message" errors={formspreeState.errors} className="text-[11px] text-red-500 mt-1 block font-medium" />
                </div>

                <ValidationError errors={formspreeState.errors} className="text-xs text-red-500 block font-medium" />

                <button
                  type="submit"
                  disabled={formspreeState.submitting}
                  className="w-full py-4 px-6 rounded-xl bg-[#FF5B00] hover:bg-[#E05000] disabled:opacity-70 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF5B00]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{formspreeState.submitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={onOpenAudit}
                    className="text-xs text-zinc-500 hover:text-zinc-900 underline cursor-pointer"
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
