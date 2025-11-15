import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaUser, FaCode, FaBriefcase, FaEnvelope, FaHome, FaAward } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '#home', icon: <FaHome className="w-4 h-4" /> },
    { name: 'About', href: '#about', icon: <FaUser className="w-4 h-4" /> },
    { name: 'Skills', href: '#skills', icon: <FaCode className="w-4 h-4" /> },
    { name: 'Projects', href: '#projects', icon: <FaBriefcase className="w-4 h-4" /> },
    { name: 'Experience', href: '#experience', icon: <FaAward className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope className="w-4 h-4" /> },
  ];

  // Scrollspy effect with improved logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const scrollPosition = window.scrollY + 100;
      const sections = navLinks.map(link => document.querySelector(link.href));
      
      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(navLinks[index].href.slice(1));
          }
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed w-full z-30 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-slate-700/50' 
          : 'bg-slate-900/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Enhanced Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25"
              >
                <span className="text-white font-bold text-sm">P</span>
              </motion.div>
              <motion.div
                className="absolute inset-0 border-2 border-blue-400/30 rounded-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <span className="text-white font-bold text-xl bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text">
              Portfolio
            </span>
          </motion.div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <a
                  href={link.href}
                  className={`relative flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                    activeSection === link.href.slice(1)
                      ? 'text-white bg-blue-500/10 shadow-lg shadow-blue-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <span className={`transition-colors duration-300 ${
                    activeSection === link.href.slice(1) ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-300'
                  }`}>
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                  
                  {/* Enhanced Active Indicator */}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 border border-blue-400/30 rounded-xl shadow-lg shadow-blue-500/20"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Mobile Navigation Toggle */}
          <motion.div 
            className="md:hidden flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                mobileMenuOpen 
                  ? 'bg-blue-500/20 text-blue-400' 
                  : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
              }`}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {mobileMenuOpen ? (
                  <FaTimes className="w-5 h-5" />
                ) : (
                  <FaBars className="w-5 h-5" />
                )}
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="md:hidden fixed top-16 left-0 w-full overflow-x-hidden bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50 shadow-2xl z-40"
          >
            <div className="px-4 py-3 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group ${
                    activeSection === link.href.slice(1)
                      ? 'text-white bg-blue-500/20 shadow-lg shadow-blue-500/10 border border-blue-400/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <span className={`transition-colors duration-300 ${
                    activeSection === link.href.slice(1) ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-300'
                  }`}>
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                  
                  {/* Mobile active indicator */}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-blue-400 rounded-full ml-auto"
                    />
                  )}
                </motion.a>
              ))}
            </div>
            
            {/* Mobile menu footer */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="px-4 py-3 border-t border-slate-700/50"
            >
              <div className="text-center text-slate-400 text-sm">
                Navigation
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;