
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product, Page } from '../types';
import { Filter, ChevronDown, ShoppingBag } from 'lucide-react';

interface CollectionPageProps {
  onProductClick: (product: Product) => void;
}

const CollectionPage: React.FC<CollectionPageProps> = ({ onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Traditional', 'Native', 'Streetwear', 'Luxury', 'Footwear', 'Accessories'];

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-5xl font-serif mb-4 dark:text-white uppercase tracking-tighter">The Naija Edit</h1>
            <p className="text-gray-500 dark:text-zinc-400 max-w-lg">Discover our curated selection of premium garments, designed in Nigeria for the global citizen who values heritage and modern flair.</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-6 py-3 border border-gray-200 dark:border-zinc-800 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors dark:text-white">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-3 border border-gray-200 dark:border-zinc-800 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors dark:text-white">
              <span>Sort By</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </header>

        <div className="flex space-x-4 mb-12 overflow-x-auto no-scrollbar pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                activeCategory === cat ? 'bg-black dark:bg-white text-white dark:text-black' : 'bg-gray-100 dark:bg-zinc-900 text-gray-500 dark:text-zinc-500 hover:bg-gray-200 dark:hover:bg-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="group cursor-pointer"
              onClick={() => onProductClick(product)}
            >
              <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden mb-6 bg-gray-50 dark:bg-zinc-900">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {product.badge && (
                  <span className="absolute top-6 left-6 bg-white/80 dark:bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest dark:text-white">
                    {product.badge}
                  </span>
                )}
                <div className="absolute inset-0 bg-black/20 dark:bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white dark:bg-black text-black dark:text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-all">
                    Explore Piece
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="font-serif text-xl mb-1 dark:text-white">{product.name}</h3>
                  <p className="text-gray-400 dark:text-zinc-500 text-sm">{product.category}</p>
                </div>
                <span className="text-lg font-bold dark:text-white">₦{new Intl.NumberFormat('en-NG').format(product.price)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
