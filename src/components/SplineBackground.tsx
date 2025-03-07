import React, { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

type SplineBackgroundProps = {
  onError?: () => void;
  onLoad?: () => void;
};

const SplineBackground: React.FC<SplineBackgroundProps> = ({ onError, onLoad }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const splineRef = useRef<any>(null);

  const handleLoad = (spline: any) => {
    try {
      setLoading(false);
      splineRef.current = spline;
      if (onLoad) onLoad();
    } catch (err) {
      console.error("Error in Spline load handler:", err);
      handleError();
    }
  };

  const handleError = () => {
    setError(true);
    setLoading(false);
    if (onError) onError();
  };

  // Set up error handling for Spline
  useEffect(() => {
    const handleSplineError = (event: ErrorEvent) => {
      if (event.message?.includes('Spline') || 
          event.message?.includes('WebGL') || 
          event.message === 'Script error.') {
        handleError();
        // Prevent the error from bubbling up
        event.preventDefault();
        event.stopPropagation();
      }
    };
    
    window.addEventListener('error', handleSplineError);
    
    return () => {
      window.removeEventListener('error', handleSplineError);
    };
  }, [onError]);

  // Use a try-catch block to prevent uncaught exceptions
  try {
    if (error) {
      return (
        <div className="fixed inset-0 z-5 bg-oritech-bg overflow-hidden">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
              backgroundSize: '400% 400%',
              animation: 'gradient 15s ease infinite'
            }}
          ></div>
          <div className="absolute top-[20%] left-[30%] w-[50vw] h-[50vh] rounded-full bg-oritech-red/10 blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[20%] right-[30%] w-[40vw] h-[40vh] rounded-full bg-oritech-red/10 blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      );
    }
    
    return (
      <div className="fixed inset-0 z-5">
        <Spline
          scene="https://prod.spline.design/nfZjzVYt1gquU7HY/scene.splinecode"
          onLoad={handleLoad}
          onError={handleError}
          style={{
            width: '100%',
            height: '100%',
            position: 'fixed',
            top: '-3%',
            left: 0
          }}
        />
      </div>
    );
  } catch (error) {
    console.error("Error rendering Spline component:", error);
    
    // Return fallback UI in case of error
    if (onError) onError();
    
    return (
      <div className="fixed inset-0 z-5 bg-oritech-bg overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite'
          }}
        ></div>
        <div className="absolute top-[20%] left-[30%] w-[50vw] h-[50vh] rounded-full bg-oritech-red/10 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[30%] w-[40vw] h-[40vh] rounded-full bg-oritech-red/10 blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    );
  }
};

export default SplineBackground;