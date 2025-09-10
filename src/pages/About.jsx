import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, Users, Rocket, Globe, ArrowLeft, ArrowRight } from "lucide-react"; // lucide-react icons (you can change)
import { motion } from "framer-motion";
import { assets } from '../assets/assets';


const clients = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
  { name: "Adobe", logo: "https://logos-world.net/wp-content/uploads/2023/07/Adobe-Logo-New.png" },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" }
];

const About = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const headerRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  
const stats = [
  { value: "10K", label: "Active Users", plus: true, icon: <Users size={40} /> },
  { value: "500", label: "Projects Completed", plus: true, icon: <Award size={40} /> },
  { value: "50", label: "Countries Reached", plus: true, icon: <Globe size={40} /> },
  { value: "99", label: "Client Satisfaction %", plus: false, icon: <Rocket size={40} /> },
];

  useEffect(() => {
    // Initialize animations when component mounts
    const initAnimations = () => {
      // Add scroll animation triggers
      const animateOnScroll = () => {
        const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');
        
        elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const elementBottom = element.getBoundingClientRect().bottom;
          const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
          
          if (isVisible) {
            element.classList.add('animate');
          }
        });
      };

      window.addEventListener('scroll', animateOnScroll);
      animateOnScroll(); // Initial check

      // Auto-rotate projects
      const projectInterval = setInterval(() => {
        setCurrentProjectIndex(prev => (prev + 1) % projects.length);
      }, 4000);

      // Auto-rotate clients
      const clientInterval = setInterval(() => {
        setCurrentClientIndex(prev => (prev + 1) % clients.length);
      }, 2000);

      return () => {
        window.removeEventListener('scroll', animateOnScroll);
        clearInterval(projectInterval);
        clearInterval(clientInterval);
      };
    };

    initAnimations();
  }, []);

  const nextProject = () => {
    setCurrentProjectIndex(prev => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex(prev => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    // Add any JavaScript needed for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe elements with the fade-in class
    document.querySelectorAll('.fade-in-element').forEach((el) => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);


  const services = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance and user experience."
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Mobile Apps",
    description: "Cross-platform mobile applications that deliver seamless experiences on both iOS and Android devices."
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "UI/UX Design",
    description: "User-centered designs that enhance engagement, improve usability, and drive conversions."
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that increase visibility, engagement, and customer acquisition."
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "E-Commerce Solutions",
    description: "Complete online store development with secure payment integration and inventory management."
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "Cloud Services",
    description: "Scalable cloud infrastructure solutions that ensure reliability, security, and performance."
  }
];

  return (
    <div className="font-sans text-gray-800">
      <Navbar />
      
      {/* Hero/Breadcrumb Section */}
<div
  className="relative py-24 md:py-32 overflow-hidden min-h-screen flex items-center"
  style={{ backgroundImage: `url(${assets.AboutusImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-800 opacity-70"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute top-0 right-0 -mr-40 mt-10 opacity-10 animate-pulse-slow">
          <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
            <path d="M200 0v400M0 200h400" stroke="white" strokeWidth="2" />
            <path d="M100 0v400M0 100h400" stroke="white" strokeWidth="1" />
            <path d="M300 0v400M0 300h400" stroke="white" strokeWidth="1" />
          </svg>
        </div>
        
        {/* Floating circles for depth */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-600 opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-blue-500 opacity-30 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full bg-indigo-500 opacity-40 animate-float animation-delay-4000"></div>
        
        {/* Animated gradient orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-radial-gradient from-blue-400/10 to-transparent rounded-full filter blur-xl animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 fade-in-element transform transition-all duration-1000 translate-y-10 opacity-0">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Us</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 fade-in-element transform transition-all duration-1000 delay-300 translate-y-10 opacity-0">
              We are a passionate team dedicated to creating extraordinary digital experiences that make a difference.
            </p>
            
            {/* Breadcrumb with animation */}
            <ul className="flex justify-center space-x-2 text-white fade-in-element transform transition-all duration-1000 delay-500 translate-y-10 opacity-0">
              <li>
                <a href="/" className="hover:text-cyan-300 transition-colors duration-300 flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Home
                  </span>
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-chevron-right text-sm mx-2 text-blue-300"></i>
              </li>
              <li className="text-cyan-300 font-medium flex items-center">
                <span className="animate-pulse">About Us</span>
              </li>
            </ul>
            
            {/* Scroll indicator */}
            <div className="mt-16 fade-in-element transform transition-all duration-1000 delay-700 translate-y-10 opacity-0">
              <div className="animate-bounce w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-blue-300 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
<section 
className="py-16 md:py-24 px-4 bg-gradient-to-br from-blue-50 to-indigo-50"
 style={{ backgroundImage: `url(${assets.serviceBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
>
  <div className="container mx-auto max-w-6xl">
    <div className="flex flex-col lg:flex-row items-center">
      {/* Image Section */}
      <div className="lg:w-1/2 mb-12 lg:mb-0 relative">
        {/* Experience Badge */}
        <img 
          src={assets.circle} 
          alt="Experience Badge" 
          className="absolute -top-12 -right-12 w-30 h-30 rounded-full flex items-center justify-center p-2 z-20 animate-bounce"
        />
        {/* Main Image */}
    <div className="relative max-w-4xl mx-auto">
      {/* Main image container */}
      <div className={`
        relative rounded-2xl overflow-hidden 
        shadow-2xl transform transition-all duration-1000 
        hover:shadow-3xl ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}
      `}>
        <img 
          src={assets.AboutusImage2} 
          alt="Our team collaborating in a modern office" 
          className="w-full h-auto transform transition-transform duration-700 hover:scale-105"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 flex items-end p-6">
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-1">Collaborative Teamwork</h3>
            <p className="text-sm">Working together to achieve excellence</p>
          </div>
        </div>
      </div>

      {/* Secondary image */}
      <div className={`
        absolute -bottom-6 -right-4 w-2/5
        rounded-2xl overflow-hidden shadow-2xl 
        transform transition-all duration-1000
        hover:shadow-3xl hover:-translate-y-2
        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
      `}>
        <img 
          src={assets.AboutusImage3} 
          alt="Team discussion and planning" 
          className="w-full h-auto transform transition-transform duration-700 hover:scale-105"
        />
        
        {/* Floating indicator */}
        <div className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full bg-white/90 shadow-md">
          <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -z-10 top-6 -left-6 w-24 h-24 rounded-full bg-blue-100 opacity-70"></div>
      <div className="absolute -z-10 bottom-10 -right-6 w-16 h-16 rounded-full bg-blue-200 opacity-50"></div>
    </div>

      </div>
      
      {/* Content Section */}
      <div className="lg:w-1/2 lg:pl-16">
        <div className="mb-8">
<div className="inline-flex items-center justify-center text-blue-600 font-semibold mb-4 px-6 py-2 bg-blue-100 rounded-full shadow-sm">
  {/* Left Arrow */}
  <ArrowLeft className="h-4 w-4 mr-3 text-blue-600" />

  {/* Center Text */}
  <span className="text-sm tracking-wide">
    ABOUT CODEGEMI TECHNOLOGY
  </span>

  {/* Right Arrow */}
  <ArrowRight className="h-4 w-4 ml-3 text-blue-600" />
</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            We are Increasing Business Success with Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Technology</span>
          </h2>
        </div>
        
        <p className="text-gray-700 mb-8 text-lg leading-relaxed fade-in">
Working with CodeGemi Solutions was an absolute pleasure. Their team is dedicated, professional, and consistently brings a positive, solutions-focused approach. For reliable and high-quality software solutions, I wholeheartedly recommend CodeGemi.
        </p>
        
        <div className="space-y-8 mb-10">
          <div className="flex items-start fade-in">
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 rounded-full mr-5 flex-shrink-0">
              <img src={assets.problemSolvingIcon} alt="Innovative Problem Solving" className="h-7 w-7 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2 text-gray-800">Innovative Problem Solving</h4>
              <p className="text-gray-600">
                Creative solutions powered by cutting-edge technology and AI-driven insights that transform challenges into opportunities.
              </p>
            </div>
          </div>
          
          <div className="flex items-start fade-in">
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 rounded-full mr-5 flex-shrink-0">
              <img src={assets.mission} alt="Mission & Vision" className="h-7 w-7 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2 text-gray-800">Mission & Vision</h4>
              <p className="text-gray-600">
                Empowering businesses through innovative technology solutions for a digital future where technology serves humanity.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 fade-in">
          <a href="/about" className="group relative bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center shadow-lg hover:shadow-xl">
            <span>Explore More</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          
          <div className="flex items-center bg-white p-3 rounded-xl shadow-sm">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                   alt="Deepak Khotiyan" 
                   className="h-14 w-14 rounded-full object-cover border-2 border-white shadow-md" />
              <div className="absolute bottom-0 right-0 h-4 w-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="ml-4">
              <h6 className="font-bold text-gray-800">Deepak Khotiyan</h6>
              <p className="text-sm text-gray-600">Co-Founder & CTO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Services Section */}
<section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 px-4">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-16">
      <div className="inline-flex items-center text-blue-600 font-semibold mb-4 px-4 py-2 bg-blue-100 rounded-full">
        <div className="h-2 w-2 bg-blue-600 rounded-full mr-2"></div>
        <span>OUR SERVICES</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        Transform Your Business With Our <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Solutions</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        We offer end-to-end digital solutions that help businesses grow, innovate, and succeed in the digital age.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div 
          key={index} 
          className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 fade-in relative overflow-hidden"
          style={{animationDelay: `${0.2 + index * 0.1}s`}}
        >
          {/* Hover effect background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
          
          {/* Icon container */}
          <div className="text-white text-2xl mb-6 inline-flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:from-blue-600 group-hover:to-indigo-700 transition-all duration-500 shadow-md">
            {service.icon}
          </div>
          
          {/* Content */}
          <div className="relative">
            <h5 className="font-bold text-xl mb-4 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">{service.title}</h5>
            <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
            <a href="/services" className="text-blue-600 font-semibold flex items-center group/link">
              <span className="mr-2">Learn More</span>
              <svg className="w-5 h-5 ml-1 group-hover/link:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          {/* Number badge */}
          <div className="absolute top-6 right-6 text-6xl font-bold text-gray-100 z-0">
            {index + 1}
          </div>
        </div>
      ))}
    </div>
    
    {/* CTA Section */}
    <div className="text-center mt-16 fade-in">
      <p className="text-gray-600 mb-8 text-lg">Ready to transform your business?</p>
      <a 
        href="/contact" 
        className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <span>Start Your Project</span>
        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
  </div>
</section>

      {/* Stats Section */}
 <section className="relative py-20 bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-900 text-white px-6 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-14">
          Our <span className="text-purple-300">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-white/20"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="mb-4 text-purple-300 group-hover:text-white transition-colors">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="counter">{stat.value}</span>
                {stat.plus && "+"}
              </h3>
              <p className="text-blue-200 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Projects Section */}
<section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <p className="text-blue-600 font-semibold tracking-wide uppercase mb-2">
              OUR WORK
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Discover Our Latest Innovative Projects
            </h2>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={prevProject}
              className="bg-gray-200 hover:bg-gray-300 h-12 w-12 rounded-full flex items-center justify-center shadow-md transition-all hover:scale-105"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextProject}
              className="bg-blue-600 hover:bg-blue-700 text-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Project Card */}
        <motion.div
          key={currentProjectIndex}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden shadow-2xl relative group cursor-pointer"
        >
          <img
            src={projects[currentProjectIndex].image}
            alt={projects[currentProjectIndex].title}
            className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <p className="text-blue-300 font-semibold text-sm uppercase tracking-wider">
              {projects[currentProjectIndex].category}
            </p>
            <h4 className="text-3xl font-bold my-3 drop-shadow-lg">
              {projects[currentProjectIndex].title}
            </h4>
            <a
              href="/project-details"
              className="inline-flex items-center justify-center h-12 w-12 bg-blue-600 rounded-full hover:bg-blue-700 transition-all hover:scale-110 shadow-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>


      {/* Team Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <div className="text-blue-600 font-semibold mb-2">
                <span>OUR TEAM</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Meet Our Creative Experts
              </h2>
            </div>
            <div className="fade-in">
              <a href="/team" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center group">
                View All Team 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 fade-in" style={{animationDelay: `${0.3 + index * 0.1}s`}}>
                <div className="relative group">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <div className="flex items-center space-x-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <a href="#" className="text-white h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="text-white h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-white h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
 <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
      {/* Background blur shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Trusted By Industry Leaders
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            We've had the privilege of collaborating with some of the most 
            innovative companies in the world.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-lg border border-gray-100 p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all flex items-center justify-center h-32 group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-14 object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
      
      <Footer />
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .bg-radial-gradient {
          background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
        }
        
        .fade-in-element {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .fade-in-element.animate-fadeInUp {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

// Data for services
const services = [
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance."
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices."
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
    title: "Software Development",
    description: "Custom software solutions tailored to your specific business needs and requirements."
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: "RPA Automation",
    description: "Robotic Process Automation solutions to streamline your business processes."
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for businesses of all sizes."
  },
  {
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance engagement and conversion rates."
  }
];

// Data for stats
const stats = [
  { value: 50, plus: true, label: "Projects Completed" },
  { value: 25, plus: true, label: "Happy Clients" },
  { value: 10, plus: true, label: "Team Members" },
  { value: 2, plus: true, label: "Years Experience" }
];

// Data for projects
const projects = [
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "E-Commerce",
    title: "Modern Online Store Platform"
  },
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Healthcare",
    title: "Medical Appointment System"
  },
  {
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Finance",
    title: "Banking Dashboard UI"
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Education",
    title: "E-Learning Platform"
  },
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Real Estate",
    title: "Property Management System"
  }
];

// Data for team members
const teamMembers = [
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    name: "Deepak Khotiyan",
    position: "Co-Founder & CEO"
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    name: "Jessica Mardol",
    position: "Lead Developer"
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    name: "Michael Chen",
    position: "UI/UX Designer"
  },
  {
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    name: "Sarah Johnson",
    position: "Project Manager"
  }
];
export default About;