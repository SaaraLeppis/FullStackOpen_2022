const dummy = (blogs) => {
  return 1
}

const likes = (blogs) => {
  if (blogs.length === 0) {
    return 0
  }
  else {
    // < < reduce -structure > > 
    let sumOfLikes = blogs.reduce(
      (previous, current) => previous + current.likes
      , 0
    )
    return sumOfLikes
  }
}

const favourite = (blogs) => {
  const blogWithMostLikes = blogs.reduce((prev, curr) => {
    return prev.likes > curr.likes ? prev : curr;
  })
  return ({ title: blogWithMostLikes.title, author: blogWithMostLikes.author, likes: blogWithMostLikes.likes })
}


module.exports = { dummy, likes, favourite }