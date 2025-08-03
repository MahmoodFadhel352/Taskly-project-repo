// controllers/project/projectViewController.js
const RESOURCE_PATH = '/projects';

const viewController = {
  showList(req, res) {
    const projects = res.locals.projects || [];
    res.render('projects/Index', { projects, title: 'Projects' });
  },

  redirectToDashboard(req, res) {
    if (res.locals.data && res.locals.data.token) {
      return res.redirect(`${RESOURCE_PATH}?token=${encodeURIComponent(res.locals.data.token)}`);
    }
    res.redirect(RESOURCE_PATH);
  },

  showNewForm(req, res) {
    res.render('projects/Create', {
      title: 'New Project',
      error: res.locals.error || null,
      form: res.locals.form || {}
    });
  },

  showProject(req, res) {
    const project = res.locals.project;
    if (!project) {
      return res.status(404).send(res.locals.error || 'Project not found');
    }
    res.render('projects/Show', { project, title: project.title, error: res.locals.error || null });
  }
};

module.exports = viewController;
