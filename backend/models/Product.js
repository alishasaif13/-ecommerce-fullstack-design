// 📁 models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  originalPrice: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: Number,
    default: 0,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  // New loot-specific fields (optional for non-gaming products)
  rarity: {
    type: String,
    enum: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic'],
    default: 'Common'
  },
  lootType: {
    type: String,
    enum: ['Weapon', 'Armor', 'Accessory', 'Consumable', 'Material', 'Currency', 'Special'],
    required: false // Made optional
  },
  gameType: {
    type: String,
    enum: ['RPG', 'FPS', 'MOBA', 'Strategy', 'Adventure', 'Sports', 'Other'],
    default: 'RPG'
  },
  level: {
    type: Number,
    default: 1
  },
  stats: {
    attack: { type: Number, default: 0 },
    defense: { type: Number, default: 0 },
    speed: { type: Number, default: 0 },
    magic: { type: Number, default: 0 }
  },
  isLootBox: {
    type: Boolean,
    default: false
  },
  lootBoxContents: [{
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    dropRate: { type: Number, default: 1.0 } // Percentage chance
  }],
  tradeable: {
    type: Boolean,
    default: true
  },
  limited: {
    type: Boolean,
    default: false
  },
  limitedQuantity: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

