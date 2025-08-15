import { useEffect, useRef, useState } from 'react';
import './index.css';

function App() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => setVideoLoaded(true));
      video.play().catch(console.error);
    }
  }, []);

  const scrollToCalendly = () => {
    const calendlySection = document.getElementById('calendly-section');
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Video Background */}
      <video
        ref={videoRef}
        className="video-background"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="AI technology background video"
      >
        <source src="/Robot Website.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Video Overlay */}
      <div className="video-overlay" />

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="section hero-section">
          <div className="container">
            <div className="hero-content">
              <h1>AI Consulting & Audits That Drive Results</h1>
              <p className="subheadline">
                We help businesses unlock efficiency, accuracy, and growth with AI.
              </p>
              <button 
                onClick={scrollToCalendly}
                className="btn btn-primary"
                aria-label="Book Your AI Audit"
              >
                Book Your AI Audit
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section">
          <div className="container">
            <div className="fade-in">
              <h2>What We Do</h2>
              <div className="services-grid">
                <div className="service-card fade-in-delay-1">
                  <h3>AI Consulting</h3>
                  <p>
                    Tailored strategies to integrate AI into your workflows. 
                    We analyze your business needs and create custom AI solutions 
                    that deliver measurable results.
                  </p>
                </div>
                <div className="service-card fade-in-delay-2">
                  <h3>AI Audits</h3>
                  <p>
                    We review your operations and find where AI saves you time & money. 
                    Get actionable insights and implementation roadmaps for immediate impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section">
          <div className="container">
            <div className="about-section fade-in">
              <h2>Why OritechAI?</h2>
              <p>
                We combine technical expertise with business insight to deliver AI solutions 
                that actually work in the real world. Our team understands both the 
                possibilities and practical limitations of AI, ensuring every 
                recommendation drives genuine business value.
              </p>
            </div>
          </div>
        </section>

        {/* Calendly Section */}
        <section id="calendly-section" className="section">
          <div className="container">
            <div className="calendly-section fade-in">
              <h2>Schedule Your 30-Minute AI Audit</h2>
              <p style={{ marginBottom: '2rem', textAlign: 'center' }}>
                Book a free consultation to discover how AI can transform your business.
              </p>
              
              {/* Calendly Inline Widget */}
              <div 
                className="calendly-container"
                data-url="https://calendly.com/selenica3/30min"
                style={{ 
                  background: '#ffffff',
                  borderRadius: '8px',
                  overflow: 'hidden'
                }}
              >
                <iframe
                  src="https://calendly.com/selenica3/30min?embed_domain=localhost&embed_type=Inline"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Schedule a meeting with OritechAI"
                />
              </div>
              
              {/* Fallback Link */}
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <p style={{ marginBottom: '0.5rem', fontSize: '0.9rem', opacity: 0.8 }}>
                  Having trouble with the calendar?
                </p>
                <a
                  href="https://calendly.com/selenica3/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ display: 'inline-block' }}
                >
                  Open Calendly
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <p>&copy; 2025 OritechAI. All rights reserved.</p>
            </div>
            <div className="footer-links">
              <a 
                href="https://linkedin.com/company/oritechai" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:info@oritechai.com"
                aria-label="Email"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;