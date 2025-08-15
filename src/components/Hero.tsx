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
    <section id="home" className="section-padding relative overflow-hidden" style={{ marginTop: "10vh" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 font-poppins user-select-text leading-tight">
            AI Consulting & Audits to Transform Your Business
          </h1>
          <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto font-poppins user-select-text leading-relaxed mb-8">
            We help businesses audit their processes, uncover automation opportunities, and implement AI strategies that cut costs, boost efficiency, and drive revenue.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <motion.button
            onClick={scrollToConsultation}
            className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-poppins"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Call
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-lg text-black max-w-2xl mx-auto font-poppins user-select-text italic">
            In just 30 minutes, we'll map your biggest AI wins — no fluff, no jargon, just actionable insights.
          </p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-black mb-6 font-poppins user-select-text font-semibold">Trusted by businesses worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <img src="https://1min.ai/_next/image?url=https%3A%2F%2Fblog1minai.wordpress.com%2Fwp-content%2Fuploads%2F2024%2F08%2F1minai-ai-chat-with-gpt-4o-illustration.jpg&w=1920&q=75" 
                 alt="GPT-4o AI Technology Partner" 
                 className="h-8 w-auto object-contain hover:opacity-100 transition-opacity"
                 loading="lazy" />
            <img src="https://workveu.com/images/Make.png" 
                 alt="Make Automation Platform Partner" 
                 className="h-8 w-auto object-contain hover:opacity-100 transition-opacity"
                 loading="lazy" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVwOzVey6XcMevohRDman3xgDFw91v8qZfw&s" 
                 alt="Voiceflow AI Platform Partner" 
                 className="h-8 w-auto object-contain hover:opacity-100 transition-opacity"
                 loading="lazy" />
            <img src="https://images.seeklogo.com/logo-png/47/1/n8n-logo-png_seeklogo-470809.png" 
                 alt="n8n Workflow Automation Partner" 
                 className="h-8 w-auto object-contain hover:opacity-100 transition-opacity"
                 loading="lazy" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;