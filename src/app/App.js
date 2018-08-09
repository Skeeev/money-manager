import React from 'react';
import { ConnectedRouter } from "connected-react-router";

import MoneyManager from 'components/money-manager';

import './App.css';
import history from './history';

const App = () => (
  <ConnectedRouter history={ history }>
    <MoneyManager />
  </ConnectedRouter>
);

export default App;