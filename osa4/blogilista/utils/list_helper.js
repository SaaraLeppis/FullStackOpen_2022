const dummy = (blogs) => {
  return 1
}

const likes = (blogs) => {
  // let likeCounter = 0
  if (blogs.length === 0) {
    return 0
  }
  else if (blogs.length === 1) {
    return blogs[0].likes
  }
  else {
    // < < forEach -stucture > > 
    // blogs.forEach((blog) => {
    //   likeCounter += blog.likes
    // });
    // return likeCounter

    // < < reduce -structure > > 
    let sumOfLikes = blogs.reduce(
      (previous, current) => previous + current.likes
      , 0
    )
    return sumOfLikes
  }
}

module.exports = { dummy, likes }