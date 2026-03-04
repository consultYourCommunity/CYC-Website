
import React, { useState, useEffect } from 'react';
import { ASSETS, NAV_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [activeHash, setActiveHash] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setActiveHash(hash || 'home');
    };
    
    // Set initial hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-[100] w-full bg-cyc-blue transition-all duration-300 shadow-md">
      <div className="max-w-[980px] mx-auto px-5 h-[80px] flex items-center justify-between relative bg-cyc-blue z-[101]">
        {/* Logo / Home Icon */}
        <a href="#home" className="flex-shrink-0" onClick={closeMobileMenu}>
          <img 
            src={ASSETS.HOME_ICON} 
            alt="Home" 
            className="w-[40px] h-[40px] object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {NAV_ITEMS.map((item) => {
            const itemHash = item.href.replace('#', '') || 'home';
            const isActive = activeHash === itemHash;
            
            return (
              <a
                key={item.label}
                href={`#${item.href}`}
                className={`text-[14px] font-normal tracking-widest transition-colors duration-200 hover:text-cyc-terracotta ${
                  isActive ? 'text-cyc-terracotta' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white cursor-pointer p-2" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-[80px] left-0 w-full bg-cyc-blue border-t border-white/10 shadow-xl z-[99] flex flex-col py-4"
          >
            {NAV_ITEMS.map((item) => {
              const itemHash = item.href.replace('#', '') || 'home';
              const isActive = activeHash === itemHash;

              return (
                <a
                  key={item.label}
                  href={`#${item.href}`}
                  onClick={closeMobileMenu}
                  className={`block px-8 py-4 text-[16px] font-normal tracking-widest transition-colors duration-200 hover:bg-white/5 ${
                    isActive ? 'text-cyc-terracotta' : 'text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
