import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import CreateForm from './components/CreateForm'
import Togglable from './components/Togglable'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  // token will be saved to user
  const [user, setUser] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs(blogs)
    )
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

  const addBlog = (newBlogObject) => {
    blogService.create(newBlogObject)
      .then(returnedNote => {
        // as in material 
        // setBlogs([blogs.concat(returnedNote)])
        // as learned with spread operator
        setBlogs([...blogs, returnedNote])
      })
    setNotification({ type: 'note', message: `new blog ${newBlogObject.title} by ${newBlogObject.author} added` })
    setTimeout(() => {
      setNotification(null)
    }, 3000)
  }

  return (
    <div className='content-wrapper'>
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
          {blogs.map(blog =>
            <Blog key={blog.id} blog={blog} />
          )}
        </div>
      }
    </div>
  )
}

export default App
