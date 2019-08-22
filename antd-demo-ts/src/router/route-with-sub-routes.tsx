/*
 * @Author: linjianx 
 * @Date: 2019-08-13 15:50:39 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-22 16:50:37
 */
import * as React from 'react';
import { Route } from 'react-router-dom';
import { IRoutes } from '../redux/initState/types';
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