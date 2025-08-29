// components/CTA.js
import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 bg-indigo-700 relative overflow-hidden">
      {/* Grid pattern background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(to right, #818cf8 1px, transparent 1px), linear-gradient(to bottom, #818cf8 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to innovate your business?</h2>
            <p className="text-lg text-indigo-200">Join thousands of companies that have transformed their operations with our IT services.</p>
          </div>
          <div className="md:w-2/5">
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                required 
                className="flex-grow px-5 py-3 border border-transparent rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700" 
                placeholder="Enter your email" 
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-white text-indigo-700 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;