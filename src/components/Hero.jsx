// components/Hero.js
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const heroRef = useRef(null);
  const modalRef = useRef(null);

  // Intersection Observer for animation triggers
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Video modal controls
  const openVideo = useCallback(() => {
    setShowVideo(true);
  }, []);

  const closeVideo = useCallback(() => {
    setShowVideo(false);
    setIsIframeLoaded(false);
  }, []);

  // Close modal when clicking outside or pressing Escape
  useEffect(() => {
    if (!showVideo) return;

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeVideo();
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeVideo();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showVideo, closeVideo]);

  // Preconnect to YouTube for faster loading
  useEffect(() => {
    if (showVideo && !isIframeLoaded) {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = 'https://www.youtube.com';
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [showVideo, isIframeLoaded]);

  return (
    <section 
      ref={heroRef}
      className="pt-24 pb-16 md:pt-32 md:pb-24 text-white relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)'
      }}
      aria-label="Hero section"
    >
      {/* Preload hints for YouTube */}
      <link rel="preconnect" href="https://www.youtube.com" />
      <link rel="dns-prefetch" href="https://www.youtube.com" />
      
      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="video-modal-title"
        >
          <div 
            ref={modalRef}
            className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl"
          >
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors z-10"
              aria-label="Close video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-4">
              <h2 id="video-modal-title" className="text-white text-lg font-semibold mb-2">
                Product Demonstration
              </h2>
              <p className="text-gray-300 text-sm mb-4">
                Watch how our AI technology transforms business operations with intelligent automation and data-driven insights.
              </p>
            </div>
            
            <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
              {!isIframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                  <div className="animate-pulse text-white">Loading video...</div>
                </div>
              )}
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/f2Gzr8sAGB8?autoplay=1"
                title="YouTube video player: Transforming Business with AI Technology"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                onLoad={() => setIsIframeLoaded(true)}
              ></iframe>
            </div>
            
            {/* Video transcript for accessibility */}
            <div className="p-4 bg-gray-800">
              <details className="text-sm text-gray-300">
                <summary className="cursor-pointer font-medium">Video Transcript</summary>
                <div className="mt-2 p-2 bg-gray-700 rounded">
                  <p>[Transcript of the video would be placed here for accessibility]</p>
                  <p>Our AI technology helps businesses automate processes, analyze data patterns, 
                  and make predictive decisions that drive growth and efficiency.</p>
                </div>
              </details>
            </div>
          </div>
        </div>
      )}

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden" aria-hidden="true">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-500/40 rounded-full animate-float" style={{animationDelay: '0s', animationDuration: '15s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400/50 rounded-full animate-float" style={{animationDelay: '1s', animationDuration: '12s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-indigo-500/30 rounded-full animate-float" style={{animationDelay: '2s', animationDuration: '18s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-white/20 rounded-full animate-float" style={{animationDelay: '3s', animationDuration: '14s'}}></div>
        
        {/* Gradient blobs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse-medium" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full filter blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Left Side Content */}
          <div className={`md:w-1/2 mb-12 md:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-2">
              <span className="text-sm md:text-base font-medium bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full inline-flex items-center animate-pulse">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-ping" style={{animationDuration: '2s'}}></span>
                Transforming Business with AI Technology
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Innovation</span>
            </h1>
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight"
              style={{
                background: 'linear-gradient(90deg, #f0abfc, #c4b5fd, #93c5fd)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Fueled By IT Excellence
            </h2>
            <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl leading-relaxed">
              We drive business innovation with AI-driven IT services tailored for modern enterprises. 
              Our intelligent solutions enhance efficiency, streamline operations, and unlock new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/services" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center transform hover:-translate-y-1 group">
                GET STARTED 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <button 
                onClick={openVideo}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-medium rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1 group"
                aria-haspopup="dialog"
                aria-expanded={showVideo}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                WATCH DEMO
              </button>
            </div>
            
            {/* Stats section */}
            <div className="flex flex-wrap mt-12 gap-6">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="ml-2 text-indigo-200">Projects<br />Completed</div>
              </div>
              <div className="flex items-center">
                <div className="text-3xl font-bold text-white">98%</div>
                <div className="ml-2 text-indigo-200">Client<br />Satisfaction</div>
              </div>
              <div className="flex items-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="ml-2 text-indigo-200">Support<br />Available</div>
              </div>
            </div>
          </div>
          
          {/* Right Side Image */}
          <div className={`md:w-1/2 flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '300ms'}}>
            <div className="relative">
              {/* Main image container with gradient border */}
              <div className="relative rounded-2xl overflow-hidden group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative rounded-2xl bg-gray-900 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="AI Business Innovation showing data visualization on multiple screens" 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-indigo-600/80 backdrop-blur-md p-4 rounded-xl shadow-lg animate-float z-10" style={{animationDelay: '0.5s', animationDuration: '6s'}}>
                <div className="text-white font-bold text-center">
                  <div className="text-2xl">24/7</div>
                  <div className="text-xs">Support</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg animate-float z-10" style={{animationDelay: '1s', animationDuration: '7s'}}>
                <div className="text-indigo-600 font-bold text-center">
                  <div className="text-2xl">AI</div>
                  <div className="text-xs">Powered</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      
      {/* Add custom animations to global CSS */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes pulse-slow {
          0% { opacity: 0.5; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0.5; transform: scale(0.95); }
        }
        @keyframes pulse-medium {
          0% { opacity: 0.7; transform: scale(0.98); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0.7; transform: scale(0.98); }
        }
        @keyframes tilt {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(0.5deg); }
          75% { transform: rotate(-0.5deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-medium {
          animation: pulse-medium 6s ease-in-out infinite;
        }
        .animate-tilt {
          animation: tilt 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default React.memo(Hero);