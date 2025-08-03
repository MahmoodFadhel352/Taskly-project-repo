const express = require('express');
const router = express.Router();
const dataController = require('./userDataController');
const viewController = require('./userViewController');
const projectViewController = require('../project/projectViewController');

// Registration form
router.get('/register', viewController.showRegister);

// Signup action
router.post('/register', dataController.createUser, (req, res) => {
  if (res.locals.data && res.locals.data.token) {
    return projectViewController.redirectToDashboard(req, res);
  }
  viewController.showRegister(req, res);
});

// Login form
router.get('/login', viewController.showLogin);

// Login action
router.post('/login', dataController.loginUser, (req, res) => {
  if (res.locals.data && res.locals.data.token) {
    return projectViewController.redirectToDashboard(req, res);
  }
  viewController.showLogin(req, res);
});

// Profile (protected)
router.get('/profile/:id', dataController.auth, viewController.profile);

// Update user (API-style)
router.put('/:id', dataController.updateUser);

// Delete user (requires auth)
router.delete('/:id', dataController.auth, dataController.deleteUser);

module.exports = router;
