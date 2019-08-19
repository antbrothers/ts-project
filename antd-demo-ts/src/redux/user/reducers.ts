/*
 * @Author: linjianx 
 * @Date: 2019-08-14 17:05:59 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-15 11:18:38
 */
import { IUserState, LOGIN, LOGIN_FAIL, LOGIN_SUC, LoginActionTypes, RegActionTypes, REGISTER_FAIL, REGISTER_SUC } from './types';
const initialState: IUserState = {
  userId: '',
  userName: '',
  errMsg: ''
}
export default function userReducer(state = initialState, action: LoginActionTypes | RegActionTypes) {
  debugger
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload
      };
    case LOGIN_SUC:
      return {
        ...state,
        ...action.payload
      }
    case LOGIN_FAIL:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}