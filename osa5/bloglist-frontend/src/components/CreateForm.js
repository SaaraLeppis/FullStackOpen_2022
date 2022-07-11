import React from 'react';

const CreateForm = ({ handleCreate, title, setTitle, author, setAuthor, url, setUrl }) => {
  return (
    <div className="create">
      <h2>create new</h2>
      <form onSubmit={handleCreate}>
        <label htmlFor="title">title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
        <label htmlFor="author">author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={({ target }) => setAuthor(target.value)}
        />
        <label htmlFor="url">url:</label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={({ target }) => setUrl(target.value)}
        />
        <button type="submit">create</button>
      </form>
    </div>
  )
};

export default CreateForm;