
import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { Countdown } from './components/Countdown';
import { COMPANY_INFO, Icons } from './constants';

const App: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [logoVariant, setLogoVariant] = useState<'championship' | 'elite' | 'contender'>('championship');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center overflow-x-hidden bg-black selection:bg-red-600 selection:text-white">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-red-900/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-zinc-900/20 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>

      {/* Top Banner / Accents */}
      <div className="w-full h-1 bg-gradient-to-r from-red-600 via-zinc-800 to-red-600 z-50"></div>

      {/* Header */}
      <header className="w-full max-w-7xl px-8 py-10 flex flex-col md:flex-row justify-between items-center z-20 gap-6">
        <Logo variant="elite" />
        
        {/* Logo Variant Selector for Concept Review */}
        <div className="flex bg-zinc-900/50 p-1 rounded-full border border-zinc-800 backdrop-blur-sm">
          {(['championship', 'elite', 'contender'] as const).map((v) => (
            <button
              key={v}
              onClick={() => setLogoVariant(v)}
              className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all ${
                logoVariant === v ? 'bg-red-600 text-white shadow-lg' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {v}
            </button>
          ))}
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center justify-center text-center pt-10 pb-20">
        
        {/* Active Concept Display */}
        <div className="mb-16 transform transition-all duration-700 hover:scale-105">
           <Logo variant={logoVariant} className="scale-125 md:scale-150" />
        </div>

        <div className="space-y-6 max-w-4xl">
          <h2 className="font-bebas text-6xl md:text-9xl tracking-tighter leading-[0.9] text-white animate-pulse">
            THE RING IS <span className="text-red-600">CALLING</span>
          </h2>
          
          <p className="text-zinc-400 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            We are redefining the landscape of professional boxing. Strategic growth, global promotion, and undisputed legacy. 
            <span className="text-zinc-200 block mt-2 font-medium italic">Dedicated to Building Future Champions. Launching October 12th.</span>
          </p>
        </div>

        <div className="mt-16">
          <Countdown />
        </div>

        {/* Newsletter / CTA */}
        <div className="mt-20 w-full max-w-xl">
          {!isSubscribed ? (
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-zinc-800 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <form onSubmit={handleSubmit} className="relative flex flex-col md:flex-row gap-0 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                <input 
                  type="email" 
                  required
                  placeholder="Join the inner circle (Email)" 
                  className="flex-1 bg-transparent px-6 py-5 focus:outline-none text-white text-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-5 px-10 transition-all font-bebas text-2xl tracking-widest whitespace-nowrap"
                >
                  GET NOTIFIED
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-zinc-900/80 border-2 border-red-600 p-8 rounded-xl shadow-[0_0_30px_rgba(239,68,68,0.2)] animate-in fade-in zoom-in duration-300">
              <p className="text-white font-bebas text-3xl mb-1 tracking-tight">YOU'RE IN THE CORNER.</p>
              <p className="text-zinc-400 font-medium">Exclusive fight night updates and VIP access coming to your inbox.</p>
            </div>
          )}
          <p className="mt-4 text-[10px] text-zinc-600 font-bold tracking-widest uppercase">No Spam. Only Heavy Hits.</p>
        </div>
      </main>

      {/* Services Teaser */}
      <section className="relative z-10 w-full bg-zinc-950/50 backdrop-blur-sm border-y border-zinc-900 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <div className="w-12 h-1 bg-red-600"></div>
              <h3 className="font-bebas text-3xl text-white">TALENT DEVELOPMENT</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Nurturing high-potential athletes into the champions of tomorrow through elite coaching and career management.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-1 bg-red-600"></div>
              <h3 className="font-bebas text-3xl text-white">EVENT PROMOTION</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Producing high-stakes, broadcast-ready combat sports events that capture the global imagination.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-1 bg-red-600"></div>
              <h3 className="font-bebas text-3xl text-white">BRANDING & PR</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Leveraging the power of the digital age to build unbreakable connections between fighters and fans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-zinc-600 text-xs">
          
          <div className="space-y-6">
            <h4 className="font-bebas text-zinc-400 text-lg tracking-widest">CONTACT INFO</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icons.Map />
                <p>{COMPANY_INFO.address}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Icons.Phone />
                <p>{COMPANY_INFO.phone}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:text-center">
            <h4 className="font-bebas text-zinc-400 text-lg tracking-widest">STAY CONNECTED</h4>
            <div className="flex justify-start md:justify-center space-x-6">
              <a href="#" className="hover:text-red-600 transition-colors uppercase font-bold tracking-widest">Instagram</a>
              <a href="#" className="hover:text-red-600 transition-colors uppercase font-bold tracking-widest">Twitter / X</a>
              <a href="#" className="hover:text-red-600 transition-colors uppercase font-bold tracking-widest">YouTube</a>
            </div>
            <p className="text-red-600/50 uppercase font-black tracking-[0.3em]">{COMPANY_INFO.email}</p>
          </div>

          <div className="space-y-6 md:text-right">
            <h4 className="font-bebas text-zinc-400 text-lg tracking-widest">OFFICIAL WEB</h4>
            <p className="text-zinc-200 font-medium">{COMPANY_INFO.website}</p>
            <p>© 2024-2026 {COMPANY_INFO.name}.<br/>ALL RIGHTS RESERVED.</p>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default App;
