// controllers/task/taskViewController.js

const viewController = {
  index(req, res) {
    const { tasks, token } = res.locals.data
    const { projectId } = req.params
    res.render('tasks/Index', { tasks, token, projectId })
  },

  newView(req, res) {
    const { token } = res.locals.data
    const { projectId } = req.params
    res.render('tasks/New', { token, projectId })
  },

  show(req, res) {
    const { task, token } = res.locals.data
    const { projectId } = req.params
    res.render('tasks/Show', { task, token, projectId })
  },

  edit(req, res) {
    const { task, token } = res.locals.data
    const { projectId } = req.params
    res.render('tasks/Edit', { task, token, projectId })
  },

 redirectProject(req, res) {
  const { projectId } = req.params
  const { token }= res.locals.data
  const base = `/projects/${projectId}/tasks`
  res.redirect(token ? `${base}?token=${token}` : base)
},

  redirectShow(req, res) {
    const { projectId, id: taskId } = req.params
    const { token } = res.locals.data
    const url = `/projects/${projectId}/tasks/${taskId}` + (token ? `?token=${token}` : '')
    res.redirect(url)
  },
}

module.exports = viewController
