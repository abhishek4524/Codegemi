import React, { useState, useEffect, useRef } from 'react';

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);
  
  const teamMembers = [
    {
      id: 1,
      name: "Vikul Singhaniya",
      role: "PhD, IIT Bombay",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      id: 2,
      name: "Shikha Sharma",
      role: "M.Tech (KIET)",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
    },
    {
      id: 3,
      name: "Deepak Kumar",
      role: "B.Tech (AKTU)",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      id: 4,
      name: "Tanya Arora",
      role: "B.Tech (AKTU)",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
    },
    {
      id: 5,
      name: "Arun Kumar",
      role: "M.Tech (ABES)",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=798&q=80"
    },
    {
      id: 6,
      name: "Kajol Kori",
      role: "B.Tech (AKTU)",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % teamMembers.length);
      }, 3000);
    };

    const stopAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

    startAutoScroll();

    // Clean up on component unmount
    return () => stopAutoScroll();
  }, [teamMembers.length]);

  // Handle manual navigation
  const goToNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % teamMembers.length);
  };

  const goToPrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section className="team-section py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="title-wrap mb-12 flex flex-col md:flex-row justify-between items-center">
          <div className="section-title text-center md:text-left mb-8 md:mb-0">
            <div className="subtitle flex items-center justify-center md:justify-start mb-4">
              <span className="text-indigo-600 font-semibold tracking-wide">OUR EXPERT TEAM</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Introducing Our Dedicated Team of Experts
            </h2>
          </div>
          <div className="arrow-btn flex space-x-4">
            <button 
              onClick={goToPrev}
              className="slider-arrow w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              onClick={goToNext}
              className="slider-arrow w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <div className="slider-container relative overflow-hidden">
          <div 
            ref={sliderRef}
            className="slider-track flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
          >
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="slider-item px-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 transition-all duration-500"
              >
                <div className="team-card bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500">
                  <div className="team-card-thumb relative overflow-hidden">
                    <div className="aspect-w-3 aspect-h-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="object-cover w-full h-80 transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="social-profile p-4 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <ul className="flex justify-center space-x-4">
                          <li>
                            <a href="#" className="text-white hover:text-indigo-300 transition-colors duration-300">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-white hover:text-indigo-300 transition-colors duration-300">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 极 01-1.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-white hover:text-indigo-300 transition-colors duration-300">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 极 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="team-card-body p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-indigo-600 font-medium">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;