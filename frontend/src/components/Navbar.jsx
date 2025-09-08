import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const { getCartItemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All category');
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsUserMenuOpen(false);
    setIsMenuOpen(false); // Close mobile menu on logout
  };

  const categories = [
    'All category', 'Electronics', 'Fashion', 'Home & Garden',
    'Sports', 'Automotive', 'Books', 'Toys'
  ];

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Left - Brand and Hamburger */}
            <div className="flex items-center">
              {/* Hamburger Menu Button */}
              <div className="lg:hidden mr-4">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Icon for menu open/close */}
                  <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    {isMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>

              {/* Brand */}
              <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900 hidden sm:block">Brand</span>
              </Link>
            </div>

            {/* Center - Search Bar (hidden on small screens) */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="flex w-full">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-l-0 border-gray-300 rounded-r-lg px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right - User Actions */}
            <div className="flex items-center space-x-4">
              {/* Cart Icon (always visible) */}
              <Link to="/cart" className="flex items-center text-gray-600 hover:text-blue-600 relative p-2" onClick={closeMobileMenu}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                {getCartItemCount() > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                    {getCartItemCount()}
                  </span>
                )}
              </Link>

              {/* Desktop User Actions (hidden on small screens) */}
              <div className="hidden lg:flex items-center space-x-6">
                {isAuthenticated ? (
                  <>
                    <Link to="/messages" className="flex items-center text-gray-600 hover:text-blue-600">
                      <span className="text-sm font-medium">Message</span>
                    </Link>
                    <Link to="/orders" className="flex items-center text-gray-600 hover:text-blue-600">
                      <span className="text-sm font-medium">Orders</span>
                    </Link>

                    {/* User Menu */}
                    <div className="relative">
                      <button
                        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                        className="flex items-center text-gray-600 hover:text-blue-600"
                      >
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-2">
                          {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                        </div>
                        <span className="text-sm font-medium">{user?.name}</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isUserMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                          {user?.isAdmin && (
                            <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              Admin Panel
                            </Link>
                          )}
                          <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Profile
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Logout
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="text-gray-600 hover:text-blue-600 text-sm font-medium">
                      Login
                    </Link>
                    <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                      Join Now
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Navigation Menu (hidden on small screens) */}
      <div className="bg-white border-b border-gray-200 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-8 h-12">
            <Link to="/" className="text-gray-700 hover:text-blue-600 text-sm font-medium">All category</Link>
            <Link to="/hot-offers" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Hot offers</Link>
            <Link to="/gift-bonus" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Gift bonus</Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Projects</Link>
            <Link to="/menu-item" className="text-gray-700 hover:text-blue-600 text-sm font-medium">Menu item</Link>
            {/* ... other nav links ... */}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile Search Bar */}
            <div className="px-2 pb-4">
              <div className="flex w-full">
                <input type="text" placeholder="Search" className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>

            {/* Navigation Links */}
            <Link to="/" onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">All category</Link>
            <Link to="/hot-offers" onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Hot offers</Link>
            <Link to="/gift-bonus" onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Gift bonus</Link>
            <Link to="/projects" onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Projects</Link>
            <Link to="/menu-item" onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Menu item</Link>

            {/* User Actions */}
            <div className="border-t border-gray-200 pt-4 pb-3">
              {isAuthenticated ? (
                <div className="px-2 space-y-1">
                  <Link to="/profile" onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Profile</Link>
                  <Link to="/orders" onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Orders</Link>
                  <Link to="/messages" onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Messages</Link>
                  {user?.isAdmin && (
                    <Link to="/admin" onClick={closeMobileMenu} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Admin Panel</Link>
                  )}
                  <button onClick={handleLogout} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                    Logout
                  </button>
                </div>
              ) : (
                <div className="px-2 space-y-2">
                  <Link to="/login" onClick={closeMobileMenu} className="block w-full text-center bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-base font-medium hover:bg-gray-200">
                    Login
                  </Link>
                  <Link to="/register" onClick={closeMobileMenu} className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg text-base font-medium hover:bg-blue-700">
                    Join Now
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;