// src/components/Footer.jsx
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex space-x-6 mb-6">
            <motion.a
              whileHover={{ y: -5 }}
              href="https://github.com/Dayapal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>

            <motion.a
              whileHover={{ y: -5 }}
              href="https://www.linkedin.com/in/dayapal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>

            <motion.a
              whileHover={{ y: -5 }}
              href="https://x.com/DayaDedicated"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="w-6 h-6" />
            </motion.a>
          </div>

          <p className="text-gray-400 text-center mb-4">
            © {new Date().getFullYear()} Daya Pal. All rights reserved.
          </p>

          <p className="text-gray-500 text-center text-sm">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
