import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Coffee, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, number: '50+', label: 'Projects Completed' },
    { icon: Users, number: '25+', label: 'Happy Clients' },
    { icon: Award, number: '3+', label: 'Years Experience' },
    { icon: Coffee, number: '500+', label: 'Cups of Coffee' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="section-padding bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.h2 
                variants={itemVariants}
                className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-neutral-900 dark:text-white"
              >
                About <span className="text-gradient">Me</span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed"
              >
                I'm a passionate frontend developer with a keen eye for detail and a love for creating 
                beautiful, functional web applications. With over 3 years of experience in the industry, 
                I specialize in React, TypeScript, and modern CSS frameworks.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed"
              >
                My journey began with a curiosity about how websites work, and it has evolved into a 
                career focused on building user-centered solutions that make a difference. I believe 
                in writing clean, maintainable code and staying up-to-date with the latest technologies 
                and best practices.
              </motion.p>
            </div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                What I Bring to the Table:
              </h3>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full" />
                  <span>Strong problem-solving skills and attention to detail</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full" />
                  <span>Collaborative team player with excellent communication</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full" />
                  <span>Passionate about learning and implementing new technologies</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full" />
                  <span>Committed to delivering high-quality, scalable solutions</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <button className="btn-primary">
                Download My Resume
              </button>
            </motion.div>
          </motion.div>

          {/* Image and Stats */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 p-8 flex items-center justify-center">
                <div className="w-full h-full rounded-xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
              
              {/* Elegant floating badge */}
              <div className="absolute -bottom-8 -right-8 group">
                <div className="relative">
                  {/* Main badge container */}
                  <div className="w-32 h-20 bg-white dark:bg-neutral-800 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700 flex flex-col items-center justify-center transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-t-2xl"></div>
                    
                    {/* Content */}
                    <div className="text-center px-3 py-2">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 leading-none">3+</div>
                      <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mt-1">Years</div>
                    </div>
                  </div>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl blur-lg -z-10 opacity-60"></div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="card p-6 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-200">
                    <stat.icon size={24} />
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-neutral-900 dark:text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
