
import React, { useState } from 'react';
import { CartItem, Page } from '../types';
import { ChevronLeft, ShieldCheck, CreditCard, Truck, CheckCircle2 } from 'lucide-react';

interface CheckoutPageProps {
  items: CartItem[];
  onNavigate: (page: Page) => void;
  onClearCart: () => void;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ items, onNavigate, onClearCart }) => {
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = 7500.00; // Premium express rate
  const total = subtotal + shipping;

  // Pre-filled elite member details
  const [formData, setFormData] = useState({
    name: 'Chidi Okafor',
    phone: '+234 812 000 0000',
    address: 'Plot 42, Alexander Road',
    city: 'Ikoyi, Lagos',
    state: 'Lagos State',
    zip: '101211'
  });

  const handlePlaceOrder = () => {
    setIsSuccess(true);
    onClearCart();
  };

  const formatCurrency = (val: number) => new Intl.NumberFormat('en-NG').format(val);

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center animate-in zoom-in duration-500 bg-white dark:bg-black">
        <div className="w-24 h-24 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-8">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>
        <h1 className="text-5xl font-serif mb-4 dark:text-white">Order Confirmed!</h1>
        <p className="text-gray-400 max-w-sm mb-12">Your collection is being prepared for dispatch. Our concierge will contact you shortly for VIP fitting.</p>
        <button 
          onClick={() => onNavigate('home')}
          className="bg-black dark:bg-white text-white dark:text-black px-12 py-4 rounded-full font-bold uppercase tracking-widest active:scale-95 transition-transform"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => onNavigate('collection')}
          className="flex items-center space-x-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors mb-12"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium">Continue Shopping</span>
        </button>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <div className="flex items-center space-x-8 mb-12 overflow-x-auto no-scrollbar pb-2">
              <div className={`flex items-center space-x-2 whitespace-nowrap ${step >= 1 ? 'text-black dark:text-white' : 'text-gray-300'}`}>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center border-2 font-bold ${step >= 1 ? 'border-black bg-black dark:bg-white dark:text-black text-white' : 'border-gray-200'}`}>1</span>
                <span className="text-xs font-bold uppercase tracking-widest">Shipping</span>
              </div>
              <div className="w-12 h-0.5 bg-gray-100 dark:bg-zinc-800" />
              <div className={`flex items-center space-x-2 whitespace-nowrap ${step >= 2 ? 'text-black dark:text-white' : 'text-gray-300'}`}>
                <span className={`w-8 h-8 rounded-full flex items-center justify-center border-2 font-bold ${step >= 2 ? 'border-black bg-black dark:bg-white dark:text-black text-white' : 'border-gray-200'}`}>2</span>
                <span className="text-xs font-bold uppercase tracking-widest">Payment</span>
              </div>
            </div>

            {step === 1 ? (
              <div className="space-y-12 animate-in slide-in-from-left duration-500">
                <div className="flex justify-between items-center">
                   <h2 className="text-3xl font-serif dark:text-white">Shipping Details</h2>
                   <span className="text-[10px] font-bold text-yellow-600 border border-yellow-600/30 px-3 py-1 rounded-full uppercase tracking-widest">Elite Member Profile</span>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Full Name</label>
                    <input className="w-full bg-gray-50 dark:bg-zinc-900 border-none outline-none rounded-2xl px-6 py-4 dark:text-white" value={formData.name} readOnly />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Phone</label>
                    <input className="w-full bg-gray-50 dark:bg-zinc-900 border-none outline-none rounded-2xl px-6 py-4 dark:text-white" value={formData.phone} readOnly />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Address</label>
                  <input className="w-full bg-gray-50 dark:bg-zinc-900 border-none outline-none rounded-2xl px-6 py-4 dark:text-white" value={formData.address} readOnly />
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">City</label>
                    <input className="w-full bg-gray-50 dark:bg-zinc-900 border-none outline-none rounded-2xl px-6 py-4 dark:text-white" value={formData.city} readOnly />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">State</label>
                    <input className="w-full bg-gray-50 dark:bg-zinc-900 border-none outline-none rounded-2xl px-6 py-4 dark:text-white" value={formData.state} readOnly />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-2">Zip</label>
                    <input className="w-full bg-gray-50 dark:bg-zinc-900 border-none outline-none rounded-2xl px-6 py-4 dark:text-white" value={formData.zip} readOnly />
                  </div>
                </div>
                <button 
                  onClick={() => setStep(2)}
                  className="w-full bg-black dark:bg-white text-white dark:text-black py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-900 dark:hover:bg-zinc-200 transition-colors shadow-xl"
                >
                  Continue to Secure Payment
                </button>
              </div>
            ) : (
              <div className="space-y-12 animate-in slide-in-from-right duration-500">
                <h2 className="text-3xl font-serif dark:text-white">Payment Method</h2>
                <div className="p-8 border-2 border-black dark:border-white rounded-[30px] flex items-center space-x-6 relative bg-black/5 dark:bg-white/5">
                   <CreditCard className="w-8 h-8 dark:text-white" />
                   <div>
                     <p className="font-bold dark:text-white uppercase tracking-widest">Member Card •••• 9012</p>
                     <p className="text-sm text-gray-500">Secure payment for Elite Nigerian accounts</p>
                   </div>
                   <div className="absolute top-8 right-8 w-6 h-6 border-4 border-black dark:border-white rounded-full bg-black dark:bg-white" />
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button 
                    onClick={() => setStep(1)}
                    className="flex-1 border-2 border-gray-100 dark:border-zinc-800 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors dark:text-white"
                  >
                    Modify Shipping
                  </button>
                  <button 
                    onClick={handlePlaceOrder}
                    className="flex-[2] bg-black dark:bg-white text-white dark:text-black py-5 rounded-full font-bold uppercase tracking-widest hover:bg-gray-900 dark:hover:bg-zinc-200 transition-colors shadow-xl"
                  >
                    Pay ₦{formatCurrency(total)}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-4">
            <div className="bg-gray-50 dark:bg-zinc-900 rounded-[40px] p-8 sticky top-32">
              <h3 className="text-xl font-serif mb-8 dark:text-white">Bag Summary</h3>
              <div className="space-y-6 mb-8 max-h-60 overflow-y-auto pr-2 no-scrollbar">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.size}`} className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-16 rounded-xl overflow-hidden bg-white dark:bg-black">
                        <img src={item.product.image} className="w-full h-full object-cover" />
                      </div>
                      <div className="max-w-[120px]">
                        <p className="text-sm font-bold truncate dark:text-white">{item.product.name}</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Qty: {item.quantity} • {item.size}</p>
                      </div>
                    </div>
                    <span className="font-bold text-sm dark:text-white">₦{formatCurrency(item.product.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4 pt-8 border-t border-gray-200 dark:border-zinc-800">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Bag Subtotal</span>
                  <span className="font-bold dark:text-white">₦{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Elite Express Shipping</span>
                  <span className="font-bold dark:text-white">₦{formatCurrency(shipping)}</span>
                </div>
                <div className="flex justify-between text-xl pt-4">
                  <span className="font-serif dark:text-white uppercase tracking-tighter">Total</span>
                  <span className="font-bold dark:text-white">₦{formatCurrency(total)}</span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Secured in Nigeria</span>
                </div>
                <div className="flex items-center space-x-3 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                  <Truck className="w-4 h-4 text-blue-500" />
                  <span>Nationwide Express</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
