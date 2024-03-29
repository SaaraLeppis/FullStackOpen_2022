import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
const create = async newBlogObject => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newBlogObject, config)
  return response.data

}
const addLike = async updateBlogObject => {
  const response = await axios.put(`${baseUrl}/${updateBlogObject.id}`, updateBlogObject)
  return response.data
}
const deleteBlog = async blogId => {

  await axios.delete(`${baseUrl}/${blogId}`)
}

export default { getAll, create, setToken, addLike, deleteBlog }