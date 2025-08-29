// components/Partners.js
import React, { useEffect, useState } from 'react';

const Partners = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
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
  ];

  // Duplicate the partners for seamless looping
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with innovative companies worldwide to deliver exceptional solutions
          </p>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll">
            {duplicatedPartners.map((partner, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-8 flex flex-col items-center justify-center"
                style={{ width: '280px' }}
              >
                <div className={`transition-all duration-500 hover:scale-105 p-6 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center h-40 w-full`}>
                  <div className="mb-4 flex items-center justify-center h-12">
                    {partner.logo}
                  </div>
                  <p className={`text-lg font-semibold ${partner.color} mt-2`}>
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient fades for smooth edges */}
          <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
            Become a Partner
          </button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-280px * ${partners.length}));
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
          display: flex;
          width: calc(280px * ${partners.length * 2});
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;