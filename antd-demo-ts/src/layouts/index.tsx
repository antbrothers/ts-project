/*
 * @Author: linjianx 
 * @Date: 2019-08-14 11:22:29 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-22 17:24:22
 */
import { Layout } from "antd";
import Exception from "../pages/exception/index";
import login from "../pages/login/index";
import * as React from "react";
import { connect } from "react-redux";
import {
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
  withRouter
} from "react-router-dom";
import RouteWithSubRoutes from "../router/route-with-sub-routes";
import { IRoutes, IRouteMap } from "../redux/initState/types";
import { matchParamsPath } from "../utils/sidebar";
import HeaderChild from '../components/header/index'
import Sidebar from '../components/sidebar/index'
import "./style.scss";

interface IProps extends RouteComponentProps {
  userId: string;
  isLogin: boolean;
  onLoginOut?: () => void;
  collapsed?: () => void;
  onCollapsed?: boolean,
  realRouteMap: IRouteMap;
  breadcrumbMap: IRouteMap;
}
const initialState = {
  collapsed: false
}

type State = Readonly<typeof initialState>;
const { Content } = Layout;
class Layouts extends React.PureComponent<IProps, State> {
  constructor(props: IProps) {
    super(props);
  }
  public readonly state: State = initialState
  public generateRoute() {
    let renderRoute = null;
    const {
      location: { pathname },
      realRouteMap,
      breadcrumbMap
    } = this.props;

    // 判断是否登录
    if (localStorage.getItem('isLogin')) {
      // 全部路由映射中是否存在(同时对params的path进行判断)
      const targetRoute = matchParamsPath(pathname, realRouteMap)
      if (targetRoute) {
        // 当前路由的地址数组
        const targetPaths = targetRoute.path.split('/').filter((i: string) => i);
        // 存在组件的路由项
        const existComponent: IRoutes[] = [];
        targetPaths.forEach((key: string, index: number) => {
          const path = `/${targetPaths.slice(0, index + 1).join("/")}`;
          const route = breadcrumbMap[path];
          if (route && route.component) {
            existComponent.push(route);
          }
        });
        // 重新整理嵌套路由，将无组件的嵌套去除
        if (existComponent.length > 0) {
          const routeMap = existComponent.reduceRight(
            (obj: IRoutes, item: IRoutes, index: number) => {
              if (existComponent.length - 1 === index) {
                obj = item;
                return { ...obj };
              }
              return { ...item, ...{ routes: [obj] } };
            },
            {
              title: "",
              path: "",
              component: null
            }
          );
          renderRoute = <RouteWithSubRoutes {...routeMap} />;
        }
      }
    } else { // 未登录
      // 处理根域、login情况
      if (/^\/login(\/?)$/.test(pathname)) {
        renderRoute = <Route path="/login" component={login} />
      } else {
        if (pathname === '/') {
          renderRoute = <Redirect to="/" />
        }
      }
    }
    return renderRoute;
  }
  public collapsed(p: boolean) {
    console.log(p)
    this.setState({
      collapsed: p
    })
  }
  public onLoginOut() {
    console.log(this)
    this.props.history.push('/login')
  }
  componentDidMount() {
    console.log(this.props)
  }
  public render() {
    console.warn("Render Layout");
    return (
      <div className="layout-wrapper">
        {localStorage.getItem('isLogin') ? (
          <Layout className="layout-wrapper__inner">
            <Sidebar onCollapsed={this.state.collapsed} />
            <Layout className="layout-wrapper__inner-left">
              <HeaderChild collapsed={this.collapsed.bind(this)} onLoginOut={this.onLoginOut.bind(this)} ></HeaderChild>
              <Content className="layout-wrapper__inner-left_content">
                <Switch>
                  {this.generateRoute()}
                  <Route
                    render={() => (
                      <Exception
                        title="404"
                        desc="抱歉，你访问的页面不存在"
                        showAction={true}
                      />
                    )}
                  />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        ) : (
            <Switch>
              <Route path="/login" component={login} />
            </Switch>
          )}
      </div>
    );
  }
}
const mapStateToProps = (store: any) => ({
  isLogin: store.initState.isLogin,
  userId: store.initState.userId,
  realRouteMap: store.initState.realRouteMap,
  breadcrumbMap: store.initState.breadcrumbMap
});

export default withRouter(connect(mapStateToProps)(Layouts));
