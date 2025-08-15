import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight } from 'lucide-react';

const Testimonials = () => {
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
    <section id="testimonials" className="section-padding bg-black/10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 font-poppins user-select-text">
            Real Businesses. Real Results.
          </h2>
        </motion.div>

        {/* Case Study */}
        <motion.div variants={itemVariants} className="bg-white/90 backdrop-blur-sm p-8 rounded-lg border border-black/10 shadow-lg mb-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-black mb-6 font-poppins user-select-text text-center">
            Case Study: Service Business Transformation
          </h3>
          <p className="text-lg text-black mb-6 font-poppins user-select-text leading-relaxed text-center">
            A 12-person service business cut manual admin hours by 30% and increased lead conversion by 18% after implementing our AI audit recommendations.
          </p>
          
          {/* Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-black/10 p-4 rounded-lg border border-black/20 text-center">
              <div className="text-3xl font-bold text-black mb-2 font-poppins user-select-text">30%</div>
              <p className="text-black font-poppins user-select-text">Reduction in Manual Hours</p>
            </div>
            <div className="bg-black/10 p-4 rounded-lg border border-black/20 text-center">
              <div className="text-3xl font-bold text-black mb-2 font-poppins user-select-text">18%</div>
              <p className="text-black font-poppins user-select-text">Increase in Lead Conversion</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div variants={itemVariants} className="bg-white/90 backdrop-blur-sm p-8 rounded-lg border border-black/10 hover:bg-white/95 transition-all duration-300 shadow-lg max-w-4xl mx-auto mb-12">
          <Quote className="h-8 w-8 text-black mb-4 mx-auto" />
          
          {/* Star Rating */}
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>

          <p className="text-xl text-black mb-6 font-poppins user-select-text italic text-center leading-relaxed">
            "OritechAI showed us exactly where we were losing time and money. The automation plan paid for itself in weeks."
          </p>

          {/* Author Info */}
          <div className="text-center">
            <p className="text-black font-bold font-poppins user-select-text">
              COO, B2B Agency
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <motion.button
            onClick={scrollToConsultation}
            className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 font-poppins"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Similar Results for Your Business <ArrowRight className="inline ml-2 h-5 w-5" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;