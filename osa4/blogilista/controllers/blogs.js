const blogsRouter = require('express').Router()
const Blog = require('../models/blogs')

blogsRouter.get('/', async (request, response, next) => {
  try {
    const blogs = await Blog.find({})
    if (blogs) {
      response.json(blogs)
    } else {
      response.status(404).end()
    }
  } catch (exception) {
    next(exception)
  }
  // ** before async/await ** : 
  // Blog
  //   .find({})
  //   .then(blogs => {
  //     response.json(blogs)
  //   })
})

blogsRouter.post('/', async (request, response, next) => {
  const body = request.body
  const blog = new Blog(body)
  try {
    const savedBlog = await blog.save()
    response.status(201).json(savedBlog)
  } catch (exception) {
    next(exception)
  }

  // ** before async/await ** : 
  // const blog = new Blog(request.body)
  // blog
  //   .save()
  //   .then(result => {
  //     response.status(201).json(result)
  //   })
  //   .catch(error => next(error))
})

module.exports = blogsRouter