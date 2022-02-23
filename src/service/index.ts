import XBRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'
export default new XBRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      console.log('请求成功的拦截')
      return config
    },
    responseInterceptors: (response) => {
      console.log('响应成功的拦截')
      return response.data
    }
  }
})
