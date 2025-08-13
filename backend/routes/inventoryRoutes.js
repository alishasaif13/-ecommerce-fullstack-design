// 📁 routes/inventoryRoutes.js
const express = require('express');
const router = express.Router();
const {
  getUserInventory,
  getUserInventoryById,
  addItemToInventory,
  removeItemFromInventory,
  updateInventoryItem,
  getAllUserInventories
} = require('../controllers/userInventoryController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminmiddleware');

// User routes
router.get('/', protect, getUserInventory);
router.post('/add', protect, addItemToInventory);
router.delete('/remove', protect, removeItemFromInventory);
router.put('/update', protect, updateInventoryItem);

// Admin routes
router.get('/all', protect, admin, getAllUserInventories);
router.get('/:userId', protect, admin, getUserInventoryById);

module.exports = router;
