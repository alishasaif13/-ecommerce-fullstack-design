import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productAPI } from '../services/api';

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [selectedFilters, setSelectedFilters] = useState({
    brands: [],
    features: [],
    ratings: [],
    priceRange: { min: 0, max: 1000 },
    condition: 'any'
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productAPI.getAll();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = [
    'Mobile accessory',
    'Electronics',
    'Smartphones',
    'Modern tech',
    'More category'
  ];

  const brands = [
    'Samsung',
    'Apple',
    'Huawei',
    'POCO',
    'Xiaomi',
    'Lenovo'
  ];

  const features = [
    'Metallic',
    'Plastic Cover',
    '8GB Ram',
    'Super power',
    'Large Memory'
  ];

  const conditions = [
    'Any',
    'Refurbished',
    'Brand new',
    'Used'
  ];

  const ratings = [
    { stars: 5, label: '5 stars' },
    { stars: 4, label: '4 stars' },
    { stars: 3, label: '3 stars' },
    { stars: 2, label: '2 stars' },
    { stars: 1, label: '1 star' }
  ];

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleBrandToggle = (brand) => {
    setSelectedFilters(prev => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter(b => b !== brand)
        : [...prev.brands, brand]
    }));
  };

  const handleFeatureToggle = (feature) => {
    setSelectedFilters(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleRatingToggle = (rating) => {
    setSelectedFilters(prev => ({
      ...prev,
      ratings: prev.ratings.includes(rating)
        ? prev.ratings.filter(r => r !== rating)
        : [...prev.ratings, rating]
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      brands: [],
      features: [],
      ratings: [],
      priceRange: { min: 0, max: 1000 },
      condition: 'any'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li><Link to="/" className="text-gray-500 hover:text-blue-600">Home</Link></li>
              <li className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link to="#" className="text-gray-500 hover:text-blue-600">Catalogs</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link to="#" className="text-gray-500 hover:text-blue-600">Men's wear</Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-900">Summer clothing</span>
              </li>
            </ol>
          </nav>
        </div>

        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-64 flex-shrink-0">
            <div className="space-y-6">
              {/* Category */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Category</h3>
                  <button className="text-blue-600 text-sm">▼</button>
                </div>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        className="mr-3 text-blue-600"
                        defaultChecked={index === 0}
                      />
                      <span className="text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                  <a href="#" className="text-blue-600 text-sm hover:text-blue-700">See all</a>
                </div>
              </div>

              {/* Brands */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Brands</h3>
                  <button className="text-blue-600 text-sm">▼</button>
                </div>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-3 text-blue-600"
                        checked={selectedFilters.brands.includes(brand)}
                        onChange={() => handleBrandToggle(brand)}
                      />
                      <span className="text-sm text-gray-700">{brand}</span>
                    </label>
                  ))}
                  <a href="#" className="text-blue-600 text-sm hover:text-blue-700">See all</a>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Features</h3>
                  <button className="text-blue-600 text-sm">▼</button>
                </div>
                <div className="space-y-2">
                  {features.map((feature) => (
                    <label key={feature} className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-3 text-blue-600"
                        checked={selectedFilters.features.includes(feature)}
                        onChange={() => handleFeatureToggle(feature)}
                      />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </label>
                  ))}
                  <a href="#" className="text-blue-600 text-sm hover:text-blue-700">See all</a>
                </div>
              </div>

              {/* Price Range */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Price range</h3>
                  <button className="text-blue-600 text-sm">▼</button>
                </div>
                <div className="space-y-4">
                  <div className="w-full bg-gray-200 rounded-lg h-2">
                    <div className="bg-blue-600 h-2 rounded-lg w-3/4"></div>
                  </div>
                  <div className="flex gap-4">
                    <input
                      type="number"
                      placeholder="Min"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      value={selectedFilters.priceRange.min}
                      onChange={(e) => handleFilterChange('priceRange', { ...selectedFilters.priceRange, min: Number(e.target.value) })}
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                      value={selectedFilters.priceRange.max}
                      onChange={(e) => handleFilterChange('priceRange', { ...selectedFilters.priceRange, max: Number(e.target.value) })}
                    />
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                    Apply
                  </button>
                </div>
              </div>

              {/* Condition */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Condition</h3>
                  <button className="text-blue-600 text-sm">▼</button>
                </div>
                <div className="space-y-2">
                  {conditions.map((condition) => (
                    <label key={condition} className="flex items-center">
                      <input
                        type="radio"
                        name="condition"
                        className="mr-3 text-blue-600"
                        value={condition}
                        checked={selectedFilters.condition === condition}
                        onChange={(e) => handleFilterChange('condition', e.target.value)}
                      />
                      <span className="text-sm text-gray-700">{condition}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Ratings */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Ratings</h3>
                  <button className="text-blue-600 text-sm">▼</button>
                </div>
                <div className="space-y-2">
                  {ratings.map((rating) => (
                    <label key={rating.stars} className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-3 text-blue-600"
                        checked={selectedFilters.ratings.includes(rating.stars)}
                        onChange={() => handleRatingToggle(rating.stars)}
                      />
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-yellow-400 ${i < rating.stars ? 'text-yellow-400' : 'text-gray-300'}`}>
                            ★
                          </span>
                        ))}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Controls */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    12,873 items in Mobile accessory
                  </h2>
                  <div className="flex gap-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-blue-600" defaultChecked />
                      <span className="text-sm text-gray-700">Verified only</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-blue-600" />
                      <span className="text-sm text-gray-700">Featured</span>
                    </label>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Applied Filters */}
              {(selectedFilters.brands.length > 0 || selectedFilters.features.length > 0 || selectedFilters.ratings.length > 0) && (
                <div className="flex items-center gap-2 flex-wrap">
                  {selectedFilters.brands.map((brand) => (
                    <span key={brand} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      {brand}
                      <button
                        onClick={() => handleBrandToggle(brand)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  {selectedFilters.features.map((feature) => (
                    <span key={feature} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      {feature}
                      <button
                        onClick={() => handleFeatureToggle(feature)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  {selectedFilters.ratings.map((rating) => (
                    <span key={rating} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      {rating} star
                      <button
                        onClick={() => handleRatingToggle(rating)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                  <button
                    onClick={clearAllFilters}
                    className="text-blue-600 text-sm hover:text-blue-800 underline"
                  >
                    Clear all filter
                  </button>
                </div>
              )}
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <ProductCard 
                  key={product._id} 
                  product={product} 
                  viewMode={viewMode}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>Show 10</option>
                <option>Show 20</option>
                <option>Show 50</option>
              </select>
              <button className="px-3 py-2 text-gray-600 hover:text-blue-600">‹</button>
              <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
              <button className="px-3 py-2 text-gray-600 hover:text-blue-600">2</button>
              <button className="px-3 py-2 text-gray-600 hover:text-blue-600">3</button>
              <button className="px-3 py-2 text-gray-600 hover:text-blue-600">›</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage; 