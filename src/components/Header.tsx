import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Users, MessageSquare, CheckCircle, Star } from 'lucide-react';
import { Navbar1 } from '@/components/blocks/shadcnblocks-com-navbar1';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navItems = [
    { title: 'Home', url: '/', icon: <Home className="h-5 w-5" />, sectionId: 'home' },
    { title: 'What We Do', url: '/what-we-do', icon: <Briefcase className="h-5 w-5" />, sectionId: 'what-we-do' },
    { title: 'Our Process', url: '/our-process', icon: <CheckCircle className="h-5 w-5" />, sectionId: 'our-process' },
    { title: 'Testimonials', url: '/testimonials', icon: <Star className="h-5 w-5" />, sectionId: 'testimonials' }
  ];

  const mobileExtraLinks = [
    { name: "Home", url: "/", sectionId: "home" },
    { name: "What We Do", url: "/what-we-do", sectionId: "what-we-do" },
    { name: "Our Process", url: "/our-process", sectionId: "our-process" },
  ];

  const authOptions = {
    login: { text: "Why Choose Us", url: "#why-work-with-us", sectionId: "why-work-with-us" },
    signup: { text: "Book a call", url: "#consultation", sectionId: "consultation" },
  };

  const logo = {
    url: "#home",
    src: "/images/oritech.png",
    alt: "OriTech Logo",
    title: "OriTech",
  };

  useEffect(() => {
    // Set mounted after component is mounted for better initial render
    setMounted(true);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (url: string, sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Header variants for animation
  const headerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren" 
      } 
    }
  };

  return (
    <motion.div 
      className={`fixed left-0 right-0 z-[10000] transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-lg backdrop-blur-md border-b border-black/20' : 'bg-white/95'
      }`}
      initial="hidden"
      animate={mounted ? "visible" : "hidden"}
      variants={headerVariants}
      style={{ 
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        willChange: "transform, opacity",
        top: "0",
        marginTop: "-0.5vh" // Move header 0.5% of viewport height higher
      }}
    >
      <Navbar1 
        logo={logo}
        menu={navItems}
        mobileExtraLinks={mobileExtraLinks}
        auth={authOptions}
        activeSection={activeSection}
        onNavClick={scrollToSection}
      />
    </motion.div>
  );
};

export default Header;