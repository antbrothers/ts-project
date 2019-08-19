/*
 * @Author: linjianx 
 * @Date: 2019-08-14 17:55:26 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-14 18:07:09
 */

import { takeEvery } from 'redux-saga/effects'
import { login } from './redux/user/sage'
import { LOGIN } from './redux/user/types'
function* rootSaga() {
  yield takeEvery(LOGIN, login)
}
export default rootSaga;