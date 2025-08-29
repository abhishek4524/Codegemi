// components/Features.js
import React from 'react';

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Drive <span style={{
              background: 'linear-gradient(90deg, #4f46e5, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Innovation</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of IT services designed for modern business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6">
              <i className="fas fa-brain text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Solutions</h3>
            <p className="text-gray-600 mb-4">Leverage artificial intelligence to automate processes and gain valuable insights from your data.</p>
            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700 inline-flex items-center group">
              Learn more <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
              <i className="fas fa-cloud text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Integration</h3>
            <p className="text-gray-600 mb-4">Seamlessly integrate cloud services to enhance scalability and reduce infrastructure costs.</p>
            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700 inline-flex items-center group">
              Learn more <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-green-100 text-green-600 flex items-center justify-center mb-6">
              <i className="fas fa-shield-alt text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Security</h3>
            <p className="text-gray-600 mb-4">Protect your business with enterprise-grade security solutions and proactive monitoring.</p>
            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700 inline-flex items-center group">
              Learn more <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;