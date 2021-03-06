/*
 * @Author: linjianx 
 * @Date: 2019-08-13 16:13:12 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-22 18:13:12
 * @Desc: 路由配置信息，路由地址不要以"/"结尾
 */
import Loading from "../components/loading"

// 代码分割方法
import Loadable from 'react-loadable'
import { IRoutes } from '../redux/initState/types'

// 代码分割已经懒加载
const Home = Loadable({
  loader: () => import('../pages/home'),
  loading: Loading
})
const Login = Loadable({
  loader: () => import('../pages/login'),
  loading: Loading
})
const QT = Loadable({
  loader: () => import('../pages/qt'),
  loading: Loading
})
const routes: IRoutes[] = [
  {
    title: '首页',
    icon: 'appsore',
    // exact: true,
    path: '/index',
    component: Home,
    routes: [
      {
        title: "用户数据",
        icon: "appstore",
        path: "/index/qt",
        component: QT
      }
    ]
  }, {
    title: '登录',
    icon: 'appsore',
    path: '/login',
    component: Login
  }
]
export default routes
