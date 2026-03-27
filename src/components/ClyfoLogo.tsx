import React from 'react';

interface ClyfoLogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

const ClyfoLogo: React.FC<ClyfoLogoProps> = ({ className = "", width = "auto", height = "40px" }) => {
  return (
    <div className={`flex flex-col items-center select-none ${className}`} style={{ width, height }}>
      <svg
        viewBox="0 0 800 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md"
      >
        <defs>
          <linearGradient id="flagTricolorInf" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B00" /> {/* Saffron (Bold) */}
            <stop offset="45%" stopColor="#FFFFFF" /> {/* White intersection */}
            <stop offset="55%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#00A95C" /> {/* India Green (Bold) */}
          </linearGradient>
          
          <linearGradient id="rootTricolor" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="40%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#00A95C" />
          </linearGradient>

          <filter id="clyfoGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Left Graphic: The Infinity Shape with internal "CL" & "FO" */}
        {/* Slightly lifted up to allow more height for roots (y=50) */}
        <path
          d="M 140 50 C 110 -25, 10 -25, 10 50 C 10 125, 110 125, 140 50 C 170 -25, 270 -25, 270 50 C 270 125, 170 125, 140 50 Z"
          fill="none"
          stroke="url(#flagTricolorInf)"
          strokeWidth="28"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#clyfoGlow)"
        />

        <text
          x="75"
          y="66"
          fontFamily="Outfit, sans-serif"
          fontWeight="900"
          fontSize="48"
          fill="hsl(var(--foreground))"
          textAnchor="middle"
        >
          CL
        </text>

        <text
          x="205"
          y="66"
          fontFamily="Outfit, sans-serif"
          fontWeight="900"
          fontSize="48"
          fill="hsl(var(--foreground))"
          textAnchor="middle"
        >
          FO
        </text>

        {/* 2. Roots: INCREASED HEIGHT (Deeper roots reaching 180 instead of 145/150) */}
        <g fill="none" stroke="url(#rootTricolor)" strokeLinecap="round" strokeLinejoin="round">
          {/* Main central roots */}
          <path d="M 140 55 Q 140 110 135 185" strokeWidth="16" />
          <path d="M 140 75 Q 148 130 155 180" strokeWidth="12" />
          
          {/* Major lateral branches */}
          <path d="M 134 60 Q 100 110 75 165" strokeWidth="14" />
          <path d="M 146 60 Q 185 110 210 165" strokeWidth="14" />
          
          {/* Secondary offshoots */}
          <path d="M 120 80 Q 110 130 100 180" strokeWidth="8" />
          <path d="M 160 80 Q 170 130 185 180" strokeWidth="8" />
          
          <path d="M 100 110 Q 80 135 65 155" strokeWidth="7" />
          <path d="M 185 110 Q 205 135 220 155" strokeWidth="7" />
          
          <path d="M 140 120 Q 130 150 125 185" strokeWidth="6" />
          <path d="M 125 140 Q 115 165 110 190" strokeWidth="5" />
          <path d="M 150 135 Q 160 160 170 195" strokeWidth="5" />
        </g>

        {/* 3. Main CLYFO Typography: REDUCED X (from 420 to 330) to sit closer to tree symbol */}
        <text
          x="330"
          y="90"
          fontFamily="Outfit, sans-serif"
          fontWeight="900"
          fontSize="98"
          fill="hsl(var(--primary))"
          letterSpacing="1"
        >
          CLYFO
        </text>

        {/* 4. Superscript cluster: *369 and ∞ moved closer too */}
        <text
          x="655"
          y="45"
          fontFamily="Outfit, sans-serif"
          fontWeight="900"
          fontSize="30"
          fill="hsl(var(--foreground))"
        >
          *369
        </text>

        <text
          x="655"
          y="98"
          fontFamily="Outfit, sans-serif"
          fontWeight="900"
          fontSize="72"
          fill="hsl(var(--foreground))"
        >
          ∞
        </text>

        {/* 5. Tagline: Perfectly aligned under text */}
        <text
          x="335"
          y="130"
          fontFamily="Inter, Outfit, sans-serif"
          fontWeight="800"
          fontSize="26"
          fill="hsl(var(--foreground))"
          letterSpacing="0"
        >
          Enlightenment meets Employment
        </text>
      </svg>
    </div>
  );
};

export default ClyfoLogo;
