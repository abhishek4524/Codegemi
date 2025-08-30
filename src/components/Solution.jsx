import React, { useState, useEffect } from 'react';

const Solution = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="solution-section relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background decoration */}
        <div className="absolute top-10 right-10 opacity-10 animate-pulse-slow">
          <svg width="150" height="150" viewBox="0 0 150 150" className="rotate-360">
            <path d="M75 25C75 25 90 30 90 45C90 60 75 65 75 65C75 65 60 60 60 45C60 30 75 25 75 25Z" fill="#4F46E5" />
            <path d="M105 60C105 60 120 65 120 80C120 95 105 100 105 100C105 100 90 95 90 80C90 65 105 60 105 60Z" fill="#7C3AED" />
            <path d="M45 60C45 60 60 65 60 80C60 95 45 100 45 100C45 100 30 95 30 80C30 65 45 60 45 60Z" fill="#10B981" />
            <path d="M75 95C75 95 90 100 90 115C90 130 75 135 75 135C75 135 60 130 60 115C60 100 75 95 75 95Z" fill="#F59E0B" />
          </svg>
        </div>

        <div className={`relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.2\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
          </div>

          <div className="relative z-10 px-6 py-12 md:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="w-full lg:w-1/2">
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center mb-4 px-4 py-2 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium animate-pulse">
                    <span className="mr-2">✨</span> How we do
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                    Amazing Solutions For Your Business Growth
                  </h2>
                  
                  <p className="text-lg text-indigo-100 mb-8 max-w-xl">
                    We don't believe in a one-size-fit-all approach. Our services are carefully customized to suit your specific needs, ensuring you achieve your goals efficiently and effectively.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/contact" className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-lg hover:ring-1 hover:ring-purple-500">
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-indigo-100"></span>
                      <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-indigo-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                      <span className="relative">HOW IT WORKS</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>
                    
                    <a href="/services" className="group inline-flex items-center justify-center px-6 py-3 font-medium text-white transition duration-300 ease-out rounded-full hover:bg-white hover:bg-opacity-15 border border-white border-opacity-30">
                      <span>OUR SERVICES</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="relative max-w-md">
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                      alt="Business solutions" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-bounce-slow"></div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-400 rounded-full opacity-20 animate-pulse-slow"></div>
                  
                  <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white rounded-lg shadow-lg p-3 animate-float">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                      <span className="text-xs font-semibold text-gray-700">24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes rotate-360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s infinite;
        }
        .rotate-360 {
          animation: rotate-360 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Solution;