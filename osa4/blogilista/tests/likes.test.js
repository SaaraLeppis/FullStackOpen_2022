const listHelper = require('../utils/list_helper')
const blogList = require('../utils/blockStorage')
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
