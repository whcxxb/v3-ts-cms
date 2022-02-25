import XBRequest from '../index'

export interface IaccountLogin {
  name: string
  password: string
}

export interface IaccountLoginRes {
  id: number
  name: string
  token: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}

export function accountLogin(payload: IaccountLogin) {
  return XBRequest.post<IDataType<IaccountLoginRes>>({
    url: '/login',
    data: payload
  })
}

export function getUserInfo(id: number) {
  return XBRequest.get<IDataType<any>>({
    url: '/users/' + id
  })
}

export function getUserMenus(id: number) {
  return XBRequest.get<IDataType<any>>({
    url: '/role/' + id + '/menu'
  })
}
