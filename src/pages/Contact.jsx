import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Play, Send, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const pulse = {
    scale: [1, 1.05, 1],
    transition: { duration: 1.5, repeat: Infinity }
  };

  return (
    <>
      <Navbar />

      {/* Enhanced Breadcrumb Section */}
      <section
        className="relative bg-cover bg-center h-96 flex items-center justify-center text-white overflow-hidden"
        style={{ backgroundImage: "url('/assets/img/contact-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-purple-800/80" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative text-center z-10 px-4"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We'd love to hear from you. Let's start a conversation.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Animated floating elements */}
        <motion.div 
          className="absolute top-20 left-10% w-6 h-6 rounded-full bg-cyan-400/20"
          animate={{ y: [0, -20, 0], rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-15% w-4 h-4 rounded-full bg-blue-400/30"
          animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Connect</h2>
            <p className="text-gray-600 text-lg">
              Have a project in mind or just want to say hello? We're here to help and would love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Contact Info */}
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 space-y-8 relative overflow-hidden"
              >
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-bl-full"></div>
                
                <motion.div 
                  className="flex items-start space-x-5 relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 bg-indigo-100 rounded-xl">
                    <Phone className="text-indigo-600" size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Call Us 24/7</p>
                    <h3 className="text-xl font-semibold text-gray-800">+208-555-0112</h3>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-5 relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                >
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Mail className="text-purple-600" size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Us</p>
                    <h3 className="text-xl font-semibold text-gray-800">infotech@gmail.com</h3>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-5 relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                >
                  <div className="p-3 bg-cyan-100 rounded-xl">
                    <MapPin className="text-cyan-600" size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <h3 className="text-xl font-semibold text-gray-800">4517 Washington Ave.</h3>
                    <p className="text-gray-500">Manchester, Kentucky 39495</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start space-x-5 relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                >
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Clock className="text-blue-600" size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Working Hours</p>
                    <h3 className="text-xl font-semibold text-gray-800">Mon - Fri: 9AM - 6PM</h3>
                    <p className="text-gray-500">Saturday: 10AM - 4PM</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Enhanced Video Box */}
              <motion.div
                variants={fadeIn}
                className="relative rounded-2xl overflow-hidden shadow-xl group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/assets/img/office-tour.jpg"
                  alt="Office tour preview"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <a
                  href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white"
                >
                  <motion.div
                    className="relative"
                    animate={pulse}
                  >
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <Play size={32} className="text-indigo-600 ml-1" />
                      </div>
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mt-4 text-center">Take a Virtual Office Tour</h3>
                  <p className="text-gray-200 text-center mt-2">See where the magic happens</p>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white shadow-2xl p-8 rounded-2xl border border-gray-100 relative overflow-hidden"
            >
              {/* Form decorative element */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-100 rounded-full blur-xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-2 text-gray-800">Send us a message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div 
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name*</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your Name"
                        required
                      />
                    </motion.div>
                    
                    <motion.div 
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Email*</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your Email"
                        required
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Message*</label>
                    <textarea
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="How can we help you?"
                      required
                    ></textarea>
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -10px rgba(99, 102, 241, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={20} />
                  </motion.button>
                </form>
                
                <motion.p 
                  className="text-center text-gray-500 mt-8 text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <MessageCircle size={16} className="inline-block mr-1" />
                  We typically respond to messages within 2 business hours
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <motion.section 
        className="h-[500px] relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-purple-900/30 z-10 pointer-events-none"></div>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        
        {/* Map overlay card */}
        <motion.div 
          className="absolute bottom-6 left-6 bg-white p-5 rounded-2xl shadow-xl max-w-xs z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
            <MapPin size={18} className="text-indigo-600 mr-2" />
            Our Location
          </h3>
          <p className="text-gray-600 text-sm">
            4517 Washington Ave.<br />
            Manchester, Kentucky 39495
          </p>
          <motion.a
            href="#"
            className="text-indigo-600 text-sm font-medium mt-3 inline-block hover:text-indigo-800 transition-colors"
            whileHover={{ x: 3 }}
          >
            Get Directions →
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "24+", label: "Hours Support" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "15+", label: "Experts Team" },
              { number: "5+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -10px rgba(0,0,0,0.1)" }}
              >
                <h3 className="text-3xl font-bold text-indigo-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;