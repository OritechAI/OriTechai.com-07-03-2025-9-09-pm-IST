import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Zap, Target } from 'lucide-react';

const Hero = () => {
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

  return (
    <section id="home" className="section-padding relative overflow-hidden text-white" style={{ marginTop: "10vh", backgroundColor: 'transparent' }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-poppins user-select-text leading-tight">
            AI Consulting & Audits to Transform Your Business
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto font-poppins user-select-text leading-relaxed mb-8" style={{ color: '#F2F2F2' }}>
            We help businesses audit their processes, uncover automation opportunities, and implement AI strategies that cut costs, boost efficiency, and drive revenue.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <motion.button
            onClick={scrollToConsultation}
            className="btn-primary font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-poppins"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Call
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-lg max-w-2xl mx-auto font-poppins user-select-text italic text-red-emphasis">
            In just 30 minutes, we'll map your biggest AI wins — no fluff, no jargon, just actionable insights.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;