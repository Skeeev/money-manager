import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';

import 'normalize.css';
import history from './app/history';
import rootReducer from './app/reducers';
import App from './app';

const store = createStore(
  connectRouter(history)(rootReducer),
  applyMiddleware(
    routerMiddleware(history),
    createLogger()
  )
);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);