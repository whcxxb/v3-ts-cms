import XBRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'
import { getCache } from '@/utils/cache'
export default new XBRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      const token = getCache('token')
      if (token) {
        if(config.headers){
          config.headers.Authorization = `Bearer ${token}`
        }
      }
      return config
    },
    responseInterceptors: (response) => {
      return response.data
    }
  }
})
