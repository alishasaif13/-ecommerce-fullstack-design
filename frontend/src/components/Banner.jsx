import React from 'react';

const Banner = ({ title, subtitle, buttonText, buttonLink, bgColor = "from-blue-600 to-purple-600", image }) => {
  return (
    <div className={`relative bg-gradient-to-br ${bgColor} text-white overflow-hidden`}>
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium mb-8 border border-white/30 shadow-lg">
              <span className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></span>
              Limited Time Offer
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 font-display leading-tight">
              {title}
            </h2>
            <p className="text-2xl mb-10 opacity-90 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
            {buttonText && buttonLink && (
              <a
                href={buttonLink}
                className="group inline-flex items-center bg-white text-gray-900 px-10 py-5 rounded-3xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
              >
                {buttonText}
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            )}
          </div>
          {image && (
            <div className="hidden lg:block animate-fade-in">
              <div className="relative">
                <img
                  src={image}
                  alt="Banner"
                  className="rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700"
                />
                <div className="absolute -top-6 -right-6 bg-white rounded-3xl p-6 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-bold text-gray-900">Hot Deal</p>
                      <p className="text-sm text-gray-600">50% OFF</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner; 