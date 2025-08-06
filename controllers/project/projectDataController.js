const Project = require('../../models/Project')

const dataController = {}
dataController.index = async (req,res,next) => {
   try {
    const user = await req.user.populate('projects')
    res.locals.data.projects = user.projects
    res.locals.data.userId   = user._id 
    next()
   } catch(error) {
    res.status(400).send({ message: error.message })
  }
}

dataController.destroy = async (req, res, next ) => {
    try {
         await Project.findOneAndDelete({'_id': req.params.id }).then(() => {
            next()
         })
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

dataController.update = async (req, res, next) => {
    try {
      res.locals.data.project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
      next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

dataController.create = async (req, res, next) => {
    try {
      res.locals.data.project = await Project.create(req.body)
      req.user.projects.addToSet({_id: res.locals.data.project._id })
      await req.user.save()
      next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}

dataController.show = async (req, res, next) => {
    try {
        res.locals.data.project = await Project.findById(req.params.id)
        if(!res.locals.data.project){
            throw new error(`could not locate a project with the id ${req.params.id}`)
        }
        next()
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
}


module.exports = dataController