import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productAPI } from '../services/api';
import { useAuth } from '../contexts/AuthContext';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        const products = await productAPI.getFeatured();
        setFeaturedProducts(products);
      } catch (err) {
        console.error('Error fetching featured products:', err);
        setError('Failed to load featured products');
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content Area - Top Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            
            {/* Left Sidebar - Categories */}
            <div className="col-span-3">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Automobiles</h3>
                <ul className="space-y-3">
                  {[
                    'Automobiles',
                    'Clothes and wear',
                    'Home interiors',
                    'Computer and tech',
                    'Tools, equipments',
                    'Sports and outdoor',
                    'Animal and pets',
                    'Machinery tools',
                    'More category'
                  ].map((category, index) => (
                    <li key={index}>
                      <Link 
                        to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-gray-600 hover:text-blue-600 text-sm block py-1"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Center - Hero Banner */}
            <div className="col-span-6">
              <div className="bg-teal-100 rounded-2xl p-8 h-full">
                <div className="flex items-center justify-between h-full">
                  {/* Left side - Text content */}
                  <div className="flex-1 pr-8">
                    <p className="text-sm text-gray-600 mb-2">Latest trending</p>
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">Electronic items</h1>
                    <button className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      Learn more
                    </button>
                  </div>
                  
                  {/* Right side - Improved flat lay arrangement */}
                  <div className="flex-shrink-0">
                    <div className="relative w-72 h-40">
                      {/* Main laptop - positioned as base */}
                      <img 
                        src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop" 
                        alt="Laptop" 
                        className="absolute top-6 left-2 w-48 h-32 object-cover rounded-lg shadow-lg"
                      />
                      
                      {/* Headphones on yellow background */}
                      <div className="absolute top-0 right-6 bg-yellow-300 p-2 rounded-lg shadow-md">
                        <img 
                          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=70&h=50&fit=crop" 
                          alt="Headphones" 
                          className="w-14 h-10 object-cover rounded"
                        />
                      </div>
                      
                      {/* Smartphone on white background */}
                      <div className="absolute bottom-2 right-2 bg-white p-2 rounded-lg shadow-md">
                        <img 
                          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=50&h=70&fit=crop" 
                          alt="Smartphone" 
                          className="w-10 h-14 object-cover rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - User Actions */}
            <div className="col-span-3">
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-4">
                    {isAuthenticated ? `Hi, ${user?.name || 'user'}!` : 'Hi, user let\'s get started!'}
                  </p>
                  <div className="space-y-2">
                    {!isAuthenticated ? (
                      <>
                        <button 
                          onClick={() => navigate('/register')}
                          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                        >
                          Join now
                        </button>
                        <button 
                          onClick={() => navigate('/login')}
                          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                        >
                          Log in
                        </button>
                      </>
                    ) : (
                      <button 
                        onClick={() => navigate('/profile')}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                      >
                        View Profile
                      </button>
                    )}
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <div className="space-y-3">
                    <button 
                      onClick={() => navigate('/products')}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Get US $50 off with a new supplier
                    </button>
                    <button 
                      onClick={() => navigate('/contact')}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      Send quotes with your preferences
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deals and Offers Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Deals and offers</h2>
            <p className="text-gray-600">Hygiene equipments</p>
          </div>
          
          {/* Countdown Timer */}
          <div className="flex justify-center space-x-4 mb-12">
            {[
              { value: '04', label: 'DAYS' },
              { value: '13', label: 'HOUR' },
              { value: '34', label: 'MIN' },
              { value: '56', label: 'SEC' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-800 text-white rounded-lg flex items-center justify-center text-2xl font-bold mb-2">
                  {item.value}
                </div>
                <span className="text-sm text-gray-600 font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Product Carousel */}
          <div className="grid grid-cols-5 gap-6">
            {[
              { name: 'Smart watches', discount: '-25%', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop' },
              { name: 'Laptops', discount: '-15%', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop' },
              { name: 'GoPro cameras', discount: '-40%', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop' },
              { name: 'Headphones', discount: '-25%', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop' },
              { name: 'Canon cameras', discount: '-25%', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop' }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-4 text-center">
                <div className="relative mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    {product.discount}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Products</h2>
          
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-600">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.length > 0 ? (
                featuredProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              ) : (
                // Fallback products if no data from API
                [
                  {
                    _id: '1',
                    name: 'Wireless Headphones',
                    description: 'High-quality wireless headphones with noise cancellation',
                    price: 89.99,
                    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
                    stock: 15
                  },
                  {
                    _id: '2',
                    name: 'Smart Watch',
                    description: 'Feature-rich smartwatch with health monitoring',
                    price: 199.99,
                    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
                    stock: 8
                  },
                  {
                    _id: '3',
                    name: 'Laptop Pro',
                    description: 'Professional laptop for work and gaming',
                    price: 1299.99,
                    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop',
                    stock: 5
                  },
                  {
                    _id: '4',
                    name: 'Smartphone X',
                    description: 'Latest smartphone with advanced camera system',
                    price: 899.99,
                    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop',
                    stock: 12
                  }
                ].map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              )}
            </div>
          )}
        </div>
      </section>

      {/* Home and Outdoor Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-8">
            {/* Left Banner */}
            <div className="col-span-1">
              <div className="bg-green-50 rounded-2xl p-6 h-full flex flex-col justify-center text-center">
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop" 
                    alt="Home and outdoor" 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Home and outdoor</h3>
                <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-600">
                  Source now
                </button>
              </div>
            </div>

            {/* Product Grid */}
            <div className="col-span-3">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: 'Soft chairs', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=200&h=200&fit=crop' },
                  { name: 'Sofa & chair', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop' },
                  { name: 'Kitchen dishes', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop' },
                  { name: 'Smart watches', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop' },
                  { name: 'Kitchen mixer', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop' },
                  { name: 'Blenders', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop' }
                ].map((product, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-4 text-center">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-24 object-cover rounded-lg mb-3"
                    />
                    <h4 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h4>
                    <p className="text-xs text-gray-600">{product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consumer Electronics Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-8">
            {/* Left Banner */}
            <div className="col-span-1">
              <div className="bg-pink-50 rounded-2xl p-6 h-full flex flex-col justify-center text-center">
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop" 
                    alt="Consumer electronics" 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Consumer electronics and gadgets</h3>
                <button className="bg-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-pink-600">
                  Source now
                </button>
              </div>
            </div>

            {/* Product Grid */}
            <div className="col-span-3">
              <div className="grid grid-cols-4 gap-4">
                {[
                  { name: 'Smart watches', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop' },
                  { name: 'Cameras', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&h=200&fit=crop' },
                  { name: 'Headphones', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop' },
                  { name: 'Smart watches', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop' },
                  { name: 'Gaming set', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop' },
                  { name: 'Laptops & PC', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop' },
                  { name: 'Smartphones', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop' },
                  { name: 'Electric kettle', price: 'From USD 19', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop' }
                ].map((product, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-4 text-center">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-24 object-cover rounded-lg mb-3"
                    />
                    <h4 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h4>
                    <p className="text-xs text-gray-600">{product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Easy Way to Send Requests Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Left - Blue Banner */}
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">An easy way to send requests to all suppliers</h2>
              <p className="text-blue-100 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Right - Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send quote to suppliers</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">What item you need?</label>
                  <input 
                    type="text" 
                    placeholder="Enter item name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type more details</label>
                  <textarea 
                    rows="3"
                    placeholder="Enter more details about your requirement"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <div className="flex">
                    <input 
                      type="number" 
                      placeholder="0"
                      className="flex-1 px-4 py-3 border border-r-0 border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <select className="px-4 py-3 border border-gray-300 rounded-r-lg bg-gray-50">
                      <option>Pcs</option>
                      <option>Kg</option>
                      <option>Liters</option>
                    </select>
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Items Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Recommended items</h2>
          
          <div className="grid grid-cols-4 gap-6">
            {[
              { name: 'Cotton t-shirt', price: '$10.30', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop' },
              { name: 'Brown jacket', price: '$45.99', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop' },
              { name: 'Blue blazer', price: '$32.50', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop' },
              { name: 'Blue wallet', price: '$15.99', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=300&fit=crop' },
              { name: 'Denim shorts', price: '$28.75', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop' },
              { name: 'Headphones', price: '$89.99', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop' },
              { name: 'Blue backpack', price: '$45.50', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop' },
              { name: 'Clay pot', price: '$12.99', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop' }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow">
                <div className="relative mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  {index === 1 && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-2xl font-bold">BUY NOW</div>
                        <div className="text-4xl font-bold">10</div>
                      </div>
                    </div>
                  )}
                </div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h4>
                <p className="text-lg font-bold text-blue-600">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Extra Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our extra services</h2>
          
          <div className="grid grid-cols-4 gap-8">
            {[
              {
                title: 'Source from Industry Hubs',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop',
                icon: '🔍'
              },
              {
                title: 'Customize Your Products',
                image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop',
                icon: '📤'
              },
              {
                title: 'Fast, reliable shipping by ocean or air',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop',
                icon: '✈️'
              },
              {
                title: 'Product monitoring and Inspection',
                image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop',
                icon: '👁️'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="relative mb-4">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suppliers by Region Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Suppliers by region</h2>
          
          <div className="grid grid-cols-9 gap-6">
            {[
              { name: 'United Arab Emirates', flag: '🇦🇪', url: 'shopnow.com.ae' },
              { name: 'Australia', flag: '🇦🇺', url: 'shopnow.com.au' },
              { name: 'United States', flag: '🇺🇸', url: 'shopnow.com.us' },
              { name: 'Russia', flag: '🇷🇺', url: 'shopnow.ru' },
              { name: 'Italy', flag: '🇮🇹', url: 'shopnow.it' },
              { name: 'Denmark', flag: '🇩🇰', url: 'shopnow.dk' },
              { name: 'France', flag: '🇫🇷', url: 'shopnow.fr' },
              { name: 'China', flag: '🇨🇳', url: 'shopnow.cn' },
              { name: 'Great Britain', flag: '🇬🇧', url: 'shopnow.co.uk' }
            ].map((country, index) => (
              <div key={index} className="text-center">
                <div className="mb-3 flex justify-center">
                  <div className="text-4xl leading-none bg-white p-2 rounded-lg shadow-sm border">
                    {country.flag}
                  </div>
                </div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">{country.name}</h4>
                <p className="text-xs text-gray-500">{country.url}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Send Quote to Suppliers Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Blue Banner */}
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">An easy way to send requests to all suppliers</h2>
              <p className="text-blue-100 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            {/* Right - Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send quote to suppliers</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">What item you need?</label>
                  <input 
                    type="text" 
                    placeholder="Enter item name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type more details</label>
                  <textarea 
                    rows="3"
                    placeholder="Enter more details about your requirement"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <div className="flex">
                    <input 
                      type="number" 
                      placeholder="0"
                      className="flex-1 px-4 py-3 border border-r-0 border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <select className="px-4 py-3 border border-gray-300 rounded-r-lg bg-gray-50">
                      <option>Pcs</option>
                      <option>Kg</option>
                      <option>Liters</option>
                    </select>
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscribe on our newsletter</h2>
          <p className="text-gray-600 mb-8">
            Get daily news an upcoming offers from many suppliers all over the world
          </p>
          
          <div className="flex max-w-md mx-auto">
            <div className="relative flex-1">
              <input 
                type="email" 
                placeholder="Email"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-r-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 