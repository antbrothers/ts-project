/*
 * @Author: linjianx 
 * @Date: 2019-08-14 10:41:22 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-14 11:16:58
 */
import './index.scss';
import { message } from 'antd'
import * as React from 'react'
import { RouteComponentProps } from 'react-router'
import LoginForm from '../../components/LoginForm';
const initialState = {
  showLogin: true
}
type IState = Readonly<typeof initialState>;
class Login extends React.Component<RouteComponentProps, IState> {
  public state =  initialState;
  public componentDidMount() {
    if (window.localStorage.getItem('userId')) {
      this.props.history.push('/todo');
    }
  }
  public toTodo = () => {
    this.props.history.push('/todo');
    message.destroy();
  };
  public toggleForm = () => {
    this.setState({
      showLogin: !this.state.showLogin
    });
  };
  public render() {
    return (
      <React.Fragment>
        <div className='bg form-wrapper'>
        <LoginForm onToTodo={this.toTodo} triggerForm={this.toggleForm} />
        </div>
      </React.Fragment>
    );
  }
}
export default Login;