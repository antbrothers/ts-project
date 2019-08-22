/*
 * @Author: linjianx 
 * @Date: 2019-08-13 18:25:03 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-22 16:12:15
 */
// import { applyMiddleware, createStore } from 'redux'
// // redux-thunk可以将action变为异步
// import thunk from 'redux-thunk'
// import rootReducer from './reducers/index'

// // 将中间件挂载到store上
// const store = createStore(rootReducer, applyMiddleware(thunk))
// export default store

import { applyMiddleware, combineReducers, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../../src/saga'
import userReducer from './user/reducers'
import initState from './initState/reducers'

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ user: userReducer, initState: initState });

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export type AppStore = ReturnType<typeof rootReducer>;
sagaMiddleware.run(rootSaga);;