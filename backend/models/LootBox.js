// 📁 models/LootBox.js
const mongoose = require('mongoose');

const lootBoxSchema = new mongoose.Schema({
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
  image: {
    type: String,
    required: true,
  },
  rarity: {
    type: String,
    enum: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic'],
    default: 'Common'
  },
  gameType: {
    type: String,
    enum: ['RPG', 'FPS', 'MOBA', 'Strategy', 'Adventure', 'Sports', 'Other'],
    default: 'RPG'
  },
  contents: [{
    item: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    dropRate: { type: Number, required: true }, // Percentage chance (0-100)
    guaranteed: { type: Boolean, default: false }, // Guaranteed drop
    minQuantity: { type: Number, default: 1 },
    maxQuantity: { type: Number, default: 1 }
  }],
  guaranteedRarity: {
    type: String,
    enum: ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary', 'Mythic'],
    default: 'Common'
  },
  maxOpens: {
    type: Number,
    default: -1 // -1 means unlimited
  },
  currentOpens: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  expiresAt: {
    type: Date,
    default: null
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('LootBox', lootBoxSchema);
