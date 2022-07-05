require('express-async-errors')
const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const User = require('../models/users')


userRouter.post('/', async (request, response) => {
  const { username, name, password } = request.body

  const existingUsername = await User.findOne({ username })
  const exisitingName = await User.findOne({ name })

  if (existingUsername) {
    return response.status(400).json({
      error: 'username must be unique'
    })
  } else if (exisitingName) {
    return response.status(400).json({
      error: 'name must be unique'
    })
  }
  else if (password.length < 3) {
    return response.status(400).json({
      error: 'password must be at least 3 characters'
    })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)
  const user = new User({
    username,
    name,
    passwordHash,
  })
  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

userRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('blogs', { url: 1, title: 1, author: 1 })
  // response.json(users)
  users ? response.json(users) : response.status(404).end()

})

module.exports = userRouter