import React from 'react';

const Stats = () => {
  const stats = [
    {
      number: "10K+",
      label: "Happy Customers",
      icon: (
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
      description: "Trusted by thousands of satisfied customers worldwide"
    },
    {
      number: "50K+",
      label: "Products Sold",
      icon: (
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
      description: "Quality products delivered to customers globally"
    },
    {
      number: "24/7",
      label: "Customer Support",
      icon: (
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      color: "from-green-500 to-emerald-500",
      description: "Round-the-clock assistance for all your needs"
    },
    {
      number: "99%",
      label: "Satisfaction Rate",
      icon: (
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      color: "from-yellow-500 to-orange-500",
      description: "Exceptional quality that exceeds expectations"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-blue-600/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-blue-200/50">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
            Our Achievements
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-display leading-tight bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're committed to providing the best shopping experience for our customers with unmatched quality and service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-24 h-24 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl group-hover:shadow-2xl transform hover:-translate-y-2`}>
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-display bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {stat.number}
              </div>
              <div className="text-gray-800 font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {stat.label}
              </div>
              <div className="text-gray-600 text-sm leading-relaxed max-w-48 mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                {stat.description}
              </div>
              
              {/* Hover effect line */}
              <div className="w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 group-hover:w-16 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-8 py-6 rounded-3xl border border-gray-200/50 shadow-xl">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-lg font-semibold text-gray-800">Ready to experience the difference?</span>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-2xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 