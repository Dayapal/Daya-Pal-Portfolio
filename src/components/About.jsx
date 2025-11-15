// src/components/About.jsx
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useRef } from 'react';
import profileImage from '../assets/images/profile_pic.png';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [countersVisible, setCountersVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);
  const containerRef = useRef();

  useEffect(() => {
    if (inView) setCountersVisible(true);
  }, [inView]);

  const stats = [
    { value: 1, label: 'Years Experience', icon: '⏳' },
    { value: 10, label: 'Projects Completed', icon: '🚀' },
    { value: 3, label: 'Happy Clients', icon: '😊' },
  ];

  const skills = [
    { name: 'JavaScript', level: 95, color: '#f0db4f' },
    { name: 'React', level: 90, color: '#61dafb' },
    { name: 'Node.js', level: 85, color: '#68a063' },
    { name: 'TypeScript', level: 80, color: '#007acc' },
    { name: 'MongoDB', level: 75, color: '#4db33d' },
    { name: 'GraphQL', level: 70, color: '#e535ab' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-white overflow-hidden relative">
      {/* Background animation removed */}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-indigo-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12" ref={containerRef}>
          {/* Profile Image Section */}
          <motion.div
            initial={{ x: -100, opacity: 0, rotateY: 30 }}
            whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true }}
            className="lg:w-1/3 relative group"
            style={{ perspective: '1000px' }}
          >
            {/* Glowing background effect */}
            <motion.div
              className="absolute inset-0 rounded-xl overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-gray-900/30 rounded-xl"></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            </motion.div>

            {/* Main image container */}
            <motion.div
              whileHover={{
                rotateY: 10,
                rotateX: 5,
                scale: 1.03,
                transition: { type: 'spring', stiffness: 100 },
              }}
              className="relative z-10"
            >
              {/* Image with 3D effect */}
              <motion.div
                className="relative z-10 rounded-xl overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: '0 25px 50px -12px rgba(99, 102, 241, 0.3)',
                }}
              >
                <motion.img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-auto rounded-xl object-cover"
                  style={{
                    transform: 'translateZ(30px)',
                  }}
                />
                {/* Color overlay */}
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 50%)',
                    mixBlendMode: 'overlay',
                  }}
                />
              </motion.div>

              {/* Glow effect on hover */}
              <motion.div
                className="absolute -inset-4 rounded-xl z-0 opacity-0"
                style={{
                  background:
                    'radial-gradient(circle at center, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
                }}
                whileHover={{
                  opacity: 0.6,
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Floating icon badge */}
            <motion.div
              className="absolute -bottom-5 -right-5 bg-indigo-600 text-white p-3 rounded-full shadow-lg z-20"
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: 'spring' }}
              viewport={{ once: true }}
              whileHover={{ rotate: 360, scale: 1.1 }}
            >
              <span className="text-xl">💻</span>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <motion.h3 className="text-2xl md:text-3xl font-semibold mb-6" whileHover={{ x: 5 }}>
              Full Stack Developer Based in India
            </motion.h3>

            <motion.p className="text-gray-400 mb-6 leading-relaxed" whileHover={{ scale: 1.01 }}>
              I'm a passionate full stack developer with expertise in JavaScript, React, Node.js, and modern web technologies.
              I specialize in building responsive, performant, and accessible web applications that deliver exceptional user experiences.
            </motion.p>

            <motion.p className="text-gray-400 mb-8 leading-relaxed" whileHover={{ scale: 1.01 }}>
              With a background from Masai School and 1 year of professional experience, 
              I've worked with startups and companies to bring digital products to life. 
              I focus on clean code and modern practices.
            </motion.p>

            {/* Stats */}
            <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={countersVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 text-center relative overflow-hidden"
                >
                  <div className="absolute -top-4 -right-4 text-6xl opacity-10">{stat.icon}</div>
                  <div className="text-4xl font-bold text-indigo-400 mb-2">
                    {countersVisible ? <CountUp end={stat.value} duration={2.5} /> : 0}+
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-xl md:text-2xl font-semibold mb-6">My Skills</h4>
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    onHoverStart={() => setActiveSkill(index)}
                    onHoverEnd={() => setActiveSkill(null)}
                    className="relative"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium flex items-center">
                        {skill.name}
                        {activeSkill === index && (
                          <motion.span
                            className="ml-2 text-xs bg-gray-700 px-2 py-1 rounded"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                          >
                            {skill.level}% mastery
                          </motion.span>
                        )}
                      </span>
                      <span
                        className="text-gray-400"
                        style={{ color: activeSkill === index ? skill.color : '' }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-3 rounded-full relative"
                        style={{
                          backgroundColor: skill.color,
                          boxShadow:
                            activeSkill === index ? `0 0 10px ${skill.color}` : 'none',
                        }}
                      >
                        {activeSkill === index && (
                          <motion.div
                            className="absolute inset-0 bg-white opacity-30"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
