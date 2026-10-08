import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark-bg' | 'light-bg' | 'official-badge';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const AstroExpertsLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light-bg',
  showText = true,
  size = 'md',
}) => {
  // Size dimensions
  const heights = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16',
  };

  const isOfficialBadge = variant === 'official-badge';
  const textExpertColor = isOfficialBadge || variant === 'light-bg' ? '#0A0A0A' : '#FFFFFF';

  const logoContent = (
    <div
      className={`inline-flex items-center gap-3 select-none ${heights[size]} ${className}`}
      aria-label="Astro Experts Logo"
    >
      {/* Official Astro Experts Geometric Emblem */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto aspect-square flex-shrink-0"
        aria-hidden="true"
      >
        {/* Outer Orange Faceted Badge */}
        <path
          d="M36 12 C29 12 24 16 21 23 L10 58 C7 67 10 75 16 80 L46 102 C48.5 104 51.5 104 54 102 L84 80 C90 75 93 67 90 58 L79 23 C76 16 71 12 64 12 Z"
          fill="#FF5B00"
        />

        {/* White Stylized Arch (Negative Space Cutout) */}
        <path
          d="M26 66 L50 20 L74 66 C68 70 59 73 50 73 C41 73 32 70 26 66 Z"
          fill="#FFFFFF"
        />

        {/* Inner Orange Apex / Arrowhead */}
        <path
          d="M50 34 L64 61 C60 63 55 64.5 50 64.5 C45 64.5 40 63 36 61 Z"
          fill="#FF5B00"
        />
      </svg>

      {/* Official Typography: ASTRO (#FF5B00) / EXPERTS (#FFFFFF or #0A0A0A) */}
      {showText && (
        <div className="flex flex-col justify-center leading-none tracking-tight">
          <span
            className="font-extrabold uppercase text-[#FF5B00]"
            style={{
              fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: size === 'sm' ? '14px' : size === 'md' ? '18px' : size === 'lg' ? '22px' : '28px',
              lineHeight: 1.05,
              letterSpacing: '0.04em',
            }}
          >
            ASTRO
          </span>
          <span
            className="font-extrabold uppercase transition-colors"
            style={{
              color: textExpertColor,
              fontFamily: "'Space Grotesk', 'Plus Jakarta Sans', system-ui, sans-serif",
              fontSize: size === 'sm' ? '14px' : size === 'md' ? '18px' : size === 'lg' ? '22px' : '28px',
              lineHeight: 1.05,
              letterSpacing: '0.04em',
            }}
          >
            EXPERTS
          </span>
        </div>
      )}
    </div>
  );

  if (isOfficialBadge) {
    return (
      <div className="inline-flex items-center bg-white px-3.5 py-1.5 rounded-xl shadow-md border border-white/20">
        {logoContent}
      </div>
    );
  }

  return logoContent;
};
