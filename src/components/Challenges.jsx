import React, { useState, useEffect } from 'react';

const Challenges = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const capabilities = [
    {
      title: "Turing AGI Advancement",
      description: "Focused on advancing AGI capabilities, Turing AGI Advancement combines scalable data systems, human intelligence, and cutting-edge model post-training to drive the future of AI development.",
      features: [
        {
          title: "Model Evaluation",
          description: "Comprehensive assessment of AI models for performance and accuracy.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )
        },
        {
          title: "LLM Training and Development",
          description: "End-to-end training pipelines for large language models with optimized performance.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          )
        },
        {
          title: "Multimodal LLM",
          description: "Integration of multiple data modalities for more comprehensive AI solutions.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Solve your complex AI<br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              challenges
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Turing's dual-unit approach advances your AGI progress, then applies those
            advancements to your real-world challenges—ensuring innovations are paired with
            practical implementation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <div className={`lg:w-1/3 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-gradient-to-br from-blue-800/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 shadow-xl">
              <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">CAPABILITIES</span>
              <div className="mt-6">
                <h3 className="text-2xl font-bold mb-4">{capabilities[activeTab].title}</h3>
                <p className="text-blue-100 leading-relaxed">
                  {capabilities[activeTab].description}
                </p>
              </div>
            </div>
          </div>

          {/* Capability Cards */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities[activeTab].features.map((feature, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br from-gray-800 to-blue-900/70 rounded-2xl p-6 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-xl group backdrop-blur-sm ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className="bg-blue-700/20 rounded-xl p-3 w-16 h-16 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <div className="text-blue-300 group-hover:text-blue-100 transition-colors">
                      {feature.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-blue-300 transition-colors">{feature.title}</h4>
                  <p className="text-blue-100/80 text-sm leading-relaxed">{feature.description}</p>
                  <div className="mt-4 flex items-center text-blue-300 group-hover:text-blue-200 transition-colors">
                    <span className="text-sm font-medium">Learn more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Visual Element */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center bg-blue-800/30 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-500/20">
            <div className="h-2 w-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm text-blue-200">Advanced AI Research Division</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;