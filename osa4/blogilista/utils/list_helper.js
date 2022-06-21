const dummy = (blogs) => {
  return 1
}

const likes = (blogs) => {
  let likeCounter = 0
  if (blogs.length === 0) {
    return 0
  }
  else if (blogs.length === 1) {
    return blogs[0].likes
  }
  else {
    blogs.forEach((blog) => {
      likeCounter += blog.likes
    });
    return likeCounter
  }
}

module.exports = { dummy, likes }