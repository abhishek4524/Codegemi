import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaTimes, FaRobot } from "react-icons/fa";
import { FaGear, FaLightbulb } from "react-icons/fa6";
import { MdDataUsage, MdScience, MdAirplanemodeActive } from "react-icons/md";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const FloatingSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const items = [
    {
      id: 4,
      label: "AI Solutions",
      icon: <MdScience />,
      path: "/services/9",
      bg: "bg-gradient-to-r from-indigo-500 to-indigo-600",
      hover: "hover:from-indigo-600 hover:to-indigo-700",
    },
    {
      id: 5,
      label: "Data Science",
      icon: <MdDataUsage />,
      path: "/services/10",
      bg: "bg-gradient-to-r from-pink-500 to-pink-600",
      hover: "hover:from-pink-600 hover:to-pink-700",
    },
    {
      id: 6,
      label: "Robotics",
      icon: <FaRobot />,
      path: "/services/11",
      bg: "bg-gradient-to-r from-red-500 to-red-600",
      hover: "hover:from-red-600 hover:to-red-700",
    },
    {
      id: 7,
      label: "Drone Technologies",
      icon: <MdAirplanemodeActive />,
      path: "/services/12",
      bg: "bg-gradient-to-r from-amber-500 to-amber-600",
      hover: "hover:from-amber-600 hover:to-amber-700",
    },
  ];

  const handleItemClick = (item) => {
    setActiveItem(item.id);
    console.log(`Navigating to: ${item.path}`);
    
    // Navigate to the path after a short delay to show the feedback
    setTimeout(() => {
      navigate(item.path); // Use navigate function to change route
      setActiveItem(null);
    }, 800); // Reduced delay for better UX
  };
  
  useEffect(() => {
    if (isMobile && activeItem) {
      setIsExpanded(false);
    }
  }, [activeItem, isMobile]);

  return (
    <>
      <div
        className={`fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col gap-2 z-50 transition-all duration-500 ${
          isExpanded ? "translate-x-0" : "translate-x-40"
        }`}
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-10 rounded-l-lg bg-gray-800 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-gray-900 ${
            isExpanded ? "rotate-180" : ""
          }`}
          aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"}
        >
          <FaChevronLeft className="text-xs" />
        </button>
        <div
          className={`bg-white rounded-l-2xl shadow-2xl overflow-hidden transition-all duration-500 ${
            isExpanded ? "w-64" : "w-0"
          }`}
        >
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-800 text-lg">
              Quick Navigation
            </h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close sidebar"
            >
              <FaTimes />
            </button>
          </div>
          <div className="p-4 max-h-96 overflow-y-auto custom-scrollbar">
            <div className="space-y-2">
              {items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  className={`flex items-center w-full p-3 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    activeItem === item.id
                      ? `${item.bg} text-white shadow-lg scale-105`
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                  aria-label={item.label}
                >
                  <span
                    className={`text-xl p-2 rounded-lg ${
                      activeItem === item.id ? "bg-white/20" : "bg-white"
                    } shadow-sm`}
                  >
                    {item.icon}
                  </span>
                  <span className="ml-3 font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {!isExpanded && (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col gap-2 z-40">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              className="group relative flex items-center"
            >
              <button
                className={`${item.bg} ${item.hover} text-white p-3 rounded-l-xl cursor-pointer transition-all duration-300 transform hover:scale-110 shadow-lg z-10`}
                aria-label={item.label}
              >
                <span className="text-xl">{item.icon}</span>
              </button>
              <div className="absolute right-10 bg-gray-800 text-white text-sm font-medium py-2 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none">
                {item.label}
                <div className="absolute top-1/2 right-0 -mr-1.5 w-3 h-3 transform -translate-y-1/2 rotate-45 bg-gray-800"></div>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeItem && (
        <div className="fixed top-4 right-4 bg-white rounded-lg shadow-xl p-4 z-50 animate-bounce-in">
          <div className="flex items-center">
            <span className="text-2xl mr-3 text-blue-500">
              {items.find((item) => item.id === activeItem)?.icon}
            </span>
            <div>
              <p className="font-semibold text-gray-800">
                Navigating to{" "}
                {items.find((item) => item.id === activeItem)?.label}
              </p>
              <p className="text-sm text-gray-500">Please wait...</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: translateY(-20px) scale(0.9);
          }
          50% {
            transform: translateY(0) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s ease-out;
        }

        /* Custom scrollbar for sidebar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c5c5c5;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }
      `}</style>
    </>
  );
};

export default FloatingSidebar;