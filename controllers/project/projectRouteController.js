// controllers/project/projectRouteController.js
const express = require('express');
const router = express.Router();
const projectData = require('./projectDataController');
const projectView = require('./projectViewController');
const userDataController = require('../user/userDataController');
const requireManager = require('../../middleware/requireManager');

// List all projects (dashboard)
router.get(
  '/',
  userDataController.auth,
  projectData.listProjects,
  projectView.showList
);

// New project form
router.get(
  '/new',
  userDataController.auth,
  requireManager,
  projectView.showNewForm
);

// Create
router.post(
  '/',
  userDataController.auth,
  requireManager,
  projectData.createProject,
  projectView.redirectToDashboard
);

// Show single project
router.get(
  '/:id',
  userDataController.auth,
  projectData.getProjectById,
  projectView.showProject
);

// Update project (form submission assumed via method override)
router.put(
  '/:id',
  userDataController.auth,
  requireManager,
  projectData.updateProject,
  projectView.showProject
);

// Delete
router.delete(
  '/:id',
  userDataController.auth,
  requireManager,
  projectData.deleteProject
);

module.exports = router;
