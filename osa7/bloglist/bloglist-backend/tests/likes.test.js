const listHelper = require('../utils/list_helper')
const blogList = require('../utils/blogStorage')
//blogList.blogs is the array of ready test list

describe('Testing total likes', () => {

  test('Test 1: one blog', () => {
    const listWithOneBlog = [
      {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
        __v: 0
      }
    ]
    const result = listHelper.likes(listWithOneBlog)
    expect(result).toBe(listWithOneBlog[0].likes)
  })
  test('Test 2: empty list returns zero', () => {
    const result = listHelper.likes([])
    expect(result).toBe(0)
  })

  test('Test 3: longer list calculated correctly', () => {
    const result = listHelper.likes(blogList.blogs)
    expect(result).toBe(36)
  })
})
describe("Testing favourite blog", () => {
  const listWithOneBlog = [
    {
      _id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
      __v: 0
    }
  ]
  test('Test 1: one blog ', () => {
    const result = listHelper.favourite(listWithOneBlog)
    expect(result).toEqual(
      {
        title: "React patterns",
        author: "Michael Chan",
        likes: 7
      }
    )
  })

  test('Test 2: longer list returns correct information', () => {
    const result = listHelper.favourite(blogList.blogs)
    expect(result).toEqual({ title: blogList.blogs[2].title, author: blogList.blogs[2].author, likes: blogList.blogs[2].likes })
  })
})