const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.auth = async (req, res, next) => {
  try {
    let token;
    if (req.query.token) {
      token = req.query.token;
    } else if (req.header('Authorization')) {
      token = req.header('Authorization').replace('Bearer ', '');
    } else {
      throw new Error('No token provided');
    }

    const data = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: data._id });
    if (!user) {
      throw new Error();
    }

    req.user = user;
    res.locals.data = res.locals.data || {};
    res.locals.data.token = token;
    next();
  } catch (error) {
    res.locals.error = 'Not authorized. Please log in.';
    return res.redirect('/users/login');
  }
};

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
    res.locals.error = error.message;
    res.locals.form = {
      name: req.body.name,
      email: req.body.email,
      role: req.body.role
    };
    next();
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      res.locals.error = 'Invalid login credentials';
      res.locals.form = { email: req.body.email };
      return next();
    }
    const token = user.generateAuthToken();
    res.locals.data = res.locals.data || {};
    res.locals.data.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.locals.error = error.message;
    res.locals.form = { email: req.body.email };
    next();
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(404).json({ message: 'User not found' });

    updates.forEach((update) => {
      user[update] = req.body[update];
    });
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await req.user.deleteOne();
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
