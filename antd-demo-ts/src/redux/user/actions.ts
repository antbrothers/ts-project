/*
 * @Author: linjianx 
 * @Date: 2019-08-14 17:02:13 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-15 11:02:22
 */

 import { IAuthData, LOGIN, LoginActionTypes, RegActionTypes, REGISTER } from './types' 
 export const login: (user: IAuthData) => LoginActionTypes = (user) => ({
   type: LOGIN,
   payload: user
 })
 
 export const register: (user: IAuthData) => RegActionTypes = (user) => ({
   type: REGISTER,
   payload: user
 })