
import React, { useState } from 'react';
import { Product } from '../types';
import { Star, ChevronLeft, ShoppingBag, Heart, ShieldCheck, Truck } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (size: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  const [selectedSize = 'M', setSelectedSize] = useState('M');
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <button 
          onClick={onBack}
          className="group flex items-center space-x-2 text-gray-400 hover:text-black dark:hover:text-white transition-all mb-8 md:mb-12"
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-xs">The Edit</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="aspect-[4/5] rounded-[30px] md:rounded-[60px] overflow-hidden bg-gray-50 dark:bg-zinc-900 shadow-inner group relative">
              <img 
                src={product.image} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                alt={product.name} 
              />
              <div className="absolute top-8 left-8">
                 <span className="bg-black/50 backdrop-blur-md text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-white/10">
                   Gidi Certified
                 </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-6">
               <div className="aspect-square rounded-[20px] md:rounded-[30px] overflow-hidden bg-gray-50 dark:bg-zinc-900 border-2 border-black dark:border-white p-1 shadow-sm">
                  <img src={product.image} className="w-full h-full object-cover rounded-[15px] md:rounded-[25px]" />
               </div>
               <div className="aspect-square rounded-[20px] md:rounded-[30px] overflow-hidden bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-300 dark:text-zinc-600 font-serif italic text-xl md:text-2xl border border-transparent hover:border-black/10 transition-colors">
                 Native
               </div>
               <div className="aspect-square rounded-[20px] md:rounded-[30px] overflow-hidden bg-gray-50 dark:bg-zinc-900 group cursor-pointer border border-transparent hover:border-black/10 transition-all">
                  <img src={product.image} className="w-full h-full object-cover blur-[2px] group-hover:blur-0 transition-all" />
               </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col py-2">
            <div className="mb-4">
              <span className="bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                {product.category} Piece
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight dark:text-white uppercase tracking-tighter">{product.name}</h1>
            
            <div className="flex flex-wrap items-center gap-4 md:gap-8 mb-10">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">(48 Lagos Verified Reviews)</span>
              </div>
              <span className="text-3xl font-bold dark:text-white">₦{new Intl.NumberFormat('en-NG').format(product.price)}</span>
            </div>

            <p className="text-gray-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-10 lg:max-w-md">
              {product.description || "Crafted with the finest Nigerian-sourced materials and an unwavering eye for detail by our master tailors in Mushin. This piece represents the absolute pinnacle of contemporary African luxury."}
            </p>

            <div className="mb-10">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Select Fit</h3>
                <button className="text-[9px] font-bold text-black dark:text-white uppercase underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center font-bold text-xs md:text-sm transition-all border-2 active:scale-90 ${
                      selectedSize === size ? 'border-black bg-black dark:border-white dark:bg-white text-white dark:text-black shadow-xl' : 'border-gray-100 dark:border-zinc-800 text-gray-400 hover:border-gray-300 dark:hover:border-zinc-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => onAddToCart(selectedSize)}
                className="flex-1 bg-black dark:bg-white text-white dark:text-black py-5 rounded-full font-bold uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-2xl active:scale-95 group"
              >
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Add to Bag</span>
              </button>
              <button className="p-5 border-2 border-gray-100 dark:border-zinc-800 rounded-full hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors flex items-center justify-center active:scale-95 group dark:text-white">
                <Heart className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-gray-100 dark:border-zinc-900">
              <div className="flex items-center space-x-4 group">
                <div className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-2xl group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950 transition-colors">
                  <ShieldCheck className="w-6 h-6 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest dark:text-white">Naija Lifetime Guarantee</h4>
                  <p className="text-[10px] text-gray-400">Authentic Mushin Tailoring</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-4 bg-gray-50 dark:bg-zinc-900 rounded-2xl group-hover:bg-blue-50 dark:group-hover:bg-blue-950 transition-colors">
                  <Truck className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest dark:text-white">Naija Express</h4>
                  <p className="text-[10px] text-gray-400">Lagos/Abuja 24hr Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
