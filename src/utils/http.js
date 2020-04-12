import axios from 'axios'
// 针对于上线的http://47.96.0.211:3000
const instance2 = axios.create({
  baseURL: '/info'
})

// 请求之前的拦截操作
instance2.interceptors.request.use(
  config => {
    // console.log("config",config)
    if (localStorage.getItem('token')) { // 如果token存在,则请求头上面携带token给后端传输
      config.headers.token = localStorage.getItem('token')
    }
    return config
  }
)

// 响应之后的拦截操作
instance2.interceptors.response.use(res => {
  // console.log("res",res)
  if (res.data.err === 0) { // 说明后端给我们前端返回的结果是正常的
    return res.data
  } else {
    return Promise.reject(res.data.msg)
  }
})
export { instance, instance2 }
=======

const instance = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 2000,
  headers: { 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1586354171661424963735","bc":"440100"}' }
})
export default instance
