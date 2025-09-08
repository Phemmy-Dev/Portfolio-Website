import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUp, 
  Heart, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  Code,
  Coffee
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/Phemmy-Dev', 
      label: 'GitHub',
      hoverColor: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/oluwafemi-akinruntan/', 
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-600'
    },
    { 
      icon: Twitter, 
      href: 'https://x.com/Phemmy_dev', 
      label: 'Twitter',
      hoverColor: 'hover:text-blue-400'
    },
    { 
      icon: Mail, 
      href: 'mailto:oluwafemiakinruntan1@gmail.com', 
      label: 'Email',
      hoverColor: 'hover:text-red-500'
    },
  ];

  const skills = [
    'React', 'TailwindCSS', 'Wordpress', 'Shopify', 'Git & Github'
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-900 to-primary-900/20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container-custom py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <div>
                <motion.h3 
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl font-display font-bold text-gradient cursor-pointer"
                  onClick={() => scrollToSection('#home')}
                >
                    Oluwafemi.
                </motion.h3>
                <p className="text-neutral-400 mt-4 leading-relaxed">
                  I’m a Frontend Developer who enjoys turning ideas into sleek, functional, and user-friendly web applications. Think of me as the guy who makes websites not just work—but look good while doing it. Let’s create something that people won’t just use, but love.
                </p>
              </div>

              {/* Skills Tags */}
              <div>
                <h4 className="text-sm font-semibold text-neutral-300 mb-3 uppercase tracking-wider">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-neutral-800 hover:bg-primary-600 text-xs rounded-full transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-neutral-300 mb-4 uppercase tracking-wider">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-all duration-200 text-neutral-400 ${social.hoverColor} group`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">
                Quick Links
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 5 }}
                    className="block text-neutral-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">
                Get In Touch
              </h4>
              <div className="space-y-4 text-neutral-400">
                <div>
                  <p className="text-sm">Email</p>
                  <a 
                    href="mailto:oluwafemiakinruntan1@gmail.com"
                    className="hover:text-white transition-colors duration-200"
                  >
                    oluwafemiakinruntan1@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm">Phone</p>
                  <a 
                    href="tel:+234813057289"
                    className="hover:text-white transition-colors duration-200"
                  >
                    +234 813 057 289
                  </a>
                </div>
                <div>
                  <p className="text-sm">Location</p>
                  <p>Nigeria 🇳🇬</p>
                </div>
              </div>

              {/* Availability Status */}
              <div className="p-4 bg-neutral-800 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-400">Available for work</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Currently accepting new projects and collaborations
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800">
          <div className="container-custom py-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            >
              {/* Copyright */}
              <motion.div 
                variants={itemVariants}
                className="flex items-center space-x-2 text-neutral-400 text-sm"
              >
                <span>© {currentYear} Oluwafemi Akinruntan. Made with</span>
                <Heart size={16} className="text-red-500 fill-current animate-pulse" />
                <span>and some sleepless nights.</span>
              </motion.div>

              {/* Back to Top */}
              <motion.button
                variants={itemVariants}
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-neutral-800 hover:bg-primary-600 rounded-lg transition-colors duration-200 text-sm"
              >
                <ArrowUp size={16} />
                <span>Back to Top</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
