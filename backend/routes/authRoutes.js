// 📁 routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { 
  loginUser, 
  registerUser, 
  getUserProfile, 
  createAdminUser 
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/create-admin', createAdminUser); // For initial setup

// Protected routes
router.get('/profile', protect, getUserProfile);

module.exports = router;
