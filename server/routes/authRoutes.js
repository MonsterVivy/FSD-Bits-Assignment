// server/routes/authRoutes.js
const express = require('express');
const { register, login, resetPassword } = require('../controllers/authController');
const router = express.Router();

// User Registration
router.post('/register', register);

// User Login
router.post('/login', login);

// Password Recovery
router.post('/reset-password', resetPassword);

module.exports = router;
