import React from 'react';

const Anecdote = ({ anecdote }) => {
  return (
    <div>
      <h2>{anecdote.content} by {anecdote.author}</h2>
      <p>{anecdote.votes === 1 ? `has ${anecdote.votes} vote` : `has ${anecdote.votes} votes`}</p>

    </div>
  )
}

export default Anecdote;