/*
 * @Author: linjianx 
 * @Date: 2019-08-13 15:36:29 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-13 17:07:01
 */
import { match } from 'react-router-dom'

//路由项
export interface IRoutes {
  title: string;
  icon?: string;
  path: string;
  exact?: boolean;
  strict?: boolean;
  noSidebar?: boolean;
  component?: any;
  routes?: IRoutes[];
}
// 全部路由映射
export interface IRoutesMap {
  [propName: string]: IRoutes;
}
// react-router match 类型
export interface IMatch extends match<{}> {}

// 仓库基础数据 redux store state
export interface IStoreState {
  isLogin: boolean;
  firstLink: string;
  userInfo: any;
  routes: IRoutes[];
  extractAllRoutes: IRoutes[];
  extractFilterRoutes: IRoutes[];
  searchSidebar: IRoutes[];
  breadcrumbMap: IRoutesMap;
  realRouteMap: IRoutesMap;
  collapsed: boolean;
  selectedKeys: string[];
  openKeys: string[];
}

// redux action
export interface IReduxAction {
  payload: any;
  type: string;
}