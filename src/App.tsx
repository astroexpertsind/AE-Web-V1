import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CampaignAdsShowcase } from './components/CampaignAdsShowcase';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ServicesSection } from './components/ServicesSection';
import { WhoWeHelpSection } from './components/WhoWeHelpSection';
import { GrowthFrameworkSection } from './components/GrowthFrameworkSection';
import { DoneForYouSection } from './components/DoneForYouSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { AuditFormSection } from './components/AuditFormSection';
import { SocialProofSection } from './components/SocialProofSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { ContactSection } from './components/ContactSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { LegalModal } from './components/LegalModal';
import { X } from 'lucide-react';

export function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [auditModalOpen, setAuditModalOpen] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Scroll to top on active page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const openAuditForm = () => {
    setAuditModalOpen(true);
  };

  const closeAuditModal = () => {
    setAuditModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-[#111827] flex flex-col selection:bg-[#FF5B00] selection:text-white">
      {/* Sticky Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        openAuditForm={openAuditForm}
      />

      {/* Main Page Content Router */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <>
            {/* Meta Ad Optimized Hero */}
            <HeroSection onOpenAudit={openAuditForm} />

            {/* Campaign Ads Theme & Conversion Architecture */}
            <CampaignAdsShowcase onOpenAudit={openAuditForm} />

            {/* Problem Section */}
            <ProblemSection onOpenAudit={openAuditForm} />

            {/* Solution Section */}
            <SolutionSection
              onOpenAudit={openAuditForm}
              onNavigateToServices={() => setActivePage('services')}
            />

            {/* Crucial Done-For-You Distinction */}
            <DoneForYouSection onOpenAudit={openAuditForm} />

            {/* Services Preview */}
            <ServicesSection onOpenAudit={openAuditForm} isStandalonePage={false} />

            {/* Who We Help Preview */}
            <WhoWeHelpSection onOpenAudit={openAuditForm} isStandalonePage={false} />

            {/* Core Growth Framework */}
            <GrowthFrameworkSection onOpenAudit={openAuditForm} />

            {/* 5-Step Process */}
            <HowItWorksSection onOpenAudit={openAuditForm} isStandalonePage={false} />

            {/* Inline Growth Audit Section */}
            <AuditFormSection isModal={false} isStandalonePage={false} />

            {/* Tasteful Verified Social Proof Placeholder */}
            <SocialProofSection onOpenAudit={openAuditForm} />

            {/* FAQ Accordion */}
            <FAQSection onOpenAudit={openAuditForm} />

            {/* Final CTA */}
            <FinalCTASection onOpenAudit={openAuditForm} />
          </>
        )}

        {activePage === 'services' && (
          <>
            <ServicesSection onOpenAudit={openAuditForm} isStandalonePage={true} />
            <DoneForYouSection onOpenAudit={openAuditForm} />
            <FinalCTASection onOpenAudit={openAuditForm} />
          </>
        )}

        {activePage === 'who-we-help' && (
          <>
            <WhoWeHelpSection onOpenAudit={openAuditForm} isStandalonePage={true} />
            <ProblemSection onOpenAudit={openAuditForm} />
            <FinalCTASection onOpenAudit={openAuditForm} />
          </>
        )}

        {activePage === 'how-it-works' && (
          <>
            <HowItWorksSection onOpenAudit={openAuditForm} isStandalonePage={true} />
            <GrowthFrameworkSection onOpenAudit={openAuditForm} />
            <FinalCTASection onOpenAudit={openAuditForm} />
          </>
        )}

        {activePage === 'about' && (
          <>
            <AboutSection onOpenAudit={openAuditForm} isStandalonePage={true} />
            <DoneForYouSection onOpenAudit={openAuditForm} />
            <FinalCTASection onOpenAudit={openAuditForm} />
          </>
        )}

        {activePage === 'growth-audit' && (
          <AuditFormSection isModal={false} isStandalonePage={true} />
        )}

        {activePage === 'contact' && (
          <ContactSection onOpenAudit={openAuditForm} isStandalonePage={true} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={setActivePage}
        onOpenAudit={openAuditForm}
        onOpenLegal={setLegalModalType}
      />

      {/* Mobile Bottom Sticky Conversion Bar */}
      <MobileBottomBar onOpenAudit={openAuditForm} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />

      {/* Dedicated Growth Audit Modal Overlay */}
      {auditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl max-h-[90vh] bg-white border border-zinc-200 rounded-3xl shadow-2xl overflow-y-auto my-auto">
            <button
              onClick={closeAuditModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-xl text-zinc-500 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200 transition-colors"
              aria-label="Close Audit Modal"
            >
              <X className="w-5 h-5" />
            </button>
            <AuditFormSection isModal={true} onClose={closeAuditModal} />
          </div>
        </div>
      )}

      {/* Legal Modal (Privacy Policy & Terms) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
