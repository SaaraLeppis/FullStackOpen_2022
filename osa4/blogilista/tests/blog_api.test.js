const mongoose = require('mongoose')
const helper = require('./test_helper')
const supertest = require('supertest')
const app = require('../app')
const bcrypt = require('bcrypt')
const Blog = require('../models/blogs')
const User = require('../models/users')

const api = supertest(app)

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
  await Blog.insertMany(helper.testBlogs)
  // await Blog.insertMany(testBlogs)

})

describe('Bloglist tests', () => {
  test('Test 1: Blogs are returned as json', async () => {
    api
      .get('api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
  test('Test 2: correct amount of blogs returned', async () => {
    const response = await helper.blogsInDb()
    expect(response).toHaveLength(helper.testBlogs.length)
  })
  test('Test 3: check that blog id returned as id instead of _id', async () => {
    const response = await helper.blogsInDb()
    expect(response[0].id).toBeDefined()
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

    const response = await helper.blogsInDb()
    expect(response).toHaveLength(helper.testBlogs.length + 1)
  })
  test('Test 2: check that new blog is added', async () => {
    await api
      .post('/api/blogs')
      .send(additionalBlog)

    const response = await helper.blogsInDb()
    const contents = response.map(item => item.title)
    expect(contents).toContain(additionalBlog.title)
  })
})

describe('Bloglist tests for DELETE', () => {
  test('Test 1: if id is valid, status code 204 is given and list length is shorter', async () => {
    const response = await helper.blogsInDb()
    const blogToDelete = response[0]
    await api
      .delete(`/api/blogs/${blogToDelete.id}`)
      .expect(204)

    const blogsAfterDelete = await helper.blogsInDb()
    expect(blogsAfterDelete).toHaveLength(helper.testBlogs.length - 1)
  })
})
describe('Bloglist tests for update', () => {
  test('Test 1: gives status code 204 and likes are updated', async () => {
    const response = await helper.blogsInDb()
    const blogToUpdate = response[0]
    const updateBlog = helper.testBlogs[0]
    const initialLikes = updateBlog.likes
    updateBlog.likes += 2
    await api
      .put(`/api/blogs/${blogToUpdate.id}`)
      .send(updateBlog)
      .expect(204)
    const blogsAfterUpdate = await helper.blogsInDb()
    expect(blogsAfterUpdate[0].likes).toBe(initialLikes + 2)
  })
})


describe('User tests', () => {
  beforeEach(async () => {
    await User.deleteMany({})
    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'testUser', passwordHash })

    await user.save()
  })

  test('Test 1: creation succeeds with new username', async () => {
    const usersAtStart = await helper.usersInDb()
    console.log(usersAtStart)

    const newUser = {
      username: 'sleppi',
      name: 'Saara Leppis',
      password: 'passIt',
    }


    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(user => user.username)
    expect(usernames).toContain(newUser.username)
  })
  test('Test 2: creation fails with proper statuscode and message if username already taken', async () => {
    const usersAtStart = await helper.usersInDb()

    const newUser = {
      username: 'testUser',
      name: 'My Name',
      password: 'emanym',
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('username must be unique')

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd).toHaveLength(usersAtStart.length)
  })
})

afterAll(() => {
  mongoose.connection.close()
})