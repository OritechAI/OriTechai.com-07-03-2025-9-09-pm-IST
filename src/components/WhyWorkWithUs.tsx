import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Shield, ArrowRight } from 'lucide-react';

const WhyWorkWithUs = () => {
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

  const reasons = [
    {
      icon: <TrendingUp className="h-12 w-12 icon-red" />,
      title: "Proven Results",
      description: "Clients see cost reductions of up to 30% in the first 90 days."
    },
    {
      icon: <Users className="h-12 w-12 icon-red" />,
      title: "Industry Experience",
      description: "We've worked with service businesses, agencies, retail, and more."
    },
    {
      icon: <Shield className="h-12 w-12 icon-red" />,
      title: "End-to-End Support",
      description: "From audit to deployment, we stay until your AI is delivering measurable ROI."
    }
  ];

  return (
    <section id="why-work-with-us" className="section-padding bg-gray-50/95 text-black relative z-10 backdrop-blur-sm">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-poppins user-select-text">
            Why Businesses Choose Us
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-light p-8 rounded-lg hover:shadow-xl transition-all duration-300 text-center shadow-lg"
            >
              <div className="mb-6 flex justify-center">{reason.icon}</div>
              <h3 className="text-2xl font-bold mb-4 font-poppins user-select-text">
                {reason.title}
              </h3>
              <p className="text-lg font-poppins user-select-text leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center">
          <motion.button
            onClick={scrollToConsultation}
            className="btn-primary font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 font-poppins"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your AI Transformation <ArrowRight className="inline ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyWorkWithUs;