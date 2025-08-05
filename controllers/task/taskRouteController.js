// controllers/task/taskRouteController.js

const express = require('express')
const router = express.Router({ mergeParams: true })

const auth = require('../auth/userDataController').auth
const dataController = require('./taskDataController')
const viewController = require('./taskViewController')

// List all tasks for a project
// GET /projects/:projectId/tasks
router.get(
  '/',
  auth,
  dataController.index,
  viewController.index
)

// Show form to create a new task
// GET /projects/:projectId/tasks/new
router.get(
  '/new',
  auth,
  viewController.newView
)

// Create a new task
// POST /projects/:projectId/tasks
router.post(
  '/',
  auth,
  dataController.create,
  viewController.redirectProject // redirect back to the parent project’s Show page
)

// Show one task
// GET /projects/:projectId/tasks/:id
router.get(
  '/:id',
  auth,
  dataController.show,
  viewController.show
)

// Show form to edit a task
// GET /projects/:projectId/tasks/:id/edit
router.get(
  '/:id/edit',
  auth,
  dataController.show,
  viewController.edit
)

// Update an existing task
// PUT /projects/:projectId/tasks/:id
router.put(
  '/:id',
  auth,
  dataController.update,
  viewController.redirectShow // redirect back to this Task’s Show page
)

// Delete a task
// DELETE /projects/:projectId/tasks/:id
router.delete(
  '/:id',
  auth,
  dataController.destroy,
  viewController.redirectProject // redirect back to the parent project’s Show page
)

module.exports = router
