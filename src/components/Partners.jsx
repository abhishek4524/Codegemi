// components/Partners.js
import React, { useEffect, useState } from 'react';

const Partners = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = () => {
      setIsReducedMotion(mediaQuery.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Partners data with logos and names
  const partners = [
    { 
      name: 'Razorpay', 
      logo: (
        <svg className="w-20 h-10" viewBox="0 0 128 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48.5 20C48.5 26.9036 42.9036 32.5 36 32.5C29.0964 32.5 23.5 26.9036 23.5 20C23.5 13.0964 29.0964 7.5 36 7.5C42.9036 7.5 48.5 13.0964 48.5 20Z" stroke="#2D8CFF" strokeWidth="5"/>
          <path d="M64 12H56V28H64V12Z" fill="#2D8CFF"/>
          <path d="M80 12H72V28H80V12Z" fill="#2D8CFF"/>
          <path d="M104 12H96V28H104V12Z" fill="#2D8CFF"/>
          <path d="M120 12H112V28H120V12Z" fill="#2D8CFF"/>
        </svg>
      ),
      color: 'text-indigo-600'
    },
    { 
      name: 'Dropbox', 
      logo: (
        <svg className="w-20 h-10" viewBox="0 0 128 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 8L16 18L32 28L48 18L32 8Z" fill="#0061FF"/>
          <path d="M48 18L32 28L48 38L64 28L48 18Z" fill="#0061FF"/>
          <path d="M32 28L16 38L32 48L48 38L32 28Z" fill="#0061FF"/>
          <path d="M80 18L64 28L80 38L96 28L80 18Z" fill="#0061FF"/>
          <path d="M96 8L80 18L96 28L112 18L96 8Z" fill="#0061FF"/>
        </svg>
      ),
      color: 'text-blue-500'
    },
    { 
      name: 'Contentful', 
      logo: (
        <svg className="w-20 h-10" viewBox="0 0 128 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 8C53 8 44 17 44 28C44 39 53 48 64 48C75 48 84 39 84 28C84 17 75 8 64 8Z" fill="#FF6B6B"/>
          <path d="M44 28C44 17 53 8 64 8V48C53 48 44 39 44 28Z" fill="#4ECDC4"/>
          <path d="M64 8C75 8 84 17 84 28C84 39 75 48 64 48V8Z" fill="#5563FF"/>
        </svg>
      ),
      color: 'text-purple-600'
    },
    { 
      name: 'Culture Amp', 
      logo: (
        <svg className="w-20 h-10" viewBox="0 0 128 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12H16V28H24V12Z" fill="#FF6B6B"/>
          <path d="M40 12H32V28H40V12Z" fill="#4ECDC4"/>
          <path d="M56 12H48V28H56V12Z" fill="#5563FF"/>
          <path d="M72 12H64V28H72V12Z" fill="#FFD166"/>
          <path d="M88 12H80V28H88V12Z" fill="#06D6A0"/>
        </svg>
      ),
      color: 'text-pink-600'
    },
    { 
      name: 'Airtable', 
      logo: (
        <svg className="w-20 h-10" viewBox="0 0 128 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 8L8 16L24 24L40 16L24 8Z" fill="#FF6B6B"/>
          <path d="M24 24L8 32L24 40L40 32L24 24Z" fill="#4ECDC4"/>
          <path d="M56 8L40 16L56 24L72 16L56 8Z" fill="#5563FF"/>
          <path d="M56 24L40 32L56 40L72 32L56 24Z" fill="#FFD166"/>
          <path d="M88 8L72 16L88 24L104 16L88 8Z" fill="#06D6A0"/>
          <path d="M88 24L72 32L88 40L104 32L88 24Z" fill="#FF6B6B"/>
        </svg>
      ),
      color: 'text-orange-500'
    },
    { 
      name: 'Slack', 
      logo: (
        <svg className="w-20 h-10" viewBox="0 0 128 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28 8C28 12.4183 24.4183 16 20 16C15.5817 16 12 12.4183 12 8C12 3.58172 15.5817 0 20 0C24.4183 0 28 3.58172 28 8Z" fill="#E01E5A"/>
          <path d="M60 8C60 12.4183 56.4183 16 52 16C47.5817 16 44 12.4183 44 8C44 3.58172 47.5817 0 52 0C56.4183 0 60 3.58172 60 8Z" fill="#36C5F0"/>
          <path d="M28 32C28 36.4183 24.4183 40 20 40C15.5817 40 12 36.4183 12 32C12 27.5817 15.5817 24 20 24C24.4183 24 28 27.5817 28 32Z" fill="#2EB67D"/>
          <path d="M60 32C60 36.4183 56.4183 40 52 40C47.5817 40 44 36.4183 44 32C44 27.5817 47.5817 24 52 24C56.4183 24 60 27.5817 60 32Z" fill="#ECB22E"/>
        </svg>
      ),
      color: 'text-yellow-500'
    },
  ];

  // Duplicate the partners for seamless looping (only if not reduced motion)
  const duplicatedPartners = isReducedMotion ? partners : [...partners, ...partners];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 overflow-hidden relative">
      {/* Simplified animated background elements */}
      {!isReducedMotion && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full opacity-10"
              style={{
                width: `${60 + i * 20}px`,
                height: `${60 + i * 20}px`,
                top: `${10 + i * 15}%`,
                left: `${5 + i * 10}%`,
                background: `radial-gradient(circle, ${i % 3 === 0 ? '#6366F1' : i % 3 === 1 ? '#06B6D4' : '#8B5CF6'} 0%, transparent 70%)`,
                animation: `float 20s ease-in-out infinite`,
                animationDelay: `${i * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative inline-block">
            Trusted by Industry Leaders
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We partner with the world's most innovative companies to deliver exceptional solutions
          </p>
        </div>
        
        <div className="relative mb-20">
          <div className={`flex ${isReducedMotion ? 'flex-wrap justify-center gap-8' : 'animate-scroll'}`}>
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={index} 
                className={`${isReducedMotion ? 'w-64' : 'flex-shrink-0 px-8'}`}
                style={!isReducedMotion ? { width: '300px' } : {}}
              >
                <div className="transition-all duration-300 hover:scale-105 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-white/50 flex flex-col items-center justify-center h-48 w-full relative overflow-hidden">
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-cyan-50 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Simplified animated border on hover */}
                  {!isReducedMotion && (
                    <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" 
                           style={{ backgroundSize: '200% 200%' }}></div>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="mb-5 flex items-center justify-center h-12 transform hover:scale-105 transition-transform duration-300">
                      {partner.logo}
                    </div>
                    <p className={`text-lg font-semibold ${partner.color} mt-2 hover:translate-y-0.5 transition-transform duration-300`}>
                      {partner.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient fades for smooth edges (only when scrolling) */}
          {!isReducedMotion && (
            <>
              <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-indigo-50 to-transparent z-10"></div>
              <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-cyan-50 to-transparent z-10"></div>
            </>
          )}
        </div>
        
        <div className="text-center relative">
          <button className="relative px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group overflow-hidden">
            <span className="relative z-10">Become a Partner</span>
            
            {/* Button hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Simplified shine effect */}
            {!isReducedMotion && (
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
            )}
          </button>
          
          <p className="mt-6 text-gray-500 text-lg">
            Join our growing network of industry leaders
          </p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-300px * ${partners.length}));
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
          }
        }
        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 200%;
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          display: flex;
          width: calc(300px * ${partners.length * 2});
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll,
          .animate-float,
          .animate-border-rotate,
          .animate-shine {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;