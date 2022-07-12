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
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

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

  const handleCreate = (event) => {
    event.preventDefault()
    console.log(event.target)
    blogService.create({
      title: title,
      author: author,
      url: url,
      likes: 0
    })
      .then(returnedNote => {
        // as in material 
        // setBlogs([blogs.concat(returnedNote)])
        // as learned with spread operator
        setBlogs([...blogs, returnedNote])
      })
    setNotification({ type: 'note', message: `new blog ${title} by ${author} added` })
    setTimeout(() => {
      setNotification(null)
    }, 3000)

    setTitle('')
    setAuthor('')
    setUrl('')
  }


  // const logIn = () => {
  //   return (
  //     <div className='log_in'>
  //       <h2>Log in to application</h2>
  //       <form onSubmit={addUsername}>
  //         <div className='inputs-wrapper'>
  //           <label for="username">Username:</label>
  //           <input
  //             type="text"
  //             id="username"
  //             value={username}
  //             onChange={addUsername}
  //           />
  //           <label for="password">Password: </label>
  //           <input
  //             type='password'
  //             id="password"

  //           // onChange={numberChange} 
  //           />
  //         </div>
  //       </form>
  //       <button type="submit">login</button>
  //     </div>)
  // }

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
                handleCreate={handleCreate}
                title={title}
                setTitle={setTitle}
                author={author}
                setAuthor={setAuthor}
                url={url}
                setUrl={setUrl}
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
