// 📁 routes/lootBoxRoutes.js
const express = require('express');
const router = express.Router();
const {
  createLootBox,
  getLootBoxes,
  getLootBox,
  openLootBox,
  updateLootBox,
  deleteLootBox
} = require('../controllers/lootBoxController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminmiddleware');

// Public routes
router.get('/', getLootBoxes);
router.get('/:id', getLootBox);

// Protected routes
router.post('/:id/open', protect, openLootBox);

// Admin routes
router.post('/', protect, admin, createLootBox);
router.put('/:id', protect, admin, updateLootBox);
router.delete('/:id', protect, admin, deleteLootBox);

module.exports = router;
