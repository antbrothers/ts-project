/*
 * @Author: linjianx 
 * @Date: 2019-08-13 16:13:12 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-14 11:18:59
 * @Desc: 路由配置信息，路由地址不要以"/"结尾
 */

//  import loadable from '@loadable/component'
import Loading from "../components/loading"
// import * as React from 'react'

// 代码分割方法
import Loadable2 from 'react-loadable'
import { IRoutes } from '../types/index'

// 代码分割已经懒加载
const About = Loadable2({
  loader: () => import('../pages/about'),
  loading: Loading
})
const Login = Loadable2({
  loader: () => import('../pages/login'),
  loading: Loading
})

const routes: IRoutes[] = [
  {
    title: '首页',
    icon: 'appsore',
    exact: true,
    path: '/index',
    component: About
  }, {
    title: '首页',
    icon: 'appsore',   
    path: '/login',
    component: Login
  }
]
export default routes
