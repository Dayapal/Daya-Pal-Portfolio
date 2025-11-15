import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload, FaArrowDown, FaStar, FaCode, FaServer } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Hi, I'm Daya Pal",
    "Full Stack Developer👨‍💻"
  ];

  useEffect(() => {
    const currentText = texts[currentPhase];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting phase
        if (displayText.length > 0) {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentPhase((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhase]);

  // Continuous floating animation
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center px-4 max-w-6xl mx-auto">
          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 sm:mb-8"
          >
            <motion.div animate={floatingAnimation.animate}>
              <FaStar className="text-blue-400 text-sm" />
            </motion.div>
            <span className="text-blue-300 text-sm font-medium">Welcome to my portfolio</span>
          </motion.div>

          {/* Animated Typing Text */}
          <div className="mb-4 sm:mb-6 min-h-[120px] sm:min-h-[140px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPhase}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {currentPhase === 0 ? (
                  <motion.h1 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 leading-tight"
                  >
                    <span className="inline-block">
                      {displayText}
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="ml-1 inline-block w-1 h-12 bg-blue-400"
                      >
                        &nbsp;
                      </motion.span>
                    </span>
                  </motion.h1>
                ) : (
                  <motion.h2
                    className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300 mb-3 flex items-center justify-center gap-3"
                  >
                    <motion.div animate={floatingAnimation.animate}>
                      <FaCode className="text-blue-400 text-lg" />
                    </motion.div>
                    
                    <span>
                      {displayText}
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="ml-1 inline-block w-1 h-6 bg-blue-400"
                      >
                        &nbsp;
                      </motion.span>
                    </span>

                    <motion.div animate={floatingAnimation.animate}>
                      <FaServer className="text-indigo-400 text-lg" />
                    </motion.div>
                  </motion.h2>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              I craft <span className="text-blue-300 font-medium">exceptional digital experiences</span> with modern technologies. 
              Passionate about creating clean, efficient, and user-friendly applications.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 sm:mb-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl shadow-2xl transition-all duration-300 text-lg"
            >
              Let's Work Together →
            </motion.a>

            <motion.a
              href="/Daya_Pal_Resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-slate-800/60 text-white font-semibold rounded-2xl border border-slate-700 shadow-2xl transition-all duration-300 text-lg flex items-center justify-center gap-3"
            >
              <FaFileDownload className="text-blue-400" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.8 }}
            className="flex justify-center gap-8 sm:gap-12"
          >
            {[
              { href: "https://github.com/Dayapal", icon: FaGithub, label: "GitHub" },
              { href: "https://www.linkedin.com/in/dayapal/", icon: FaLinkedin, label: "LinkedIn" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 text-slate-400 transition-all duration-300 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:text-blue-300"
              >
                <social.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <div className="text-slate-400 text-sm mb-3">Explore my work</div>
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-3 bg-blue-400 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;