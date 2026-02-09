
import React, { useEffect } from 'react';
import { X, Minus, Plus, ShoppingBag, ArrowRight, Trash2, ShieldCheck, Zap, MessageCircle } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemove: (productId: string, size: string) => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove, onCheckout }) => {
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const formatCurrency = (val: number) => new Intl.NumberFormat('en-NG').format(val);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Premium Blur Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 dark:bg-black/80 backdrop-blur-sm z-[100] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Side Drawer - Using h-[100dvh] for strict device height management */}
      <div className={`fixed top-0 right-0 h-[100dvh] w-full max-w-md bg-white dark:bg-[#050505] z-[110] shadow-2xl transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-hidden`}>
        <div className="flex flex-col h-full relative">
          
          {/* Mobile Handle / Decoration */}
          <div className="md:hidden w-12 h-1 bg-gray-200 dark:bg-zinc-800 rounded-full mx-auto mt-3 mb-1" />

          {/* Header - Compact but Bold */}
          <div className="px-6 py-6 md:py-8 flex items-center justify-between border-b border-gray-100 dark:border-zinc-900/50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-black dark:bg-white rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white dark:text-black" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-serif dark:text-white tracking-tight uppercase">Curation</h2>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                  {items.length} {items.length === 1 ? 'Selected Item' : 'Total Items'}
                </p>
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-zinc-900 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 dark:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto px-6 py-4 no-scrollbar">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-gray-50 dark:bg-zinc-900/50 rounded-full flex items-center justify-center mb-6">
                  <ShoppingBag className="w-8 h-8 text-gray-200 dark:text-zinc-700" />
                </div>
                <h3 className="text-xl font-serif mb-2 dark:text-white uppercase">Your Bag is Empty</h3>
                <p className="text-gray-400 text-xs mb-8 max-w-[180px] leading-relaxed">Luxury awaits. Discover our newest Nigerian collections.</p>
                <button 
                  onClick={onClose}
                  className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all"
                >
                  Explore Studio
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Gidi Express Status Banner */}
                <div className="bg-emerald-50 dark:bg-emerald-950/20 px-4 py-3 rounded-2xl flex items-center justify-between border border-emerald-100 dark:border-emerald-900/30">
                  <div className="flex items-center space-x-3">
                    <Zap className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 fill-current" />
                    <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-widest">Gidi Express Dispatch</span>
                  </div>
                  <span className="text-[9px] font-bold bg-white dark:bg-emerald-900/50 px-2 py-0.5 rounded text-emerald-700 dark:text-emerald-300">24H</span>
                </div>

                {/* Items List */}
                <div className="space-y-4">
                  {items.map((item, index) => (
                    <div 
                      key={`${item.product.id}-${item.size}`} 
                      className="group relative bg-white dark:bg-[#0c0c0c] border border-gray-100 dark:border-zinc-900 rounded-[24px] p-3 flex space-x-4 animate-fade-up shadow-sm"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-20 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-50 dark:bg-zinc-900">
                        <img src={item.product.image} className="w-full h-full object-cover" alt={item.product.name} />
                      </div>
                      
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div className="flex justify-between items-start">
                          <div className="pr-4">
                            <h4 className="font-serif text-base leading-tight dark:text-white mb-0.5 line-clamp-1">{item.product.name}</h4>
                            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Studio Fit • {item.size}</p>
                          </div>
                          <button 
                            onClick={() => onRemove(item.product.id, item.size)}
                            className="p-1.5 text-gray-300 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center bg-gray-50 dark:bg-zinc-900 rounded-full p-0.5 border border-gray-100 dark:border-zinc-800">
                            <button 
                              onClick={() => onUpdateQuantity(item.product.id, item.size, -1)}
                              className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-zinc-800 text-gray-400 hover:text-black dark:hover:text-white transition-all"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-[10px] font-bold dark:text-white">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.product.id, item.size, 1)}
                              className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white dark:hover:bg-zinc-800 text-gray-400 hover:text-black dark:hover:text-white transition-all"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <div className="text-right">
                             <span className="block text-xs font-bold dark:text-white">₦{formatCurrency(item.product.price * item.quantity)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer - Pinned to bottom, respecting h-full flex-col */}
          {items.length > 0 && (
            <div className="px-6 py-6 md:py-8 bg-white dark:bg-[#050505] border-t border-gray-100 dark:border-zinc-900/50">
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Subtotal</span>
                  <span className="text-sm font-bold dark:text-white">₦{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Logistics</span>
                    <span className="text-[8px] bg-black text-white dark:bg-white dark:text-black px-1 rounded font-bold">VIP</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-500">FREE</span>
                </div>
                <div className="pt-3 border-t border-gray-100 dark:border-zinc-900/50 flex justify-between items-center">
                  <span className="font-serif text-lg text-black dark:text-white uppercase tracking-tighter">Total Amount</span>
                  <span className="text-xl font-bold dark:text-white">₦{formatCurrency(subtotal)}</span>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <button 
                  onClick={onCheckout}
                  className="w-full bg-black dark:bg-white text-white dark:text-black h-14 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-center space-x-3 hover:opacity-90 transition-all shadow-xl active:scale-95 group"
                >
                  <span>Verify Secure Order</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center space-x-1.5 opacity-40">
                    <ShieldCheck className="w-3 h-3" />
                    <span className="text-[8px] font-bold uppercase tracking-widest dark:text-white">Secured via CBN</span>
                  </div>
                  <div className="w-[1px] h-3 bg-gray-200 dark:bg-zinc-800" />
                  <button className="flex items-center space-x-1.5 text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                    <MessageCircle className="w-3 h-3" />
                    <span className="text-[8px] font-bold uppercase tracking-widest">Stylist Help</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
