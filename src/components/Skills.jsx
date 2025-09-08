import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-cyan-400' },
        { name: 'TypeScript', level: 90, color: 'from-blue-600 to-blue-400' },
        { name: 'Next.js', level: 88, color: 'from-gray-800 to-gray-600' },
        { name: 'Vue.js', level: 82, color: 'from-green-500 to-green-400' },
        { name: 'HTML5', level: 98, color: 'from-orange-500 to-red-400' },
        { name: 'CSS3/SCSS', level: 95, color: 'from-pink-500 to-rose-400' },
      ],
    },
    {
      title: 'Styling & Design',
      skills: [
        { name: 'Tailwind CSS', level: 92, color: 'from-cyan-500 to-teal-400' },
        { name: 'Styled Components', level: 88, color: 'from-pink-500 to-purple-400' },
        { name: 'Framer Motion', level: 85, color: 'from-purple-500 to-indigo-400' },
        { name: 'Figma', level: 80, color: 'from-purple-600 to-pink-400' },
        { name: 'Adobe XD', level: 75, color: 'from-purple-700 to-pink-500' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 93, color: 'from-gray-700 to-gray-500' },
        { name: 'Webpack', level: 85, color: 'from-blue-500 to-indigo-400' },
        { name: 'Vite', level: 90, color: 'from-yellow-500 to-orange-400' },
        { name: 'Jest', level: 82, color: 'from-red-500 to-pink-400' },
        { name: 'Node.js', level: 78, color: 'from-green-600 to-green-400' },
      ],
    },
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

  const skillVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: '100%',
      opacity: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-neutral-900 dark:text-white">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              I'm passionate about staying current with the latest technologies and best practices. 
              Here are the tools and technologies I work with to create amazing digital experiences.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="card p-8 space-y-6"
              >
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-neutral-500 dark:text-neutral-500">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: 'easeOut' 
                          }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="card p-8 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/10 dark:to-accent-900/10 border-primary-200 dark:border-primary-800">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                Always Learning
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Technology evolves rapidly, and I'm committed to continuous learning. Currently exploring:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Three.js', 'GraphQL', 'Remix', 'Astro', 'Web3'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-soft"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
