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
router.put('/:id', dataController.updateUser)
router.delete('/:id', dataController.auth, dataController.deleteUser)

module.exports = router