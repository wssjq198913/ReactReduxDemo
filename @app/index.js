import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './containers/App/App';
import store from './store/createStore';

import 'bootstrap/dist/css/bootstrap.css'; 

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
), document.getElementById('react-root'));