/*
 * @Author: linjianx 
 * @Date: 2019-08-14 11:22:29 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-19 18:30:38
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
// import RouteWithSubRoutes from "../router/route-with-sub-routes";
import { IUserState } from "../redux/user/types";
// import { matchParamsPath } from "../utils/sidebar";
import Login from '../pages/login/index'
import Header from '../components/header/index'
import Sidebar from '../components/sidebar/index'
import "./style.scss";

interface IProps extends RouteComponentProps {
  userId: string;
  isLogin: boolean;
  onCollapsed: () => void;
}
const { Content } = Layout;
class Layouts extends React.PureComponent<IProps> {
  public generateRoute() {
    let renderRoute = null;
    const {
      location: { pathname },
      userId,
      isLogin
    } = this.props;

    renderRoute = <Route path='/login' component={Login} />
    return renderRoute;
  }
  public render() {
    console.warn("Render Layout");
    return (
      <div className="layout-wrapper">
        {this.props.isLogin ? (
          <Layout className="layout-wrapper__inner">
            <Sidebar />
            <Layout className="layout-wrapper__inner-left">

              <Header {...this.props}></Header>
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
              <Redirect to="/login" />
            </Switch>
          )}
      </div>
    );
  }
}
const mapStateToProps = (app: IProps) => ({
  isLogin: true,
  userId: '',
  onCollapsed: app.onCollapsed
});

export default withRouter(connect(mapStateToProps)(Layouts));
