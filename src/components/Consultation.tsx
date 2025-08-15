import React from 'react';
import { motion } from 'framer-motion';
import CalendarBooking from '@/components/CalendarBooking';

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
        <div className="bg-oritech-gray/30 p-8 rounded-lg border border-oritech-gray/50 text-center">
          <h3 className="text-xl font-bold text-white mb-4">Booking Calendar</h3>
          <p className="text-gray-300 mb-6">
            Sorry, we're having trouble loading our booking calendar. Please try again later or contact us directly.
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="bg-oritech-gray/50 p-4 rounded-lg max-w-md">
              <p className="text-oritech-red font-semibold mb-2">Contact Information:</p>
              <p className="text-white">Email: info@oritechai.com</p>
              <p className="text-white">Phone: +1 (407) 406-9101</p>
            </div>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="bg-oritech-red hover:bg-oritech-red/90 text-white px-6 py-2 rounded-md"
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

  return (
    <section id="consultation" className="section-padding relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-8 user-select-text">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-poppins">Book Your Free AI Consultation</h2>
          <p className="text-lg text-black max-w-3xl mx-auto font-poppins">
            Ready to discover how AI can transform your business? Schedule a free consultation with our AI experts to discuss your specific needs and get a custom roadmap for implementation.
          </p>
        </motion.div>
        
        {/* Calendar Component with error boundary */}
        <motion.div variants={itemVariants} className="mb-12 relative z-20">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-black/10 shadow-lg" style={{ height: "750px" }}>
            <ErrorBoundary>
              <CalendarBooking />
            </ErrorBoundary>
          </div>
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