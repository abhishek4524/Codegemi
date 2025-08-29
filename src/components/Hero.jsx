// components/Hero.js
import React from 'react';
import { assets } from '../assets/assets'; // adjust path based on your project structure

const Hero = () => {
  return (
    <section 
      className="pt-32 pb-20 md:pt-40 md:pb-28 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-purple-400/20 rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-400/10 rounded-full animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Left Side Content */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Business Innovation
            </h1>
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6"
              style={{
                background: 'linear-gradient(90deg, #f0abfc, #c4b5fd, #93c5fd)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Fueled By IT Services Excellence
            </h2>
            <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl">
              We drive business innovation with AI-driven IT services tailored for modern enterprises. 
              Our intelligent solutions enhance efficiency, streamline operations, and unlock new opportunities.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-3.5 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-white/30 flex items-center justify-center">
                GET STARTED <i className="fas fa-arrow-right ml-2"></i>
              </button>
              <button className="px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center">
                <i className="fas fa-play-circle mr-2"></i> WATCH DEMO
              </button>
            </div>
          </div>
          
          {/* Right Side Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src={assets.heroThumb2_1} 
                alt="AI Business Innovation" 
                className="max-w-full rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
