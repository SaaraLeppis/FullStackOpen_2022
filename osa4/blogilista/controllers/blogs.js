
require('express-async-errors')
const blogsRouter = require('express').Router()
const Blog = require('../models/blogs')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  if (blogs) {
    response.json(blogs)
  } else {
    response.status(404).end()
  }
  // ** before async/await ** : 
  // Blog
  //   .find({})
  //   .then(blogs => {
  //     response.json(blogs)
  //   })
})

blogsRouter.post('/', async (request, response) => {
  const body = request.body
  const blog = new Blog(body)
  const savedBlog = await blog.save()
  response.status(201).json(savedBlog)

  // ** before async/await ** : 
  // const blog = new Blog(request.body)
  // blog
  //   .save()
  //   .then(result => {
  //     response.status(201).json(result)
  //   })
  //   .catch(error => next(error))
})

// 4.13 added delete 
blogsRouter.delete('/:id', async (request, response) => {
  await Blog.findByIdAndDelete(request.params.id)
  response.status(204).end()
})

//4.14 update blog
blogsRouter.put('/:id', async (request, response) => {
  const body = request.body
  const result = await Blog.findByIdAndUpdate(request.params.id, body, { new: true })
  response.status(204).json(result).end()
})

module.exports = blogsRouter