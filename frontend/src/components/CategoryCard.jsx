import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/products?category=${category.name.toLowerCase()}`}>
      <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center cursor-pointer border border-gray-100 hover:border-blue-200 transform hover:-translate-y-3 hover:scale-105">
        <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
          <span className="text-3xl">{category.icon}</span>
        </div>
        <h3 className="font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 text-xl">
          {category.name}
        </h3>
        <p className="text-sm text-gray-600 mb-6 font-medium">{category.count} items</p>
        <div className="w-10 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto group-hover:w-16 transition-all duration-500 rounded-full shadow-sm"></div>
        
        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </Link>
  );
};

export default CategoryCard; 