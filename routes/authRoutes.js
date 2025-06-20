const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// REGISTER route
router.post('/register', authController.register);

// LOGIN route
router.post('/login', authController.login);

module.exports = router;
