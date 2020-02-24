import Axios from 'axios'

let server = Axios.create({
  timeout: 3000
})
server.interceptors.request.use(
  config => {
    return config
  },
  err => {
    console.log(err)
  }
)
server.interceptors.response.use(
  res => {
    let result = {}
    result.status = res.status
    result.data = res.data
    return result
  },
  err => console.log(err)
)
export default server
