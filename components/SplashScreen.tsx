
import React, { useEffect, useState } from 'react';

const SplashScreen: React.FC = () => {
  const brandName = "DOOSSEEH_XIV";
  const logoUrl = "https://res.cloudinary.com/dhojhfbsz/image/upload/v1770647930/logo_t2ucd9.png";
  
  return (
    <div className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-900 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Logo - Optimizing for white-on-black source logo */}
        <div className="w-32 h-32 md:w-48 md:h-48 mb-8 animate-logo-splash">
          <img 
            src={logoUrl} 
            alt="Logo" 
            className="w-full h-full object-contain mix-blend-screen brightness-125 contrast-125 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          />
        </div>
        
        {/* Animated Letters */}
        <div className="flex space-x-1 md:space-x-3">
          {brandName.split('').map((letter, index) => (
            <span 
              key={index} 
              className="animate-letter text-white font-serif text-2xl md:text-5xl tracking-[0.2em] md:tracking-[0.4em] font-light"
              style={{ animationDelay: `${0.6 + index * 0.08}s` }}
            >
              {letter === '_' ? <span className="mx-1 md:mx-2 text-white/20">|</span> : letter}
            </span>
          ))}
        </div>
        
        {/* Subtle tagline */}
        <div className="mt-8 overflow-hidden">
          <p 
            className="text-white/30 text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold animate-fade-up" 
            style={{ animationDelay: '2s', animationDuration: '1.5s' }}
          >
            Premium Nigerian Apparel
          </p>
        </div>
      </div>
      
      {/* Decorative lines */}
      <div className="absolute bottom-10 left-10 w-20 h-[1px] bg-white/10 animate-fade-up" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-10 right-10 w-20 h-[1px] bg-white/10 animate-fade-up" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Corner indicators for a "viewfinder" luxury feel */}
      <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/20 animate-fade-up" style={{ animationDelay: '1.8s' }}></div>
      <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/20 animate-fade-up" style={{ animationDelay: '1.8s' }}></div>
    </div>
  );
};

export default SplashScreen;
