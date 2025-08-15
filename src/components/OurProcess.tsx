import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Cog, TrendingUp, ArrowRight } from 'lucide-react';

const OurProcess = () => {
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

  const processSteps = [
    {
      step: "01",
      icon: <Search className="h-16 w-16 icon-red" />,
      title: "Audit",
      description: "Deep dive into your business processes."
    },
    {
      step: "02",
      icon: <FileText className="h-16 w-16 icon-red" />,
      title: "Plan",
      description: "Clear, prioritized AI strategy tailored to you."
    },
    {
      step: "03",
      icon: <Cog className="h-16 w-16 icon-red" />,
      title: "Implement",
      description: "We set up and integrate your automations."
    },
    {
      step: "04",
      icon: <TrendingUp className="h-16 w-16 icon-red" />,
      title: "Optimize",
      description: "We track results and keep improving."
    }
  ];

  return (
    <section id="our-process" className="section-padding bg-black text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-poppins user-select-text">
            Simple, Fast, and Built for ROI
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-dark p-8 rounded-lg hover:bg-white/20 transition-all duration-300 text-center shadow-lg"
            >
              {/* Step Number */}
              <div className="text-4xl font-bold text-gold-emphasis mb-4 font-poppins user-select-text">
                {step.step}
              </div>
              
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 font-poppins user-select-text">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 text-lg font-poppins user-select-text leading-relaxed">
                {step.description}
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
            Begin Your AI Journey <ArrowRight className="inline ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default OurProcess;