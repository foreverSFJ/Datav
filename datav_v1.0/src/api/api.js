import request from '@/utils/request'

const api = {
  get (url, data) {
    return request({
      url,
      method: 'get',
      data
    })
  },
  post (url, data) {
    return request({
      url,
      method: 'post',
      data
    })
  }
}

export default api
