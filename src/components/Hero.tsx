import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Zap, Target } from 'lucide-react';

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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-poppins user-select-text leading-tight">
            AI Consulting & Audits to <span className="text-oritech-red">Transform Your Business</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-poppins user-select-text leading-relaxed">
            We help businesses audit their current processes, identify automation opportunities, and implement AI solutions to <strong className="text-white">cut costs by 40%</strong> and <strong className="text-white">grow revenue by 25%</strong>.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-12">
          <motion.button
            onClick={scrollToConsultation}
            className="bg-oritech-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-poppins"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Free AI Consultation <ArrowRight className="inline ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>

        {/* Key Benefits */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-oritech-gray/30 backdrop-blur-sm p-6 rounded-lg border border-oritech-gray/50 hover:bg-oritech-gray/40 transition-colors duration-300">
            <TrendingUp className="h-12 w-12 text-oritech-red mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2 font-poppins user-select-text">Increase Revenue</h3>
            <p className="text-gray-300 font-poppins user-select-text">AI automation helps you serve more customers, faster, with personalized experiences that drive sales.</p>
          </div>
          
          <div className="bg-oritech-gray/30 backdrop-blur-sm p-6 rounded-lg border border-oritech-gray/50 hover:bg-oritech-gray/40 transition-colors duration-300">
            <Zap className="h-12 w-12 text-oritech-red mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2 font-poppins user-select-text">Cut Operational Costs</h3>
            <p className="text-gray-300 font-poppins user-select-text">Automate repetitive tasks, reduce manual errors, and free up your team for high-value work.</p>
          </div>
          
          <div className="bg-oritech-gray/30 backdrop-blur-sm p-6 rounded-lg border border-oritech-gray/50 hover:bg-oritech-gray/40 transition-colors duration-300">
            <Target className="h-12 w-12 text-oritech-red mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2 font-poppins user-select-text">Strategic Implementation</h3>
            <p className="text-gray-300 font-poppins user-select-text">Get a custom AI strategy tailored to your business goals and industry requirements.</p>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <p className="text-gray-400 mb-6 font-poppins user-select-text">Trusted by businesses worldwide</p>
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