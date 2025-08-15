import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Clock, ArrowRight } from 'lucide-react';

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
      icon: <Award className="h-12 w-12 text-oritech-red" />,
      title: "Proven Expertise",
      description: "Our team has successfully implemented AI solutions across multiple industries, delivering measurable results for businesses of all sizes."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-oritech-red" />,
      title: "Measurable Results",
      description: "Average client results: 40% cost reduction, 25% revenue increase, and 60% improvement in operational efficiency within 6 months."
    },
    {
      icon: <Clock className="h-12 w-12 text-oritech-red" />,
      title: "Fast Implementation",
      description: "Our streamlined process gets you from audit to implementation in 30-90 days, with immediate wins identified in the first week."
    },
    {
      icon: <Users className="h-12 w-12 text-oritech-red" />,
      title: "Ongoing Support",
      description: "We don't just implement and leave. Our team provides continuous optimization and support to ensure long-term success."
    }
  ];

  const stats = [
    { number: "50+", label: "Businesses Transformed" },
    { number: "40%", label: "Average Cost Reduction" },
    { number: "25%", label: "Average Revenue Increase" },
    { number: "30 Days", label: "Average Implementation Time" }
  ];

  return (
    <section id="why-work-with-us" className="section-padding">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 font-poppins user-select-text">
            Why Work With Us
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto font-poppins user-select-text">
            We're not just consultants—we're your strategic partners in AI transformation, committed to delivering real, measurable results.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2 font-poppins user-select-text">
                {stat.number}
              </div>
              <div className="text-black font-poppins user-select-text">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-lg border border-black/10 hover:bg-white/95 transition-all duration-300 shadow-lg"
            >
              <div className="mb-6 text-black">{reason.icon}</div>
              <h3 className="text-2xl font-bold text-black mb-4 font-poppins user-select-text">
                {reason.title}
              </h3>
              <p className="text-black font-poppins user-select-text">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Client Success Story */}
        <motion.div variants={itemVariants} className="bg-white/90 border border-black/20 p-8 rounded-lg mb-12 shadow-lg">
          <h3 className="text-2xl font-bold text-black mb-4 font-poppins user-select-text">
            Client Success Story
          </h3>
          <p className="text-black mb-4 font-poppins user-select-text italic">
            "OritechAI transformed our customer service operations. We went from 8-hour response times to instant AI-powered responses, reducing support costs by 45% while improving customer satisfaction scores by 60%. The ROI was evident within the first month."
          </p>
          <p className="text-black font-semibold font-poppins user-select-text">
            — Sarah Johnson, CEO of TechFlow Solutions
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <motion.button
            onClick={scrollToConsultation}
            className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 font-poppins"
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