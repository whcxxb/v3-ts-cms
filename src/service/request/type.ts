import { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'

//定义拦截器接口
export interface XBRequestInterceptors {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestErrorInterceptors?: (error: any) => any
  responseInterceptors?: (response: any) => any
  responseErrorInterceptors?: (error: any) => any
}
export interface XBRequestConfig extends AxiosRequestConfig {
  interceptors?: XBRequestInterceptors
}
