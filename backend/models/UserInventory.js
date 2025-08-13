// 📁 models/UserInventory.js
const mongoose = require('mongoose');

const userInventorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      default: 1
    },
    acquiredAt: {
      type: Date,
      default: Date.now
    },
    source: {
      type: String,
      enum: ['Purchase', 'LootBox', 'Reward', 'Trade', 'Gift'],
      default: 'Purchase'
    },
    isEquipped: {
      type: Boolean,
      default: false
    },
    durability: {
      type: Number,
      default: 100
    },
    level: {
      type: Number,
      default: 1
    }
  }],
  totalItems: {
    type: Number,
    default: 0
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// Index for faster queries
userInventorySchema.index({ user: 1 });
userInventorySchema.index({ 'items.product': 1 });

module.exports = mongoose.model('UserInventory', userInventorySchema);
