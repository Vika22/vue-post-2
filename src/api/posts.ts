import axios from 'axios'

export const getPost = axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
  return response.data
})


