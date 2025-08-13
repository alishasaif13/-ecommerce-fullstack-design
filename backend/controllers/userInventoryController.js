// 📁 controllers/userInventoryController.js
const UserInventory = require('../models/UserInventory');
const Product = require('../models/Product');

// @desc    Get user inventory
// @route   GET /api/inventory
// @access  Private
const getUserInventory = async (req, res) => {
  try {
    let userInventory = await UserInventory.findOne({ user: req.user.id })
      .populate('items.product', 'name image rarity lootType stats level price');
    
    if (!userInventory) {
      userInventory = new UserInventory({
        user: req.user.id,
        items: [],
        totalItems: 0
      });
      await userInventory.save();
    }
    
    res.json({
      success: true,
      data: userInventory
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

// @desc    Get user inventory by user ID (Admin only)
// @route   GET /api/inventory/:userId
// @access  Private/Admin
const getUserInventoryById = async (req, res) => {
  try {
    const userInventory = await UserInventory.findOne({ user: req.params.userId })
      .populate('items.product', 'name image rarity lootType stats level price')
      .populate('user', 'name email');
    
    if (!userInventory) {
      return res.status(404).json({
        success: false,
        message: 'User inventory not found'
      });
    }
    
    res.json({
      success: true,
      data: userInventory
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

// @desc    Add item to user inventory
// @route   POST /api/inventory/add
// @access  Private
const addItemToInventory = async (req, res) => {
  try {
    const { productId, quantity = 1, source = 'Purchase' } = req.body;
    
    if (!productId) {
      return res.status(400).json({
        success: false,
        message: 'Product ID is required'
      });
    }
    
    // Verify product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }
    
    let userInventory = await UserInventory.findOne({ user: req.user.id });
    
    if (!userInventory) {
      userInventory = new UserInventory({
        user: req.user.id,
        items: [],
        totalItems: 0
      });
    }
    
    // Check if item already exists in inventory
    const existingItem = userInventory.items.find(
      item => item.product.toString() === productId
    );
    
    if (existingItem) {
      existingItem.quantity += quantity;
      existingItem.lastUpdated = new Date();
    } else {
      userInventory.items.push({
        product: productId,
        quantity,
        source,
        acquiredAt: new Date()
      });
    }
    
    userInventory.totalItems = userInventory.items.reduce(
      (total, item) => total + item.quantity, 0
    );
    userInventory.lastUpdated = new Date();
    
    await userInventory.save();
    
    // Populate the newly added item
    await userInventory.populate('items.product', 'name image rarity lootType stats level price');
    
    res.json({
      success: true,
      message: 'Item added to inventory successfully',
      data: userInventory
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

// @desc    Remove item from user inventory
// @route   DELETE /api/inventory/remove
// @access  Private
const removeItemFromInventory = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;
    
    if (!productId) {
      return res.status(400).json({
        success: false,
        message: 'Product ID is required'
      });
    }
    
    const userInventory = await UserInventory.findOne({ user: req.user.id });
    
    if (!userInventory) {
      return res.status(404).json({
        success: false,
        message: 'User inventory not found'
      });
    }
    
    const itemIndex = userInventory.items.findIndex(
      item => item.product.toString() === productId
    );
    
    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Item not found in inventory'
      });
    }
    
    const item = userInventory.items[itemIndex];
    
    if (item.quantity < quantity) {
      return res.status(400).json({
        success: false,
        message: 'Not enough items in inventory'
      });
    }
    
    if (item.quantity === quantity) {
      userInventory.items.splice(itemIndex, 1);
    } else {
      item.quantity -= quantity;
    }
    
    userInventory.totalItems = userInventory.items.reduce(
      (total, item) => total + item.quantity, 0
    );
    userInventory.lastUpdated = new Date();
    
    await userInventory.save();
    
    res.json({
      success: true,
      message: 'Item removed from inventory successfully',
      data: userInventory
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

// @desc    Update item in inventory (equip/unequip, level up, etc.)
// @route   PUT /api/inventory/update
// @access  Private
const updateInventoryItem = async (req, res) => {
  try {
    const { productId, updates } = req.body;
    
    if (!productId || !updates) {
      return res.status(400).json({
        success: false,
        message: 'Product ID and updates are required'
      });
    }
    
    const userInventory = await UserInventory.findOne({ user: req.user.id });
    
    if (!userInventory) {
      return res.status(404).json({
        success: false,
        message: 'User inventory not found'
      });
    }
    
    const item = userInventory.items.find(
      item => item.product.toString() === productId
    );
    
    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found in inventory'
      });
    }
    
    // Update allowed fields
    const allowedUpdates = ['isEquipped', 'durability', 'level'];
    for (const [key, value] of Object.entries(updates)) {
      if (allowedUpdates.includes(key)) {
        item[key] = value;
      }
    }
    
    userInventory.lastUpdated = new Date();
    await userInventory.save();
    
    // Populate the updated item
    await userInventory.populate('items.product', 'name image rarity lootType stats level price');
    
    res.json({
      success: true,
      message: 'Item updated successfully',
      data: userInventory
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

// @desc    Get all user inventories (Admin only)
// @route   GET /api/inventory/all
// @access  Private/Admin
const getAllUserInventories = async (req, res) => {
  try {
    const userInventories = await UserInventory.find()
      .populate('user', 'name email isAdmin')
      .populate('items.product', 'name image rarity lootType')
      .sort({ lastUpdated: -1 });
    
    res.json({
      success: true,
      count: userInventories.length,
      data: userInventories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

module.exports = {
  getUserInventory,
  getUserInventoryById,
  addItemToInventory,
  removeItemFromInventory,
  updateInventoryItem,
  getAllUserInventories
};
