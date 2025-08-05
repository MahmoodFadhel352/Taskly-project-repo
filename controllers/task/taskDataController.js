// controllers/task/taskDataController.js

const Task = require('../../models/Task')
const Project = require('../../models/Project')

const dataController = {}

// List all tasks for a given project
dataController.index = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.projectId).populate('tasks')
    if (!project) throw new Error(`No project with id ${req.params.projectId}`)
    res.locals.data.tasks = project.tasks
    next()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Show a single task
dataController.show = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id)
    if (!task) throw new Error(`No task with id ${req.params.id}`)
    res.locals.data.task = task
    next()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Create a new task and link it to the project and user
dataController.create = async (req, res, next) => {
  try {
    req.body.status = req.body.status === 'on'
    const task = await Task.create(req.body)
    res.locals.data.task = task

    // add task to project
    await Project.findByIdAndUpdate(
      req.params.projectId,
      { $addToSet: { tasks: task._id } }
    )

    // add task to user
    req.user.tasks.addToSet(task._id)
    await req.user.save()

    next()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Update an existing task
dataController.update = async (req, res, next) => {
  try {
    req.body.status = req.body.status === 'on'
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!task) throw new Error(`No task with id ${req.params.id}`)
    res.locals.data.task = task
    next()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete a task and remove its references
dataController.destroy = async (req, res, next) => {
  try {
    // delete the task document
    await Task.findByIdAndDelete(req.params.id)

    // remove from project
    await Project.findByIdAndUpdate(
      req.params.projectId,
      { $pull: { tasks: req.params.id } }
    )

    // remove from user
    req.user.tasks.pull(req.params.id)
    await req.user.save()

    next()
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = dataController
