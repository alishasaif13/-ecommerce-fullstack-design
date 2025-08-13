// 📁 scripts/setupAdmin.js
const mongoose = require('mongoose');
const User = require('../models/user');
const Product = require('../models/Product');
const Category = require('../models/category');
require('dotenv').config();

const connectDB = require('../config/db');

const setupAdmin = async () => {
  try {
    // Connect to database
    await connectDB();
    console.log('✅ Connected to database');

    // Check if admin user exists
    const adminExists = await User.findOne({ email: 'admin13@gmail.com' });
    
    if (adminExists) {
      console.log('✅ Admin user already exists');
      return;
    }

    // Create admin user
    const adminUser = await User.create({
      name: 'Admin',
      email: 'admin13@gmail.com',
      password: '12345',
      isAdmin: true
    });

    console.log('✅ Admin user created successfully:', {
      name: adminUser.name,
      email: adminUser.email,
      isAdmin: adminUser.isAdmin
    });

    // Create sample categories
    const categories = [
      { name: 'Electronics', description: 'Electronic devices and gadgets' },
      { name: 'Fashion', description: 'Clothing and accessories' },
      { name: 'Home & Garden', description: 'Home improvement and garden items' },
      { name: 'Sports', description: 'Sports equipment and accessories' },
      { name: 'Automotive', description: 'Car parts and accessories' },
      { name: 'Books', description: 'Books and educational materials' },
      { name: 'Toys', description: 'Toys and games' },
      { name: 'Gaming', description: 'Gaming items and loot boxes' }
    ];

    for (const categoryData of categories) {
      const existingCategory = await Category.findOne({ name: categoryData.name });
      if (!existingCategory) {
        await Category.create(categoryData);
        console.log(`✅ Category created: ${categoryData.name}`);
      }
    }

    // Create sample products
    const sampleProducts = [
      {
        name: 'Gaming Headset Pro',
        description: 'High-quality gaming headset with noise cancellation',
        price: 2500,
        originalPrice: 3000,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
        category: 'Gaming',
        stock: 50,
        countInStock: 50,
        rating: 4.5,
        reviews: 120,
        featured: true,
        rarity: 'Rare',
        lootType: 'Accessory',
        gameType: 'RPG',
        level: 1,
        stats: { attack: 0, defense: 0, speed: 0, magic: 0 }
      },
      {
        name: 'Epic Sword of Power',
        description: 'Legendary sword with magical properties',
        price: 5000,
        originalPrice: 6000,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
        category: 'Gaming',
        stock: 10,
        countInStock: 10,
        rating: 5.0,
        reviews: 89,
        featured: true,
        rarity: 'Legendary',
        lootType: 'Weapon',
        gameType: 'RPG',
        level: 50,
        stats: { attack: 100, defense: 20, speed: 10, magic: 50 }
      },
      {
        name: 'Smart Watch Series 5',
        description: 'Latest smartwatch with health monitoring',
        price: 15000,
        originalPrice: 18000,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
        category: 'Electronics',
        stock: 25,
        countInStock: 25,
        rating: 4.3,
        reviews: 234,
        featured: true
      },
      {
        name: 'Wireless Bluetooth Speaker',
        description: 'Portable speaker with amazing sound quality',
        price: 3500,
        originalPrice: 4000,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
        category: 'Electronics',
        stock: 30,
        countInStock: 30,
        rating: 4.1,
        reviews: 156,
        featured: false
      }
    ];

    for (const productData of sampleProducts) {
      const existingProduct = await Product.findOne({ name: productData.name });
      if (!existingProduct) {
        await Product.create(productData);
        console.log(`✅ Product created: ${productData.name}`);
      }
    }

    console.log('🎉 Setup completed successfully!');
    console.log('📧 Admin Login: admin13@gmail.com');
    console.log('🔑 Admin Password: 12345');

  } catch (error) {
    console.error('❌ Setup failed:', error);
  } finally {
    mongoose.connection.close();
    console.log('🔌 Database connection closed');
  }
};

// Run the setup
setupAdmin();
