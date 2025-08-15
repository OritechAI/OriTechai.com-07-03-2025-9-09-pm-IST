import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import WhatWeDo from './components/WhatWeDo';
import WhyWorkWithUs from './components/WhyWorkWithUs';
import OurProcess from './components/OurProcess';
import Testimonials from './components/Testimonials';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import VoiceGlowWidget from './components/VoiceGlowWidget';

// Simple Component Error Boundary
class ComponentErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Component error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 my-4 bg-oritech-gray/30 border border-oritech-red/30 rounded-lg text-white">
          <h3 className="text-lg font-semibold text-oritech-red mb-2">Something went wrong</h3>
          <p className="text-sm text-gray-300 mb-4">We're having trouble loading this component</p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            className="text-sm bg-oritech-red/80 hover:bg-oritech-red text-white px-4 py-2 rounded"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [contentReady, setContentReady] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [headerReady, setHeaderReady] = useState(false);
  const [skipAnimation, setSkipAnimation] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if user has visited before and when
    const checkVisitStatus = () => {
      try {
        const lastVisit = localStorage.getItem('lastVisit');
        const currentTime = Date.now();
        
        if (lastVisit) {
          const timeSinceLastVisit = currentTime - parseInt(lastVisit);
          const oneHourInMs = 60 * 60 * 1000;
          
          // If less than 1 hour since last visit, skip animation
          if (timeSinceLastVisit < oneHourInMs) {
            setSkipAnimation(true);
            setHeaderReady(true);
            setContentReady(true);
            setShowContent(true);
          }
        }
        
        // Update last visit time
        localStorage.setItem('lastVisit', currentTime.toString());
      } catch (error) {
        console.error("Error checking visit status:", error);
        // Fallback to default behavior
        setSkipAnimation(false);
        setHeaderReady(false);
        setContentReady(false);
        setShowContent(false);
      }
    };
    
    checkVisitStatus();
    
    if (!skipAnimation) {
      // Make header visible at 7.5 seconds
      const headerTimer = setTimeout(() => {
        setHeaderReady(true);
      }, 7500);

      // Prepare content after animation starts
      const prepareContentTimer = setTimeout(() => {
        setContentReady(true);
      }, 3000);

      // Show main content after 7.5 seconds
      const contentTimer = setTimeout(() => {
        setShowContent(true);
      }, 7500);

      return () => {
        clearTimeout(headerTimer);
        clearTimeout(prepareContentTimer);
        clearTimeout(contentTimer);
      };
    }
  }, [skipAnimation]);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showContent]);

  // Animation variants for content sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <div className="min-h-screen bg-gradient-to-br from-oritech-red/90 via-oritech-red/80 to-oritech-red/70">
      {/* Red gradient background with subtle pattern */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2720%27%20height%3D%2720%27%20viewBox%3D%270%200%2020%2020%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Crect%20x%3D%270%27%20y%3D%270%27%20width%3D%271%27%20height%3D%271%27%20fill%3D%27%23ffffff%27%20opacity%3D%270.05%27%2F%3E%3C%2Fsvg%3E')] opacity-30 pointer-events-none"></div>

      {/* Header loads first, separate from other content for better performance */}
      {headerReady && (
        <div className="relative z-20">
          <ComponentErrorBoundary>
            <Header activeSection={activeSection} />
          </ComponentErrorBoundary>
        </div>
      )}

      {contentReady && (
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={showContent ? "visible" : "hidden"}
          >            
            <main>
              {/* Hero Section */}
              <motion.div variants={itemVariants}>
                <ComponentErrorBoundary>
                  <Hero />
                </ComponentErrorBoundary>
              </motion.div>

              {/* Problem Statement Section */}
              <motion.div variants={itemVariants}>
                <ComponentErrorBoundary>
                  <ProblemStatement />
                </ComponentErrorBoundary>
              </motion.div>

              {/* What We Do Section */}
              <motion.div variants={itemVariants}>
                <ComponentErrorBoundary>
                  <WhatWeDo />
                </ComponentErrorBoundary>
              </motion.div>
              
              {/* Why Work With Us Section */}
              <motion.div variants={itemVariants}>
                <ComponentErrorBoundary>
                  <WhyWorkWithUs />
                </ComponentErrorBoundary>
              </motion.div>
              
              {/* Our Process Section */}
              <motion.div variants={itemVariants}>
                <ComponentErrorBoundary>
                  <OurProcess />
                </ComponentErrorBoundary>
              </motion.div>

              {/* Testimonials Section */}
              <motion.div variants={itemVariants}>
                <ComponentErrorBoundary>
                  <Testimonials />
                </ComponentErrorBoundary>
              </motion.div>
              
              {/* Consultation Section */}
              <motion.div variants={itemVariants}>
                <ComponentErrorBoundary>
                  <Consultation />
                </ComponentErrorBoundary>
              </motion.div>
            </main>
            
            <motion.div variants={itemVariants}>
              <ComponentErrorBoundary>
                <Footer />
              </ComponentErrorBoundary>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* VoiceGlow Chatbot Widget */}
      <ComponentErrorBoundary>
        <VoiceGlowWidget />
      </ComponentErrorBoundary>
    </div>
  );
}

export default App;