export const BRAND = {
  name: 'Astro Experts',
  tagline: 'Done-For-You Growth Systems for Occult Professionals.',
  corePromise: 'You have the expertise. We build the marketing system around it.',
  alternativeHeadline: 'Done-For-You Marketing & Growth Systems for Astrologers, Tarot Readers, Numerologists, Vastu Consultants & Occult Professionals.',
  phone: '+91 96488 52456',
  phoneRaw: '+919648852456',
  email: 'astroexpertsind@gmail.com',
  website: 'https://www.astroexperts.online',
  websiteDisplay: 'www.astroexperts.online',
  whatsappNumber: '919648852456',
  whatsappDefaultMessage:
    "Hi Astro Experts, I'm interested in your Done-For-You marketing and growth services for my occult business. I'd like to understand how you can help.",
};

export const getWhatsAppUrl = (customText?: string) => {
  const text = encodeURIComponent(customText || BRAND.whatsappDefaultMessage);
  return `https://wa.me/${BRAND.whatsappNumber}?text=${text}`;
};

export const getCallUrl = () => {
  return `tel:${BRAND.phoneRaw}`;
};

// Analytics event logger (ready for Meta Pixel / Google Analytics / CAPI)
export const trackEvent = (
  eventName:
    | 'cta_click'
    | 'whatsapp_click'
    | 'phone_click'
    | 'growth_audit_start'
    | 'growth_audit_submit'
    | 'contact_form_submit',
  properties: Record<string, any> = {}
) => {
  if (typeof window !== 'undefined') {
    // Console log for developer verification
    // Push to window.dataLayer if GTM is present
    const win = window as any;
    if (win.dataLayer && Array.isArray(win.dataLayer)) {
      win.dataLayer.push({ event: eventName, ...properties });
    }
    // Meta Pixel if fbq is present
    if (typeof win.fbq === 'function') {
      win.fbq('trackCustom', eventName, properties);
    }
  }
};
