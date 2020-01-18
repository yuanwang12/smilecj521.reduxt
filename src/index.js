/*
 * @filename: 
 * @Date: 2020-01-18 20:08:12
 * @Author: wangYuan  <yuan.wang07@hand-china.com>
 * @version: 1.0.0
 * @copyright: Copyright (c) 2020, Hand
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import store from './store'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
