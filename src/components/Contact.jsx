// src/components/Contact.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      await axios.post('https://dedicatedblog-app-1.onrender.com/api/contact', formData);
      setFormStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 3000);
    } catch (error) {
      console.error('Failed to send message:', error);
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Get In <span className="text-indigo-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            I’d love to hear from you! Whether it’s a project inquiry, collaboration, or just a hello, feel free to reach out.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-900/50 p-3 rounded-full mr-4 flex items-center justify-center shadow-inner">
                    <FaEnvelope className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <a href="mailto:dayapal235370@gmail.com" className="text-gray-400 hover:text-indigo-400 transition-colors">
                      dayapal235370@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-indigo-900/50 p-3 rounded-full mr-4 flex items-center justify-center shadow-inner">
                    <FaPhone className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <a href="tel:+918130774894" className="text-gray-400 hover:text-indigo-400 transition-colors">
                      +91 8130774894
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-lg font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-6">
                {[
                  { icon: FaGithub, url: "https://github.com/dayapal", label: "GitHub" },
                  { icon: FaLinkedin, url: "https://linkedin.com/in/dayapal", label: "LinkedIn" },
                  { icon: FaTwitter, url: "https://x.com/DayaDedicated", label: "Twitter" }
                ].map(({ icon: Icon, url, label }) => (
                  <motion.a
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-indigo-400 transition-colors"
                    aria-label={label}
                    key={label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800/50 p-8 rounded-2xl shadow-lg">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-colors placeholder-gray-400"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-colors placeholder-gray-400"
                  placeholder="you@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-colors placeholder-gray-400"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <motion.button
                  type="submit"
                  disabled={formStatus.submitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </div>

              {/* Success & Error Messages */}
              {formStatus.submitted && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-900/30 text-green-400 rounded-lg shadow-inner">
                  Thank you for your message! I'll get back to you soon.
                </motion.div>
              )}
              {formStatus.error && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-900/30 text-red-400 rounded-lg shadow-inner">
                  {formStatus.error}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
