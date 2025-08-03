const viewController = {
  showRegister(req, res) {
    res.render('users/Register', {
      title: 'Register',
      error: res.locals.error || null,
      form: res.locals.form || {}
    });
  },
  showLogin(req, res) {
    res.render('users/Login', {
      title: 'Login',
      error: res.locals.error || null,
      form: res.locals.form || {}
    });
  },
  profile(req, res) {
    res.render('users/Profile', {
      user: req.user,
      title: 'Profile',
      userProjects: res.locals.userProjects || [],
      userTasks: res.locals.userTasks || []
    });
  }
};

module.exports = viewController;
