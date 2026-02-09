
import React, { useState, useCallback, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollection from './components/FeaturedCollection';
import ShowcaseSection from './components/ShowcaseSection';
import StatsSection from './components/StatsSection';
import CartDrawer from './components/CartDrawer';
import AIAssistant from './components/AIAssistant';
import SplashScreen from './components/SplashScreen';
import CollectionPage from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import BlogPage from './pages/Blog';
import ContactPage from './pages/Contact';
import CheckoutPage from './pages/Checkout';
import { Page, Product, CartItem, User } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  // Automatically set a logged-in premium user
  const [user, setUser] = useState<User | null>({ 
    name: 'Chidi Okafor', 
    email: 'chidi.okafor@elites.ng' 
  });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [exitSplash, setExitSplash] = useState(false);

  const logoUrl = "https://res.cloudinary.com/dhojhfbsz/image/upload/v1770647930/logo_t2ucd9.png";

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExitSplash(true);
      setTimeout(() => {
        setShowSplash(false);
      }, 1000);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsCartOpen(false);
  }, []);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product: Product, size: string) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id && item.size === size);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id && item.size === size 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { product, quantity: 1, size }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (productId: string, size: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.product.id === productId && item.size === size) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (productId: string, size: string) => {
    setCartItems(prev => prev.filter(item => !(item.product.id === productId && item.size === size)));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="animate-in fade-in zoom-in-95 duration-700">
            <Hero />
            <FeaturedCollection />
            <ShowcaseSection />
            <StatsSection />
          </div>
        );
      case 'collection':
        return <div className="animate-in fade-in slide-in-from-bottom-4 duration-700"><CollectionPage onProductClick={handleProductClick} /></div>;
      case 'product':
        return selectedProduct ? (
          <div className="animate-in fade-in slide-in-from-right-4 duration-700">
            <ProductDetail 
              product={selectedProduct} 
              onBack={() => navigateTo('collection')} 
              onAddToCart={(size) => addToCart(selectedProduct, size)}
            />
          </div>
        ) : (
          <CollectionPage onProductClick={handleProductClick} />
        );
      case 'blog':
        return <div className="animate-in fade-in duration-700"><BlogPage /></div>;
      case 'contact':
        return <div className="animate-in fade-in duration-700"><ContactPage /></div>;
      case 'checkout':
        return <CheckoutPage items={cartItems} onNavigate={navigateTo} onClearCart={() => setCartItems([])} />;
      default:
        return <Hero />;
    }
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={`min-h-screen selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black transition-all duration-500 bg-white dark:bg-black ${showSplash ? 'h-screen overflow-hidden' : ''}`}>
      
      {showSplash && (
        <div className={exitSplash ? 'exit-splash' : ''}>
          <SplashScreen />
        </div>
      )}

      <div className={`transition-all duration-1000 ${showSplash ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
        <Navbar 
          onNavigate={navigateTo} 
          currentPage={currentPage} 
          onCartToggle={() => setIsCartOpen(true)}
          cartCount={cartCount}
          isDarkMode={isDarkMode}
          onToggleDarkMode={toggleDarkMode}
        />
        
        <main className="min-h-[60vh]">
          {renderPage()}
        </main>
        
        <footer className="bg-black dark:bg-zinc-950 text-white py-20 px-6 mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-2 mb-6 group cursor-pointer" onClick={() => navigateTo('home')}>
                   <div className="w-16 h-16 relative overflow-hidden flex items-center justify-center">
                      <img 
                        src={logoUrl} 
                        alt="Doosseeh_xiv" 
                        className={`w-full h-full object-contain transition-all duration-500 group-hover:rotate-12 logo-filter-dark`}
                      />
                   </div>
                   <span className="font-serif text-2xl tracking-tighter uppercase font-bold">Doosseeh_xiv</span>
                </div>
                <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
                  Redefining the modern wardrobe through sustainable practices, elite Nigerian craftsmanship, and timeless design. Proudly curated in Lagos.
                </p>
                <div className="flex space-x-6">
                  {['Instagram', 'Twitter', 'Facebook'].map(social => (
                    <a key={social} href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors">{social}</a>
                  ))}
                </div>
              </div>
              
              <div className="animate-in fade-in delay-100">
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-white/40">Shop Naija</h4>
                <ul className="space-y-4 text-sm font-medium">
                  <li><button onClick={() => navigateTo('collection')} className="text-gray-400 hover:text-white transition-colors">Native Collection</button></li>
                  <li><button onClick={() => navigateTo('collection')} className="text-gray-400 hover:text-white transition-colors">Streetwear</button></li>
                  <li><button onClick={() => navigateTo('collection')} className="text-gray-400 hover:text-white transition-colors">Traditional Luxury</button></li>
                  <li><button onClick={() => navigateTo('collection')} className="text-gray-400 hover:text-white transition-colors">Footwear</button></li>
                </ul>
              </div>

              <div className="animate-in fade-in delay-200">
                <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-8 text-white/40">Company</h4>
                <ul className="space-y-4 text-sm font-medium">
                  <li><button onClick={() => navigateTo('blog')} className="text-gray-400 hover:text-white transition-colors">Our Story</button></li>
                  <li><button onClick={() => navigateTo('blog')} className="text-gray-400 hover:text-white transition-colors">Artisans</button></li>
                  <li><button onClick={() => navigateTo('contact')} className="text-gray-400 hover:text-white transition-colors">Store Locator</button></li>
                  <li><button onClick={() => navigateTo('contact')} className="text-gray-400 hover:text-white transition-colors">Concierge</button></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest font-bold gap-4">
              <p>© 2024 DOOSSEEH_XIV PREMIUM APPAREL INC. (NG)</p>
              <div className="flex space-x-8">
                 <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                 <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>

        <CartDrawer 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          onCheckout={() => navigateTo('checkout')}
        />

        <AIAssistant />
      </div>
    </div>
  );
}

export default App;
