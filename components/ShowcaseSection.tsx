
import React from 'react';
import { Play } from 'lucide-react';

const ShowcaseSection: React.FC = () => {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="bg-[#D1FAE5]/30 rounded-[60px] p-10 md:p-20 relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight uppercase">
            MASTERING THE ART <br />
            OF NIGERIAN LUXURY
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-md italic">
            "At Doosseeh_xiv, every stitch tells a story of our vibrant heritage and the relentless hustle of Lagos."
          </p>
        </div>

        <div className="relative group cursor-pointer">
          <img 
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-[500px] object-cover rounded-[40px] shadow-lg"
            alt="Nigerian Fabric Showcase"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all rounded-[40px] flex items-center justify-center">
            <div className="w-20 h-20 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-black fill-current ml-1" />
            </div>
          </div>
          <div className="absolute top-8 left-8 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold border border-white/20 uppercase tracking-widest">
            Behind the Seams: The Mushin Workshop
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
