/*
 * @Author: linjianx 
 * @Date: 2019-08-14 10:51:52 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-21 10:57:54
 */

import { Button, Form, Icon, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form'
import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { login } from '../../redux/user/actions'
import { IAuthData, IUserState } from '../../redux/user/types'
import './style.scss'
import PcVerify from '../PcVerify/index'
interface ILoginForm extends FormComponentProps {
  triggerForm: () => void;
  onLogin: (authData: IAuthData) => void;
  onToTodo: () => void;
  user: IUserState;
}
class LoginForm extends React.Component<ILoginForm> {
  public handleLogin = () => {
    console.log(this.props.user)
    localStorage.setItem('isLogin', 'true')
    this.props.onToTodo()   
  };
  public handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: Error, values) => {
      if (!err) {
        const { username, password } = values
        this.props.onLogin({ username, password, callback: this.handleLogin })
      }
    })
  }
  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className='form-body'>
        <h1>MATE广告平台</h1>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '请输入您的用户名!'
              }
            ]
          })(
            <Input
              prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder='用户名'
              autoComplete='off'
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请输入您的密码!'
              }
            ]
          })(
            <Input
              prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
              type='password'
              placeholder='密码'
            />
          )}
        </Form.Item>
        <PcVerify></PcVerify>
        <Form.Item>
          <Button type="primary" block htmlType='submit' className='login-btn'>
            登录
          </Button>
        </Form.Item>
      </Form>
    )
  }
}
const mapStateToProps = (store: any) => ({
  user: store.user
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  onLogin: (authData: IAuthData) => dispatch(login(authData))
});
const WrappedLoginForm = Form.create<ILoginForm>()(LoginForm);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedLoginForm);