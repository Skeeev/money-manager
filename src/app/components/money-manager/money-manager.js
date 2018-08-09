import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import injectSheet from 'react-jss';

import Header from '../header';
import Transactions from '../transactions';
import Settings from '../settings';

import styles from './styles';

const MoneyManager = ({
  classes
}) => (
  <div>
    <Header />
    <main className={ classes.main }>
      <Switch>
        <Route path="/transactions" component={ Transactions } exact />
        <Route path="/settings" component={ Settings } exact />
        <Redirect from="/" to="/transactions" />
      </Switch>
    </main>
  </div>
);

export default injectSheet(styles)(MoneyManager);