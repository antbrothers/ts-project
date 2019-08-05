/*
 * @Author: linjianx 
 * @Date: 2019-08-05 11:59:21 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-05 15:33:08
 */
import { takeEvery } from 'redux-saga/effects';
import { login, register } from './store/user/sage'
import { LOGIN, REGISTER } from './store/user/types'

function* rootSaga() {
  yield takeEvery(LOGIN, login);
  yield takeEvery(REGISTER, register);
}
export default rootSaga