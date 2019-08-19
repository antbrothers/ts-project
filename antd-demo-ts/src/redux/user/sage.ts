/*
 * @Author: linjianx 
 * @Date: 2019-08-14 17:13:13 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-19 10:24:50
 */
import { call, put } from 'redux-saga/effects'
import UserService from '../../service/user'
import { ILoginAction, IRegisterAction, LOGIN_FAIL, LOGIN_SUC, REGISTER_FAIL, REGISTER_SUC } from './types';
const userService = new UserService()

export function* login(action: ILoginAction) {
  debugger
  const { username, password } = action.payload
  try {
    const res: any = yield call(userService.login, username, password);
    yield put({
      type: LOGIN_SUC,
      payload: { ...res.Results, errMsg: res.msg }
    })
    action.payload.callback()
  } catch (error) {
    yield put({
      type: LOGIN_FAIL,
      payload: { errMsg: error.message }
    })
  }
}