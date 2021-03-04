import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import { Message, MessageBox } from 'element-ui'
// eslint-disable-next-line no-unused-vars
import settings from '@/settings'

// 创建axios实例
const service = axios.create({
  baseURL: settings.request_url, // 开发环境
  timeout: 50000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // Do something with request error
    // console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (res.code !== 0) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })

      return Promise.reject(res.message)
    } else {
      return response.data.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
