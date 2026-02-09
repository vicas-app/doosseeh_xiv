
import React from 'react';
import { ArrowRight } from 'lucide-react';

const StatsSection: React.FC = () => {
  return (
    <section className="px-4 md:px-6 py-12 md:py-24 max-w-7xl mx-auto mb-12 md:mb-24">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-[0.1em] md:tracking-widest text-black mb-4 dark:text-white">Naija Excellence In Numbers</h2>
        <p className="text-gray-400 max-w-sm mx-auto text-sm">Quantifying our journey from a small Lagos studio to a global fashion powerhouse.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <div className="lg:col-span-5 bg-[#3F9A8A] text-white p-10 md:p-12 rounded-[40px] md:rounded-[50px] relative overflow-hidden group min-h-[300px] flex flex-col justify-between">
          <div className="relative z-10">
            <h3 className="text-6xl md:text-7xl font-serif mb-2 italic group-hover:scale-110 transition-transform origin-left duration-700">5000+</h3>
            <p className="text-lg md:text-xl font-light text-white/80">Custom Native Pieces Tailored</p>
          </div>
          <div className="relative z-10 mt-8 flex items-center space-x-3 cursor-pointer group/btn w-fit">
            <span className="text-sm font-bold uppercase tracking-widest group-hover/btn:tracking-[0.2em] transition-all">Explore Native Luxe</span>
            <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm group-hover/btn:bg-white/20 transition-colors">
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
            </div>
          </div>
          <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-[-20px] left-[-20px] w-40 h-40 bg-black/10 rounded-full blur-3xl" />
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-gray-100 dark:bg-zinc-800 h-[300px] md:h-full rounded-[40px] md:rounded-[50px] overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
              alt="Nigerian Model Stats"
            />
            <div className="absolute bottom-6 right-6 bg-white p-4 rounded-full shadow-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
              <ArrowRight className="w-5 h-5" />
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="absolute top-6 left-6 text-white font-bold uppercase tracking-widest text-[10px]">Lagos HQ</div>
          </div>
          <div className="bg-gray-100 dark:bg-zinc-800 h-[300px] md:h-full rounded-[40px] md:rounded-[50px] overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" 
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
              alt="Abuja Storefront"
            />
            <div className="absolute top-6 right-6 bg-black text-white p-4 rounded-full shadow-lg group-hover:rotate-[-45deg] transition-transform">
              <ArrowRight className="w-5 h-5 rotate-[-45deg]" />
            </div>
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-white font-bold uppercase tracking-widest text-[10px]">Abuja Concierge</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
