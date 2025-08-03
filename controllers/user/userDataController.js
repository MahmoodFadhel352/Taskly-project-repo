// controllers/user/userDataController.js
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Helper to extract token
const getTokenFromRequest = (req) => {
  if (req.query.token) return req.query.token;
  if (req.header('Authorization')) return req.header('Authorization').replace('Bearer ', '');
  return null;
};

// Auth middleware
exports.auth = async (req, res, next) => {
  try {
    const token = getTokenFromRequest(req);
    if (!token) return res.status(401).send('Not authorized: token missing');

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload._id);
    if (!user) return res.status(401).send('Not authorized: user not found');

    req.user = user;
    res.locals.data = res.locals.data || {};
    res.locals.data.token = token;
    next();
  } catch (error) {
    res.status(401).send('Not authorized');
  }
};

// Register
exports.createUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = user.generateAuthToken();
    res.locals.data = res.locals.data || {};
    res.locals.data.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(400).render('users/Register', { error: error.message, form: req.body });
  }
};

// Login
exports.loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const invalid = !user || !(await bcrypt.compare(req.body.password, user.password));
    if (invalid) {
      return res.status(400).render('users/Login', { error: 'Invalid credentials', form: { email: req.body.email } });
    }
    const token = user.generateAuthToken();
    res.locals.data = res.locals.data || {};
    res.locals.data.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(400).render('users/Login', { error: error.message });
  }
};

// Update (only allowed fields)
exports.updateUser = async (req, res) => {
  try {
    const allowed = ['name', 'email', 'password', 'role'];
    const updates = Object.keys(req.body).filter((u) => allowed.includes(u));
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('User not found');

    updates.forEach((update) => {
      user[update] = req.body[update];
    });
    await user.save();
    res.json(user); // toJSON transform hides password
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete
exports.deleteUser = async (req, res) => {
  try {
    await req.user.deleteOne();
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
