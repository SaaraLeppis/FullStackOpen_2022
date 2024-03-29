import { useState } from 'react'
import AnecdoteList from './components/AnecdoteList'
import About from './components/About'
import Footer from './components/Footer'
import Anecdote from './components/Anecdote'
import Notification from './components/Notification'
import CreateNew from './components/CreateNew'

import {
  Routes, Route, Link, useMatch
} from "react-router-dom"

const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (
    <div id="menu-wrapper">
      <Link style={padding} to='/'>anecdotes</Link>
      <Link style={padding} to='/create'>create new</Link>
      <Link style={padding} to='/about'>about</Link>
    </div>
  )
}


const App = () => {
  const [notification, setNotification] = useState('')
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)
    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  const match = useMatch('/:id')
  const magic = match ? anecdotes.find(item => item.id === Number(match.params.id)) : null

  return (
    <div>
      <h1>Software anecdotes</h1>
      <div id="router-wrapper">
        <Menu />
        {notification && <Notification message={notification} />}
        <Routes>
          <Route path="/:id" element={<Anecdote anecdote={magic} />} />
          <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
          <Route path="/create" element={<CreateNew addNew={addNew} setNotification={setNotification} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div >
      <Footer />
    </div>
  )
}

export default App
