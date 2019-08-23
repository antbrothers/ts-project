/*
 * @Author: linjianx 
 * @Date: 2019-08-22 15:49:36 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-22 17:05:14
 */
import { IReduxAction, IStoreState } from './types'

// 初始化state
const initialState: IStoreState = {
  isLogin: false, // 是否登陆
  firstLink: "/", // 默认跳转的首页
  userInfo: {}, // 用户信息
  routes: [], // 路由列表
  extractAllRoutes: [], // 单层全部路由列表
  extractFilterRoutes: [], // 单层过滤后的路由列表
  searchSidebar: [], // 搜索siderbar的路由表
  breadcrumbMap: {}, // 单层全部路由映射
  realRouteMap: {}, // 可跳转的路由映射
  collapsed: false, // 侧边栏是否折叠
  selectedKeys: [], // 菜单选中
  openKeys: [] // 菜单展开项
}
export default function(state = initialState, action: IReduxAction) {   
  switch (action.type) {
    // 初始化 state         
    case 'INIT_STATE': {
      const {
        isLogin,
        userInfo,
        firstLink,
        routes,
        extractAllRoutes,
        extractFilterRoutes,
        searchSidebar,
        breadcrumbMap,
        realRouteMap,
        selectedKeys,
        openKeys
      } = action.payload;
      return {
        ...state,
        isLogin,
        userInfo,
        firstLink,
        routes,
        extractAllRoutes,
        extractFilterRoutes,
        searchSidebar,
        breadcrumbMap,
        realRouteMap,
        selectedKeys,
        openKeys
      };
    }
    default: 
      return state
  }
}