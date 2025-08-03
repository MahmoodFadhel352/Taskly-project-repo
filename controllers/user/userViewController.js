// controllers/user/userViewController.js
const viewController = {
  showRegister(req, res) {
    res.render('users/Register', { title: 'Register' });
  },
  showLogin(req, res) {
    res.render('users/Login', { title: 'Login' });
  },
  profile(req, res) {
    res.render('users/Profile', { user: req.user, title: 'Profile' });
  },
  redirectToDashboard(req, res) {
    res.redirect('/');
  }
};

module.exports = viewController;
