module.exports = {
  devServer: {
    disableHostCheck: true,
    open: true,
    public: '192.168.3.20:8080',
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:5000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
