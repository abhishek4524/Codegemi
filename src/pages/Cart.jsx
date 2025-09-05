import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Shield, Clock, HeadphonesIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Web Development Package",
      price: 2999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Complete website development with modern technologies"
    },
    {
      id: 2,
      name: "Mobile App Development",
      price: 4999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Cross-platform mobile application development"
    },
    {
      id: 3,
      name: "UI/UX Design Package",
      price: 1999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "User-centered design with modern interfaces"
    }
  ]);

  const [isVisible, setIsVisible] = useState(false);
  const [removingItem, setRemovingItem] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setRemovingItem(id);
    setTimeout(() => {
      setCartItems(cartItems.filter(item => item.id !== id));
      setRemovingItem(null);
    }, 500);
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120
      }
    },
    exit: {
      x: -100,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero/Breadcrumb Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-800 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="absolute top-0 right-0 -mr-40 mt-10 opacity-10 animate-pulse-slow">
          <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
            <path d="M200 0v400M0 200h400" stroke="white" strokeWidth="2" />
            <path d="M100 0v400M0 100h400" stroke="white" strokeWidth="1" />
            <path d="M300 0v400M0 300h400" stroke="white" strokeWidth="1" />
          </svg>
        </div>
        
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple-600 opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-blue-500 opacity-30 animate-float animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Cart</span>
            </h1>
            <motion.p 
              className="text-xl text-blue-100 max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Review your selected services and proceed to checkout
            </motion.p>
            
            <motion.ul 
              className="flex justify-center space-x-2 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
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
                <span className="animate-pulse">Cart</span>
              </li>
            </motion.ul>
          </motion.div>
        </div>
      </div>

      {/* Cart Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 flex-grow">
        <div className="container mx-auto max-w-6xl">
          {cartItems.length === 0 ? (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl p-12 shadow-lg max-w-md mx-auto">
                <ShoppingBag size={80} className="mx-auto text-gray-400 mb-6" />
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
                <p className="text-gray-600 mb-8">
                  Looks like you haven't added any services to your cart yet.
                </p>
                <motion.a 
                  href="/services" 
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Browse Services</span>
                  <ArrowRight size={20} className="ml-2" />
                </motion.a>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-bold text-gray-800">Cart Items ({cartItems.length})</h2>
                  </div>
                  
                  <div className="divide-y divide-gray-100">
                    <AnimatePresence>
                      {cartItems.map((item) => (
                        <motion.div 
                          key={item.id}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="p-6 flex flex-col sm:flex-row items-start gap-6 relative"
                          layout
                        >
                          {removingItem === item.id && (
                            <div className="absolute inset-0 bg-red-100 bg-opacity-50 flex items-center justify-center rounded-xl z-10">
                              <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                              >
                                Removing...
                              </motion.div>
                            </div>
                          )}
                          
                          <div className="flex-shrink-0">
                            <motion.img 
                              src={item.image} 
                              alt={item.name}
                              className="w-24 h-24 object-cover rounded-xl shadow-md"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            />
                          </div>
                          
                          <div className="flex-grow">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                            <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div className="flex items-center">
                                <motion.button 
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <Minus size={16} />
                                </motion.button>
                                
                                <span className="mx-4 font-medium min-w-[2rem] text-center">{item.quantity}</span>
                                
                                <motion.button 
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <Plus size={16} />
                                </motion.button>
                              </div>
                              
                              <div className="text-right">
                                <p className="text-lg font-bold text-blue-600">
                                  ${(item.price * item.quantity).toLocaleString()}
                                </p>
                                <p className="text-sm text-gray-500">${item.price.toLocaleString()} each</p>
                              </div>
                            </div>
                          </div>
                          
                          <motion.button 
                            onClick={() => removeItem(item.id)}
                            className="p-3 text-gray-400 hover:text-red-500 transition-colors self-center sm:self-start"
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Trash2 size={20} />
                          </motion.button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Trust badges for mobile */}
                <div className="mt-6 bg-white rounded-2xl shadow-lg p-6 block lg:hidden">
                  <h3 className="font-semibold text-gray-800 mb-4 text-center">Why choose us?</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Shield size={24} className="text-blue-600" />
                      </div>
                      <p className="text-xs font-medium">Secure Payment</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Clock size={24} className="text-green-600" />
                      </div>
                      <p className="text-xs font-medium">24/7 Support</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                        <HeadphonesIcon size={24} className="text-purple-600" />
                      </div>
                      <p className="text-xs font-medium">Free Consultation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <motion.div 
                  className="bg-white rounded-2xl shadow-lg p-6 sticky top-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${subtotal.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (10%)</span>
                      <span className="font-medium">${tax.toLocaleString()}</span>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-blue-600">${total.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <motion.button 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight size={20} className="ml-2" />
                  </motion.button>
                  
                  <p className="text-center text-gray-500 text-sm mt-4">
                    You won't be charged until the next step
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h3 className="font-semibold text-gray-800 mb-4">What's included:</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <div className="h-5 w-5 text-green-500 mr-2 flex-shrink-0">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Dedicated project manager</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 text-green-500 mr-2 flex-shrink-0">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>Quality assurance testing</span>
                      </li>
                      <li className="flex items-start">
                        <div className="h-5 w-5 text-green-500 mr-2 flex-shrink-0">
                          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span>30-day support after delivery</span>
                      </li>
                    </ul>
                  </div>

                  {/* Trust badges for desktop */}
                  <div className="mt-8 pt-6 border-t border-gray-100 hidden lg:block">
                    <h3 className="font-semibold text-gray-800 mb-4 text-center">Secure & Reliable</h3>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Shield size={24} className="text-blue-600" />
                        </div>
                        <p className="text-xs font-medium">Secure Payment</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Clock size={24} className="text-green-600" />
                        </div>
                        <p className="text-xs font-medium">24/7 Support</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                          <HeadphonesIcon size={24} className="text-purple-600" />
                        </div>
                        <p className="text-xs font-medium">Free Consultation</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="mt-6 bg-white rounded-2xl shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="font-semibold text-gray-800 mb-4">Need help?</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Our team is here to answer any questions about our services.
                  </p>
                  <motion.a 
                    href="/contact" 
                    className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    Contact us
                    <ArrowRight size={16} className="ml-1" />
                  </motion.a>
                </motion.div>

                {/* Promo code section */}
                <motion.div 
                  className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-6 text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <h3 className="font-semibold mb-3">Special Offer!</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Refer a friend and get 15% off your next order.
                  </p>
                  <motion.button 
                    className="w-full bg-white text-blue-600 font-semibold py-2 px-4 rounded-xl text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
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
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Cart;