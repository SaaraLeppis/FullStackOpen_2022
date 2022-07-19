import React from "react"
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from "./Blog"
import CreateForm from "./CreateForm"

describe('Bloglist tests', () => {
  const blog = {
    title: 'test blog',
    author: 'Test author',
    url: 'www.urli.fi',
    likes: 2
  }
  const user = { blogs: [123, 345] }
  test('Test 1: Blog renders blog.title and blog.author, does not render url and likes', () => {

    render(<Blog blog={blog} user={user} />)

    const title = screen.getByText(blog.title, { exact: false })
    expect(title).toBeDefined()

    const author = screen.getByText(blog.author, { exact: false })
    expect(author).toBeDefined()
    // alternative to use .findByText but needs async/await as returns Promise. 'exact' not needed. 

    const url = screen.queryByText(blog.url)
    expect(url).toBeNull()

    const likes = screen.queryByText(blog.likes)
    expect(likes).toBeNull()
  })

  test('Test 2: clicking \'Like\' button twice calls \'addLike\'-props twice', async () => {

    const mockHandler = jest.fn()

    render(
      <Blog blog={blog} user={user} addLike={mockHandler} />
    )
    const handler = userEvent.setup()
    const button = screen.getByText('Like')
    await handler.dblClick(button)

    expect(mockHandler.mock.calls).toHaveLength(2)

  })
  test('Test 3: <CreateForm /> props uses correct information when creating form', async () => {
    const handler = userEvent.setup()
    const createBlog = jest.fn()

    // render(<CreateForm createBlog={createBlog} />)

    const { container } = render(<CreateForm createBlog={createBlog} />)
    const authorInput = container.querySelector('#author')
    const titleInput = container.querySelector('#title')
    const urlInput = container.querySelector('#url')

    const sendButton = screen.getByText('create')

    await handler.type(authorInput, 'Some Body')
    await handler.type(titleInput, 'Magical blog')
    await handler.type(urlInput, 'www.url.fi')
    await handler.click(sendButton)

    expect(createBlog.mock.calls).toHaveLength(1)
    expect(createBlog.mock.calls[0][0].author).toBe('Some Body')
    expect(createBlog.mock.calls[0][0].title).toBe('Magical blog')
    expect(createBlog.mock.calls[0][0].url).toBe('www.url.fi')
  })
})