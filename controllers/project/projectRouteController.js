const express = require('express');
const router = express.Router();
const viewController = require('./projectViewController.js')
const dataController = require('./projectDataController.js')
const authDataController = require('../auth/userDataController.js')
const taskRoutes= require('../task/taskRouteController.js');
router.use(
  '/:projectId/tasks',
  authDataController.auth,
  taskRoutes
);
// Index
router.get('/', authDataController.auth, dataController.index, viewController.index);
// New
router.get('/new', authDataController.auth, viewController.newView );
// Delete
router.delete('/:id',authDataController.auth, dataController.destroy, viewController.redirectHome);
// Update
router.put('/:id',authDataController.auth, dataController.update, viewController.redirectShow);
// Create
router.post('/', authDataController.auth, dataController.create, viewController.redirectHome);
// Edit
router.get('/:id/edit', authDataController.auth, dataController.show, viewController.edit);
// Show
router.get('/:id', authDataController.auth, dataController.show, viewController.show);
// export router
module.exports = router;