/*
 * @Author: linjianx 
 * @Date: 2019-08-15 15:04:34 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-19 09:56:33
 */
const proxy = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(proxy('/api', {
    "target": "http://www.123369.com.cn",
      "secure": false,
      "changeOrigin": true,
      "pathRewrite": {
        "^/api": "/api"
      }
  }))
}