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
      // Make header visible at 3 seconds (faster since no spline loading)
      const headerTimer = setTimeout(() => {
        setHeaderReady(true);
      }, 3000);

      // Prepare content immediately
      const prepareContentTimer = setTimeout(() => {
        setContentReady(true);
      }, 1000);

      // Show main content after 3 seconds
      const contentTimer = setTimeout(() => {
        setShowContent(true);
      }, 3000);

      return () => {
        clearTimeout(headerTimer);
        clearTimeout(prepareContentTimer);
        clearTimeout(contentTimer);
      };
    }
  }, [skipAnimation]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Video */}
      {!videoError && (
        <video
          ref={videoRef}

      {/* Semi-transparent overlay for readability */}
      {/* Background Video */}
      {!videoError && (
        <video
          ref={videoRef}
          className="video-background"
          autoPlay
          muted
          loop
          playsInline
          onError={() => {
            setVideoError(true);
            console.error('Video failed to load');
          }}
          onLoadedData={() => {
            setVideoLoaded(true);
            console.log('Video loaded successfully');
          }}
          onCanPlay={() => {
            if (videoRef.current) {
              videoRef.current.play().catch(console.error);
            }
          }}
        >
          <source src="/Robot Website.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Semi-transparent overlay for readability */}
      <div className="video-overlay"></div>

      {/* Fallback background if video fails */}
      {videoError && (
        <div className="video-fallback"></div>
      )}

      {contentReady && (
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20"
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
                  <section className="content-section">
                    <Hero />
                  </section>
                </ComponentErrorBoundary>
              </motion.div>

              {/* Problem Statement Section */}
              <motion.div variants={itemVariants}>
                <ComponentErrorBoundary>
                  <section className="content-section content-section-light">
                    <ProblemStatement />
                  </section>
                </ComponentErrorBoundary>
              </motion.div>

              {/* What We Do Section */}
              <motion.div variants={itemVariants}>
                <ComponentErrorBoundary>
                  <section className="content-section">
                    <WhatWeDo />
                  </section>
                </ComponentErrorBoundary>
              </motion.div>
              
              {/* Why Work With Us Section */}
              <motion.div variants={itemVariants}>
                <ComponentErrorBoundary>
                  <section className="content-section content-section-light">
                    <WhyWorkWithUs />
                  </section>
                </ComponentErrorBoundary>
              </motion.div>
              
              {/* Our Process Section */}
              <motion.div variants={itemVariants}>
                <ComponentErrorBoundary>
                  <section className="content-section">
                    <OurProcess />
                  </section>
                </ComponentErrorBoundary>
              </motion.div>

              {/* Testimonials Section */}
              <motion.div variants={itemVariants}>
                <ComponentErrorBoundary>
                  <section className="content-section content-section-light">
                    <Testimonials />
                  </section>
                </ComponentErrorBoundary>
              </motion.div>
              
              {/* Consultation Section */}
              <motion.div variants={itemVariants}>
                <ComponentErrorBoundary>
                  <section className="content-section">
                    <Consultation />
                  </section>
                </ComponentErrorBoundary>
              </motion.div>
            </main>
            
            <motion.div variants={itemVariants}>
              <ComponentErrorBoundary>
                <footer className="content-section">
                  <Footer />
                </footer>
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