// middleware/requireManager.js
module.exports = function requireManager(req, res, next) {
  if (req.user && req.user.role === 'manager') {
    return next();
  }
  res.status(403).send('Forbidden: manager role required');
};
