import React from 'react';
// Importing the specific assets you uploaded that align with the CLYFO mission
import cosmicBg from "@/assets/cosmic-bg.jpg";       // For Dark Mode (Universe/Eternal)
import heroBg from "@/assets/hero-bg.jpg";           // For Light Mode (Structure/Clarity)
import indiaMap from "@/assets/cosmic-hero-1.png";   // For Tricolor Mode (Viksit Bharat/Nation Rooted)

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 h-full w-full overflow-hidden bg-background transition-colors duration-700">
      
      {/* ==================== DARK THEME (Cosmic / Universe of HaiC) ==================== */}
      {/* Aim: "Eternal Outcome", "Deep Consciousness", "3-6-9 Universe" */}
      <div className="hidden dark:block absolute inset-0 w-full h-full transition-opacity duration-1000">
        {/* Deep Space Nebula Background */}
        <div 
          className="absolute inset-0 w-full h-full animate-pan-image opacity-50"
          style={{
            backgroundImage: `url(${cosmicBg})`,
            backgroundSize: '120% 120%',
            backgroundPosition: 'center',
            filter: 'brightness(0.8) contrast(1.2)'
          }}
        />
        {/* Cosmic Energy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-consciousness-purple/10 to-black/60 mix-blend-overlay"></div>
        
        {/* Subtle Floating Elements (representing 3-6-9 energy points) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-consciousness-purple/20 rounded-full blur-3xl animate-pulse-sacred"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cosmic-saffron/10 rounded-full blur-3xl animate-pulse-sacred" style={{ animationDelay: '1s' }}></div>
      </div>


      {/* ==================== TRICOLOR THEME (Viksit Bharat 2047) ==================== */}
      {/* Aim: "Nation Building", "Rooted in Bharat", "Golden Roots" */}
      <div className="hidden tricolor:block absolute inset-0 w-full h-full transition-opacity duration-1000 bg-white">
        {/* Soft Tricolor Flow Gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#FF993315_0%,#FFFFFF_50%,#13880815_100%)] bg-[length:200%_200%] animate-aurora-tricolor opacity-80"></div>
        
        {/* Central India Map Watermark (Rising for Humanity) */}
        <div 
          className="absolute inset-0 w-full h-full opacity-20 bg-no-repeat bg-center bg-contain mix-blend-multiply"
          style={{
            backgroundImage: `url(${indiaMap})`,
            transform: 'scale(0.8)', // Keep it subtle in the center
          }}
        />
        
        {/* Golden Glow for "Golden Roots" mentioned in docs */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_60%)]"></div>
      </div>


      {/* ==================== LIGHT THEME (World of Jnani / Clarity) ==================== */}
      {/* Aim: "Education", "Focus", "Psychological Dimension" */}
      <div className="block dark:hidden tricolor:hidden absolute inset-0 w-full h-full transition-opacity duration-1000 bg-blue-50/30">
        {/* Structured Geometric Pattern (representing Order & Knowledge) */}
        <div 
          className="absolute inset-0 w-full h-full opacity-15 animate-pan-image"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) opacity(0.6)'
          }}
        />
        
        {/* Soft Light Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-blue-50/40"></div>
        
        {/* Knowledge Light Rays */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.1)_0%,transparent_50%)]"></div>
      </div>

    </div>
  );
};

export default AnimatedBackground;