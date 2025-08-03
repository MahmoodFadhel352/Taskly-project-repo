// controllers/project/projectDataController.js
const Project = require('../../models/Project');

exports.listProjects = async (req, res, next) => {
  try {
    const projects = await Project.find()
      .populate('teamMembers', 'name email role')
      .populate('tasks'); // tasks may be populated further downstream
    res.locals.projects = projects;
    next();
  } catch (err) {
    res.locals.error = err.message;
    next();
  }
};

exports.createProject = async (req, res, next) => {
  try {
    const { title, description, deadline, teamMembers } = req.body;
    const project = new Project({
      title,
      description,
      deadline: deadline || null,
      teamMembers: teamMembers || [],
      tasks: []
    });
    await project.save();
    res.locals.project = project;
    next();
  } catch (err) {
    res.locals.error = err.message;
    res.locals.form = {
      title: req.body.title,
      description: req.body.description,
      deadline: req.body.deadline,
      teamMembers: req.body.teamMembers
    };
    next();
  }
};

exports.getProjectById = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('teamMembers', 'name email role')
      .populate({
        path: 'tasks',
        populate: { path: 'assignee', select: 'name email' } // if Task schema has assignee
      });
    if (!project) {
      res.status(404);
      res.locals.error = 'Project not found';
      return next();
    }
    res.locals.project = project;
    next();
  } catch (err) {
    res.locals.error = err.message;
    next();
  }
};

exports.updateProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      res.status(404);
      res.locals.error = 'Project not found';
      return next();
    }
    const allowed = ['title', 'description', 'deadline', 'teamMembers'];
    Object.keys(req.body).forEach((k) => {
      if (allowed.includes(k)) {
        project[k] = req.body[k];
      }
    });
    await project.save();
    res.locals.project = project;
    next();
  } catch (err) {
    res.locals.error = err.message;
    next();
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.redirect('/projects');
  } catch (err) {
    res.status(400).send(err.message);
  }
};
