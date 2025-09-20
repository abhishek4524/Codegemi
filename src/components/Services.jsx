import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Service data with images from assets
  const services = [
    {
      id: 1,
      title: "UiPath Automation",
      description: "UiPath automation drives the transformation and continuous evolution of hosting services by fostering collaboration, innovation, efficiency, and intelligent solutions across industries.",
      img: assets.UipathAutomation_HOMEPAGEICON,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      id: 2,
      title: "Application Development",
      description: "Application software drives innovation, strengthens digital foundations, and leverages AI to deliver intelligent, future-ready solutions that transform industries.",
      img: assets.ApplicationDevelopments_HOMEPAGEICON,
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      id: 3,
      title: "Software Development",
      description: "Software development empowers innovation, strengthens digital foundations, and uses AI technology to accelerate advanced solutions that are intelligent, future-ready, and built to transform industries.",
      img: assets.SoftwareDevelopments_HOMEPAGEICON,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      id: 4,
      title: "Web Development",
      description: "Web development partnerships build strong foundations, foster innovation, and drive the evolution of cutting-edge digital services, delivering intelligent, transformative, and future-ready solutions.",
      img: assets.WebDevelopments_HOMEPAGEICON,
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      id: 5,
      title: "Cloud Solutions",
      description: "Our cloud solutions provide scalable, secure, and cost-effective infrastructure to support your business growth and digital transformation journey.",
      img: assets.Cloud_HOMEPAGEICON,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      id: 6,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics solutions, helping you make informed business decisions.",
      img: assets.DataAnalyticsIcon,
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    },
    {
      id: 7,
      title: "Cybersecurity",
      description: "Protect your business from cyber threats with our comprehensive security solutions, including threat detection and prevention systems.",
      img: assets.Cybersecurityicon,
      color: "text-pink-600",
      bgColor: "bg-pink-100"
    },
    {
      id: 8,
      title: "IT Consulting",
      description: "Get expert advice on technology strategy, digital transformation, and IT infrastructure optimization tailored to your business needs.",
      img: assets.ITConsultingIcon,
      color: "text-teal-600",
      bgColor: "bg-teal-100"
    }
  ];

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span className="text-indigo-600 font-medium">Our Services</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tailored IT Solutions for Your Business Needs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide cutting-edge technology services to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleServices.map((service, index) => (
            <div 
              key={service.id}
              className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-700 hover:shadow-xl hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-lg ${service.bgColor} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                <img src={service.img} alt={service.title} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700 inline-flex items-center group/link">
                Read more 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover/link:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
          >
            {showAll ? 'Show Less' : 'View All Services'}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 ml-2 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;