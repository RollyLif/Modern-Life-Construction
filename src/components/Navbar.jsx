import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'À Propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center ${
        scrolled ? 'top-4 px-4' : 'top-0 px-0'
      }`}
    >
      <div 
        className={`w-full transition-all duration-500 ${
          scrolled 
            ? 'max-w-5xl glass-panel rounded-full px-6 py-3 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)]' 
            : 'max-w-7xl bg-transparent px-6 py-6 lg:px-8'
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            <img src="/icon.svg" alt="Icon Modern Life" className={`h-10 w-10 transition-all duration-300 drop-shadow-lg ${scrolled ? 'scale-90' : 'scale-100'}`} />
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tight leading-none transition-colors ${scrolled ? 'text-dark' : 'text-white drop-shadow-md'}`}>
                MODERN LIFE
              </span>
              <span className={`text-[10px] font-bold tracking-[0.2em] leading-none uppercase mt-1 ${scrolled ? 'text-primary' : 'text-primary drop-shadow-sm'}`}>
                Construction <span className="opacity-70 lowercase normal-case">Sarl</span>
              </span>
            </div>
            <div className={`w-6 h-[2px] ml-2 transition-all duration-300 group-hover:w-10 ${scrolled ? 'bg-primary' : 'bg-primary'}`}></div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-black/5 ${
                  scrolled ? 'text-gray hover:text-dark' : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pl-4 ml-2 border-l border-black/10">
              <a
                href="#contact"
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg ${
                  scrolled 
                    ? 'bg-dark text-white hover:bg-primary shadow-dark/20' 
                    : 'bg-primary text-white hover:bg-white hover:text-dark shadow-primary/30'
                }`}
              >
                Devis Gratuit
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-colors focus:outline-none ${
                scrolled ? 'text-dark bg-black/5' : 'text-white bg-white/10'
              }`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-[calc(100%+0.5rem)] left-4 right-4 glass-panel rounded-2xl p-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-dark hover:bg-primary/5 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-gray-100">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex justify-center w-full bg-dark text-white px-5 py-3.5 rounded-xl font-bold hover:bg-primary transition-colors"
                >
                  Obtenir un devis
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
