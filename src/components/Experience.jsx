// src/components/Experience.jsx
import { motion } from 'framer-motion';
import { experience } from '../constants/experience';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const timelineItem = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="text-indigo-400">Education</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line - moved behind content */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700 z-0"></div>

          {experience.map((item, index) => (
            <motion.div
              key={index}
              variants={timelineItem}
              className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
            >
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center z-10 ${
                  index % 2 === 0 ? 'mr-6' : 'ml-6'
                }`}
              >
                {item.type === 'work' ? (
                  <FaBriefcase className="w-6 h-6" />
                ) : (
                  <FaGraduationCap className="w-6 h-6" />
                )}
              </div>

              <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'} relative z-10`}>
                <div className="bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <h4 className="text-md font-medium text-indigo-400 mb-2">
                    {item.organization}
                  </h4>
                  <div className="text-sm text-gray-400 mb-3">
                    {item.startDate} - {item.endDate || 'Present'}
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;