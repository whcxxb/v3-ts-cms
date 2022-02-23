let BASE_URL = ''
const TIME_OUT = 30000

//根据环境变量设置baseUrl和请求超时时间
if (process.env.NODE_ENY === 'development') {
  BASE_URL = 'http://123.207.32.32:8000'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://123.207.32.32:8000'
} else {
  BASE_URL = 'http://123.207.32.32:8000'
}

//导出配置
export { BASE_URL, TIME_OUT }
