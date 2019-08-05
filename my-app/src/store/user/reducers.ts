/*
 * @Author: linjianx 
 * @Date: 2019-08-05 11:23:43 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-05 11:31:49
 */
import { IUserState, LOGIN_FAIL, LOGIN_SU, LoginActionTypes, RegActionTypes, REGISTER_FAIL, REGISTER_SU } from './types'

const initialState: IUserState = {
  userId: '',
  username: '',
  errMsg: ''
};

export default function userReducer(
  state = initialState,
  action: LoginActionTypes | RegActionTypes
) {
  switch (action.type) {
    case REGISTER_FAIL:
      return {
        ...state,
        ...action.payload
      };
    case REGISTER_SU:
      return {
        ...state,
        ...action.payload
      };
    case LOGIN_SU:
      return {
        ...state,
        ...action.payload
      };
    case LOGIN_FAIL:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}