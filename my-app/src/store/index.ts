/*
 * @Author: linjianx 
 * @Date: 2019-08-05 15:49:10 
 * @Last Modified by:   linjianx 
 * @Last Modified time: 2019-08-05 15:49:10 
 */
import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'src/saga';

import userReducer from './user/reducers';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ user: userReducer });

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export type AppStore = ReturnType<typeof rootReducer>;
sagaMiddleware.run(rootSaga);