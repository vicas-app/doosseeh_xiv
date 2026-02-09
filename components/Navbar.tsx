
import React, { useState } from 'react';
import { Search, ShoppingBag, User as UserIcon, Menu, X, Sun, Moon, Star } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Page } from '../types';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
  onCartToggle: () => void;
  cartCount: number;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onNavigate, 
  currentPage, 
  onCartToggle, 
  cartCount,
  isDarkMode,
  onToggleDarkMode
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoUrl = "https://res.cloudinary.com/dhojhfbsz/image/upload/v1770647930/logo_t2ucd9.png";

  const handleNav = (id: Page) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-zinc-900 px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4 lg:space-x-8">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 dark:text-white">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          <ul className="hidden lg:flex space-x-6 text-sm font-medium text-gray-600 dark:text-zinc-400">
            {NAV_LINKS.map(link => (
              <li key={link.id}>
                <button 
                  onClick={() => handleNav(link.id as Page)}
                  className={`hover:text-black dark:hover:text-white transition-colors py-2 relative group ${currentPage === link.id ? 'text-black dark:text-white font-bold' : ''}`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-black dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform ${currentPage === link.id ? 'scale-x-100' : ''}`} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div 
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={() => handleNav('home')}
        >
          <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden flex items-center justify-center">
            <img 
              src={logoUrl} 
              alt="Doosseeh_xiv" 
              className={`w-full h-full object-contain transition-all duration-500 group-hover:scale-110 ${isDarkMode ? 'logo-filter-dark' : 'logo-filter-light'}`}
            />
          </div>
          <span className="hidden sm:block font-serif text-xl md:text-2xl tracking-tighter uppercase font-bold dark:text-white">Doosseeh_xiv</span>
        </div>

        <div className="flex items-center space-x-3 md:space-x-6">
          <button 
            onClick={onToggleDarkMode}
            className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors text-gray-700 dark:text-zinc-300"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          
          <div className="hidden md:flex items-center bg-gray-100 dark:bg-zinc-900 rounded-full px-4 py-2 space-x-2 focus-within:ring-2 ring-black/5 dark:ring-white/5 transition-all">
            <Search className="w-4 h-4 text-gray-400 dark:text-zinc-500" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none text-sm w-24 lg:w-32 dark:text-white dark:placeholder:text-zinc-600"
            />
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Logged in indicator */}
            <div className="hidden sm:flex items-center space-x-2 mr-2">
               <div className="flex flex-col items-end">
                  <span className="text-[9px] font-bold text-yellow-600 uppercase tracking-widest flex items-center">
                    <Star className="w-2 h-2 fill-current mr-1" /> Elite Member
                  </span>
                  <span className="text-xs font-medium dark:text-white">C. Okafor</span>
               </div>
            </div>
            
            <button 
              className="p-2 bg-gray-100 dark:bg-zinc-800 rounded-full transition-colors text-gray-700 dark:text-zinc-300 hover:ring-2 ring-black/10 dark:ring-white/10"
              aria-label="Account profile"
            >
              <UserIcon className="w-5 h-5" />
            </button>
            <div 
              className="relative p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-full transition-colors cursor-pointer group text-gray-700 dark:text-zinc-300"
              onClick={onCartToggle}
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-black dark:bg-white text-white dark:text-black text-[9px] rounded-full min-w-4 h-4 flex items-center justify-center font-bold px-1">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-x-0 top-[80px] md:top-[96px] bg-white dark:bg-black border-b border-gray-100 dark:border-zinc-900 shadow-xl transition-all duration-300 transform ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        <ul className="px-6 py-8 space-y-6">
          {NAV_LINKS.map(link => (
            <li key={link.id}>
              <button 
                onClick={() => handleNav(link.id as Page)}
                className="text-2xl font-serif block w-full text-left dark:text-white"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-6 border-t border-gray-100 dark:border-zinc-900">
             <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center">
                   <UserIcon className="w-5 h-5 text-white dark:text-black" />
                </div>
                <div>
                   <p className="font-bold text-sm dark:text-white">Chidi Okafor</p>
                   <p className="text-xs text-yellow-600 font-bold uppercase tracking-widest">Elite Member</p>
                </div>
             </div>
            <div className="flex items-center bg-gray-100 dark:bg-zinc-900 rounded-2xl px-4 py-3 space-x-3">
              <Search className="w-5 h-5 text-gray-400 dark:text-zinc-500" />
              <input type="text" placeholder="Search collection..." className="bg-transparent border-none outline-none flex-1 dark:text-white" />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
