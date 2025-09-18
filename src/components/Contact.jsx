import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'subject',
    message: '',
    agree: false
  });
  
  const formRef = useRef(null);
  const mapRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Add intersection observers for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);
    
    if (formRef.current) observer.observe(formRef.current);
    if (mapRef.current) observer.observe(mapRef.current);
    if (infoRef.current) observer.observe(infoRef.current);
    
    return () => {
      clearTimeout(timer);
      if (formRef.current) observer.unobserve(formRef.current);
      if (mapRef.current) observer.unobserve(mapRef.current);
      if (infoRef.current) observer.unobserve(infoRef.current);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add submission animation
    const submitBtn = e.target.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.classList.add('animate-pulse');
      setTimeout(() => {
        submitBtn.classList.remove('animate-pulse');
      }, 1000);
    }
    
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="contact-section bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-delay-100 {
          animation-delay: 0.1s;
        }
        .animate-delay-200 {
          animation-delay: 0.2s;
        }
        .animate-delay-300 {
          animation-delay: 0.3s;
        }
        .animate-delay-400 {
          animation-delay: 0.4s;
        }
        .animate-delay-500 {
          animation-delay: 0.5s;
        }
        .animate-delay-600 {
          animation-delay: 0.6s;
        }
        .animate-delay-700 {
          animation-delay: 0.7s;
        }
        .animate-delay-800 {
          animation-delay: 0.8s;
        }
        .gradient-border {
          position: relative;
          border: double 2px transparent;
          background-image: linear-gradient(white, white), 
                            linear-gradient(to right, #4F46E5, #EC4899);
          background-origin: border-box;
          background-clip: content-box, border-box;
        }
        .gradient-border:hover {
          background-image: linear-gradient(white, white), 
                            linear-gradient(to right, #EC4899, #4F46E5);
        }
        .input-focus-effect:focus {
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
        }
        .floating-label {
          position: relative;
          margin-bottom: 20px;
        }
        .floating-input {
          border: 0;
          border-bottom: 2px solid #cbd5e1;
          outline: none;
          transition: border 0.3s ease;
        }
        .floating-input:focus {
          border-bottom: 2px solid #4F46E5;
        }
        .floating-label-text {
          position: absolute;
          top: 12px;
          left: 0;
          transition: all 0.3s ease;
          pointer-events: none;
          color: #64748b;
        }
        .floating-input:focus ~ .floating-label-text,
        .floating-input:not(:placeholder-shown) ~ .floating-label-text {
          top: -20px;
          left: 0;
          font-size: 0.8rem;
          color: #4F46E5;
        }
      `}</style>
      
      <div className="container mx-auto px-4">
        <div className="absolute left-0 bottom-0 -z-10 transform -translate-x-1/2 translate-y-1/2">
          <div className="bg-gradient-to-r from-indigo-400 to-blue-400 opacity-20 blur-3xl w-80 h-80 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Contact Header */}
        <div className={`contact-header bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 mb-8 md:mb-16 text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="subtitle flex items-center mb-4 animate-fade-in-up animate-delay-100">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-indigo-100 font-medium">Contact US</span>
                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up animate-delay-200">Have any question about us?</h2>
              <p className="text-indigo-100 animate-fade-in-up animate-delay-300">Get in touch with our team for any inquiries or support needs.</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex-1 md:flex-none transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 animate-fade-in-up animate-delay-400">
                <div className="flex items-center mb-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png" alt="Trustpilot" className="h-6 mr-2" />
                  <span className="font-medium">Trustpilot</span>
                </div>
                <div className="flex items-center">
                  <div className="flex mr-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm">450+ reviews</span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex-1 md:flex-none transform transition-all duration-500 hover:scale-105 hover:-translate-y-1 animate-fade-in-up animate-delay-500">
                <div className="flex items-center mb-2">
                  <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google" className="h-6 mr-2" />
                  <span className="font-medium">Google</span>
                </div>
                <div className="flex items-center">
                  <div className="flex mr-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm">450+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form and Map */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <div ref={formRef} className="w-full lg:w-7/12 bg-white rounded-2xl shadow-lg p-6 md:p-8 opacity-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 animate-fade-in-up">Get in Touch</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="floating-label animate-fade-in-up animate-delay-100">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="floating-input w-full px-4 py-3 bg-gray-50 rounded-lg input-focus-effect transition-all"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="name" className="floating-label-text">Full Name</label>
                </div>
                
                <div className="floating-label animate-fade-in-up animate-delay-200">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="floating-input w-full px-4 py-3 bg-gray-50 rounded-lg input-focus-effect transition-all"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="email" className="floating-label-text">Email Address</label>
                </div>
              </div>
              
              <div className="animate-fade-in-up animate-delay-500">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all input-focus-effect"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              
              <div className="flex items-start animate-fade-in-up animate-delay-600">
                <div className="flex items-center h-5">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 transition-all"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agree" className="font-medium text-gray-700">I agree to the terms and privacy policy</label>
                  <p className="text-gray-500 mt-1">Collaboratively formulate principle capital. Progressively evolve user-centered interfaces.</p>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-500 flex items-center justify-center group relative overflow-hidden animate-fade-in-up animate-delay-700"
              >
                <span className="relative z-10">SUBMIT NOW</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </form>
          </div>
          
          {/* Map and Contact Info */}
          <div className="w-full lg:w-5/12">
            {/* Map */}
            <div ref={mapRef} className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6 opacity-0">
              <div className="h-80 w-full relative overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425872426608!3d40.74076987932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c8eef09%3A0x2cbb6b84d0e7c63b!2sGoogle!5e0!3m2!1sen!2sus!4v1726510328428!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                  className="rounded-lg"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-10 pointer-events-none"></div>
              </div>
            </div>
    <div
      ref={infoRef}
      className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden gradient-border opacity-0 transition-opacity duration-700"
      style={{
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-600 to-purple-600"></div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-8 section-title">Contact Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-start contact-item animate-fade-in-up">
          <div className="icon-container bg-gradient-to-br from-indigo-100 to-purple-100 p-3 rounded-lg mr-4 flex-shrink-0">
            <i className="fas fa-map-marker-alt text-indigo-600 text-lg"></i>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
            <p className="text-gray-600">Gregory Cartwright<br />4059 Carling Avenue<br />Ugglebarnby, YO21 2BJ</p>
          </div>
        </div>
        
        <div className="flex items-start contact-item animate-fade-in-up animate-delay-200">
          <div className="icon-container bg-gradient-to-br from-indigo-100 to-purple-100 p-3 rounded-lg mr-4 flex-shrink-0">
            <i className="fas fa-phone text-indigo-600 text-lg"></i>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
            <a href="tel:+61086660112" className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium">+61 (08) 6660-112</a>
          </div>
        </div>
        
        <div className="flex items-start contact-item animate-fade-in-up animate-delay-300">
          <div className="icon-container bg-gradient-to-br from-indigo-100 to-purple-100 p-3 rounded-lg mr-4 flex-shrink-0">
            <i className="fas fa-envelope text-indigo-600 text-lg"></i>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
            <a href="mailto:contact@infotech.com" className="text-indigo-600 hover:text-indigo-800 transition-colors font-medium">contact@infotech.com</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
        
        .gradient-border {
          position: relative;
          z-index: 1;
        }
        
        .gradient-border::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #4f46e5, #8b5cf6, #ec4899);
          border-radius: 24px;
          z-index: -1;
          animation: border-pulse 3s ease-in-out infinite;
        }
        
        .gradient-border::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 22px;
          background: white;
          z-index: -1;
        }
        
        @keyframes border-pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.4; }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animate-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animate-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animate-delay-500 {
          animation-delay: 0.5s;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .contact-item {
          transition: all 0.3s ease;
        }
        
        .contact-item:hover {
          transform: translateY(-4px);
        }
        
        .icon-container {
          transition: all 0.3s ease;
        }
        
        .contact-item:hover .icon-container {
          transform: scale(1.1);
          background: linear-gradient(135deg, #4f46e5, #8b5cf6);
        }
        
        .contact-item:hover .icon-container i {
          color: white;
        }
        
        .section-title {
          position: relative;
          display: inline-block;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(to right, #4f46e5, #8b5cf6);
          border-radius: 3px;
        }
      `}</style>
    </div> 
    </div> 
    </div> 
      </div>
    </div>
  );
};

export default Contact;