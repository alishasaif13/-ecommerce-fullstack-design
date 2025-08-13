import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">B</div>
                <span className="text-2xl font-bold text-blue-600">Brand</span>
              </div>
              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                Best information about the company gives here but now lorem ipsum is
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806.026-1.566.247-2.229.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806.026-1.566.247-2.229.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* About Column */}
            <div className="md:col-span-1">
              <h4 className="font-semibold text-gray-900 mb-6 text-lg">About</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block">Find store</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block">Categories</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block">Blogs</a></li>
              </ul>
            </div>

            {/* Partnership Column */}
            <div className="md:col-span-1">
              <h4 className="font-semibold text-gray-900 mb-6 text-lg">Partnership</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block">Find store</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block">Categories</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block">Blogs</a></li>
              </ul>
            </div>

            {/* Information Column */}
            <div className="md:col-span-1">
              <h4 className="font-semibold text-gray-900 mb-6 text-lg">Information</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block">Money Refund</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block">Shipping</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block">Contact Us</a></li>
              </ul>
            </div>

            {/* For Users Column */}
            <div className="md:col-span-1">
              <h4 className="font-semibold text-gray-900 mb-6 text-lg">For users</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block">Login</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block">Register</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block">Settings</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-block">My Orders</a></li>
              </ul>
            </div>
          </div>

          {/* App Download Section */}
          <div className="mt-12 pt-12 border-t border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">Get app</h4>
                <div className="flex gap-4">
                  <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-75">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </button>
                  <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs opacity-75">GET IT ON</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 text-sm mb-3 md:mb-0">
              © 2023 Ecommerce.
            </p>
            <div className="flex items-center gap-3 text-gray-600 text-sm">
              <span>English</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 