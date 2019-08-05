/*
 * @Author: linjianx 
 * @Date: 2019-08-05 17:25:08 
 * @Last Modified by: linjianx
 * @Last Modified time: 2019-08-05 17:29:26
 */
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './serviceWorker';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <LocaleProvider locale={zhCN}>
        <App />
      </LocaleProvider>
    </BrowserRouter>
  </Provider>,
   document.getElementById('root') as HTMLElement
)
registerServiceWorker();