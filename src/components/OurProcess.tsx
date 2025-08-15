import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Cog, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

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
      icon: <Search className="h-12 w-12 text-oritech-red" />,
      title: "Audit",
      subtitle: "Comprehensive Business Analysis",
      description: "We conduct a thorough audit of your current processes, identifying bottlenecks, inefficiencies, and automation opportunities.",
      deliverables: [
        "Process mapping and analysis",
        "Automation opportunity assessment",
        "ROI projections for AI implementation",
        "Detailed audit report with recommendations"
      ],
      timeline: "1-2 weeks"
    },
    {
      step: "02",
      icon: <FileText className="h-12 w-12 text-oritech-red" />,
      title: "Plan",
      subtitle: "Strategic AI Implementation Roadmap",
      description: "Based on the audit findings, we create a customized AI strategy and implementation plan tailored to your business goals.",
      deliverables: [
        "Custom AI strategy document",
        "Implementation timeline and milestones",
        "Technology stack recommendations",
        "Budget and resource planning"
      ],
      timeline: "1 week"
    },
    {
      step: "03",
      icon: <Cog className="h-12 w-12 text-oritech-red" />,
      title: "Implement",
      subtitle: "AI Solution Development & Deployment",
      description: "Our team builds and deploys your AI solutions, ensuring seamless integration with your existing systems and workflows.",
      deliverables: [
        "AI chatbot and voice agent development",
        "Workflow automation setup",
        "System integrations and testing",
        "Staff training and documentation"
      ],
      timeline: "4-8 weeks"
    },
    {
      step: "04",
      icon: <TrendingUp className="h-12 w-12 text-oritech-red" />,
      title: "Optimize",
      subtitle: "Continuous Improvement & Support",
      description: "We monitor performance, gather feedback, and continuously optimize your AI solutions to maximize ROI and efficiency.",
      deliverables: [
        "Performance monitoring and analytics",
        "Regular optimization updates",
        "Ongoing technical support",
        "Quarterly strategy reviews"
      ],
      timeline: "Ongoing"
    }
  ];

  return (
    <section id="our-process" className="section-padding bg-black/10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 font-poppins user-select-text">
            Our Process
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto font-poppins user-select-text">
            Our proven 4-step methodology ensures successful AI implementation with measurable results and minimal disruption to your operations.
          </p>
        </motion.div>

        <div className="space-y-12 mb-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Step Number and Icon */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <div className="text-6xl font-bold text-black/50 mb-4 font-poppins user-select-text">
                  {step.step}
                </div>
                <div className="flex justify-center lg:justify-start text-black">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6">
                <h3 className="text-3xl font-bold text-black mb-2 font-poppins user-select-text">
                  {step.title}
                </h3>
                <h4 className="text-xl text-black mb-4 font-poppins user-select-text font-semibold">
                  {step.subtitle}
                </h4>
                <p className="text-black mb-6 font-poppins user-select-text">
                  {step.description}
                </p>
                <div className="text-sm text-black font-poppins user-select-text">
                  <strong>Timeline:</strong> {step.timeline}
                </div>
              </div>

              {/* Deliverables */}
              <div className="lg:col-span-4">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-black/10 shadow-lg">
                  <h5 className="text-lg font-bold text-black mb-4 font-poppins user-select-text">
                    Key Deliverables:
                  </h5>
                  <ul className="space-y-2">
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-start text-black font-poppins user-select-text">
                        <CheckCircle className="h-4 w-4 text-black mt-1 mr-2 flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline Visual */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg border border-black/10 shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6 text-center font-poppins user-select-text">
              Typical Project Timeline: 6-12 Weeks
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-black mb-2 font-poppins user-select-text">
                    {step.title}
                  </div>
                  <div className="text-black font-poppins user-select-text">
                    {step.timeline}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center">
          <motion.button
            onClick={scrollToConsultation}
            className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 font-poppins"
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