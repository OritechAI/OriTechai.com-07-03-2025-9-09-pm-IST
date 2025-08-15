import { useEffect, useRef, useState } from 'react';

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

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="fixed inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{ filter: 'blur(2px) brightness(0.85)' }}
        aria-label="AI technology background video"
      >
        <source src="/Robot Website.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Video Overlay */}
      <div 
        className="fixed inset-0 z-10"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}
      />

      {/* Main Content */}
      <main className="relative z-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              AI Consulting & Audits That Drive Results
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
              We help businesses unlock efficiency, accuracy, and growth with AI.
            </p>
            <button 
              onClick={scrollToBooking}
              className="bg-red-600 hover:bg-yellow-500 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: '#E41E26' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFD700'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#E41E26'}
              aria-label="Book Your AI Audit"
            >
              Book Your AI Audit
            </button>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
              What We Do
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 transition-all duration-300 hover:border-red-600">
                <h3 className="text-2xl font-semibold text-red-600 mb-4" style={{ color: '#E41E26' }}>
                  AI Consulting
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  Tailored strategies to integrate AI into your workflows. 
                  We analyze your business needs and create custom AI solutions 
                  that deliver measurable results.
                </p>
              </div>

              <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 transition-all duration-300 hover:border-red-600">
                <h3 className="text-2xl font-semibold text-red-600 mb-4" style={{ color: '#E41E26' }}>
                  AI Audits
                </h3>
                <p className="text-white text-lg leading-relaxed">
                  We review your operations and find where AI saves you time & money. 
                  Get actionable insights and implementation roadmaps for immediate impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                Why OritechAI?
              </h2>
              <p className="text-white text-xl leading-relaxed text-center">
                We combine technical expertise with business insight to deliver AI solutions 
                that actually work in the real world. Our team understands both the 
                possibilities and practical limitations of AI, ensuring every 
                recommendation drives genuine business value.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking-section" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black bg-opacity-90 backdrop-blur-sm rounded-xl p-8 border-2 border-red-600" style={{ borderColor: '#E41E26' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                Schedule Your 30-Minute AI Audit
              </h2>
              <p className="text-white text-lg text-center mb-8">
                Book a free consultation to discover how AI can transform your business.
              </p>
              
              {/* Calendly Inline Widget */}
              <div style={{ minWidth: '320px', height: '700px' }}>
                <iframe
                  src="https://calendly.com/selenica3/30min?embed_type=Inline"
                  style={{ width: '100%', height: '100%', border: 0, borderRadius: '8px' }}
                  title="Schedule a meeting with OritechAI"
                />
              </div>
              
              {/* Fallback Link */}
              <div className="text-center mt-6">
                <p className="text-white text-sm mb-2 opacity-80">
                  Having trouble with the calendar?
                </p>
                <a
                  href="https://calendly.com/selenica3/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-transparent border-2 border-white text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Open Calendly
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-20 bg-black bg-opacity-95 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ori<span style={{ color: '#E41E26' }}>Tech</span>AI
              </h3>
              <p className="text-white mb-4">
                AI consulting and business audits that deliver measurable results.
              </p>
            </div>
            
            <div className="flex justify-center space-x-8 mb-6">
              <a 
                href="https://linkedin.com/company/oritechai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-red-600 transition-colors duration-300"
                style={{ '--hover-color': '#E41E26' } as React.CSSProperties}
                onMouseEnter={(e) => e.currentTarget.style.color = '#E41E26'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:info@oritechai.com"
                className="text-white hover:text-red-600 transition-colors duration-300"
                onMouseEnter={(e) => e.currentTarget.style.color = '#E41E26'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#FFFFFF'}
                aria-label="Email"
              >
                Email
              </a>
            </div>
            
            <div className="border-t border-gray-800 pt-6">
              <p className="text-white">
                © 2025 OritechAI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;