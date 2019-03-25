import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

export default {
  getUsers () {
    try {
      return axios.get(url)
    } catch (error) {
      console.log(error)
    }
  }
}
