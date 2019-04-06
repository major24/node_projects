import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

export const getSampleData = () => {
  return 'My Sample Data'
}

export function getUsersFromAPI () {
  console.log('Getting users from real public api..')
  try {
    return axios.get(url)
  } catch (error) {
    console.log(error)
  }
}
