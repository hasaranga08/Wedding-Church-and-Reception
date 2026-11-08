import React from 'react';

/**
 * High-elegance Champagne Gold SVG floral corner ornaments, dividers and wreaths
 * Designed specifically to complement the Deep Plum Purple & Gold luxury wedding aesthetic.
 */

export const GoldFlourishDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-[#ECC880]" />
    <svg className="w-5 h-5 text-[#ECC880]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
        fill="#ECC880"
        fillOpacity="0.35"
        strokeWidth="1"
      />
      <circle cx="12" cy="10" r="1.5" fill="#ECC880" />
    </svg>
    <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#D4AF37]/60 to-[#ECC880]" />
  </div>
);

export const FloralCorner: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position = 'top-left', className = '' }) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right':
        return 'scale-x-[-1]';
      case 'bottom-left':
        return 'scale-y-[-1]';
      case 'bottom-right':
        return 'scale-[-1]';
      default:
        return '';
    }
  };

  return (
    <div className={`pointer-events-none select-none ${getTransform()} ${className}`}>
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-24 h-24 sm:w-32 sm:h-32 opacity-90 filter drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
      >
        <defs>
          {/* Refined Champagne Gold Gradients */}
          <linearGradient id="champagneGoldPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4D9" />
            <stop offset="40%" stopColor="#ECC880" />
            <stop offset="75%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#9C7735" />
          </linearGradient>

          <linearGradient id="champagneGoldSoft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF8E8" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#E2BE76" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#A88140" stopOpacity="0.45" />
          </linearGradient>

          <linearGradient id="champagneGoldStem" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5E4C3" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A672B" />
          </linearGradient>
        </defs>

        {/* Delicate Curving Stems in Champagne Gold */}
        <path
          d="M 10 10 Q 70 25 130 90"
          stroke="url(#champagneGoldStem)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />
        <path
          d="M 10 10 Q 25 70 90 130"
          stroke="url(#champagneGoldStem)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />

        {/* Refined Botanical Leaves in Champagne Gold */}
        <path
          d="M 40 18 C 50 12, 65 14, 60 26 C 52 30, 42 26, 40 18 Z"
          fill="url(#champagneGoldSoft)"
          stroke="url(#champagneGoldPrimary)"
          strokeWidth="0.6"
        />
        <path
          d="M 75 32 C 86 28, 100 32, 94 44 C 85 48, 77 42, 75 32 Z"
          fill="url(#champagneGoldSoft)"
          stroke="url(#champagneGoldPrimary)"
          strokeWidth="0.6"
        />
        <path
          d="M 18 40 C 12 50, 14 65, 26 60 C 30 52, 26 42, 18 40 Z"
          fill="url(#champagneGoldSoft)"
          stroke="url(#champagneGoldPrimary)"
          strokeWidth="0.6"
        />
        <path
          d="M 32 75 C 28 86, 32 100, 44 94 C 48 85, 42 77, 32 75 Z"
          fill="url(#champagneGoldSoft)"
          stroke="url(#champagneGoldPrimary)"
          strokeWidth="0.6"
        />

        {/* Gold Filigree Tendril Flourishes */}
        <path
          d="M 22 22 Q 50 40 85 22 C 92 18, 98 25, 92 30"
          stroke="url(#champagneGoldPrimary)"
          strokeWidth="1.1"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 22 22 Q 40 50 22 85 C 18 92, 25 98, 30 92"
          stroke="url(#champagneGoldPrimary)"
          strokeWidth="1.1"
          strokeLinecap="round"
          fill="none"
        />

        {/* Glowing Gold Stardust Berries */}
        <circle cx="58" cy="18" r="2.4" fill="url(#champagneGoldPrimary)" />
        <circle cx="96" cy="38" r="2" fill="url(#champagneGoldPrimary)" />
        <circle cx="18" cy="58" r="2.4" fill="url(#champagneGoldPrimary)" />
        <circle cx="38" cy="96" r="2" fill="url(#champagneGoldPrimary)" />

        {/* Gold Rose / Blossom Petal Cluster in Corner */}
        <g transform="translate(18, 18)">
          <ellipse cx="12" cy="10" rx="9" ry="7" fill="url(#champagneGoldPrimary)" fillOpacity="0.85" />
          <ellipse cx="6" cy="14" rx="8" ry="6" fill="url(#champagneGoldSoft)" fillOpacity="0.8" />
          <ellipse cx="14" cy="16" rx="7" ry="6" fill="url(#champagneGoldPrimary)" fillOpacity="0.9" />
          <circle cx="11" cy="13" r="3" fill="#FFEBB8" />
        </g>
      </svg>
    </div>
  );
};

