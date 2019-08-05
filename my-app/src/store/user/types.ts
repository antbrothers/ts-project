/*
 * @Author: linjianx 
 * @Date: 2019-07-30 14:27:21 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-07-30 14:45:45
 */
export const REGISTER = 'REGISTER';
export const REGISTER_SU = 'REGISTER_SU';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN = 'LOGIN';
export const LOGIN_SU = 'LOGIN_SU';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT  = 'LOGOUT';

export interface IAuthData {
  username: string,
  password: string,
  callback: () => void;
}
export interface IUserState {
  userId: string,
  username: string,
  errMsg: string
}
export interface ILoginAction {
  type: typeof LOGIN;
  payload: IAuthData;
}
export interface ILoginSuAction {
  type: typeof LOGIN_SU;
  payload: IUserState
}
export interface ILoginFailAction {
  type: typeof LOGIN_FAIL;
  payload: IUserState;
}
export interface IRegisterAction {
  type: typeof REGISTER;
  payload: IAuthData
}
export interface IRegFailAction {
  type: typeof REGISTER_FAIL;
  payload: IUserState;
}
export interface IRegSucAction {
  type: typeof REGISTER_SU;
  payload: IUserState;
}
export type LoginActionTypes = 
 | ILoginAction
 | ILoginSuAction
 | ILoginFailAction;
 export type RegActionTypes = IRegisterAction | IRegFailAction | IRegSucAction;
