import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Globe, Smartphone, GitBranch, ShoppingCart, FileText } from 'lucide-react';

const Skills = () => {
  // Custom technology icons
  const TechIcons = {
    HTML: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
      </svg>
    ),
    CSS: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
      </svg>
    ),
    JavaScript: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
      </svg>
    ),
    React: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.992-1.36-1.56z"/>
      </svg>
    ),
    TailwindCSS: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
      </svg>
    ),
    FramerMotion: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
      </svg>
    ),
    Git: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    ),
    Vite: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355L5.418 15.29a.306.306 0 0 1-.26-.527l3.128-4.185z"/>
      </svg>
    ),
    WordPress: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.135-2.85-.135-.585-.03-.661.854-.075.899 0 0 .54.075 1.116.105l1.65 4.53-2.31 6.934-3.85-11.464c.644-.03 1.231-.105 1.231-.105.585-.075.516-.93-.065-.899 0 0-1.755.135-2.88.135-.21 0-.45-.015-.705-.015C4.281 6.331 6.656 3.266 10.064 2.24c2.506-.757 5.19-.628 7.572.362-1.814 1.653-3.662 4.013-4.147 6.328zm-1.05 2.175l2.883 7.882c.052.156.135.297.24.417C14.318 19.01 12.259 20 10 20c-1.693 0-3.26-.577-4.51-1.544l2.943-8.356zm6.441 11.94c1.27-1.01 2.145-2.566 2.314-4.33L20.48 12c.017-.032.025-.065.034-.098.464-1.317.765-2.834.463-4.328.18.295.338.607.465.934l-2.063 5.987z"/>
      </svg>
    ),
    Shopify: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M15.337 2.204c-.6-.75-1.65-.6-1.65-.6s-.3-.3-.75-.3c-.45 0-.75.3-.75.3l-6 .75c-.15 0-.3.15-.3.3v14.1c0 .3.3.45.6.45l14.4-2.25c.3 0 .45-.3.45-.6V4.804c0-.6-.15-1.05-.45-1.35-.3-.3-.75-.6-1.2-.75l-4.35-.6zm-1.2 2.25c0-.15.15-.3.3-.3.15 0 .3.15.3.3v.6c0 .15-.15.3-.3.3-.15 0-.3-.15-.3-.3v-.6zm-2.25 0c0-.15.15-.3.3-.3.15 0 .3.15.3.3v.6c0 .15-.15.3-.3.3-.15 0-.3-.15-.3-.3v-.6zm-2.25 0c0-.15.15-.3.3-.3.15 0 .3.15.3.3v.6c0 .15-.15.3-.3.3-.15 0-.3-.15-.3-.3v-.6z"/>
      </svg>
    )
  };

  // Your actual skills with enhanced styling data
  const mySkills = [
    { name: 'HTML', icon: TechIcons.HTML, gradient: 'from-orange-500 to-red-500' },
    { name: 'CSS', icon: TechIcons.CSS, gradient: 'from-blue-500 to-cyan-500' },
    { name: 'JavaScript', icon: TechIcons.JavaScript, gradient: 'from-yellow-500 to-orange-500' },
    { name: 'React', icon: TechIcons.React, gradient: 'from-cyan-500 to-blue-500' },
    { name: 'Tailwind CSS', icon: TechIcons.TailwindCSS, gradient: 'from-teal-500 to-cyan-500' },
    { name: 'Framer Motion', icon: TechIcons.FramerMotion, gradient: 'from-purple-500 to-pink-500' },
    { name: 'Git & GitHub', icon: TechIcons.Git, gradient: 'from-gray-600 to-gray-800' },
    { name: 'Vite', icon: TechIcons.Vite, gradient: 'from-purple-600 to-yellow-500' },
    { name: 'WordPress', icon: TechIcons.WordPress, gradient: 'from-blue-600 to-indigo-600' },
    { name: 'Shopify', icon: TechIcons.Shopify, gradient: 'from-green-500 to-emerald-500' }
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
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6 mb-20 relative">
            {/* Decorative top element */}
            <motion.div 
              className="flex justify-center mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500" />
                <div className="w-3 h-3 bg-accent-500 rounded-full animate-pulse delay-200" />
                <div className="w-12 h-0.5 bg-gradient-to-r from-accent-500 to-primary-500" />
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse delay-400" />
              </div>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-neutral-900 dark:text-white">
              My <span className="relative">
                <span className="text-gradient">Skills</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </h2>
            
            <motion.p 
              className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I'm passionate about staying current with the latest technologies and best practices. 
              <br />
              <span className="font-medium text-primary-600 dark:text-primary-400">
                Here are the tools and technologies I work with to create amazing digital experiences.
              </span>
            </motion.p>

            {/* Floating elements */}
            <div className="absolute left-10 top-10 w-8 h-8 text-primary-400 opacity-20">
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 180, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <TechIcons.React />
              </motion.div>
            </div>
            <div className="absolute right-10 top-20 w-8 h-8 text-accent-400 opacity-20">
              <motion.div
                animate={{ y: [10, -10, 10], rotate: [360, 180, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <TechIcons.TailwindCSS />
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={itemVariants}
            className="max-w-6xl mx-auto"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-accent-500/5 to-primary-500/5 rounded-3xl blur-3xl" />
              
              <div className="relative bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 dark:border-neutral-800/50 shadow-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  {mySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 30, rotateY: -15 }}
                      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: index * 0.1,
                        type: "spring",
                        bounce: 0.4
                      }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -8,
                        rotateY: 5,
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                      className="group cursor-pointer"
                    >
                      <div className="relative h-full">
                        {/* Skill card */}
                        <div className="relative bg-white dark:bg-neutral-800 rounded-2xl p-6 h-full
                                      border border-neutral-200 dark:border-neutral-700
                                      shadow-lg hover:shadow-2xl transition-all duration-500
                                      group-hover:border-transparent overflow-hidden">
                          
                          {/* Gradient overlay on hover */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 
                                         group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />
                          
                          {/* Animated border */}
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.gradient} opacity-0 
                                         group-hover:opacity-100 transition-opacity duration-500 p-[2px]`}>
                            <div className="w-full h-full bg-white dark:bg-neutral-800 rounded-2xl" />
                          </div>
                          
                          {/* Content */}
                          <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                            {/* Icon with animation */}
                            <motion.div 
                              className={`text-transparent bg-gradient-to-r ${skill.gradient} bg-clip-text transform transition-transform duration-300 group-hover:scale-110`}
                              whileHover={{ rotate: [0, -5, 5, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              <skill.icon />
                            </motion.div>
                            
                            {/* Skill name */}
                            <h3 className="font-semibold text-neutral-800 dark:text-neutral-200 
                                         group-hover:text-transparent group-hover:bg-clip-text 
                                         group-hover:bg-gradient-to-r group-hover:from-primary-600 
                                         group-hover:to-accent-600 transition-all duration-300">
                              {skill.name}
                            </h3>
                            
                            {/* Animated underline */}
                            <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${skill.gradient} 
                                           transition-all duration-500 rounded-full`} />
                          </div>
                          
                          {/* Floating particles effect */}
                          <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 
                                        rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
                          <div className="absolute bottom-2 left-2 w-1 h-1 bg-gradient-to-r from-accent-400 to-primary-400 
                                        rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-200" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Bottom decoration */}
                <div className="mt-8 flex justify-center">
                  <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full opacity-50" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Always Learning Section */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <div className="relative max-w-4xl mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-primary-500/10 rounded-3xl blur-2xl" />
              
              <div className="relative bg-gradient-to-br from-white/90 to-neutral-50/90 dark:from-neutral-800/90 dark:to-neutral-900/90 
                            backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/30 dark:border-neutral-700/50 shadow-2xl">
                
                {/* Header with icon */}
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <motion.span 
                    className="text-3xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    🚀
                  </motion.span>
                  <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 
                               bg-clip-text text-transparent">
                    Always Learning
                  </h3>
                  <motion.span 
                    className="text-3xl"
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 1 }}
                  >
                    📚
                  </motion.span>
                </div>
                
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Technology evolves rapidly, and I'm committed to continuous learning. 
                  <br />
                  <span className="font-medium text-primary-600 dark:text-primary-400">Currently exploring:</span>
                </p>
                
                {/* Learning tech badges */}
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    { name: 'Next.js', icon: Globe },
                    { name: 'TypeScript', icon: Code2 },
                    { name: 'Node.js', icon: Zap },
                    { name: 'Three.js', icon: Smartphone },
                    { name: 'GraphQL', icon: GitBranch }
                  ].map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      className="group"
                    >
                      <div className="bg-white dark:bg-neutral-800 rounded-2xl px-6 py-4 shadow-lg 
                                    border border-neutral-200 dark:border-neutral-700
                                    group-hover:shadow-xl group-hover:border-primary-300 dark:group-hover:border-primary-600
                                    transition-all duration-300 cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <tech.icon className="w-5 h-5 text-primary-500 group-hover:text-accent-500 transition-colors duration-200" />
                          <span className="font-medium text-neutral-700 dark:text-neutral-300 
                                         group-hover:text-primary-600 dark:group-hover:text-primary-400 
                                         transition-colors duration-300">
                            {tech.name}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Bottom quote */}
                <motion.div 
                  className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <p className="text-sm italic text-neutral-500 dark:text-neutral-500">
                    "The beautiful thing about learning is that no one can take it away from you." 
                    <span className="text-primary-600 dark:text-primary-400"> - B.B. King</span>
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
