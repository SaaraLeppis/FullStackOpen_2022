const Blog = require('../models/blogs')
const User = require('../models/users')

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
const usersInDb = async () => {
  const users = await User.find({})
  return users.map(user => user.toJSON())
}

module.exports = {
  testBlogs, blogsInDb, usersInDb
}