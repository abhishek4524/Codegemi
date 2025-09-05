// components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { assets } from '../assets/assets';
import { Link, useLocation } from 'react-router-dom'; // Import routing components

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedMobileItems, setExpandedMobileItems] = useState(new Set());
  const menuRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const location = useLocation(); // Get current location

  useEffect(() => {
    // Set active item based on current path
    const path = location.pathname.substring(1) || 'home';
    setActiveItem(path);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Close mobile menu when clicking outside
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
        setSearchOpen(false);
      }
    };

    // Handle escape key
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
        setSearchOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const handleDropdownEnter = (dropdown) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setActiveDropdown(null);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Implement search functionality here
    }
  };

  const toggleMobileDropdown = (itemId) => {
    const newExpanded = new Set(expandedMobileItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedMobileItems(newExpanded);
  };

  // Updated navItems with page routes
  const navItems = [
    { 
      id: 'home', 
      label: 'Home',
      path: '/'
    },
    { 
      id: 'about', 
      label: 'About',
      path: '/about'
    },
    { 
      id: 'blog', 
      label: 'Blog',
      path: '/blog'
    },
    { 
      id: 'services', 
      label: 'Services',
      path: '/services',
      dropdown: [
        { id: 'services-overview', label: 'Services Overview', path: '/services' },
        { id: 'web-development', label: 'Web Development', path: '/services/web-development' },
        { id: 'mobile-apps', label: 'Mobile Applications', path: '/services/mobile-apps' },
        { id: 'ui-ux-design', label: 'UI/UX Design', path: '/services/ui-ux-design' },
        { id: 'cloud-solutions', label: 'Cloud Solutions', path: '/services/cloud-solutions' },
        { id: 'devops', label: 'DevOps', path: '/services/devops' },
      ]
    },
    { 
      id: 'contact', 
      label: 'Contact',
      path: '/contact'
    },
  ];

  return (
    <nav 
      ref={menuRef}
      className={`fixed w-full z-50 py-3 px-6 lg:px-12 transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center z-60">
          <Link 
            to="/" 
            className="focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            onClick={() => setActiveItem('home')}
          >
            <img 
              src={assets.CodeGemiLogofinal2} 
              alt="CodeGemi Logo" 
              className={`h-16 transition-all duration-500 ${scrolled ? 'h-14' : 'h-16'}`}
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <div 
              key={item.id}
              className="relative"
              onMouseEnter={() => item.dropdown && handleDropdownEnter(item.id)}
              onMouseLeave={handleDropdownLeave}
            >
              <Link 
                to={item.path}
                className={`relative px-4 py-2 font-medium transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded ${
                  scrolled ? 'text-gray-800' : 'text-white'
                }`}
                onClick={() => setActiveItem(item.id)}
                aria-haspopup={item.dropdown ? 'true' : undefined}
                aria-expanded={item.dropdown && activeDropdown === item.id}
              >
                <span className={`transition-colors ${activeItem === item.id ? 'text-indigo-600' : 'group-hover:text-indigo-500'}`}>
                  {item.label}
                </span>
                {activeItem === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transition-all duration-300"></span>
                )}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                
                {item.dropdown && (
                  <svg className="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                )}
              </Link>
              
              {/* Dropdown Menu */}
              {item.dropdown && activeDropdown === item.id && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100 z-50"
                  onMouseEnter={() => handleDropdownEnter(item.id)}
                  onMouseLeave={handleDropdownLeave}
                  role="menu"
                  aria-label={`${item.label} submenu`}
                >
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.id}
                      to={dropdownItem.path}
                      className="block px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300 focus:outline-none focus:bg-indigo-50 focus:text-indigo-600"
                      onClick={() => {
                        setActiveItem(item.id);
                        setActiveDropdown(null);
                      }}
                      role="menuitem"
                      tabIndex="0"
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Search Button and Bar */}
          <div className="relative">
            {searchOpen ? (
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full pl-4 pr-10 py-2 flex items-center z-50">
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="outline-none w-40 text-gray-700 focus:ring-2 focus:ring-indigo-500 rounded"
                    autoFocus
                    aria-label="Search input"
                  />
                  <button 
                    type="button" 
                    className="ml-2 text-gray-500 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full p-1"
                    onClick={() => setSearchOpen(false)}
                    aria-label="Close search"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </form>
              </div>
            ) : (
              <button 
                className={`p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
                onClick={toggleSearch}
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            )}
          </div>
          
          {/* Cart Button */}
          <Link 
            to="/cart"
            className={`p-2 rounded-full transition-colors duration-300 relative focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Shopping cart with 3 items"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </Link>
          
          {/* Get a Quote Button */}
          <Link 
            to="/get-quote" 
            className="hidden md:flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:shadow-indigo-500/40 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <span>Get a Quote</span>
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span className={`block absolute w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'}`}></span>
              <span className={`block absolute w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block absolute w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-xl rounded-b-lg overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="py-4 px-6">
          {navItems.map((item) => (
            <div key={item.id}>
              <div className="flex justify-between items-center">
                <Link 
                  to={item.path}
                  className={`flex-1 py-3 px-4 rounded-lg transition-all duration-300 hover:bg-indigo-50 focus:outline-none focus:bg-indigo-50 ${
                    activeItem === item.id ? 'text-indigo-600 font-semibold bg-indigo-50' : 'text-gray-700'
                  }`}
                  onClick={() => {
                    setActiveItem(item.id);
                    setMobileMenuOpen(false);
                  }}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <button 
                    className="p-3 text-gray-500 hover:text-indigo-600 focus:outline-none focus:text-indigo-600"
                    onClick={() => toggleMobileDropdown(item.id)}
                    aria-expanded={expandedMobileItems.has(item.id)}
                    aria-label={`Toggle ${item.label} submenu`}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                  >
                    <svg 
                      className={`w-4 h-4 transition-transform duration-300 ${expandedMobileItems.has(item.id) ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                )}
              </div>
              
              {/* Mobile Dropdown */}
              {item.dropdown && expandedMobileItems.has(item.id) && (
                <div className="pl-6 mt-1">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.id}
                      to={dropdownItem.path}
                      className="block py-2 px-4 text-gray-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-300 focus:outline-none focus:bg-indigo-50 focus:text-indigo-600"
                      onClick={() => {
                        setActiveItem(item.id);
                        setMobileMenuOpen(false);
                      }}
                      tabIndex={mobileMenuOpen ? 0 : -1}
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col space-y-3">
            <Link 
              to="/login"
              className="w-full py-3 text-center text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors duration-300 focus:outline-none focus:bg-indigo-50"
              onClick={() => setMobileMenuOpen(false)}
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              Login
            </Link>
            <Link 
              to="/get-quote"
              className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-center"
              onClick={() => setMobileMenuOpen(false)}
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;