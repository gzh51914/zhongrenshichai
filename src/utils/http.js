import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 2000,
  headers: { 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1586354171661424963735","bc":"440100"}' }
})
export default instance
