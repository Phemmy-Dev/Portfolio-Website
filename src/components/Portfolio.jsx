import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import kinaproject from '../assets/images/kinaproject.png';
import cwproject from '../assets/images/cwproject.png';
import tltproject from '../assets/images/tltproject.png';
import tltclassreporterproject from '../assets/images/tltclassreporter.png';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['all', 'react', 'wordpress', 'shopify', 'fullstack'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with React, Redux, and Stripe integration.',
      longDescription: 'Built with React, Redux Toolkit, and modern CSS. Features include product catalog, shopping cart, user authentication, payment processing with Stripe, order management, and responsive design. Implemented advanced filtering, search functionality, and optimistic UI updates.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Redux', 'Stripe', 'Tailwind'],
      category: 'react',
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'AI Class Reporter',
      description: 'AI Class reporter for helping tutors generate detailed class reports using AI.',
      longDescription: 'The AI Class reporter is a tool to help tutors generate detailed class reports using AI. It streamlines the reporting process, allowing educators to focus more on teaching and less on paperwork.',
      image: tltclassreporterproject,
      tags: ['React', 'TailwindCSS', 'Deepseek AI'],
      category: 'nextjs',
      liveUrl: 'https://classreport.thelightutors.com/',
      githubUrl: null,
      featured: true,
    },
    {
      id: 3,
      title: 'The Light Tutors',
      description: 'An online tutoring platform connecting students with qualified tutors.',
      longDescription: 'The Light Tutors is an online tutoring platform that connects students with qualified tutors for personalized learning experiences. Built with React and TailwindCSS, a platform that features a user-friendly interface.',
      image: tltproject,
      tags: ['React', 'TailwindCSS', 'Framer Motion', 'Vite'],
      category: 'react',
      liveUrl: 'https://thelightutors.com/',
      githubUrl: null,
      featured: true,
    },
    {
      id: 4,
      title: 'TeaC',
      description: 'The TeaC Brand is a clothing brand that sells tea-themed apparel and accessories.',
      longDescription: 'Elegant weather dashboard using Vue.js and OpenWeather API. Features include current weather conditions, 7-day forecasts, interactive maps, weather alerts, and beautiful data visualizations with Chart.js.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Shopify'],
      category: 'shopify',
      liveUrl: 'https://www.teac.store',
      githubUrl: null,
      featured: false,
    },
    {
      id: 5,
      title: 'KINA Global Website',
      description: 'A church website built with React and TailwindCSS.',
      longDescription: 'This is a church website. Built with React, Framer Motion, and Tailwind CSS. Features smooth animations, responsive design, and optimized performance.',
      image: kinaproject,
      tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
      category: 'react',
      liveUrl: 'https://kinaglobal.org/',
      githubUrl: null,
      featured: false,
    },
    {
      id: 6,
      title: 'CW Music and Media',
      description: 'Website built with wordpress for a Music and Media company with integrated booking system.',
      longDescription: 'Website built with wordpress for a Music and Media company with integrated booking system.',
      image: cwproject,
      tags: ['Wordpress', 'Elementor', 'Booking System'],
      category: 'wordpress',
      liveUrl: 'https://cwmusicmedia.com/',
      githubUrl: null,
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

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
    <section id="portfolio" className="section-padding bg-neutral-50 dark:bg-neutral-900/50">
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
              My <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              A showcase of my recent work. Each project represents a unique challenge 
              and demonstrates different aspects of my skills and creativity.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-8">
              Featured Projects
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="card overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-3">
                        <button className="p-2 bg-white/20 backdrop-blur-lg rounded-lg text-white hover:bg-white/30 transition-colors">
                          <ExternalLink size={18} />
                        </button>
                        <button className="p-2 bg-white/20 backdrop-blur-lg rounded-lg text-white hover:bg-white/30 transition-colors">
                          <Github size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h4 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-primary-600 text-white shadow-medium'
                    : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-50 dark:hover:bg-neutral-700'
                }`}
              >
                {filter === 'all' ? 'All Projects' : filter.toUpperCase()}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="card overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="p-2 bg-white/20 backdrop-blur-lg rounded-lg text-white hover:bg-white/30 transition-colors">
                        <Eye size={18} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs rounded">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-neutral-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-lg rounded-lg text-white hover:bg-white/30 transition-colors"
                >
                  ×
                </button>
              </div>
              
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <a
                    target='_blank'
                    href={selectedProject.liveUrl}
                    className="btn-primary space-x-2"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    target='_blank'
                    href={selectedProject.githubUrl}
                    className="btn-secondary space-x-2"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
