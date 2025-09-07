import React, { useState, useRef, useEffect } from 'react';
import { assets } from '../assets/assets';

const VideoWithTransition = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start playing when video is visible
          setTimeout(() => {
            if (videoRef.current) {
              videoRef.current.play();
              setIsPlaying(true);
            }
          }, 500);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <div 
      ref={sectionRef} 
      className="flex flex-col items-center justify-center my-16 px-4"
    >
      <div className={`w-full max-w-6xl relative transition-all duration-1000 ease-out ${
        isVisible 
          ? 'scale-100 opacity-100 translate-y-0' 
          : 'scale-90 opacity-0 translate-y-10'
      }`}>
        <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-700 hover:shadow-3xl hover:-translate-y-1">
          {/* Loading spinner */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/20 z-10">
              <div className="w-16 h-16 border-4 border-indigo-600/30 border-t-indigo-600 rounded-full animate-spin"></div>
            </div>
          )}
          
          <video 
            ref={videoRef}
            controls={false}
            autoPlay={false}
            muted
            loop
            className="w-full h-auto cursor-pointer"
            onClick={handleVideoClick}
            style={{ objectFit: 'cover', minHeight: '500px' }}
            poster={assets.videoPlaceholder}
            onLoadedData={handleVideoLoad}
          >
            <source src={assets.TuringIntroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Custom play button overlay */}
          {!isPlaying && (
            <div 
              className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all duration-500 cursor-pointer backdrop-blur-sm"
              onClick={handleVideoClick}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/95 rounded-full flex items-center justify-center shadow-2xl hover:bg-white transition-all duration-300 transform hover:scale-110 group">
                <svg 
                  className="w-10 h-10 md:w-12 md:h-12 text-indigo-600 ml-1 transition-transform duration-300 group-hover:scale-110" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
          
          {/* Custom video controls */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2 transition-opacity duration-300 hover:bg-black/80">
            <button 
              onClick={handleVideoClick}
              className="text-white focus:outline-none"
            >
              {isPlaying ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            
            <div className="h-1 w-48 md:w-64 bg-gray-600 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500" style={{ width: '35%' }}></div>
            </div>
            
            <div className="text-white text-sm">
              1:25 / 3:45
            </div>
            
            <button className="text-white focus:outline-none">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Video caption */}
        <div className="mt-8 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">See Our Platform in Action</h3>
          <p className="text-gray-600 text-lg">Watch how our cutting-edge solutions transform businesses with innovative technology and AI-driven insights.</p>
        </div>
      </div>
    </div>
  );
};

export default VideoWithTransition;