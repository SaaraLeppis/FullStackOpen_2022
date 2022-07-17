import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'


import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import CreateForm from './components/CreateForm'
import Togglable from './components/Togglable'
import Loader from './components/Loader'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  // token will be saved to user
  const [user, setUser] = useState('')
  const [notification, setNotification] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
    setIsLoading(false)
  }, [])

  const addUsername = (event) => {
    setUsername(event.target.value)
  }

  const addPassword = (event) => {
    setPassword(event.target.value)
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    if (username && password) {
      try {
        const user = await loginService.login({ username, password })
        window.localStorage.setItem(
          'loggedBlogappUser', JSON.stringify(user)
        )
        blogService.setToken(user.token)
        setUser(user)
        setUsername('')
        setPassword('')
      } catch (exception) {
        setNotification({ type: "error", message: 'wrong credentials' })
        setTimeout(() => {
          setNotification(null)
        }, 3000)
      }
    } else {
      setNotification({ type: "error", message: 'check username and password' })
      setTimeout(() => {
        setNotification(null)
      }, 3000)
    }
  }

  const logOutHandler = (event) => {
    event.preventDefault()
    window.localStorage.clear()
    setUser('')
  }

  const addBlog = async (newBlogObject) => {
    try {
      const newBlog = await blogService.create(newBlogObject)
      // as in material 
      // setBlogs([blogs.concat(returnedBlog)])
      // as learned with spread operator
      // setBlogs([...blogs, newBlog])
      const updatedBlogList = await blogService.getAll()
      setBlogs(updatedBlogList)
      user.blogs.push(newBlog.id)
    }
    catch (exception) {
      setNotification({ type: "error", message: 'something went wrong' })
      setTimeout(() => {
        setNotification(null)
      }, 3000)
    }
    setNotification({ type: 'note', message: `new blog ${newBlogObject.title} by ${newBlogObject.author} added` })
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }
  const addLike = async (updateBlogObject) => {
    try {
      const updateBlog = await blogService.addLike(updateBlogObject)

      setBlogs(blogs.map(blog => blog.id === updateBlog.id ? { ...blog, likes: updateBlog.likes } : blog))
    }
    catch (error) {
      console.log(error)
    }
    setNotification({ type: 'note', message: `${updateBlogObject.title} by ${updateBlogObject.author} liked` })
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  const deleteHandler = async blog => {
    setIsLoading(true)
    try {
      if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
        await blogService.deleteBlog(blog.id)
        setBlogs(blogs.filter(item => (item.id !== blog.id)))
      }
    }
    catch (exception) {
      setNotification({ type: "error", message: 'something went wrong' })
      setTimeout(() => {
        setNotification(null)
      }, 3000)
    }

    setIsLoading(false)
    setNotification({ type: 'note', message: `${blog.title} by ${blog.author} deleted` })
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }


  return (
    <div className='content-wrapper'>
      {isLoading && < Loader />}
      {!user &&
        <LoginForm
          username={username}
          password={password}
          handleLogin={handleLogin}
          addUsername={addUsername}
          addPassword={addPassword}
          notification={notification} />
      }

      {user &&
        <div>
          <h2>blogs</h2>
          {notification && <Notification message={notification} />}
          <p>{user.name} logged in</p>
          <button value="logout" onClick={logOutHandler}>logout</button>
          {
            <Togglable buttonLabel='create blog'>
              <CreateForm
                createBlog={addBlog}
              // title={title}
              // setTitle={setTitle}
              // author={author}
              // setAuthor={setAuthor}
              // url={url}
              // setUrl={setUrl}
              />
            </Togglable>}
          {blogs
            .sort((a, b) => a.likes > b.likes ? 1 : -1)
            .map(blog =>
              <Blog key={blog.id} blog={blog} addLike={addLike} user={user} deleteBlog={deleteHandler} />
            )}

        </div>
      }
    </div>
  )
}

export default App
