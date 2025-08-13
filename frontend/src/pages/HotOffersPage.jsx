import React from 'react';

const HotOffersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hot Offers</h1>
          <p className="text-xl text-gray-600">Limited time deals and exclusive offers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Hot Offer Cards */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=250&fit=crop" 
                alt="Laptop Offer" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                -25% OFF
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Laptops</h3>
              <p className="text-gray-600 mb-4">High-performance laptops with amazing discounts</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-red-600">$899</span>
                  <span className="text-gray-400 line-through ml-2">$1199</span>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=250&fit=crop" 
                alt="Headphones Offer" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                -30% OFF
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wireless Headphones</h3>
              <p className="text-gray-600 mb-4">Premium sound quality with noise cancellation</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-red-600">$199</span>
                  <span className="text-gray-400 line-through ml-2">$285</span>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=250&fit=crop" 
                alt="Smartphone Offer" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                -20% OFF
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Latest Smartphones</h3>
              <p className="text-gray-600 mb-4">Cutting-edge technology at unbeatable prices</p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-red-600">$799</span>
                  <span className="text-gray-400 line-through ml-2">$999</span>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotOffersPage;
