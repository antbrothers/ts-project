/*
 * @Author: linjianx 
 * @Date: 2019-08-05 09:22:21 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-05 10:38:40
 */
import { IAuthData, LOGIN, LoginActionTypes, RegActionTypes, REGISTER } from './types';

export const login: (user: IAuthData) => LoginActionTypes = (user) => ({
   type: LOGIN,
  payload: user
})

export const register: (user: IAuthData) => RegActionTypes = (user) => ({
  type: REGISTER,
  payload: user
})