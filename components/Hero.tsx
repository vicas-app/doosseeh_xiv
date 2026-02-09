
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Tag: React.FC<{ label: string; price: string; className?: string }> = ({ label, price, className }) => (
  <div className={`absolute bg-white/60 dark:bg-black/60 backdrop-blur-md border border-white/30 dark:border-white/10 p-2 md:p-3 rounded-xl shadow-sm text-[10px] md:text-xs hover:scale-105 transition-transform duration-300 ${className}`}>
    <div className="font-medium text-gray-900 dark:text-gray-100">{label}</div>
    <div className="font-bold dark:text-white">₦{price}</div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className="px-4 md:px-6 py-8 md:py-16 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-12 md:mb-20 opacity-0 animate-fade-up">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif leading-tight md:leading-[1.1] mb-6 tracking-tight dark:text-white uppercase">
          FROM LAGOS TO <br className="hidden sm:block" />
          THE WORLD, WE DEFINE <br className="hidden sm:block" />
          AFRO-LUXURY
        </h1>
        <p className="max-w-xl mx-auto text-gray-500 dark:text-zinc-400 text-sm md:text-lg leading-relaxed px-4">
          Experience the pinnacle of Nigerian craftsmanship. 
          Discover a signature style that blends heritage with modern Gidi flair.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
        {/* Left Card */}
        <div className="md:col-span-12 lg:col-span-4 relative h-[400px] md:h-[500px] bg-[#E5E7EB] dark:bg-zinc-800 rounded-[30px] md:rounded-[40px] overflow-hidden group opacity-0 animate-fade-up stagger-1">
          <img 
            src="https://images.unsplash.com/photo-1539106602324-40502a50a116?auto=format&fit=crop&q=80&w=1000" 
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
            alt="Nigerian Fashion Model"
          />
          <Tag label="Modern Kaftan" price="85,000" className="top-10 md:top-20 right-8 md:right-10" />
          <Tag label="Senator Trousers" price="32,000" className="bottom-32 md:bottom-40 left-8 md:left-10" />
          <Tag label="Handmade Loafers" price="125,000" className="bottom-8 md:bottom-10 right-8 md:right-10" />
        </div>

        {/* Center Section */}
        <div className="md:col-span-6 lg:col-span-4 flex flex-col space-y-6 opacity-0 animate-fade-up stagger-2">
          <div className="bg-black dark:bg-zinc-900 text-white p-6 md:p-8 rounded-[30px] md:rounded-[40px] flex-1 flex flex-col justify-between items-center text-center cursor-pointer hover:bg-zinc-900 dark:hover:bg-zinc-800 transition-all group active:scale-95">
            <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold group-hover:tracking-[0.5em] transition-all">Shop Gidi Luxe</span>
            <ArrowRight className="w-10 h-10 md:w-12 md:h-12 stroke-[1px] group-hover:translate-x-2 transition-transform" />
          </div>
          <button className="border-2 border-gray-100 dark:border-zinc-800 text-black dark:text-white py-4 rounded-full font-bold text-[10px] md:text-xs uppercase hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300">
            View All Native Pieces
          </button>
          <div className="bg-[#E7ECF3] dark:bg-zinc-800 p-6 md:p-8 rounded-[30px] md:rounded-[40px] flex-1 relative overflow-hidden group">
            <div className="relative z-10">
              <span className="bg-white/70 dark:bg-black/70 px-3 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase mb-2 inline-block dark:text-white">Hot Arrival</span>
              <h3 className="font-serif text-2xl md:text-3xl dark:text-white">The "Eko"<br/>Collection</h3>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=400" 
              className="absolute bottom-0 right-0 w-24 md:w-32 h-24 md:h-32 object-cover rounded-tl-[30px] md:rounded-tl-[40px] group-hover:scale-110 transition-transform"
              alt="Eko Collection Model"
            />
          </div>
        </div>

        {/* Right Card */}
        <div className="md:col-span-6 lg:col-span-4 bg-[#F3F4F6] dark:bg-zinc-900 rounded-[30px] md:rounded-[40px] p-6 md:p-8 flex flex-col justify-between overflow-hidden relative opacity-0 animate-fade-up stagger-3">
          <div className="flex justify-between items-start">
            <div className="bg-white dark:bg-black p-4 rounded-2xl shadow-sm">
              <span className="text-gray-400 text-sm">₦</span>
              <span className="text-2xl md:text-3xl font-serif dark:text-white">350k</span>
            </div>
            <div className="bg-white dark:bg-zinc-800 p-3 md:p-4 rounded-full shadow-sm hover:rotate-12 transition-transform cursor-pointer dark:text-white">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 rotate-[-45deg]" />
            </div>
          </div>
          
          <div className="mt-8 space-y-2 relative z-10">
            <div className="bg-black dark:bg-white text-white dark:text-black px-5 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-medium w-fit shadow-lg">
              Grand Agbada Masterpiece
            </div>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1594932224828-b4b059b6f6ee?auto=format&fit=crop&q=80&w=800" 
            className="absolute -bottom-10 -right-10 w-48 md:w-64 h-64 md:h-80 object-cover rotate-[-5deg] hover:rotate-0 transition-all duration-700"
            alt="Agbada Showcase"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
