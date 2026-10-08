import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { BRAND } from '../config/constants';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-white border border-zinc-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-zinc-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200/70 flex items-center justify-center text-[#FF5B00]">
              {type === 'privacy' ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-950 font-heading">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <p className="text-[11px] text-zinc-500">
                Astro Experts · Last updated: October 2026
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs text-zinc-700 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <section className="space-y-2">
                <h4 className="text-sm font-bold text-zinc-950">1. Introduction & Scope</h4>
                <p>
                  Astro Experts ({BRAND.websiteDisplay}, "we", "our", or "us") respects your privacy and is committed to protecting the confidential information of occult practitioners, clients, and website visitors. This policy outlines our collection, handling, and safeguarding of personal and practice-related data.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-zinc-950">2. Information We Collect</h4>
                <p>
                  When you submit a Growth Audit request, contact our team, or connect via WhatsApp or phone, we collect:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-600">
                  <li>Your full name, professional title, and occult discipline (e.g. Astrologer, Tarot Reader, Vastu Consultant).</li>
                  <li>Contact details including phone number (WhatsApp enabled) and email address.</li>
                  <li>Practice operational information (challenges, client acquisition methods, support requirements).</li>
                  <li>Technical telemetry (browser details, IP address, device type) used solely for performance monitoring and spam prevention.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-zinc-950">3. Strict Confidentiality & Non-Disclosure</h4>
                <p>
                  We recognize that occult practitioners hold sensitive professional reputations and ethical responsibilities to their clients. We enforce strict confidentiality:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-zinc-600">
                  <li>We never sell, rent, or lease your data or client records to any third party.</li>
                  <li>No client case study or practitioner identity will ever be published without prior written authorization.</li>
                  <li>Audit submissions are treated as privileged business consultations.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-zinc-950">4. Communications & Opt-Out</h4>
                <p>
                  By submitting your information or contacting us, you authorize Astro Experts to communicate with you via WhatsApp, phone, or email regarding your growth audit and marketing services. You may opt out of communications at any time by messaging "STOP" on WhatsApp or emailing us at {BRAND.email}.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-zinc-950">5. Contact Information</h4>
                <p>
                  For any privacy inquiries or data requests, contact us at {BRAND.email} or call {BRAND.phone}.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-2">
                <h4 className="text-sm font-bold text-zinc-950">1. Service Scope & Done-For-You Framework</h4>
                <p>
                  Astro Experts provides specialized Done-For-You marketing, personal branding, content strategy, advertising management, and conversion system design for professionals operating within the occult industry. Astro Experts is an implementation agency, not a coaching, educational, or guaranteed investment program.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-zinc-950">2. No Guaranteed Results Disclaimer</h4>
                <p>
                  In compliance with our ethical commitment and consumer protection regulations:
                </p>
                <p className="text-zinc-600">
                  We do not make unrealistic, guaranteed, or speculative claims. We do NOT guarantee specific client counts, revenue targets, income levels, or specific inquiry volumes. Results in marketing and business growth depend on multiple interdependent variables, including practitioner credentials, market dynamics, offer viability, client communication, and consumer behavior. Our commitment is to build, implement, and optimize a professional, high-standard marketing infrastructure.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-zinc-950">3. Client Responsibilities</h4>
                <p>
                  Clients partnering with Astro Experts agree to provide accurate information regarding their credentials, adhere to professional and ethical standards in their consultations, and cooperate in approving creative assets and timely onboarding milestones.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-zinc-950">4. Intellectual Property & Brand Assets</h4>
                <p>
                  Custom marketing assets created on behalf of the client (such as landing pages, approved scripts, and ad creative) will transition to the client according to specific service agreements upon fulfillment of contract terms.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="text-sm font-bold text-zinc-950">5. Governing Law</h4>
                <p>
                  These terms are governed by and construed in accordance with the laws of India. Any disputes arising out of these terms shall be subject to the exclusive jurisdiction of the competent courts in India.
                </p>
              </section>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-200 bg-zinc-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-zinc-900 hover:bg-black text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
