/*
 * @Author: linjianx 
 * @Date: 2019-08-15 15:04:34 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-30 16:21:53
 */
const proxy = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(proxy('/api', {
    "target": "http://mate.test.shouqianba.com",
    "secure": false,
    "changeOrigin": true,
    "pathRewrite": {
      "^/api": "/"
    }
  })  
  )
}