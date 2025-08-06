const User = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.auth = async (req, res, next) => {
  try {
    let token
    if(req.query.token){
      token = req.query.token
    }else if(req.header('Authorization')){
      token = req.header('Authorization').replace('Bearer ', '')
    }else {
      throw new Error('No token provided')
    }
    const data = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findOne({ _id: data._id })
    if (!user) {
      throw new Error()
    }
    req.user = user
    res.locals.data.token = token
    next()
  } catch (error) {
    res.status(401).send('Not authorized')
  }
}

exports.createUser = async (req, res, next) => {
  try{
    const user = new User(req.body)
    await user.save()
    const token = await user.generateAuthToken()
    res.locals.data.token = token 
    req.user = user
    next()
  } catch(error){
    res.status(400).json({message: error.message})
  }
}

exports.loginUser = async (req, res, next) => {
  try{
    const user = await User.findOne({ email: req.body.email })
    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
      res.status(400).send('Invalid login credentials or the account does not exist')
    } else {
      const token = await user.generateAuthToken()
      res.locals.data.token = token 
      req.user = user
      next()
    }
  } catch(error){
    res.status(400).json({message: error.message})
  }
}

/*exports.updateUser = async (req, res) => {
  try{
    const updates = Object.keys(req.body)
    const user = await User.findOne({ _id: req.params.id })
    updates.forEach(update => user[update] = req.body[update])
    await user.save()
    res.json(user)
  }catch(error){
    res.status(400).json({message: error.message})
  }
  
}*/
exports.updateUser = async (req, res, next) => {
  try {
    const updates = Object.keys(req.body)
    const user = await User.findById(req.params.id)
    updates.forEach(field => {
      // only overwrite if value provided
      if (req.body[field] !== '') user[field] = req.body[field]
    })
    await user.save()

    // refresh req.user and keep the token for the view
    req.user = user
    // token came in via ?token=… or Authorization header; we’ll let auth middleware set it
    res.locals.data.token = res.locals.data.token

    next()    // ← hand off to the next middleware (your Profile view)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

exports.deleteUser = async (req, res, next) => {
  try{
    await req.user.deleteOne()
    next()
  }catch(error){
    res.status(400).json({message: error.message})
  }
}