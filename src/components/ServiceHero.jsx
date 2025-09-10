import React from 'react';

// Enhanced Hero Component
const ServiceHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 right-0 -mr-40 -mt-16 w-80 h-80 bg-white rounded-full"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-16 w-80 h-80 bg-indigo-300 rounded-full"></div>
      </div>
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-indigo-300/30 rounded-full animate-ping"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default ServiceHero;