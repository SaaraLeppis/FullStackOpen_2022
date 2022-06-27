const mongoose = require('mongoose')
const supertest = require('supertest')
const { response } = require('../app')
const app = require('../app')
const { blogs } = require('../utils/blockStorage')
const Blog = require('../models/blogs')

const api = supertest(app)
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
beforeEach(async () => {
  // ** alternative 1 ** 
  // await Blog.deleteMany({})
  // console.log('Deleted')

  // let blogObject = new Blog(testBlogs[0])
  // await blogObject.save()
  // console.log('first saved')
  // blogObject = new Blog(testBlogs[1])
  // await blogObject.save()
  // console.log('second saved')
  // ** alternative 2 ** with mongoose method 'insertMany
  await Blog.deleteMany({})
  await Blog.insertMany(testBlogs)
})

describe('Bloglist tests', () => {
  test('Test 1: Blogs are returned as json', async () => {
    api
      .get('api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
  test('Test 2: correct amount of blogs returned', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(testBlogs.length)

  })
})

afterAll(() => {
  mongoose.connection.close()
})