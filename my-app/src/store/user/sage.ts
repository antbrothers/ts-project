/*
 * @Author: linjianx 
 * @Date: 2019-08-05 11:43:22 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-05 15:29:02
 */
import { call, put } from 'redux-saga/effects';
import { removeStorage, setStorage } from 'src/utils/store'
import { ILoginAction, IRegisterAction, LOGIN_FAIL, LOGIN_SU, REGISTER_FAIL, REGISTER_SU, LOGIN } from './types'


export function* login(action: ILoginAction) {
  const { username, password } = action.payload
  try {
    yield call(setStorage, 'userId', '1232123');
    yield call(setStorage, 'username', 'antbrother')
    yield put({
      type: LOGIN_SU,
      payload: { errMsg: '成功' }
    })
    action.payload.callback();
  } catch (error) {
    yield call(removeStorage, 'userId')
    yield call(removeStorage, 'username')
    yield put({
      type: LOGIN_FAIL,
      payload: { errMsg: error.message }
    })
  }
}
export function* register(action: IRegisterAction) {
  const { username, password } = action.payload
  try {
   yield put({
     type: REGISTER_SU
   })
   action.payload.callback() 
    
  } catch (error) {
    yield put({
      type: REGISTER_FAIL,
      payload: { errMsg: '注册失败' }
    })
  }
}