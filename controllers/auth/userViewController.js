const viewController = {
  signUp(req, res, next){
    res.render('auth/SignUp')
  },
  signIn(req, res, next){
    res.render('auth/SignIn')
  },
  apiAuth(req, res, next){
    res.json({user: req.user, token: res.locals.data.token})
  },
  redirectToLogin(req, res, next){
    res.redirect('/users/login')
  },
  profile(req, res) {
    const user = req.user
    const token = res.locals.data.token
    res.render('auth/Profile', { user, token })
  },
  redirectToSignUp(req, res) {
  res.redirect('/users/signup')
}

}

module.exports = viewController