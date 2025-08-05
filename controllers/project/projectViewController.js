const RESOURCE_PATH = '/projects'
const viewController = {
  signUp(req, res, next){
    res.render('/auth/SignUp')
  },
  signIn(req, res, next){
    res.render('/auth/SignIn')
  },
  index(req, res, next){
    res.render('projects/Index', res.locals.data)
  },
  show(req, res, next){
    //console.log(res.locals.data)
    res.render('projects/Show', res.locals.data)
  },
  edit(req, res, next){
    res.render('projects/Edit', res.locals.data)
  },
  newView(req, res, next){
    res.render('projects/New', res.locals.data)
  },
  redirectHome(req, res, next){
    if(res.locals.data.token){
      res.redirect(`${RESOURCE_PATH}?token=${res.locals.data.token}`)
    }else {
      res.redirect(RESOURCE_PATH)
    } 
  },
  redirectShow(req, res, next){
     if(res.locals.data.token){
      res.redirect(`${RESOURCE_PATH}/${req.params.id}?token=${res.locals.data.token}`)
    }else {
      res.redirect(`${RESOURCE_PATH}/${req.params.id}`)
    } 
  }
}

module.exports = viewController