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
  test('Test 3: check that blog id returned as id instead of _id', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].id).toBeDefined()
  })
})
describe('Bloglist tests for POST', () => {
  const additionalBlog = {
    title: 'Witches and wizards',
    author: 'K.J. Lingrow',
    url: 'www.google.ww',
    likes: 8
  }
  test('Test 1: check that qty of blogs increased', async () => {
    await api
      .post('/api/blogs')
      .send(additionalBlog)
      .expect(201)

    const response = await api.get('/api/blogs')
    expect(response.body).toHaveLength(testBlogs.length + 1)
  })
  test('Test 2: check that new blog is added', async () => {
    await api
      .post('/api/blogs')
      .send(additionalBlog)

    const response = await api.get('/api/blogs')
    const contents = response.body.map(item => item.title)
    expect(contents).toContain(additionalBlog.title)
  })
})
describe('Bloglist tests for DELETE', () => {
  test('Test 1: if id is valid, status code 204 is given and list length is shorter', async () => {
    const response = await api.get('/api/blogs')
    const blogToDelete = response.body[0]
    await api
      .delete(`/api/blogs/${blogToDelete.id}`)
      .expect(204)

    const blogsAfterDelete = await api.get('/api/blogs')
    expect(blogsAfterDelete.body).toHaveLength(testBlogs.length - 1)
  })

})
afterAll(() => {
  mongoose.connection.close()
})