const express = require('express')
const router = express.Router()
const dataController = require('./userDataController')
const viewController = require('./userViewController')
const projectsViewController = require('../project/projectViewController')

router.post('/', dataController.createUser, viewController.redirectToLogin)// signup user => login page
router.get('/', viewController.signUp) // show sign up form
router.get('/signup', viewController.signUp) // show sign up form
router.post('/login', dataController.loginUser, projectsViewController.redirectHome)
router.get('/login', viewController.signIn) // show login form
router.get('/signin', viewController.signIn) // show login form
router.get('/:id', dataController.auth, viewController.profile)
//router.put('/:id', dataController.updateUser)
router.put(
   '/:id',
   dataController.auth,      // re-authenticate & populate req.user + res.locals.data.token
   dataController.updateUser, // apply the changes and call next()
   viewController.profile     // finally render users/Profile.jsx
 )
//router.delete('/:id', dataController.auth, dataController.deleteUser)
router.delete(
  '/:id',
   dataController.auth,
   dataController.deleteUser,
   viewController.redirectToSignUp
 )

module.exports = router