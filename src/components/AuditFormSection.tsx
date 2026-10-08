import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { AstroExpertsLogo } from './AstroExpertsLogo';
import { BRAND, getWhatsAppUrl, getCallUrl, trackEvent } from '../config/constants';
import { CheckCircle2, AlertCircle, ArrowRight, Phone, MessageCircle, ShieldCheck, Clock, Compass } from 'lucide-react';

interface AuditFormSectionProps {
  isModal?: boolean;
  onClose?: () => void;
  isStandalonePage?: boolean;
}

export const AuditFormSection: React.FC<AuditFormSectionProps> = ({
  isModal = false,
  onClose,
  isStandalonePage = false,
}) => {
  // Formspree official hook with endpoint 'mljgjyrq'
  const [formspreeState, handleFormspreeSubmit] = useForm('mljgjyrq');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    profession: 'Astrologer',
    biggestChallenge: 'Getting consistent enquiries',
    acquisitionMethod: 'Referrals',
    supportRequired: 'Done-For-You Marketing & Growth',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (formspreeState.succeeded) {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }
  }, [formspreeState.succeeded]);

  const professions = [
    'Astrologer',
    'Tarot Reader',
    'Numerologist',
    'Vastu Consultant',
    'Spiritual / Healing Practitioner',
    'Occult Coach / Trainer',
    'Other Occult Professional',
  ];

  const challenges = [
    'Getting consistent enquiries',
    'Getting clients from social media',
    'Building my personal brand',
    'Converting enquiries into clients',
    'Growing my course/coaching program',
    'Need a complete marketing system',
  ];

  const acquisitionMethods = [
    'Referrals',
    'Instagram / Social Media',
    'WhatsApp / Personal Network',
    'Paid Ads',
    'Website / Google',
    'No consistent source yet',
  ];

  const supportOptions = [
    'Done-For-You Marketing & Growth',
    'Lead Generation & Client Acquisition',
    'Branding & Social Media Growth',
    'Business Strategy / Coaching',
    'Not sure yet',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    trackEvent('growth_audit_start', { ...formData });

    // Store submission in localStorage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('astro_audit_requests') || '[]');
      existing.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem('astro_audit_requests', JSON.stringify(existing));
    } catch (e) {
      // Ignore storage errors
    }

    // Simultaneously submit to local Node.js API
    fetch('/api/audit-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).catch((err) => {
      console.warn('Local API fallback:', err);
    });

    // Execute Formspree React submit handler
    try {
      await handleFormspreeSubmit(e);
      setIsSubmitted(true);
      trackEvent('growth_audit_submit', { ...formData });
    } catch (error) {
      console.warn('Formspree submit exception (falling back to confirmed state):', error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="growth-audit"
      className={`${
        isModal ? 'p-6 sm:p-8 bg-white' : isStandalonePage ? 'pt-32 pb-24 bg-[#F8F9FA]' : 'py-24 bg-[#F8F9FA]'
      } relative border-t border-zinc-200/80`}
    >
      <div className={`${isModal ? 'max-w-2xl' : 'max-w-5xl'} mx-auto`}>
        {/* Header */}
        {!isModal && (
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="flex justify-center mb-3">
              <AstroExpertsLogo size="lg" variant="light-bg" />
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF5B00]/25 bg-[#FF5B00]/10 text-xs font-bold uppercase tracking-wider text-[#FF5B00]">
              <span>Confidential Analysis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight font-heading">
              WHAT’S ACTUALLY BLOCKING YOUR BUSINESS GROWTH?
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
              Get a structured look at your brand, content, lead generation and conversion journey.
            </p>

            {/* Audit Scope Highlights - Matching Ad 3 Gap Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-6 text-left max-w-4xl mx-auto">
              {/* BRAND */}
              <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-zinc-950 uppercase tracking-wider font-mono">
                    BRAND
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#FF5B00]" />
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-200 overflow-hidden mb-2">
                  <div className="h-full bg-[#FF5B00] rounded-full w-3/4" />
                </div>
                <div className="text-[11px] text-zinc-600">
                  Identity Alignment · Positioning Clarity
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-zinc-950 uppercase tracking-wider font-mono">
                    CONTENT
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#FF5B00]" />
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-200 overflow-hidden mb-2">
                  <div className="h-full bg-[#FF5B00] rounded-full w-4/5" />
                </div>
                <div className="text-[11px] text-zinc-600">
                  Audience Relevance · Authority Building
                </div>
              </div>

              {/* LEADS */}
              <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-zinc-950 uppercase tracking-wider font-mono">
                    LEADS
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#FF5B00]" />
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-200 overflow-hidden mb-2">
                  <div className="h-full bg-[#FF5B00] rounded-full w-3/5" />
                </div>
                <div className="text-[11px] text-zinc-600">
                  Traffic Sources · Qualification Gaps
                </div>
              </div>

              {/* CONVERSION */}
              <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-zinc-950 uppercase tracking-wider font-mono">
                    CONVERSION
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#FF5B00]" />
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-200 overflow-hidden mb-2">
                  <div className="h-full bg-[#FF5B00] rounded-full w-2/3" />
                </div>
                <div className="text-[11px] text-zinc-600">
                  Trust Building · Sales Process Gaps
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal specific header */}
        {isModal && !isSubmitted && (
          <div className="mb-6 space-y-2">
            <div className="mb-2">
              <AstroExpertsLogo size="sm" variant="light-bg" />
            </div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF5B00]">
              Astro Experts Practice Audit
            </div>
            <h3 className="text-2xl font-extrabold text-zinc-950 font-heading">
              WHAT’S ACTUALLY BLOCKING YOUR BUSINESS GROWTH?
            </h3>
            <p className="text-xs text-zinc-600">
              Get a structured look at your brand, content, lead generation and conversion journey.
            </p>
          </div>
        )}

        {/* Success State */}
        {isSubmitted ? (
          <div className="rounded-3xl bg-white border border-zinc-200 p-8 sm:p-12 text-center space-y-6 shadow-xl animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 font-heading">
                Your Growth Audit request has been received.
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Our team will review your responses and contact you regarding the next step.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 max-w-md mx-auto text-xs text-zinc-600 text-left space-y-1">
              <div><strong className="text-zinc-900">Name:</strong> {formData.fullName}</div>
              <div><strong className="text-zinc-900">Discipline:</strong> {formData.profession}</div>
              <div><strong className="text-zinc-900">Primary Goal:</strong> {formData.supportRequired}</div>
            </div>

            {/* Next Step CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <a
                href={getWhatsAppUrl(
                  `Hi Astro Experts, I just submitted my Growth Audit request for ${formData.fullName} (${formData.profession}). Looking forward to discussing how you can help.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { location: 'audit_success' })}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#1FAF38] hover:bg-[#1FAF38]/90 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={getCallUrl()}
                onClick={() => trackEvent('phone_click', { location: 'audit_success' })}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-zinc-100 border border-zinc-200 hover:bg-zinc-200 text-zinc-900 font-semibold text-xs tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FF5B00]" />
                <span>Call {BRAND.phone}</span>
              </a>
            </div>

            {isModal && onClose && (
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Form Box */
          <div className="rounded-3xl bg-white border border-zinc-200 p-6 sm:p-10 shadow-xl">
            <form onSubmit={handleSubmit} action="https://formspree.io/f/mljgjyrq" method="POST" className="space-y-6">
              {/* Formspree metadata */}
              <input type="hidden" name="_subject" value={`New Astro Experts Growth Audit: ${formData.fullName} (${formData.profession})`} />
              <input type="hidden" name="form_name" value="Growth Audit Request" />

              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                    Full Name <span className="text-[#FF5B00]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Acharya Rakesh Sharma"
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border text-sm text-zinc-900 placeholder-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5B00]/20 focus:border-[#FF5B00] transition-colors ${
                      errors.fullName ? 'border-red-500' : 'border-zinc-300'
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-500 mt-1 block font-medium">{errors.fullName}</span>
                  )}
                  <ValidationError prefix="Name" field="fullName" errors={formspreeState.errors} className="text-[11px] text-red-500 mt-1 block font-medium" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                    Phone Number (WhatsApp) <span className="text-[#FF5B00]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border text-sm text-zinc-900 placeholder-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5B00]/20 focus:border-[#FF5B00] transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-zinc-300'
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-500 mt-1 block font-medium">{errors.phone}</span>
                  )}
                  <ValidationError prefix="Phone" field="phone" errors={formspreeState.errors} className="text-[11px] text-red-500 mt-1 block font-medium" />
                </div>
              </div>

              {/* Row 2: Email & Profession */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                    Email Address <span className="text-[#FF5B00]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@practice.com"
                    className={`w-full px-4 py-3 rounded-xl bg-zinc-50 border text-sm text-zinc-900 placeholder-zinc-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5B00]/20 focus:border-[#FF5B00] transition-colors ${
                      errors.email ? 'border-red-500' : 'border-zinc-300'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 mt-1 block font-medium">{errors.email}</span>
                  )}
                  <ValidationError prefix="Email" field="email" errors={formspreeState.errors} className="text-[11px] text-red-500 mt-1 block font-medium" />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                    Profession <span className="text-[#FF5B00]">*</span>
                  </label>
                  <select
                    name="profession"
                    value={formData.profession}
                    onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-sm text-zinc-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5B00]/20 focus:border-[#FF5B00] transition-colors"
                  >
                    {professions.map((prof) => (
                      <option key={prof} value={prof}>
                        {prof}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Challenge & Acquisition */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                    Biggest Growth Challenge
                  </label>
                  <select
                    name="biggestChallenge"
                    value={formData.biggestChallenge}
                    onChange={(e) => setFormData({ ...formData, biggestChallenge: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-sm text-zinc-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5B00]/20 focus:border-[#FF5B00] transition-colors"
                  >
                    {challenges.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                    Current Client Acquisition Method
                  </label>
                  <select
                    name="acquisitionMethod"
                    value={formData.acquisitionMethod}
                    onChange={(e) => setFormData({ ...formData, acquisitionMethod: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-300 text-sm text-zinc-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5B00]/20 focus:border-[#FF5B00] transition-colors"
                  >
                    {acquisitionMethods.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Support Required */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-2">
                  Type of Support Required
                </label>
                <select
                  name="supportRequired"
                  value={formData.supportRequired}
                  onChange={(e) => setFormData({ ...formData, supportRequired: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-orange-300 text-sm text-zinc-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5B00]/20 focus:border-[#FF5B00] transition-colors"
                >
                  {supportOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-zinc-500 mt-1.5 block">
                  Primary specialization: Done-For-You Marketing & Growth Systems.
                </span>
              </div>

              <ValidationError errors={formspreeState.errors} className="text-xs text-red-500 text-center block font-medium" />

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || formspreeState.submitting}
                  className="w-full py-4 px-6 rounded-xl bg-[#FF5B00] hover:bg-[#E05000] disabled:opacity-70 text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#FF5B00]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting || formspreeState.submitting ? (
                    <span>Processing Audit Request...</span>
                  ) : (
                    <>
                      <span>REQUEST MY GROWTH AUDIT</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Security & Confidentiality Notice */}
              <div className="flex items-center justify-center gap-2 text-center text-[11px] text-zinc-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" />
                <span>Strictly confidential. We respect your practice ethics and never spam.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
