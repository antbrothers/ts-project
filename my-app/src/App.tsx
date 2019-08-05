import { message } from 'antd';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from 'src/views/Index';

// 配置全局 message
message.config({
  duration: 1,
  maxCount: 3
})
export default class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path='/' component={Index} exact={true} />
        </Switch>
      </React.Fragment>
    )
  }
}