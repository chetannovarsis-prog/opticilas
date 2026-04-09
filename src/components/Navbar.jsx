import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuLinks = [
    { name: 'Home', href: '#' },
    { name: 'Frames', href: '#' },
    { name: 'Sunglasses', href: '#' },
    { name: 'Combo Packs', href: '#' },
    { name: 'Best Sellers', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white">
      {/* Announcement Bar */}
      <div className="bg-brand-charcoal text-white py-2 text-center text-xs sm:text-sm font-medium">
        Save Min 50% on all orders and get free shipping
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4 border-b border-brand-cream/50">
          {/* Left: Search Bar */}
          <div className="hidden md:flex items-center bg-brand-cream px-4 py-2 rounded-full w-64 shadow-sm border border-transparent focus-within:border-brand-accent transition-all duration-300">
            <Search className="w-4 h-4 text-brand-primary opacity-60" />
            <input 
              type="text" 
              placeholder="Search eyewear..." 
              className="bg-transparent border-none outline-none text-sm ml-2 w-full text-brand-charcoal font-body"
            />
          </div>

          {/* Center: Logo */}
          <div className="text-2xl md:text-3xl font-heading font-extrabold tracking-tighter text-brand-primary">
            VISIONIX<span className="text-brand-accent">.</span>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="p-2 hover:bg-brand-cream rounded-full transition-colors duration-300">
              <User className="w-5 h-5 text-brand-primary" />
            </button>
            <div className="relative group p-2 hover:bg-brand-cream rounded-full transition-colors duration-300 cursor-pointer">
              <ShoppingCart className="w-5 h-5 text-brand-primary" />
              <span className="absolute top-0 right-0 bg-brand-accent text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">2</span>
            </div>
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex justify-center items-center gap-10 py-4">
          {menuLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-brand-primary/80 hover:text-brand-accent transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {menuLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-brand-primary py-2 px-4 hover:bg-brand-cream rounded-xl transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center bg-brand-cream px-4 py-3 rounded-full mt-2">
                <Search className="w-5 h-5 text-brand-primary opacity-60" />
                <input 
                  type="text" 
                  placeholder="Search eyewear..." 
                  className="bg-transparent border-none outline-none text-sm ml-2 w-full"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
