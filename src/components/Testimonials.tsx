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

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechFlow Solutions",
      company: "Software Development",
      rating: 5,
      testimonial: "OritechAI transformed our customer service operations completely. We went from 8-hour response times to instant AI-powered responses, reducing support costs by 45% while improving customer satisfaction scores by 60%. The ROI was evident within the first month.",
      results: "45% cost reduction, 60% satisfaction increase"
    },
    {
      name: "Michael Chen",
      title: "Operations Director",
      company: "E-commerce Platform",
      rating: 5,
      testimonial: "The AI audit revealed inefficiencies we didn't even know existed. Their implementation of automated workflows saved us 20 hours per week and increased our order processing speed by 300%. Our team can now focus on strategic growth instead of manual tasks.",
      results: "20 hours/week saved, 300% faster processing"
    },
    {
      name: "Lisa Rodriguez",
      title: "Founder",
      company: "Digital Marketing Agency",
      rating: 5,
      testimonial: "Working with OritechAI was a game-changer. Their AI chatbot handles 80% of our client inquiries automatically, and the lead qualification system has improved our conversion rates by 35%. The implementation was smooth and the support is outstanding.",
      results: "80% automated inquiries, 35% conversion increase"
    }
  ];

  const metrics = [
    { value: "98%", label: "Client Satisfaction Rate" },
    { value: "6 Months", label: "Average ROI Timeline" },
    { value: "40%", label: "Average Cost Reduction" },
    { value: "25%", label: "Average Revenue Increase" }
  ];

  return (
    <section id="testimonials" className="section-padding">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-poppins user-select-text">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins user-select-text">
            See how businesses like yours have transformed their operations and achieved remarkable results with our AI consulting services.
          </p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-oritech-red mb-2 font-poppins user-select-text">
                {metric.value}
              </div>
              <div className="text-gray-300 font-poppins user-select-text">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-oritech-gray/30 backdrop-blur-sm p-8 rounded-lg border border-oritech-gray/50 hover:bg-oritech-gray/40 transition-all duration-300 relative"
            >
              <Quote className="h-8 w-8 text-oritech-red mb-4" />
              
              {/* Star Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 font-poppins user-select-text italic">
                "{testimonial.testimonial}"
              </p>

              {/* Results Highlight */}
              <div className="bg-oritech-red/10 border border-oritech-red/30 p-3 rounded-lg mb-6">
                <p className="text-oritech-red font-semibold text-sm font-poppins user-select-text">
                  Results: {testimonial.results}
                </p>
              </div>

              {/* Author Info */}
              <div>
                <p className="text-white font-bold font-poppins user-select-text">
                  {testimonial.name}
                </p>
                <p className="text-gray-400 text-sm font-poppins user-select-text">
                  {testimonial.title}
                </p>
                <p className="text-gray-400 text-sm font-poppins user-select-text">
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Highlight */}
        <motion.div variants={itemVariants} className="bg-oritech-red/10 border border-oritech-red/30 p-8 rounded-lg mb-12">
          <h3 className="text-2xl font-bold text-white mb-4 font-poppins user-select-text">
            Featured Case Study: E-commerce Transformation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-oritech-red mb-2 font-poppins user-select-text">
                The Challenge
              </h4>
              <p className="text-gray-300 mb-4 font-poppins user-select-text">
                A growing e-commerce platform was struggling with manual order processing, customer service bottlenecks, and inventory management issues that were limiting their growth potential.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-oritech-red mb-2 font-poppins user-select-text">
                The Results
              </h4>
              <ul className="text-gray-300 space-y-1 font-poppins user-select-text">
                <li>• 300% faster order processing</li>
                <li>• 45% reduction in operational costs</li>
                <li>• 80% of customer inquiries automated</li>
                <li>• 25% increase in customer satisfaction</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <motion.button
            onClick={scrollToConsultation}
            className="bg-oritech-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 font-poppins"
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