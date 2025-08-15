import React from 'react';
import { motion } from 'framer-motion';
import CalendarBooking from '@/components/CalendarBooking';
import { CheckCircle } from 'lucide-react';

// Simple error boundary component for Consultation
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Calendar error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-white/90 p-8 rounded-lg border border-black/10 text-center shadow-lg">
          <h3 className="text-xl font-bold text-black mb-4">Booking Calendar</h3>
          <p className="text-black mb-6">
            Sorry, we're having trouble loading our booking calendar. Please try again later or contact us directly.
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="bg-black/10 p-4 rounded-lg max-w-md">
              <p className="text-black font-semibold mb-2">Contact Information:</p>
              <p className="text-black">Email: info@oritechai.com</p>
              <p className="text-black">Phone: +1 (407) 406-9101</p>
            </div>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-md"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const Consultation = () => {
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

  const callBenefits = [
    "Identify your top 3 automation opportunities",
    "Estimate time and cost savings",
    "Outline your AI roadmap"
  ];

  return (
    <section id="consultation" className="section-padding relative bg-black/80 text-white z-10 backdrop-blur-sm">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-12 user-select-text">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-poppins">
            Your Free AI Audit Call is One Click Away
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins mb-8">
            In this no-obligation call, we'll:
          </p>
          
          {/* Benefits List */}
          <div className="max-w-2xl mx-auto mb-8">
            <ul className="space-y-4">
              {callBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center justify-center text-lg text-white font-poppins user-select-text">
                  <CheckCircle className="h-6 w-6 icon-red mr-3 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
        
        {/* Calendar Component with error boundary */}
        <motion.div variants={itemVariants} className="mb-12 relative z-20">
          <div className="card-dark p-6 rounded-lg shadow-lg" style={{ height: "750px" }}>
            <ErrorBoundary>
              <CalendarBooking />
            </ErrorBoundary>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-lg text-red-emphasis font-poppins user-select-text font-semibold">
            Ready to transform your business with AI? Book your call now!
          </p>
        </motion.div>

        {/* Orange glow section */}
        <div className="relative">
          <div 
            className="fade-top-lg pointer-events-none absolute inset-0 rounded-2xl shadow-glow opacity-1 scale-105 mt-[-30%]"
            style={{ 
              transform: "scale(1.05)",
              marginTop: "-30%" 
            }} 
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Consultation;