import React, { useState } from 'react';

const SearchBar = ({ onSearch, placeholder = "Search products...", className = "" }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSearch} className="relative">
        <div className="relative group">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => setIsExpanded(true)}
            onBlur={() => setTimeout(() => setIsExpanded(false), 200)}
            placeholder={placeholder}
            className="w-full px-6 py-4 pl-16 pr-16 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:from-white focus:to-white transition-all duration-300 group-hover:from-white group-hover:to-white group-hover:border-blue-300 group-hover:shadow-lg"
          />
          <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
            <svg className="w-6 h-6 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button
            type="submit"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-2 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </form>

      {/* Advanced Search Options */}
      {isExpanded && (
        <div className="absolute top-full left-0 right-0 mt-4 bg-white border border-gray-200 rounded-3xl shadow-2xl z-50 p-8 animate-fade-in backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-4">Category</label>
              <select className="w-full px-5 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:from-white focus:to-white transition-all duration-200 font-medium">
                <option value="">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="home">Home & Garden</option>
                <option value="sports">Sports</option>
                <option value="books">Books</option>
                <option value="toys">Toys</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-4">Price Range</label>
              <div className="flex space-x-4">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-1/2 px-5 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:from-white focus:to-white transition-all duration-200 font-medium"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-1/2 px-5 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:from-white focus:to-white transition-all duration-200 font-medium"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-4">Rating</label>
              <select className="w-full px-5 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:from-white focus:to-white transition-all duration-200 font-medium">
                <option value="">Any Rating</option>
                <option value="4">4+ Stars</option>
                <option value="3">3+ Stars</option>
                <option value="2">2+ Stars</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-8 space-x-4">
            <button
              type="button"
              className="px-8 py-4 text-gray-600 hover:text-gray-800 transition-colors duration-200 font-semibold hover:bg-gray-100 rounded-2xl"
              onClick={() => setSearchTerm('')}
            >
              Clear
            </button>
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar; 