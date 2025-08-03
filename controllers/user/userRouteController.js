// controllers/user/userRouteController.js
const express = require('express');
const router = express.Router();
const dataController = require('./userDataController');
const viewController = require('./userViewController');

// Register
router.get('/register', viewController.showRegister);
router.post('/register', dataController.createUser, (req, res) => {
  viewController.redirectToDashboard(req, res);
});

// Login
router.get('/login', viewController.showLogin);
router.post('/login', dataController.loginUser, (req, res) => {
  viewController.redirectToDashboard(req, res);
});

// Profile (protected)
router.get('/profile/:id', dataController.auth, viewController.profile);

// Update user
router.put('/:id', dataController.auth, dataController.updateUser);

// Delete user
router.delete('/:id', dataController.auth, dataController.deleteUser);

module.exports = router;
