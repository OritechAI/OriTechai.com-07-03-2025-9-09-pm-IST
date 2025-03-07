import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Global error handler for unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);
  event.preventDefault();
});

// Simple error boundary component
function ErrorFallback() {
  return (
    <div className="min-h-screen bg-oritech-bg text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-oritech-red mb-4">Something went wrong</h1>
      <p className="text-gray-300 mb-6 max-w-md text-center">
        We're experiencing some technical difficulties. Please try refreshing the page.
      </p>
      <button 
        onClick={() => window.location.reload()}
        className="bg-oritech-red hover:bg-oritech-red/90 text-white font-medium py-2 px-6 rounded"
      >
        Refresh Page
      </button>
    </div>
  );
}

// Custom error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("App error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);