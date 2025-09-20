import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceHero from '../components/ServiceHero';
import { assets } from '../assets/assets'; // Add this import

// Updated services data with local asset images where available
const services = [
  {
    id: 1,
    title: "Software Development",
    icon: assets.SoftwareDevelopments_HOMEPAGEICON,
    image: "https://i.pinimg.com/1200x/d5/13/de/d513de574755719b537bb2d4f7e4a77d.jpg",
    description: "Custom software solutions tailored to your business needs and goals.",
    fullDescription: "Our software development services provide end-to-end solutions for your business needs. We specialize in creating scalable, maintainable applications using the latest technologies and best practices. From initial concept to deployment and maintenance, we ensure your software delivers maximum value.",
    features: [
      "Custom application development",
      "Enterprise software solutions",
      "API development & integration",
      "Legacy system modernization",
      "Cloud-native development",
      "Agile development methodology"
    ]
  },
  {
    id: 2,
    title: "Application Development",
    icon: assets.ApplicationDevelopments_HOMEPAGEICON,
    image: "https://i.pinimg.com/736x/1b/4b/24/1b4b248ada4c022809e443a7d24020a2.jpg",
    description: "Native and cross-platform mobile applications with intuitive UX/UI.",
    fullDescription: "We build responsive and user-friendly applications for both iOS and Android platforms. Our focus is on creating seamless user experiences that drive engagement and conversion. Our apps are performance-optimized and follow platform-specific design guidelines.",
    features: [
      "iOS and Android native development",
      "Cross-platform solutions (React Native, Flutter)",
      "UI/UX design focused on conversion",
      "App store optimization and deployment",
      "Push notification integration",
      "Performance monitoring and analytics"
    ]
  },
  {
    id: 3,
    title: "RPA Workflow Automation",
    icon: assets.RPAICONServicePage,
    image: "https://i.pinimg.com/1200x/cd/a1/76/cda176a3ec6c4fd0eeb2b7b8dacbd0cb.jpg",
    description: "Automate repetitive tasks to increase efficiency and reduce errors.",
    fullDescription: "Our Robotic Process Automation services help businesses automate repetitive, rule-based tasks to improve accuracy and free up your team for higher-value work. We identify automation opportunities and implement tailored solutions.",
    features: [
      "Process analysis and automation opportunity identification",
      "RPA bot development and implementation",
      "Integration with existing systems",
      "Process monitoring and optimization",
      "Error handling and exception management",
      "Scalable automation solutions"
    ]
  },
  {
    id: 4,
    title: "Web Development",
    icon: assets.WebDevelopments_HOMEPAGEICON,
    image: "https://i.pinimg.com/1200x/0f/bc/e0/0fbce0dcc3264b70c2aa30bb0aa36fbf.jpg",
    description: "Responsive, modern websites that convert visitors into customers.",
    fullDescription: "We create stunning, high-performance websites that not only look great but also drive conversions. Our web development approach combines cutting-edge technology with conversion rate optimization principles.",
    features: [
      "Responsive web design",
      "E-commerce solutions",
      "Content Management System integration",
      "SEO-friendly development",
      "Progressive Web Apps (PWA)",
      "Performance optimization"
    ]
  },
  {
    id: 5,
    title: "Graphic Design",
    icon: assets.graphicdesignservicespage,
    image: "https://i.pinimg.com/1200x/bd/dd/2a/bddd2a086b0f4fedaf5fb5353aa70dd8.jpg",
    description: "Visually compelling designs that communicate your brand story.",
    fullDescription: "Our graphic design services help you establish a strong visual identity that resonates with your target audience. We create designs that not only look beautiful but also effectively communicate your message.",
    features: [
      "Brand identity design",
      "Marketing collateral",
      "Social media graphics",
      "Infographics and data visualization",
      "Print design",
      "Packaging design"
    ]
  },
  {
    id: 6,
    title: "IT Management",
    icon: assets.ITConsultingIcon,
    image: "https://i.pinimg.com/1200x/37/e1/89/37e189e31d55b76bb9b2c3bff26d5150.jpg",
    description: "Comprehensive IT infrastructure management and support services.",
    fullDescription: "Our IT management services ensure your technology infrastructure is reliable, secure, and aligned with your business objectives. We provide end-to-end IT support and strategic guidance.",
    features: [
      "Network infrastructure management",
      "Cloud services management",
      "Cybersecurity solutions",
      "IT support and helpdesk services",
      "Disaster recovery planning",
      "IT strategy consulting"
    ]
  },
  {
    id: 7,
    title: "Digital Marketing",
    icon: assets.DigitalMarketingservicespage,
    image: "https://i.pinimg.com/736x/a5/da/25/a5da2594f7e7813aea7dffcbf17d108d.jpg",
    description: "Data-driven strategies to increase your online presence and growth.",
    fullDescription: "Our digital marketing services leverage data and creativity to drive growth and maximize ROI. We develop comprehensive strategies tailored to your business goals and target audience.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click advertising (PPC)",
      "Social media marketing",
      "Email marketing campaigns",
      "Content marketing strategy",
      "Analytics and performance tracking"
    ]
  },
  {
    id: 8,
    title: "Data Analysis",
    icon: assets.DataAnalyticsIcon,
    image: "https://i.pinimg.com/1200x/dd/4d/0d/dd4d0d8145da8a1cb7dad750ce5e2554.jpg",
    description: "Transform your data into actionable insights for business decisions.",
    fullDescription: "Our data analysis services help you unlock the value in your data. We use advanced analytics techniques to uncover patterns, trends, and insights that drive informed decision-making.",
    features: [
      "Data visualization and dashboard creation",
      "Predictive analytics",
      "Business intelligence solutions",
      "Data mining and pattern recognition",
      "KPI development and tracking",
      "Custom reporting solutions"
    ]
  },
  {
    id: 9,
    title: "AI Solutions",
    icon: assets.AiSolutionservicepage,
    image: "https://i.pinimg.com/1200x/c4/e4/fa/c4e4fab939ab349fa4cd836b4b98e637.jpg",
    description: "Intelligent AI systems to automate processes and enhance decision-making.",
    fullDescription: "Our AI solutions leverage cutting-edge machine learning and artificial intelligence technologies to transform your business operations. We develop intelligent systems that learn, adapt, and provide valuable insights to drive innovation and efficiency.",
    features: [
      "Machine learning model development",
      "Natural language processing (NLP)",
      "Computer vision solutions",
      "Predictive analytics and forecasting",
      "AI-powered chatbots and virtual assistants",
      "Custom AI algorithm development"
    ]
  },
  {
    id: 10,
    title: "Data Science",
    icon: assets.DataScienceservicepage,
    image: "https://i.pinimg.com/1200x/ab/b5/33/abb533741bcd9b568b61308b20d49673.jpg",
    description: "Advanced analytics and machine learning to extract valuable insights from data.",
    fullDescription: "Our data science services help you harness the power of your data through advanced statistical analysis, machine learning, and predictive modeling. We transform complex data into actionable intelligence that drives strategic decision-making.",
    features: [
      "Advanced statistical analysis",
      "Machine learning implementation",
      "Big data processing and analytics",
      "Predictive modeling and forecasting",
      "Data mining and pattern recognition",
      "Custom data science solutions"
    ]
  },
  {
    id: 11,
    title: "Robotics",
    icon: assets.RoboticesServicepage,
    image: "https://i.pinimg.com/1200x/61/4c/10/614c100caaa658a27f4fc48d1087529b.jpg",
    description: "Cutting-edge robotic solutions for industrial automation and innovation.",
    fullDescription: "Our robotics services provide innovative automation solutions that enhance productivity, precision, and safety. We design and implement robotic systems tailored to your specific industry needs, from manufacturing to healthcare.",
    features: [
      "Industrial robot integration",
      "Automated manufacturing systems",
      "Robotic process automation (RPA)",
      "Autonomous mobile robots",
      "Robotic vision systems",
      "Custom robotic solutions development"
    ]
  },
  {
    id: 12,
    title: "Drone Technologies",
    // No local icon/image found, keep original URLs
    icon: "https://cdn-icons-png.flaticon.com/512/3594/3594573.png",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Aerial imaging, surveying, and monitoring solutions using advanced drone technology.",
    fullDescription: "Our drone technology services leverage unmanned aerial vehicles for a wide range of applications, from aerial photography and surveying to infrastructure inspection and monitoring. We provide end-to-end drone solutions that deliver accurate data and insights.",
    features: [
      "Aerial photography and videography",
      "Surveying and mapping services",
      "Infrastructure inspection",
      "Agricultural monitoring and analysis",
      "Search and rescue operations",
      "Custom drone application development"
    ]
  },
];


