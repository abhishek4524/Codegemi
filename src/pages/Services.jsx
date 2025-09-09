import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Services = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="font-sans overflow-hidden">
      <Navbar />

      {/* Hero Section with Parallax Effect */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1510&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-indigo-900/90 z-1"></div>

        <div
          className={`container mx-auto px-4 relative z-10 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-down">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
              Services
            </span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto mb-8">
            Empowering your business with cutting-edge digital solutions
          </p>
          <div className="flex justify-center items-center text-white">
            <a
              href="/"
              className="hover:text-orange-400 transition-colors duration-300"
            >
              Home
            </a>
            <span className="mx-3">/</span>
            <span className="text-orange-400 font-medium">Services</span>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Service Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-400/10 rounded-full animate-pulse-slower"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full shadow-md">
              <div className="h-px w-8 bg-gradient-to-r from-orange-500 to-pink-500 mr-2"></div>
              <span className="text-sm font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 uppercase">
                OUR SERVICES
              </span>
              <div className="h-px w-8 bg-gradient-to-r from-orange-500 to-pink-500 ml-2"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              We Provide{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Premium
              </span>{" "}
              Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our comprehensive suite of services is designed to help your
              business thrive in the digital age with innovative and tailored
              approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-3 group relative overflow-hidden"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                <div className="relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className="h-20 w-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-500 group-hover:rotate-12 transform group-hover:scale-110">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="h-10 w-10 group-hover:filter group-hover:invert transition-all duration-500"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-semibold mb-4">
                      <Link
                        to={`/services/${service.id}`}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700 hover:from-orange-500 hover:to-pink-500 transition-all duration-300 relative inline-block"
                      >
                        {service.title}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </h4>
                    <Link
                      to={`/services/${service.id}`} // Changed from href to to
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group-hover:scale-105 hover:shadow-blue-300/30"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Counter Animation */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
        {/* Animated circles in background */}
        <div
          className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full animate-ping-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-500/10 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full animate-bounce-slow"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 transform hover:scale-105 transition-all duration-500"
                style={{
                  transitionDelay: `${index * 200}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-wider font-medium bg-white/10 py-2 px-4 rounded-full backdrop-blur-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-200/20 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200/20 rounded-full translate-y-1/2 -translate-x-1/2 animate-pulse-slower"></div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="FAQ"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-purple-900/50 opacity-70"></div>
              </div>

              {/* Floating element */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl animate-bounce-slow">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="mb-12">
                <div className="inline-flex items-center mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full shadow-md">
                  <div className="h-px w-8 bg-gradient-to-r from-orange-500 to-pink-500 mr-2"></div>
                  <span className="text-sm font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 uppercase">
                    Frequently Asked Questions
                  </span>
                  <div className="h-px w-8 bg-gradient-to-r from-orange-500 to-pink-500 ml-2"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Answers to Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Questions
                  </span>
                </h2>
                <p className="text-gray-600 text-lg">
                  We've compiled a list of common questions to help you
                  understand our services better.
                </p>
              </div>

              <div className="space-y-5">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg bg-gradient-to-r from-white to-blue-50 hover:from-blue-50 hover:to-purple-50"
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateY(0)"
                        : "translateY(20px)",
                      transition:
                        "opacity 0.6s ease, transform 0.6s ease, background 0.3s ease",
                    }}
                  >
                    <button
                      className="flex justify-between items-center w-full p-6 text-left font-medium bg-transparent hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-300"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="text-lg font-semibold text-gray-800">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-6 h-6 transition-transform duration-300 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 ${
                          activeFaq === index ? "transform rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        activeFaq === index ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="p-6 bg-gradient-to-b from-blue-50/50 to-purple-50/50 border-t border-gray-200">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="pattern-grid pattern-blue-500 pattern-opacity-100 pattern-size-6"></div>
        </div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full animate-pulse-slow"></div>
        <div
          className="absolute -top-20 -right-20 w-56 h-56 bg-orange-500/10 rounded-full animate-ping-slow"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-700">
                <img
                  src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Contact"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/60"></div>
              </div>

              {/* Contact information */}
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
                <p className="mb-1">info@yourcompany.com</p>
                <p>+1 (234) 567-8901</p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="mb-12">
                <div className="inline-flex items-center mb-4 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                  <div className="h-px w-8 bg-white mr-2"></div>
                  <span className="text-sm font-semibold tracking-wider uppercase">
                    TALK TO US
                  </span>
                  <div className="h-px w-8 bg-white ml-2"></div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  How Can We{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                    Help You?
                  </span>
                </h2>
                <p className="text-blue-100 text-lg mb-4">
                  We're here to answer any questions you may have about our
                  services. Reach out to us and we'll respond as soon as we can.
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-medium">Your name*</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full px-5 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 shadow-md"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">
                      Your Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="info@example.com"
                      className="w-full px-5 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 shadow-md"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 font-medium">Message*</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you?"
                    rows="5"
                    className="w-full px-5 py-4 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 shadow-md"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-10 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center gap-2 group"
                >
                  Send Message
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.1;
          }
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slow 8s infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </div>
  );
};

// Data for services
const services = [
  {
    id: 1,
    title: "Software Development",
    icon: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
    description:
      "Custom software solutions tailored to your business needs and goals.",
  },
  {
    id: 2,
    title: "Application Development",
    icon: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
    description:
      "Native and cross-platform mobile applications with intuitive UX/UI.",
  },
  {
    id: 3,
    title: "RPA Workflow Automation",
    icon: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
    description:
      "Automate repetitive tasks to increase efficiency and reduce errors.",
  },
  {
    id: 4,
    title: "Web Development",
    icon: "https://cdn-icons-png.flaticon.com/512/1329/1329016.png",
    description:
      "Responsive, modern websites that convert visitors into customers.",
  },
  {
    id: 5,
    title: "Graphic Design",
    icon: "https://cdn-icons-png.flaticon.com/512/4727/4727338.png",
    description:
      "Visually compelling designs that communicate your brand story.",
  },
  {
    id: 6,
    title: "IT Management",
    icon: "https://cdn-icons-png.flaticon.com/512/4325/4325005.png",
    description:
      "Comprehensive IT infrastructure management and support services.",
  },
  {
    id: 7,
    title: "Digital Marketing",
    icon: "https://cdn-icons-png.flaticon.com/512/1055/1055662.png",
    description:
      "Data-driven strategies to increase your online presence and growth.",
  },
  {
    id: 8,
    title: "Data Analysis",
    icon: "https://cdn-icons-png.flaticon.com/512/3594/3594435.png",
    description:
      "Transform your data into actionable insights for business decisions.",
  },
];

// Data for stats
const stats = [
  { value: "250+", label: "Projects Completed" },
  { value: "120+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "40+", label: "Experts Team" },
];

// Data for FAQs
const faqs = [
  {
    question: "How long does a typical software project take?",
    answer:
      "Project timelines vary based on complexity, but most of our software projects range from 3-9 months. We provide detailed timelines after our initial consultation and requirements gathering phase.",
  },
  {
    question: "What is included in your digital marketing services?",
    answer:
      "Our digital marketing package includes SEO optimization, content strategy, social media management, PPC advertising, email marketing campaigns, and comprehensive analytics reporting.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer various support packages tailored to your needs, including regular maintenance, updates, troubleshooting, and 24/7 emergency support options.",
  },
  {
    question: "Can you work with our existing technology stack?",
    answer:
      "Absolutely. Our team is experienced with a wide range of technologies and we can integrate with your existing systems or recommend improvements where needed.",
  },
];

export default Services;
