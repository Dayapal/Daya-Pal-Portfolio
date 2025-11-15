// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { skills } from '../constants/skills';

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-indigo-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        {skills.map((category, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-6">
              {category.category}
            </h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            >
              {category.items.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  variants={item}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-6 bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 mb-3">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-gray-300 text-center">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
