require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');
const config = require('../config/config');

console.log('MONGO_URI:', config.MONGO_URI);
console.log('Environment variables:', process.env.MONGO_URI);

const sampleProducts = [
  {
    name: "Wireless Bluetooth Headphones",
    price: 99.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    description: "High-quality wireless headphones with noise cancellation and long battery life.",
    category: "Electronics",
    stock: 50,
    countInStock: 50,
    rating: 4.5,
    reviews: 128,
    featured: true
  },
  {
    name: "Smart Fitness Watch",
    price: 199.99,
    originalPrice: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    description: "Advanced fitness tracker with heart rate monitoring and GPS.",
    category: "Electronics",
    stock: 30,
    countInStock: 30,
    rating: 4.8,
    reviews: 89,
    featured: true
  },
  {
    name: "Premium Laptop Backpack",
    price: 49.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    description: "Durable laptop backpack with multiple compartments and water-resistant material.",
    category: "Fashion",
    stock: 75,
    countInStock: 75,
    rating: 4.3,
    reviews: 156,
    featured: true
  },
  {
    name: "Wireless Gaming Mouse",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    description: "Precision gaming mouse with customizable RGB lighting and programmable buttons.",
    category: "Electronics",
    stock: 100,
    countInStock: 100,
    rating: 4.6,
    reviews: 203,
    featured: true
  },
  {
    name: "Gaming Keyboard RGB",
    price: 149.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400&h=400&fit=crop",
    description: "Mechanical gaming keyboard with RGB backlighting and macro keys.",
    category: "Electronics",
    stock: 25,
    countInStock: 25,
    rating: 4.7,
    reviews: 95,
    featured: false
  },
  {
    name: "Running Shoes Pro",
    price: 89.99,
    originalPrice: 119.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    description: "Professional running shoes with advanced cushioning technology.",
    category: "Sports",
    stock: 60,
    countInStock: 60,
    rating: 4.4,
    reviews: 167,
    featured: false
  },
  {
    name: "Coffee Maker Deluxe",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop",
    description: "Programmable coffee maker with built-in grinder and thermal carafe.",
    category: "Home & Garden",
    stock: 40,
    countInStock: 40,
    rating: 4.2,
    reviews: 134,
    featured: false
  },
  {
    name: "Bluetooth Speaker",
    price: 69.99,
    originalPrice: 89.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    description: "Portable Bluetooth speaker with 360-degree sound and waterproof design.",
    category: "Electronics",
    stock: 80,
    countInStock: 80,
    rating: 4.6,
    reviews: 88,
    featured: false
  },
  {
    name: "Yoga Mat Premium",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    description: "Non-slip yoga mat with alignment lines and carrying strap.",
    category: "Sports",
    stock: 120,
    countInStock: 120,
    rating: 4.1,
    reviews: 203,
    featured: false
  },
  {
    name: "Desk Lamp LED",
    price: 45.99,
    originalPrice: 65.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
    description: "Adjustable LED desk lamp with touch controls and multiple color temperatures.",
    category: "Home & Garden",
    stock: 90,
    countInStock: 90,
    rating: 4.3,
    reviews: 156,
    featured: false
  },
  {
    name: "Wireless Earbuds",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    description: "True wireless earbuds with active noise cancellation and wireless charging case.",
    category: "Electronics",
    stock: 35,
    countInStock: 35,
    rating: 4.8,
    reviews: 234,
    featured: false
  },
  {
    name: "Fitness Tracker",
    price: 79.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop",
    description: "Smart fitness tracker with heart rate monitoring and sleep tracking.",
    category: "Electronics",
    stock: 70,
    countInStock: 70,
    rating: 4.5,
    reviews: 189,
    featured: false
  }
];

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(config.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert sample data
    const products = await Product.insertMany(sampleProducts);
    console.log(`Inserted ${products.length} products`);

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedData(); 