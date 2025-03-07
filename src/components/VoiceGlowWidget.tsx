import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    VG_CONFIG?: {
      ID: string;
      region: string;
      render: string;
      stylesheets: string[];
      user?: {
        name?: string;
        email?: string;
        phone?: string;
      };
      userID?: string;
      autostart?: boolean;
    };
  }
}

const VoiceGlowWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);
  const scriptLoadAttempted = useRef(false);

  useEffect(() => {
    // Set up error handler for the widget script
    const handleScriptError = (event: ErrorEvent) => {
      if (event.target && (event.target as HTMLElement).id === 'voiceglow-script') {
        console.error('Error loading VoiceGlow script:', event);
        
        // Cleanup the failed script
        const scriptElement = document.getElementById('voiceglow-script');
        if (scriptElement && scriptElement.parentNode) {
          scriptElement.parentNode.removeChild(scriptElement);
        }
        
        // Prevent the error from bubbling up
        event.preventDefault();
        event.stopPropagation();
      }
    };
    
    window.addEventListener('error', handleScriptError, true);
    
    // Prevent multiple initializations
    if (initialized.current || scriptLoadAttempted.current) return;
    
    // Set initialization flag
    initialized.current = true;
    scriptLoadAttempted.current = true;

    try {
      // Create configuration in window object
      window.VG_CONFIG = {
        ID: "slnx0jaui0hlms5n", 
        region: 'eu',
        render: 'bottom-right',
        stylesheets: [
          "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
        ]
      };

      // Create and load the external script
      const script = document.createElement('script');
      script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
      script.defer = true;
      script.async = true;
      script.id = "voiceglow-script";
      
      // Add error handling
      script.onerror = (e) => {
        console.error('Error loading VoiceGlow script:', e);
        
        // Remove the script on error
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };

      // Only append the script if it doesn't already exist
      if (!document.getElementById('voiceglow-script')) {
        document.body.appendChild(script);
      }
    } catch (error) {
      console.error('Error initializing VoiceGlow widget:', error);
    }

    // Cleanup function to remove script and event listener when component unmounts
    return () => {
      window.removeEventListener('error', handleScriptError, true);
      
      const scriptElement = document.getElementById('voiceglow-script');
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
      
      // Clean up any global objects that were created
      if (window.VG_CONFIG) {
        delete window.VG_CONFIG;
      }
      
      initialized.current = false;
      scriptLoadAttempted.current = false;
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{ width: 0, height: 0 }} 
      id="VG_OVERLAY_CONTAINER"
    >
      {/* Here is where VoiceGlow Agents renders the widget */}
    </div>
  );
};

export default VoiceGlowWidget;