export const WatercolorBotanicalWreath: React.FC<{ className?: string; children?: React.ReactNode }> = ({
  className = '',
  children,
}) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg
      viewBox="0 0 340 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full pointer-events-none filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
    >
      <defs>
        <radialGradient id="wreathPlumGlow" cx="50%" cy="50%" r="50%">
          <stop offset="65%" stopColor="#D4AF37" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="wreathGoldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2D6" />
          <stop offset="50%" stopColor="#ECC880" />
          <stop offset="100%" stopColor="#A68038" />
        </linearGradient>
      </defs>

      {/* Soft inner gold glow against plum */}
      <circle cx="170" cy="170" r="145" fill="url(#wreathPlumGlow)" />

      {/* Double hairline gold circles */}
      <circle cx="170" cy="170" r="142" stroke="url(#wreathGoldStroke)" strokeWidth="1" strokeOpacity="0.6" />
      <circle
        cx="170"
        cy="170"
        r="138"
        stroke="url(#wreathGoldStroke)"
        strokeWidth="0.8"
        strokeDasharray="4 3"
        strokeOpacity="0.45"
      />

      {/* Champagne Gold Botanical Laurel Leaves & Star Nodes */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        const rad = (angle * Math.PI) / 180;
        const x = 170 + 140 * Math.cos(rad);
        const y = 170 + 140 * Math.sin(rad);
        const rot = angle + 90;
        const isStar = i % 4 === 0;

        return (
          <g key={i} transform={`translate(${x}, ${y}) rotate(${rot})`}>
            {isStar ? (
              <circle cx="0" cy="0" r="4.5" fill="#FFE5A3" fillOpacity="0.9" />
            ) : (
              <path
                d="M 0 -8 C 4 -4, 4 4, 0 8 C -4 4, -4 -4, 0 -8 Z"
                fill="url(#wreathGoldStroke)"
                fillOpacity="0.75"
              />
            )}
          </g>
        );
      })}
    </svg>
    <div className="relative z-10">{children}</div>
  </div>
);

export const WaxSealStamp: React.FC<{
  initials?: string;
  size?: number;
  className?: string;
  onClick?: () => void;
}> = ({ initials = 'C & R', size = 96, className = '', onClick }) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        onClick?.();
      }
    }}
    style={{ width: size, height: size }}
    className={`relative flex items-center justify-center cursor-pointer select-none transition-transform hover:scale-105 active:scale-95 group ${className}`}
  >
    <svg
      viewBox="0 0 120 120"
      className="w-full h-full filter drop-shadow-[0_8px_18px_rgba(20,5,18,0.65)]"
    >
      <defs>
        <radialGradient id="plumWaxGradient" cx="38%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#FFF2D6" />
          <stop offset="30%" stopColor="#E5C278" />
          <stop offset="70%" stopColor="#B88E3E" />
          <stop offset="95%" stopColor="#7E581A" />
          <stop offset="100%" stopColor="#52360E" />
        </radialGradient>
        <linearGradient id="plumWaxBevel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF7" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#ECC880" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4A2E08" stopOpacity="0.8" />
        </linearGradient>
        <radialGradient id="plumWaxRecess" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="75%" stopColor="#A8812E" />
          <stop offset="100%" stopColor="#694C15" />
        </radialGradient>
      </defs>

      {/* Organic pooled wax outer rim in champagne gold */}
      <path
        d="M 60 5 
           C 78 4, 94 12, 104 26 
           C 114 40, 116 58, 111 74 
           C 106 90, 94 105, 78 112 
           C 62 119, 44 116, 30 108 
           C 16 100, 6 86, 4 69 
           C 2 52, 11 36, 23 22 
           C 35 8, 48 6, 60 5 Z"
        fill="url(#plumWaxGradient)"
        stroke="url(#plumWaxBevel)"
        strokeWidth="1.8"
      />

      {/* Inner circular seal ring */}
      <circle
        cx="60"
        cy="60"
        r="44"
        fill="url(#plumWaxRecess)"
        stroke="#FFF0C2"
        strokeWidth="1.2"
        strokeOpacity="0.65"
      />

      <circle
        cx="60"
        cy="60"
        r="39"
        fill="none"
        stroke="#593910"
        strokeWidth="0.8"
        strokeDasharray="2 3"
        strokeOpacity="0.75"
      />

      {/* Laurel Wreath Engraving */}
      <g stroke="#FFF0C2" strokeWidth="0.9" fill="none" strokeOpacity="0.75">
        <path d="M 32 60 C 32 46, 42 34, 54 32" strokeLinecap="round" />
        <path d="M 88 60 C 88 46, 78 34, 66 32" strokeLinecap="round" />
        <path d="M 32 60 C 32 74, 42 86, 54 88" strokeLinecap="round" />
        <path d="M 88 60 C 88 74, 78 86, 66 88" strokeLinecap="round" />
      </g>

      <text
        x="60"
        y="38"
        textAnchor="middle"
        fontSize="7"
        fill="#FFF4D9"
        fontFamily="'Cinzel', serif"
        letterSpacing="2"
      >
        ✦
      </text>
      <text
        x="60"
        y="89"
        textAnchor="middle"
        fontSize="6"
        fill="#FFF4D9"
        fontFamily="'Cinzel', serif"
        letterSpacing="2"
      >
        ✦
      </text>

      {/* Monogram Initials */}
      <text
        x="60"
        y="66"
        textAnchor="middle"
        fontSize="21"
        fontWeight="600"
        fontFamily="'Cormorant Garamond', serif"
        fill="#FFFDF7"
        letterSpacing="1.5"
        style={{
          filter: 'drop-shadow(0 1.5px 2px rgba(40,15,5,0.8))',
        }}
      >
        {initials}
      </text>
    </svg>
  </div>
);
