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
  Link,
  Switch
} from "react-router-dom";
import { IMatch, IRoutes } from '../../redux/initState/types'

const Home = ({ match, routes }: { match: IMatch; routes: IRoutes[] }) => { 
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <li>
          <Link to="/index/qt">data</Link>
        </li>
        <li>
          <Link to="/index/qt/de">activity</Link>
        </li>
      </ul>
      <Switch>
        {routes.map((route: IRoutes, i: number) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  )
}
export default Home