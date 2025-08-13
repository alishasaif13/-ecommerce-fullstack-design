const API_BASE_URL = 'http://localhost:5000/api';

// Generic API call function
const apiCall = async (endpoint, options = {}) => {
  try {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers,
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

// Authentication API functions
export const authAPI = {
  // Register new user
  register: async (userData) => {
    return apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },

  // Login user
  login: async (credentials) => {
    return apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },

  // Get user profile
  getProfile: async () => {
    return apiCall('/auth/profile');
  },

  // Create admin user (for initial setup)
  createAdmin: async () => {
    return apiCall('/auth/create-admin', {
      method: 'POST',
    });
  },
};

// Product API functions
export const productAPI = {
  // Get all products with optional filters
  getAll: async (filters = {}) => {
    const params = new URLSearchParams();
    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        params.append(key, filters[key]);
      }
    });
    
    const queryString = params.toString();
    const endpoint = queryString ? `/products?${queryString}` : '/products';
    
    return apiCall(endpoint);
  },

  // Get featured products
  getFeatured: async () => {
    return apiCall('/products/featured');
  },

  // Get single product by ID
  getById: async (id) => {
    return apiCall(`/products/${id}`);
  },

  // Create new product (admin only)
  create: async (productData) => {
    return apiCall('/products', {
      method: 'POST',
      body: JSON.stringify(productData),
    });
  },

  // Update product (admin only)
  update: async (id, productData) => {
    return apiCall(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
    });
  },

  // Delete product (admin only)
  delete: async (id) => {
    return apiCall(`/products/${id}`, {
      method: 'DELETE',
    });
  },
};

// Cart API functions
export const cartAPI = {
  // Get user's cart
  getCart: async () => {
    return apiCall('/cart');
  },

  // Add item to cart
  addToCart: async (productId, quantity) => {
    return apiCall('/cart/add', {
      method: 'POST',
      body: JSON.stringify({ productId, quantity })
    });
  },

  // Update cart item quantity
  updateCartItem: async (productId, quantity) => {
    return apiCall(`/cart/update/${productId}`, {
      method: 'PUT',
      body: JSON.stringify({ quantity })
    });
  },

  // Remove item from cart
  removeFromCart: async (productId) => {
    return apiCall(`/cart/remove/${productId}`, {
      method: 'DELETE',
    });
  },

  // Clear cart
  clearCart: async () => {
    return apiCall('/cart/clear', {
      method: 'DELETE',
    });
  },
};

// Order API functions
export const orderAPI = {
  // Create new order
  createOrder: async (orderData) => {
    return apiCall('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
  },

  // Get user's orders
  getUserOrders: async () => {
    return apiCall('/orders');
  },

  // Get order by ID
  getOrderById: async (orderId) => {
    return apiCall(`/orders/${orderId}`);
  },

  // Update order status (admin only)
  updateOrderStatus: async (orderId, status) => {
    return apiCall(`/orders/${orderId}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    });
  },
};

// Search and filter functions
export const searchAPI = {
  // Search products by name
  searchByName: async (searchTerm) => {
    return apiCall(`/products?search=${encodeURIComponent(searchTerm)}`);
  },

  // Filter by category
  filterByCategory: async (category) => {
    return apiCall(`/products?category=${encodeURIComponent(category)}`);
  },

  // Filter by price range
  filterByPrice: async (minPrice, maxPrice) => {
    const params = new URLSearchParams();
    if (minPrice) params.append('minPrice', minPrice);
    if (maxPrice) params.append('maxPrice', maxPrice);
    
    return apiCall(`/products?${params.toString()}`);
  },

  // Filter by rating
  filterByRating: async (rating) => {
    return apiCall(`/products?rating=${rating}`);
  },
};

export default apiCall; 