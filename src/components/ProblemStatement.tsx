import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Clock, DollarSign } from 'lucide-react';

const ProblemStatement = () => {
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
    <section id="problem-statement" className="section-padding text-black relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 font-poppins user-select-text">
            You're Wasting Time, Money, and Opportunities — Without Even Knowing It
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl font-poppins user-select-text leading-relaxed">
              Most companies are sitting on hidden inefficiencies that eat up hours, burn budgets, and frustrate teams.
            </p>
            <p className="text-xl font-poppins user-select-text leading-relaxed">
              AI can fix that, but only if you know where to start and what to automate.
            </p>
            <p className="text-xl font-poppins user-select-text leading-relaxed font-semibold text-red-emphasis">
              That's where we come in.
            </p>
          </div>
        </motion.div>

        {/* Visual representation of problems */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="card-light p-6 rounded-lg text-center shadow-lg">
            <Clock className="h-12 w-12 icon-red mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 font-poppins user-select-text">Wasting Time</h3>
            <p className="font-poppins user-select-text">Manual tasks eating up hours that could be spent growing your business</p>
          </div>
          
          <div className="card-light p-6 rounded-lg text-center shadow-lg">
            <DollarSign className="h-12 w-12 icon-red mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 font-poppins user-select-text">Burning Money</h3>
            <p className="font-poppins user-select-text">Hidden inefficiencies draining your budget without delivering value</p>
          </div>
          
          <div className="card-light p-6 rounded-lg text-center shadow-lg">
            <AlertTriangle className="h-12 w-12 icon-red mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 font-poppins user-select-text">Missing Opportunities</h3>
            <p className="font-poppins user-select-text">Competitors gaining advantage while you're stuck with outdated processes</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProblemStatement;