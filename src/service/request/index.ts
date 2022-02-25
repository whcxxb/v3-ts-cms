import axios from 'axios'
import { ElLoading } from 'element-plus'
import { XBRequestConfig, XBRequestInterceptors } from './type'
import { AxiosInstance } from 'axios'

//封装axios
class XBRequest {
  //创建实例
  instance: AxiosInstance
  //保存基本配置
  interceptors?: XBRequestInterceptors
  //保存loading
  loading: any
  constructor(config: XBRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    //给每个实例添加拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestErrorInterceptors
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseErrorInterceptors
    )
    //给所有实例添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        //添加loading
        // this.loading = ElLoading.service({
        //   lock: true,
        //   text: '加载中...',
        //   background: 'rgba(0, 0, 0, 0.7)'
        // })
        return config
      },
      (error) => {
        return error
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        if (response.data.returnCode === '-1001') {
          console.log('请求失败~')
        } else {
          // this.loading.close()
          return response
        }
      },
      (error) => {
        return error
      }
    )
  }
  //实例请求方法
  request<T>(config: XBRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      //给单独的请求添加拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          resolve(res)
        })
        .catch((error) => {
          reject(error)
          return error
        })
    })
  }
  get<T>(config: XBRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: XBRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'post' })
  }
  delete<T>(config: XBRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'delete' })
  }
  patch<T>(config: XBRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'patch' })
  }
}
export default XBRequest
