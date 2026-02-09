
import React from 'react';
import { ShoppingCart } from 'lucide-react';

const CollectionCard: React.FC<{ image: string; title: string; price: string; active?: boolean }> = ({ image, title, price, active }) => (
  <div className={`relative transition-all duration-700 rounded-[25px] md:rounded-[30px] overflow-hidden flex-shrink-0 group ${active ? 'w-[280px] md:w-80 h-[380px] md:h-[450px] z-20 shadow-2xl scale-100 md:scale-110' : 'w-40 md:w-48 h-[300px] md:h-[400px] z-10 opacity-70 md:opacity-60 md:grayscale hover:opacity-100 hover:grayscale-0'}`}>
    <img src={image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={title} />
    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8 text-white transition-opacity duration-500 ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
      <div className="mb-2">
         <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-1 rounded backdrop-blur-md">Premium Edition</span>
      </div>
      <h4 className="font-serif text-lg md:text-xl mb-3 md:mb-4 leading-tight">{title}</h4>
      <div className="flex items-center justify-between">
        <span className="font-bold text-base md:text-lg">₦{price}</span>
        <button className="bg-white text-black p-2.5 md:p-3 rounded-full hover:bg-zinc-200 transition-colors transform active:scale-90">
          <ShoppingCart className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

const FeaturedCollection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50/50 overflow-hidden">
      <div className="text-center mb-10 md:mb-16 px-4">
        <h2 className="text-2xl md:text-3xl font-serif uppercase tracking-[0.2em] md:tracking-widest text-black/30 mb-2">Featured Collection</h2>
        <div className="w-12 h-1 bg-black mx-auto rounded-full" />
      </div>
      
      <div className="flex items-center space-x-4 md:space-x-[-20px] overflow-x-auto no-scrollbar pb-12 px-6 md:px-10 snap-x snap-mandatory scroll-smooth">
        <div className="snap-center"><CollectionCard image="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=800" title="Minimalist Polo" price="25,000" /></div>
        <div className="snap-center"><CollectionCard image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800" title="Summer Linen" price="45,000" /></div>
        <div className="snap-center"><CollectionCard image="https://images.unsplash.com/photo-1614676466623-f8d2035302c3?auto=format&fit=crop&q=80&w=800" title="Classic Formal Edition" price="60,000" active /></div>
        <div className="snap-center"><CollectionCard image="https://images.unsplash.com/photo-1536766768598-e09213fdcf22?auto=format&fit=crop&q=80&w=800" title="Brown Blazer" price="110,000" /></div>
        <div className="snap-center"><CollectionCard image="https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&q=80&w=800" title="Evening Shirt" price="35,000" /></div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
