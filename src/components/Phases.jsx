import React, { useState, useEffect, useRef } from 'react';

const Phases = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const phases = [
    {
      title: "Idea Creation",
      description: "We brainstorm and conceptualize innovative solutions tailored to your business needs and market opportunities.",
      icon: "✨",
      color: "from-blue-400 to-cyan-400",
      gradient: "bg-gradient-to-r from-blue-400 to-cyan-400"
    },
    {
      title: "Screening",
      description: "We evaluate ideas against strategic, technical, and financial criteria to select the most promising concepts.",
      icon: "🔍",
      color: "from-purple-400 to-pink-400",
      gradient: "bg-gradient-to-r from-purple-400 to-pink-400"
    },
    {
      title: "Concept Development",
      description: "We transform selected ideas into detailed concepts with specifications, user flows, and initial designs.",
      icon: "📋",
      color: "from-amber-400 to-orange-400",
      gradient: "bg-gradient-to-r from-amber-400 to-orange-400"
    },
    {
      title: "Product Development",
      description: "Our expert team builds your product with agile methodologies, ensuring quality at every development stage.",
      icon: "🛠️",
      color: "from-emerald-400 to-teal-400",
      gradient: "bg-gradient-to-r from-emerald-400 to-teal-400"
    },
    {
      title: "Commercialisation & Roll-out",
      description: "We help you launch successfully with marketing strategies, user training, and ongoing support plans.",
      icon: "🚀",
      color: "from-rose-400 to-red-400",
      gradient: "bg-gradient-to-r from-rose-400 to-red-400"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:50px_50px]"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4 transform transition-all duration-700 hover:scale-110">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse">Process</span>
          </h2>
          <div className="flex justify-center">
            <div className="max-w-3xl">
              <p className="mb-6 text-xl text-blue-100">
                From idea creation to commercialisation, we guide you through every step of product development to ensure sustainable growth and success.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop view - Enhanced Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Main timeline line with gradient */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-purple-400/30 transform -translate-y-1/2 rounded-full"></div>
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-white/10 transform -translate-y-1/2 rounded-full"></div>
            
            <div className="relative flex justify-between mb-20">
              {phases.map((phase, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col items-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setActivePhase(index)}
                  onClick={() => setActivePhase(index)}
                >
                  {/* Connecting line with gradient */}
                  {index < phases.length - 1 && (
                    <div className={`absolute top-1/2 left-1/2 w-full h-1 bg-gradient-to-r ${phase.color} transform -translate-y-1/2 -z-10 transition-all duration-1000 ${activePhase >= index ? 'opacity-70' : 'opacity-0'}`}></div>
                  )}
                  
                  {/* Timeline node with glow effect */}
                  <div 
                    className={`relative w-20 h-20 rounded-2xl border-2 border-white/20 flex items-center justify-center cursor-pointer transition-all duration-500 transform ${activePhase === index ? 'scale-125 -translate-y-3 bg-gradient-to-br ' + phase.color + ' shadow-2xl' : 'bg-gray-800/60 backdrop-blur-md hover:scale-110 hover:-translate-y-1'}`}
                    style={{ 
                      boxShadow: activePhase === index ? `0 0 30px 5px rgba(var(--color-${phase.color.split('to-')[1].split('-')[1]}-500), 0.5)` : 'none'
                    }}
                  >
                    <div className="text-3xl transform transition-transform duration-700 hover:rotate-12">{phase.icon}</div>
                    
                    {/* Active indicator */}
                    {activePhase === index && (
                      <>
                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white animate-ping"></div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white"></div>
                      </>
                    )}
                  </div>
                  
                  {/* Phase title */}
                  <div className={`absolute -bottom-14 text-center transition-all duration-500 ${activePhase === index ? 'text-white font-bold scale-110' : 'text-blue-200/80'}`}>
                    <div className="text-lg font-semibold whitespace-nowrap">{phase.title}</div>
                    <div className={`h-1 w-12 mx-auto mt-2 rounded-full bg-gradient-to-r ${phase.color} transition-all duration-500 ${activePhase === index ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Phase description */}
            <div className={`mt-4 p-8 bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-white/10 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} shadow-xl`}>
              <div className="flex items-start">
                <div className={`flex items-center justify-center w-20 h-20 rounded-xl ${phases[activePhase].gradient} mr-6 text-3xl transform transition-all duration-700 hover:rotate-12`}>
                  {phases[activePhase].icon}
                </div>
                <div className="flex-1">
                  <h3 className="mb-4 text-3xl font-bold text-white">{phases[activePhase].title}</h3>
                  <p className="text-lg text-blue-100 max-w-3xl leading-relaxed">{phases[activePhase].description}</p>
                  
                  <div className="flex items-center mt-8">
                    <div className="flex items-center text-blue-200">
                      <span className="mr-3 text-sm font-medium">{activePhase + 1} of {phases.length}</span>
                      <div className="flex space-x-1">
                        {phases.map((_, index) => (
                          <div 
                            key={index} 
                            className={`h-2 rounded-full transition-all duration-500 ${index === activePhase ? 'w-6 bg-white' : 'w-2 bg-white/30 hover:bg-white/60'}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                    <div className="ml-auto flex space-x-3">
                      <button 
                        className="px-5 py-2.5 text-sm font-medium text-white bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                        onClick={() => setActivePhase(activePhase > 0 ? activePhase - 1 : phases.length - 1)}
                      >
                        ← Previous
                      </button>
                      <button 
                        className="px-5 py-2.5 text-sm font-medium text-white bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                        onClick={() => setActivePhase((activePhase + 1) % phases.length)}
                      >
                        Next Phase →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile view - Enhanced Cards */}
        <div className="lg:hidden space-y-6">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-gray-800/30 backdrop-blur-md border border-white/10 transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${activePhase === index ? 'ring-2 ring-white/20 scale-[1.02]' : 'hover:scale-[1.01]'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setActivePhase(activePhase === index ? -1 : index)}
            >
              <div className="flex items-center p-6 cursor-pointer">
                <div className={`flex items-center justify-center w-14 h-14 rounded-xl ${phase.gradient} mr-4 text-xl transform transition-transform duration-500 hover:rotate-12`}>
                  {phase.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                <div className="ml-auto transform transition-transform duration-300">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-6 w-6 text-white transition-transform duration-500 ${activePhase === index ? 'rotate-180' : ''}`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              <div className={`overflow-hidden transition-all duration-700 ${activePhase === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6">
                  <div className="h-px bg-white/10 mb-4"></div>
                  <p className="text-blue-100 leading-relaxed">{phase.description}</p>
                  <div className="flex items-center mt-6">
                    <div className="text-sm text-blue-200/70">
                      {index + 1} of {phases.length}
                    </div>
                    <div className="ml-auto flex space-x-2">
                      <button 
                        className="px-3 py-1.5 text-xs font-medium text-white bg-white/10 rounded-md hover:bg-white/20 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePhase(index > 0 ? index - 1 : phases.length - 1);
                        }}
                      >
                        ← Prev
                      </button>
                      <button 
                        className="px-3 py-1.5 text-xs font-medium text-white bg-white/10 rounded-md hover:bg-white/20 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePhase((index + 1) % phases.length);
                        }}
                      >
                        Next →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg); 
          }
          33% { 
            transform: translateY(-20px) translateX(15px) rotate(5deg); 
          }
          66% { 
            transform: translateY(10px) translateX(-15px) rotate(-5deg); 
          }
        }
        
        .bg-grid-white/10 {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

export default Phases;