/*
 * @Author: linjianx 
 * @Date: 2019-08-13 15:50:39 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-13 16:12:58
 */
import * as React from 'react';
import { Route } from 'react-router-dom';
import { IRoutes } from '../types/index';
const RouteWithSubRoutes = (route: IRoutes) => {
  return (
    <Route 
      path={route.path}
      exact={route.exact}
      strict={route.strict}
      render={props => {
        return (
          <route.component {...props} routes= {route.routes}/>
        )
      }}
    />
  )
}
export default RouteWithSubRoutes