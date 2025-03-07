import React, { useEffect, useState } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

const CalendarBooking = () => {
  const [calLoaded, setCalLoaded] = useState(false);
  const [calError, setCalError] = useState(false);

  useEffect(() => {
    // Error handler for Cal.com script
    const handleCalError = (error: ErrorEvent) => {
      if (error.message?.includes('Cal') || error.message === 'Script error.') {
        console.error('Error with Cal.com widget:', error);
        setCalError(true);
        // Prevent error propagation
        error.preventDefault();
      }
    };

    window.addEventListener('error', handleCalError);

    const initializeCal = async () => {
      try {
        const cal = await getCalApi();
        cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        setCalLoaded(true);
      } catch (error) {
        console.error('Failed to initialize Cal.com:', error);
        setCalError(true);
      }
    };

    initializeCal();

    return () => {
      window.removeEventListener('error', handleCalError);
    };
  }, []);

  // Fallback UI if Cal.com fails to load
  if (calError) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
        <h3 className="text-xl font-bold text-white mb-4">Booking Calendar</h3>
        <p className="text-gray-300 mb-6">
          Our booking calendar is currently experiencing issues. Please contact us directly to schedule a consultation.
        </p>
        <div className="bg-oritech-gray/50 p-4 rounded-lg w-full max-w-md">
          <p className="text-oritech-red font-semibold mb-2">Contact Information:</p>
          <p className="text-white">Email: info@oritechai.com</p>
          <p className="text-white">Phone: +1 (407) 406-9101</p>
        </div>
      </div>
    );
  }

  return (
    <div className="calendar-container h-full w-full">
      {!calLoaded && (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-oritech-red"></div>
        </div>
      )}
      <Cal 
        calLink="oritech-ai/discovery-call"
        style={{
          width:"100%", 
          height:"700px", 
          overflow:"hidden",
          visibility: calLoaded ? 'visible' : 'hidden'
        }}
        config={{
          layout: "month_view",
          hideEventTypeDetails: false,
          theme: "dark",
          styles: {
            branding: {
              brandColor: "#ce0005"
            },
            background: "transparent",
            elementBackground: "#2a2a2a",
            textColor: "#ffffff"
          }
        }}
      />
    </div>
  );
};

export default CalendarBooking;