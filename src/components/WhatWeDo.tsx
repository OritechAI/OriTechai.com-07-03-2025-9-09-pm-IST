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
      icon: <Search className="h-12 w-12 text-oritech-red" />,
      title: "AI Business Audits",
      description: "Comprehensive analysis of your current processes to identify automation opportunities and inefficiencies.",
      benefits: [
        "Process mapping and bottleneck identification",
        "ROI analysis for AI implementation",
        "Custom automation roadmap",
        "Cost-benefit analysis and timeline"
      ]
    },
    {
      icon: <PlaneTakeoff className="h-12 w-12 text-oritech-red" />,
      title: "AI Strategy Consulting",
      description: "Strategic planning to align AI initiatives with your business goals and maximize return on investment.",
      benefits: [
        "AI readiness assessment",
        "Technology stack recommendations",
        "Implementation priority matrix",
        "Change management strategy"
      ]
    },
    {
      icon: <Cog className="h-12 w-12 text-oritech-red" />,
      title: "AI Implementation",
      description: "End-to-end implementation of AI solutions including chatbots, voice agents, and workflow automation.",
      benefits: [
        "Custom AI chatbot development",
        "Voice agent implementation",
        "Workflow automation setup",
        "Integration with existing systems"
      ]
    }
  ];

  return (
    <section id="what-we-do" className="section-padding bg-oritech-gray/10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-poppins user-select-text">
            What We Do
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins user-select-text">
            We provide comprehensive AI consulting services to help businesses identify, plan, and implement automation solutions that drive real results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-oritech-gray/30 backdrop-blur-sm p-8 rounded-lg border border-oritech-gray/50 hover:bg-oritech-gray/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 font-poppins user-select-text">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 font-poppins user-select-text">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start text-gray-300 font-poppins user-select-text">
                    <ArrowRight className="h-4 w-4 text-oritech-red mt-1 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center">
          <motion.button
            onClick={scrollToConsultation}
            className="bg-oritech-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 font-poppins"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Your Free AI Audit <ArrowRight className="inline ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatWeDo;