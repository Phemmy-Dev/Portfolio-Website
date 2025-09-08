import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp Solutions',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      content: 'Working with this developer was an absolute pleasure. Their attention to detail and ability to translate complex requirements into elegant solutions is remarkable. The project was delivered on time and exceeded our expectations.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupVenture',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      content: 'Exceptional frontend development skills combined with a deep understanding of user experience. The React application built for us is fast, responsive, and beautifully designed. Highly recommended for any serious project.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Design Director',
      company: 'Creative Agency Plus',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      content: 'The collaboration was seamless from start to finish. They have an excellent eye for design and the technical skills to bring even the most complex designs to life. The attention to responsive design was particularly impressive.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Founder',
      company: 'EcomGlobal',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      content: 'Our e-commerce platform transformation was handled with professionalism and expertise. The performance improvements and user interface enhancements have significantly increased our conversion rates. Outstanding work!',
      rating: 5,
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Marketing Director',
      company: 'Digital Innovations',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      content: 'The dashboard application created for our team has revolutionized how we track and analyze our marketing campaigns. The intuitive interface and powerful features make complex data visualization seem effortless.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="testimonials" className="section-padding">
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
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Don't just take my word for it. Here's what my clients and colleagues 
              have to say about working with me.
            </p>
          </motion.div>

          {/* Main Testimonial */}
          <motion.div variants={itemVariants} className="relative max-w-4xl mx-auto">
            <div className="card p-8 lg:p-12 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-primary-200 dark:text-primary-800">
                <Quote size={48} />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center space-y-6"
                >
                  {/* Stars */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-lg lg:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-neutral-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-400">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:-left-12">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  className="p-3 bg-white dark:bg-neutral-800 rounded-full shadow-medium hover:shadow-large transition-all duration-200 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <ChevronLeft size={24} />
                </motion.button>
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:-right-12">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className="p-3 bg-white dark:bg-neutral-800 rounded-full shadow-medium hover:shadow-large transition-all duration-200 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  <ChevronRight size={24} />
                </motion.button>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-primary-600 scale-125'
                      : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-primary-400 dark:hover:bg-primary-500'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Additional Testimonials Grid */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white text-center mb-12">
              More Kind Words
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="card p-6 space-y-4"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-sm text-neutral-900 dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-neutral-600 dark:text-neutral-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3">
                    "{testimonial.content}"
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="card p-8 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/10 dark:to-accent-900/10 border-primary-200 dark:border-primary-800">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                Join these satisfied clients and let's create something amazing together.
              </p>
              <button className="btn-primary">
                Start Your Project
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
