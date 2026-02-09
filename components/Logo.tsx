
import React from 'react';

type LogoVariant = 'championship' | 'elite' | 'contender';

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'championship', className = "" }) => {
  const ChampionshipLogo = () => (
    <div className="relative group cursor-pointer">
      <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-32 md:h-32 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">
        <path d="M50 5 L90 20 V50 C90 75 50 95 50 95 C50 95 10 75 10 50 V20 L50 5Z" fill="none" stroke="#ef4444" strokeWidth="2" />
        <path d="M50 10 L85 23 V50 C85 72 50 90 50 90 C50 90 15 72 15 50 V23 L50 10Z" fill="#111" />
        <text x="50" y="58" fontFamily="Bebas Neue" fontSize="42" fill="white" textAnchor="middle" letterSpacing="-2">KK</text>
        <circle cx="50" cy="72" r="3" fill="#ef4444" />
        <path d="M35 72 H45 M55 72 H65" stroke="#ef4444" strokeWidth="1" />
      </svg>
      <div className="mt-2 text-center">
        <span className="block font-bebas text-xl md:text-2xl tracking-tighter text-white">CHAMPIONSHIP <span className="text-red-600">PROMOTIONS</span></span>
      </div>
    </div>
  );

  const EliteLogo = () => (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-12 h-12 border-2 border-red-600 rotate-45 flex items-center justify-center">
          <span className="font-bebas text-2xl text-white -rotate-45 font-bold">KK</span>
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full animate-ping"></div>
      </div>
      <div className="border-l border-zinc-700 pl-3">
        <h1 className="font-bebas text-2xl tracking-widest text-white leading-none">K K BOXING</h1>
        <p className="text-[8px] tracking-[0.3em] text-zinc-500 font-bold uppercase whitespace-nowrap">Building Future Champions</p>
      </div>
    </div>
  );

  const ContenderLogo = () => (
    <div className="text-center group">
      <div className="inline-block relative">
        <span className="text-7xl md:text-8xl font-black text-white font-bebas italic tracking-tighter relative z-10">
          K<span className="text-red-600">K</span>
        </span>
        <div className="absolute -bottom-2 left-0 w-full h-2 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
      <p className="font-bebas text-lg tracking-[0.4em] text-zinc-400 mt-2">BUILDING CHAMPIONS</p>
    </div>
  );

  return (
    <div className={`${className}`}>
      {variant === 'championship' && <ChampionshipLogo />}
      {variant === 'elite' && <EliteLogo />}
      {variant === 'contender' && <ContenderLogo />}
    </div>
  );
};
