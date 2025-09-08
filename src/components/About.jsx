import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const elementTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight * 0.75) {
        sectionRef.current.classList.add('animate-in');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="about-section space bg-gradient-to-br from-blue-900 to-indigo-900 relative overflow-hidden py-20" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-700 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full translate-x-1/3 translate-y-1/3 opacity-20"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden transform transition-all duration-1000 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Our team collaborating" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
              </div>
              
              <div className="z-10 absolute -bottom-6 -right-6 w-40 h-40 bg-white rounded-lg shadow-xl p-3 transform transition-all duration-700 hover:scale-110 hover:rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Technology innovation" 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              
              <div className="z-10 absolute top-10 -left-6 bg-white rounded-lg p-4 shadow-xl transform transition-all duration-700 hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-lg">
              <div className="flex items-center mb-4 opacity-0 transition-all duration-700 delay-100">
                <div className="w-8 h-px bg-blue-400"></div>
                <span className="px-3 text-blue-400 font-medium uppercase tracking-wider text-sm">About Company</span>
                <div className="w-8 h-px bg-blue-400"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 opacity-0 transition-all duration-700 delay-200">
                Navigating Tech Horizons <span className="text-blue-300">Together</span>
              </h2>
              
              <p className="text-lg text-blue-100 mb-8 opacity-0 transition-all duration-700 delay-300">
                We are a team of passionate technologists dedicated to helping businesses transform through innovative digital solutions. With expertise across the entire technology stack, we deliver results that drive growth and efficiency.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 opacity-0 transition-all duration-700 delay-400 hover:bg-white/15">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-semibold">Back-End Development</h3>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 opacity-0 transition-all duration-700 delay-500 hover:bg-white/15">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-semibold">Product Design</h3>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <div className="text-center opacity-0 transition-all duration-700 delay-600">
                  <div className="text-3xl font-bold text-white mb-1">
                    <span className="counter-number">150</span>+
                  </div>
                  <div className="text-blue-200 text-sm font-medium">Projects Done</div>
                </div>
                
                <div className="text-center opacity-0 transition-all duration-700 delay-700">
                  <div className="text-3xl font-bold text-white mb-1">
                    <span className="counter-number">170</span>+
                  </div>
                  <div className="text-blue-200 text-sm font-medium">Happy Clients</div>
                </div>
                
                <div className="text-center opacity-0 transition-all duration-700 delay-800">
                  <div className="text-3xl font-bold text-white mb-1">
                    <span className="counter-number">10</span>+
                  </div>
                  <div className="text-blue-200 text-sm font-medium">Team Members</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .about-section.animate-in .opacity-0 {
          opacity: 1;
          transform: translateY(0);
        }
        
        .about-section .opacity-0 {
          transform: translateY(20px);
        }
        
        .counter-number {
          background: linear-gradient(90deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default About;