const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Handle case where id might be undefined during initial render
  // Also handle string to number conversion safely
  const serviceId = id ? parseInt(id, 10) : null;
  
  // Find the service based on the ID
  const service = serviceId ? services.find(s => s.id === serviceId) : null;
  
  if (!service) {
    return (
      <div className="font-sans min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <ServiceHero />
        <div className="container mx-auto px-4 py-20 flex-grow flex items-center justify-center">
          <div className="text-center max-w-md mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Service Not Found</h1>
              <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
              <button 
                onClick={() => navigate('/services')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                Back to Services
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="font-sans min-h-screen flex flex-col bg-gray-50">
      <Navbar />
        <ServiceHero />
      
      <div className="container mx-auto px-4 py-20 flex-grow">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Services
        </button>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="md:flex">
            {/* Updated image section with full image */}
            <div className="md:w-2/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl p-3 mb-4 border border-white/30">
                  <img src={service.icon} alt={service.title} className="h-10 w-10 object-contain" />
                </div>
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="text-white/90 mt-2">{service.description}</p>
              </div>
            </div>
            
            <div className="p-10 md:w-3/5">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">About Our {service.title} Service</h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{service.fullDescription}</p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  What's Included
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Get a Quote
                </button>
                <button className="px-8 py-4 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Other Services You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services
              .filter(s => s.id !== service.id)
              .slice(0, 4)
              .map(relatedService => (
                <div 
                  key={relatedService.id} 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  onClick={() => navigate(`/services/${relatedService.id}`)}
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={relatedService.image} 
                      alt={relatedService.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-xl mb-4 -mt-12 relative z-10 mx-auto shadow-md">
                      <img src={relatedService.icon} alt={relatedService.title} className="h-10 w-10 object-contain" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{relatedService.title}</h3>
                    <p className="text-gray-600 text-sm text-center">{relatedService.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Contact us today to discuss how our {service.title} service can help your business grow and succeed.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-colors shadow-md font-semibold">
              Schedule a Consultation
            </button>
            <button className="px-8 py-4 border border-white text-white rounded-xl hover:bg-blue-700 transition-colors">
              Request Information
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;