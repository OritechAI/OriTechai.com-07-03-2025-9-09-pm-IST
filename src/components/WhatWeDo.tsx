import React from 'react';
import { motion } from 'framer-motion';
import { Search, PlaneTakeoff, Cog, ArrowRight } from 'lucide-react';

const WhatWeDo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const scrollToConsultation = () => {
    const consultationSection = document.getElementById('consultation');
    if (consultationSection) {
      window.scrollTo({
        top: consultationSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      icon: <Search className="h-12 w-12 text-black" />,
      title: "AI Process Audits",
      description: "We analyze your current operations to find the exact tasks and workflows AI can handle for you."
    },
    {
      icon: <PlaneTakeoff className="h-12 w-12 text-black" />,
      title: "AI Strategy Consulting",
      description: "We create a custom roadmap to implement AI solutions that fit your business — not cookie-cutter templates."
    },
    {
      icon: <Cog className="h-12 w-12 text-black" />,
      title: "AI Implementation & Training",
      description: "We build, integrate, and train your team so your automations actually get used (and make money)."
    }
  ];

  return (
    <section id="what-we-do" className="section-padding">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 font-poppins user-select-text">
            AI Consulting & Audits That Deliver Real ROI
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-lg border border-black/10 hover:bg-white/95 transition-all duration-300 hover:transform hover:scale-105 shadow-lg"
            >
              <div className="mb-6 text-black">{service.icon}</div>
              <h3 className="text-2xl font-bold text-black mb-4 font-poppins user-select-text">
                {service.title}
              </h3>
              <p className="text-black text-lg font-poppins user-select-text leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center">
          <p className="text-xl text-black mb-6 font-poppins user-select-text font-semibold">
            Stop guessing. Start automating.
          </p>
          <motion.button
            onClick={scrollToConsultation}
            className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 font-poppins"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Call <ArrowRight className="inline ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatWeDo;