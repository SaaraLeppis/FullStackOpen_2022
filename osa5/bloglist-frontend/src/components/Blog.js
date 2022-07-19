import React from 'react'


const Blog = ({ blog, addLike, user, deleteBlog }) => {
  const updateBlog = (event) => {
    event.preventDefault()
    addLike({
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1,
      id: blog.id
    })
  }
  return (
    < div >
      <li className='blog'>{blog.title} {blog.author}
        <button value={blog} onClick={updateBlog} > Like</button>
        {user.blogs.includes(blog.id) &&
          <button value={blog.id} onClick={() => deleteBlog(blog)}> Delete</button>
        }</li>
    </div >
  )
}

export default Blog