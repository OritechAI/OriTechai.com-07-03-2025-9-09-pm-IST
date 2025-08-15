import { useEffect } from 'react';

// Global type declaration for Calendly
declare global {
  interface Window {
    Calendly?: any;
  }
}

const CalendarBooking = () => {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.getElementById('calendly-script')) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
      
      return () => {
        const existingScript = document.getElementById('calendly-script');
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, []);

  useEffect(() => {
    // Initialize Calendly widget after script loads
    const initCalendly = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/selenica3/30min',
          parentElement: document.getElementById('calendly-inline-widget'),
          prefill: {},
          utm: {}
        });
      }
    };

    // Check if Calendly is already loaded
    if (window.Calendly) {
      initCalendly();
    } else {
      // Wait for script to load
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly);
          initCalendly();
        }
      }, 100);
      
      // Cleanup interval after 10 seconds
      setTimeout(() => clearInterval(checkCalendly), 10000);
      
      return () => {
        clearInterval(checkCalendly);
      }
    }
  }, []);

  return (
    <div className="calendar-container h-full w-full">
      <div
        id="calendly-inline-widget"
        className="calendly-inline-widget"
        data-url="https://calendly.com/selenica3/30min"
        style={{ minHeight: '700px', width: '100%' }}
      />
      
      {/* Fallback link */}
      <div className="text-center mt-4">
        <p className="text-white mb-2">Having trouble with the calendar?</p>
        <a
          href="https://calendly.com/selenica3/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="text-oritech-red hover:underline"
        >
          Open Calendly in new window →
        </a>
      </div>
    </div>
  );
};

export default CalendarBooking;