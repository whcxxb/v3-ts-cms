let BASE_URL = ''
const TIME_OUT = 30000

//根据环境变量设置baseUrl和请求超时时间
if (process.env.NODE_ENY === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://152.136.185.210:5000'
} else {
  BASE_URL = 'http://152.136.185.210:5000'
}

//导出配置
export { BASE_URL, TIME_OUT }
