import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 sm:px-8 lg:px-12">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white to-accent-50/30 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      <div className="container-custom relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto w-32 h-32 lg:w-40 lg:h-40"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-1">
              <div className="w-full h-full rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-4xl lg:text-5xl font-bold text-primary-600">
                👨‍💻
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 animate-pulse opacity-20" />
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-4xl lg:text-6xl xl:text-5xl font-display font-bold">
              <span className="text-neutral-900 dark:text-white">Hello, I'm </span>
              <span className="text-gradient">Your Name</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-medium text-neutral-600 dark:text-neutral-400">
              Frontend Web Developer
            </h2>
            
            <p className="text-md lg:text-md text-neutral-500 dark:text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              Crafting elegant, user-friendly digital experiences with modern technologies. 
              Passionate about clean code, beautiful design, and exceptional user experiences.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="btn-primary inline-flex items-center space-x-2">
              <Download size={20} />
              <span className="font-bold">Download CV</span>
            </button>
            
            <button 
              onClick={scrollToAbout}
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <span>Learn More</span>
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-lg bg-white dark:bg-neutral-800 shadow-soft hover:shadow-medium transition-all duration-200 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToAbout}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full text-neutral-400 dark:text-neutral-600 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <ArrowDown size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
