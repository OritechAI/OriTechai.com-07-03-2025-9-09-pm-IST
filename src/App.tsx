import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Award,
  Search,
  FileText,
  Settings,
  BarChart,
  Calendar,
  Phone,
  Mail
} from 'lucide-react';

// Error Boundary Component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center py-20">
          <p>Something went wrong. Please refresh the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  // States
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);

  // Video handlers
  const handleVideoLoad = () => {
    setVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  };

  const handleVideoError = () => {
    console.error('Video failed to load');
    setVideoError(true);
  };

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  // Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'problem', 'services', 'why-us', 'process', 'proof', 'testimonials', 'booking'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        {/* Video Background */}
        {!videoError && (
          <video
            ref={videoRef}
            className="video-background"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            aria-label="AI technology background video"
          >
            <source src="/Robot Website.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Video Overlay */}
        <div className="video-overlay"></div>

        {/* Header */}
        <header className="header">
          <div className="header-content">
            <a href="#hero" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
              Ori<span className="logo-accent">Tech</span>AI
            </a>
            
            <nav>
              <ul className="nav-menu">
                <li><a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
                <li><a href="#why-us" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('why-us'); }}>Why Us</a></li>
                <li><a href="#process" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}>Process</a></li>
                <li><a href="#proof" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('proof'); }}>Results</a></li>
                <li><a href="#booking" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('booking'); }}>Book Now</a></li>
              </ul>
              
              <button 
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                ☰
              </button>
            </nav>
            
            <a 
              href="#booking" 
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); scrollToSection('booking'); }}
            >
              Book Free Audit
            </a>
          </div>
        </header>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            right: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            zIndex: 99,
            padding: '2rem',
            backdropFilter: 'blur(10px)'
          }}>
            <nav>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem' }}>
                  <a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <a href="#why-us" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('why-us'); }}>Why Us</a>
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <a href="#process" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}>Process</a>
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <a href="#proof" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('proof'); }}>Results</a>
                </li>
                <li style={{ marginBottom: '1rem' }}>
                  <a href="#booking" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('booking'); }}>Book Now</a>
                </li>
                <li>
                  <a 
                    href="#booking" 
                    className="btn btn-primary"
                    onClick={(e) => { e.preventDefault(); scrollToSection('booking'); }}
                  >
                    Book Free Audit
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <div className="content-container">
          {/* Hero Section */}
          <section id="hero" className="hero">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1>AI Consulting &amp; Audits to Transform Your Business</h1>
              <p className="hero-subheadline">
                We audit your processes, uncover automation opportunities, and implement AI strategies 
                that cut costs, boost efficiency, and grow revenue.
              </p>
              <div className="hero-cta">
                <a 
                  href="#booking" 
                  className="btn btn-primary"
                  onClick={(e) => { e.preventDefault(); scrollToSection('booking'); }}
                  style={{ marginRight: '1rem', marginBottom: '1rem' }}
                >
                  Book Your Free AI Audit
                </a>
                <a 
                  href="#services" 
                  className="btn btn-secondary"
                  onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </section>

          {/* Problem Statement */}
          <section id="problem" className="section">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-4">
                <h2>Hidden Inefficiencies Are Costing You Thousands</h2>
                <p style={{ fontSize: '1.25rem', margin: '2rem auto', maxWidth: '800px' }}>
                  Most businesses waste 20-30% of their time on repetitive tasks that AI could handle. 
                  While you're manually processing data, scheduling meetings, and managing workflows, 
                  your competitors are automating their way to higher profits and faster growth.
                </p>
                <p style={{ fontSize: '1.2rem', color: 'var(--pure-white)', fontWeight: '600' }}>
                  But here's the good news: We can identify exactly where you're losing money and show you how to fix it.
                </p>
                <div className="mt-4">
                  <a 
                    href="#booking" 
                    className="btn btn-gold"
                    onClick={(e) => { e.preventDefault(); scrollToSection('booking'); }}
                  >
                    Book a Free Audit Call
                  </a>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Services Section */}
          <section id="services" className="section">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-5">
                <h2>Our AI Consulting Services</h2>
                <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '1rem auto' }}>
                  We don't just talk about AI – we implement solutions that deliver measurable ROI.
                </p>
              </div>
              
              <div className="services-grid">
                <div className="card">
                  <Search size={48} color="var(--albanian-red)" style={{ marginBottom: '1rem' }} />
                  <h3 className="mb-2">AI Process Audits</h3>
                  <p>
                    We analyze your current operations to find the exact tasks and workflows 
                    AI can handle for you. Get a detailed report showing time savings and cost reductions.
                  </p>
                </div>
                
                <div className="card">
                  <FileText size={48} color="var(--albanian-red)" style={{ marginBottom: '1rem' }} />
                  <h3 className="mb-2">AI Strategy Consulting</h3>
                  <p>
                    We create a custom roadmap to implement AI solutions that fit your business – 
                    not cookie-cutter templates. Every strategy is tailored to your specific needs.
                  </p>
                </div>
                
                <div className="card">
                  <Settings size={48} color="var(--albanian-red)" style={{ marginBottom: '1rem' }} />
                  <h3 className="mb-2">AI Implementation &amp; Training</h3>
                  <p>
                    We build, integrate, and train your team so your automations actually get used 
                    and deliver results. Full support until you see ROI.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Why Work With Us */}
          <section id="why-us" className="section">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-5">
                <h2>Why Choose OritechAI</h2>
                <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '1rem auto' }}>
                  We're not just consultants – we're your AI transformation partners.
                </p>
              </div>
              
              <div className="grid grid-3">
                <div className="card text-center">
                  <TrendingUp size={48} color="var(--gold-accent)" style={{ margin: '0 auto 1rem' }} />
                  <h3 className="mb-2">Proven Results</h3>
                  <p>
                    Our clients see cost reductions of 25-40% and efficiency gains of up to 60% 
                    within 90 days of implementation.
                  </p>
                </div>
                
                <div className="card text-center">
                  <Users size={48} color="var(--gold-accent)" style={{ margin: '0 auto 1rem' }} />
                  <h3 className="mb-2">Industry Experience</h3>
                  <p>
                    We've successfully implemented AI solutions for service businesses, agencies, 
                    e-commerce, and tech companies across multiple industries.
                  </p>
                </div>
                
                <div className="card text-center">
                  <Award size={48} color="var(--gold-accent)" style={{ margin: '0 auto 1rem' }} />
                  <h3 className="mb-2">End-to-End Support</h3>
                  <p>
                    From initial audit to full deployment, we stay with you until your AI 
                    solutions are delivering measurable ROI and your team is fully trained.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Our Process */}
          <section id="process" className="section">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-5">
                <h2>Our 4-Step Process</h2>
                <p style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '1rem auto' }}>
                  Simple, transparent, and designed to deliver results fast.
                </p>
              </div>
              
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h3 className="mb-2">Audit</h3>
                  <p>Deep dive into your business processes and identify automation opportunities.</p>
                </div>
                
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h3 className="mb-2">Plan</h3>
                  <p>Create a clear, prioritized AI strategy tailored to your specific needs and budget.</p>
                </div>
                
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h3 className="mb-2">Implement</h3>
                  <p>Build and integrate AI solutions that seamlessly fit into your existing workflow.</p>
                </div>
                
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h3 className="mb-2">Optimize</h3>
                  <p>Monitor performance, refine processes, and ensure maximum ROI from your AI investment.</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Case Study / Proof */}
          <section id="proof" className="section">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="case-study">
                <h2 className="mb-3">Real Results: Service Business Transformation</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                  A 15-person marketing agency was spending 25 hours per week on manual reporting, 
                  client communication, and project management. After our AI audit and implementation:
                </p>
                
                <div className="metrics">
                  <div className="metric">
                    <div className="metric-number" style={{ color: 'var(--albanian-red)' }}>30%</div>
                    <div className="metric-label">Cost Reduction</div>
                  </div>
                  <div className="metric">
                    <div className="metric-number" style={{ color: 'var(--albanian-red)' }}>18%</div>
                    <div className="metric-label">Revenue Increase</div>
                  </div>
                  <div className="metric">
                    <div className="metric-number" style={{ color: 'var(--albanian-red)' }}>20h</div>
                    <div className="metric-label">Time Saved/Week</div>
                  </div>
                  <div className="metric">
                    <div className="metric-number" style={{ color: 'var(--albanian-red)' }}>90 Days</div>
                    <div className="metric-label">Days to ROI</div>
                  </div>
                </div>
                
                <p style={{ fontSize: '1.1rem', marginTop: '2rem', fontStyle: 'italic' }}>
                  "The AI audit revealed inefficiencies we didn't even know existed. 
                  The automation saved us thousands in labor costs while improving client satisfaction."
                </p>
              </div>
            </motion.div>
          </section>

          {/* Testimonials */}
          <section id="testimonials" className="section">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-5">
                <h2>What Our Clients Say</h2>
              </div>
              
              <div className="grid grid-2">
                <div className="testimonial">
                  <div className="testimonial-quote">
                    "OritechAI identified $50K in annual savings we were completely missing. 
                    Their AI implementations have transformed how we operate."
                  </div>
                  <div className="testimonial-author">— Sarah M., COO at Digital Marketing Agency</div>
                </div>
                
                <div className="testimonial">
                  <div className="testimonial-quote">
                    "The audit was incredibly thorough. We went from spending 15 hours a week 
                    on manual tasks to just 3 hours. Game-changer for our productivity."
                  </div>
                  <div className="testimonial-author">— Michael R., Founder of E-commerce Platform</div>
                </div>
                
                <div className="testimonial">
                  <div className="testimonial-quote">
                    "Finally, someone who understands AI practically. No buzzwords, just 
                    real solutions that actually work and deliver ROI."
                  </div>
                  <div className="testimonial-author">— Lisa K., Operations Director</div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Booking Section */}
          <section id="booking" className="section">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="booking-section">
                <h2 className="mb-3">Book Your Free 30-Minute AI Audit Call</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                  Schedule your free AI audit call to discover how AI can save time, cut costs, and boost your business.
                </p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <CheckCircle size={24} color="var(--gold-accent)" style={{ marginRight: '0.5rem' }} />
                    <span>Identify your top 3 automation opportunities</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <CheckCircle size={24} color="var(--gold-accent)" style={{ marginRight: '0.5rem' }} />
                    <span>Receive cost & time savings estimates</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CheckCircle size={24} color="var(--gold-accent)" style={{ marginRight: '0.5rem' }} />
                    <span>Get a custom AI implementation roadmap</span>
                  </div>
                </div>
                
                {/* Calendly Booking Widget */}
                <div style={{ 
                  background: 'rgba(0, 0, 0, 0.8)', 
                  borderRadius: '12px', 
                  padding: '2rem',
                  backdropFilter: 'blur(15px)',
                  border: '2px solid rgba(226, 30, 38, 0.3)',
                  boxShadow: '0 8px 32px rgba(226, 30, 38, 0.2)'
                }}>
                  {/* Calendly Iframe Embed */}
                  <iframe 
                    src="https://calendly.com/selenica3/30min?embed_domain=localhost&embed_type=Inline" 
                    width="100%" 
                    height="700" 
                    frameBorder="0" 
                    title="Schedule a meeting"
                    style={{
                      borderRadius: '8px',
                      backgroundColor: 'white'
                    }}
                  ></iframe>
                  
                  {/* Fallback contact options */}
                  <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <p style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                      Can't see the calendar? Contact us directly:
                    </p>
                    <a href="mailto:info@oritechai.com" className="btn btn-gold" style={{ marginRight: '1rem' }}>
                      <Mail size={20} style={{ marginRight: '0.5rem' }} />
                      Email Us
                    </a>
                    <a href="tel:+14074069101" className="btn btn-secondary">
                      <Phone size={20} style={{ marginRight: '0.5rem' }} />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
              <div>
                <h3 className="mb-2">OritechAI</h3>
                <p>Transforming businesses through intelligent AI automation and strategic consulting.</p>
              </div>
              <div>
                <h4 className="mb-2">Contact</h4>
                <p>Email: info@oritechai.com</p>
                <p>Phone: +1 (407) 406-9101</p>
                <p>Tirana, Albania | San Francisco, CA</p>
              </div>
              <div>
                <h4 className="mb-2">Services</h4>
                <p>AI Process Audits</p>
                <p>AI Strategy Consulting</p>
                <p>AI Implementation</p>
              </div>
            </div>
            
            <div style={{ borderTop: '1px solid rgba(226, 30, 38, 0.3)', paddingTop: '1rem', textAlign: 'center' }}>
              <p>&copy; 2025 OritechAI. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;