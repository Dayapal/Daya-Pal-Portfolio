import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaUser, FaCode, FaBriefcase, FaEnvelope, FaHome, FaAward } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <FaHome className="w-4 h-4" /> },
    { name: 'About', href: '#about', icon: <FaUser className="w-4 h-4" /> },
    { name: 'Skills', href: '#skills', icon: <FaCode className="w-4 h-4" /> },
    { name: 'Projects', href: '#projects', icon: <FaBriefcase className="w-4 h-4" /> },
    { name: 'Experience', href: '#experience', icon: <FaAward className="w-4 h-4" /> },
    { name: 'Contact', href: '#contact', icon: <FaEnvelope className="w-4 h-4" /> },
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // SIMPLIFIED scrollspy - let's debug this
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple section detection
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollY = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          
          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check after a small delay to ensure DOM is ready
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SIMPLIFIED and more reliable scroll function
  const scrollToSection = (sectionId) => {
    console.log('Scrolling to:', sectionId); // Debug log
    
    const section = document.getElementById(sectionId);
    if (section) {
      console.log('Section found:', section); // Debug log
      
      const navbarHeight = 80; // Approximate navbar height
      const sectionPosition = section.offsetTop - navbarHeight;

      // Close mobile menu first
      setMobileMenuOpen(false);

      // Use requestAnimationFrame for better reliability
      requestAnimationFrame(() => {
        window.scrollTo({
          top: sectionPosition,
          behavior: 'smooth'
        });
      });
    } else {
      console.log('Section not found:', sectionId); // Debug log
      // Fallback: try hash navigation
      window.location.hash = sectionId;
      setMobileMenuOpen(false);
    }
  };

  // Unified click handler for both desktop and mobile
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
  };

  const handleToggleMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-lg border-b border-slate-700/50'
          : 'bg-slate-900/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center space-x-3 group cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25"
              >
                <span className="text-white font-bold text-sm">P</span>
              </motion.div>
            </div>
            <span className="text-white font-bold text-xl bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text">
              Portfolio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <button
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                    activeSection === link.href.slice(1)
                      ? 'text-white bg-blue-500/10 shadow-lg shadow-blue-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <span
                    className={`transition-colors duration-300 ${
                      activeSection === link.href.slice(1)
                        ? 'text-blue-400'
                        : 'text-slate-400 group-hover:text-blue-300'
                    }`}
                  >
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <motion.div
            className="md:hidden flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={handleToggleMenu}
              className={`p-3 rounded-xl transition-all duration-300 ${
                mobileMenuOpen
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50 shadow-2xl z-40"
          >
            <div className="px-4 py-3 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 group w-full text-left ${
                    activeSection === link.href.slice(1)
                      ? 'text-white bg-blue-500/20 shadow-lg shadow-blue-500/10 border border-blue-400/30'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <span
                    className={`transition-colors duration-300 ${
                      activeSection === link.href.slice(1)
                        ? 'text-blue-400'
                        : 'text-slate-400 group-hover:text-blue-300'
                    }`}
                  >
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;