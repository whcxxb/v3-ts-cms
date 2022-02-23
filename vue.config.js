module.exports = {
  devServer: {
    disableHostCheck: true,
    open: true,
    proxy: 'http://localhost:8080',
    public: '192.168.3.20:8080'
  },
  // configureWebpack:config=>{
  //   config.devtool = 'source-map'
  // }
}
