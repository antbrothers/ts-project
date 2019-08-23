/*
 * @Author: linjianx 
 * @Date: 2019-08-22 12:01:12 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-22 18:22:23
 */
import * as React from 'react'
import './style.scss'
import RouteWithSubRoutes from "../../../src/router/route-with-sub-routes";
import { 
  withRouter,
  RouteComponentProps
} from "react-router-dom";
import { IMatch, IRoutes } from '../../redux/initState/types'
import { connect } from "react-redux";

interface IProps extends RouteComponentProps {
  route: any
}
class Home extends React.PureComponent<IProps> {
  constructor(props: IProps) {
    super(props)
    this.state = {

    }
  }
  componentDidMount () {
    console.log(this.props.route)
    this.props.route.map((route: IRoutes, i: number) => {
      console.log(i)
      console.log(route)
    })
  }
  public render() {
    return (
      <div>
        首页
        {/* <RouteWithSubRoutes {...route} /> */}
        {/* {
           this.props.route.map((route: IRoutes, i: number) => {    
             return (
              // <RouteWithSubRoutes key={i} {...route} />
             )       
            // <RouteWithSubRoutes key={i} {...route} />
            // console.log(i)
            // console.log(route)
          })
        } */}
        {/* {this.props.route.map((route: IRoutes, i: number) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))} */}
      </div>
    )
  }
}
const mapStateToProps = (store: any) => ({
  route: store.initState.routes, 
});
 
export default withRouter(connect(mapStateToProps)(Home));
// export default Home