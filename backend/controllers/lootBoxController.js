// 📁 controllers/lootBoxController.js
const LootBox = require('../models/LootBox');
const Product = require('../models/Product');
const UserInventory = require('../models/UserInventory');

// @desc    Create a new loot box
// @route   POST /api/lootboxes
// @access  Private/Admin
const createLootBox = async (req, res) => {
  try {
    const lootBox = await LootBox.create({
      ...req.body,
      createdBy: req.user.id
    });
    
    res.status(201).json({
      success: true,
      data: lootBox
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Invalid data',
      error: error.message
    });
  }
};

// @desc    Get all loot boxes
// @route   GET /api/lootboxes
// @access  Public
const getLootBoxes = async (req, res) => {
  try {
    const { gameType, rarity, isActive } = req.query;
    
    let query = {};
    
    if (gameType && gameType !== 'all') {
      query.gameType = gameType;
    }
    
    if (rarity && rarity !== 'all') {
      query.rarity = rarity;
    }
    
    if (isActive !== undefined) {
      query.isActive = isActive === 'true';
    }
    
    const lootBoxes = await LootBox.find(query)
      .populate('contents.item', 'name image rarity lootType')
      .sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: lootBoxes.length,
      data: lootBoxes
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

// @desc    Get single loot box
// @route   GET /api/lootboxes/:id
// @access  Public
const getLootBox = async (req, res) => {
  try {
    const lootBox = await LootBox.findById(req.params.id)
      .populate('contents.item', 'name image rarity lootType stats level');
    
    if (!lootBox) {
      return res.status(404).json({
        success: false,
        message: 'Loot box not found'
      });
    }
    
    res.json({
      success: true,
      data: lootBox
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

// @desc    Open a loot box
// @route   POST /api/lootboxes/:id/open
// @access  Private
const openLootBox = async (req, res) => {
  try {
    const lootBox = await LootBox.findById(req.params.id);
    
    if (!lootBox) {
      return res.status(404).json({
        success: false,
        message: 'Loot box not found'
      });
    }
    
    if (!lootBox.isActive) {
      return res.status(400).json({
        success: false,
        message: 'Loot box is not active'
      });
    }
    
    if (lootBox.maxOpens !== -1 && lootBox.currentOpens >= lootBox.maxOpens) {
      return res.status(400).json({
        success: false,
        message: 'Loot box has reached maximum opens'
      });
    }
    
    // Generate rewards based on drop rates
    const rewards = [];
    const guaranteedItems = lootBox.contents.filter(item => item.guaranteed);
    
    // Add guaranteed items
    for (const item of guaranteedItems) {
      const quantity = Math.floor(Math.random() * (item.maxQuantity - item.minQuantity + 1)) + item.minQuantity;
      rewards.push({
        item: item.item,
        quantity,
        source: 'LootBox'
      });
    }
    
    // Generate random drops based on drop rates
    for (const content of lootBox.contents) {
      if (!content.guaranteed) {
        const random = Math.random() * 100;
        if (random <= content.dropRate) {
          const quantity = Math.floor(Math.random() * (content.maxQuantity - content.minQuantity + 1)) + content.minQuantity;
          rewards.push({
            item: content.item,
            quantity,
            source: 'LootBox'
          });
        }
      }
    }
    
    // Add to user inventory
    const userInventory = await UserInventory.findOne({ user: req.user.id });
    
    if (userInventory) {
      for (const reward of rewards) {
        const existingItem = userInventory.items.find(item => item.product.toString() === reward.item.toString());
        
        if (existingItem) {
          existingItem.quantity += reward.quantity;
        } else {
          userInventory.items.push({
            product: reward.item,
            quantity: reward.quantity,
            source: reward.source
          });
        }
      }
      
      userInventory.totalItems = userInventory.items.reduce((total, item) => total + item.quantity, 0);
      userInventory.lastUpdated = new Date();
      await userInventory.save();
    } else {
      // Create new inventory if it doesn't exist
      const newInventory = new UserInventory({
        user: req.user.id,
        items: rewards.map(reward => ({
          product: reward.item,
          quantity: reward.quantity,
          source: reward.source
        })),
        totalItems: rewards.reduce((total, reward) => total + reward.quantity, 0)
      });
      await newInventory.save();
    }
    
    // Update loot box open count
    lootBox.currentOpens += 1;
    await lootBox.save();
    
    // Populate item details for response
    const populatedRewards = await Promise.all(
      rewards.map(async (reward) => {
        const item = await Product.findById(reward.item);
        return {
          ...reward,
          item: item
        };
      })
    );
    
    res.json({
      success: true,
      message: 'Loot box opened successfully!',
      rewards: populatedRewards,
      lootBox: lootBox
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
};

// @desc    Update loot box
// @route   PUT /api/lootboxes/:id
// @access  Private/Admin
const updateLootBox = async (req, res) => {
  try {
    const lootBox = await LootBox.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    if (!lootBox) {
      return res.status(404).json({
        success: false,
        message: 'Loot box not found'
      });
    }
    
    res.json({
      success: true,
      data: lootBox
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Invalid data',
      error: error.message
    });
  }
};

// @desc    Delete loot box
// @route   DELETE /api/lootboxes/:id
// @access  Private/Admin
const deleteLootBox = async (req, res) => {
  try {
    const lootBox = await LootBox.findByIdAndDelete(req.params.id);
    
    if (!lootBox) {
      return res.status(404).json({
        success: false,
        message: 'Loot box not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Loot box deleted successfully'
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
  createLootBox,
  getLootBoxes,
  getLootBox,
  openLootBox,
  updateLootBox,
  deleteLootBox
};
