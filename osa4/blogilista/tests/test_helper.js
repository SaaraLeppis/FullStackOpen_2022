const Blog = require('../models/blogs')

const testBlogs = [
  {
    title: 'House Ghosts seacrets',
    author: 'Nick',
    url: 'www.porpington.hp',
    likes: 1492
  },
  {
    title: 'Best paths in Forest of Dean',
    author: 'R. Hagrid',
    url: 'www.magicalCreatures.hp',
    likes: 2
  }
]

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  testBlogs, blogsInDb
}