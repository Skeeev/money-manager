import React from 'react';
import injectSheet from 'react-jss';

import Transactions from '../transactions';

import styles from './styles';

const MoneyManager = ({
  classes
}) => (
  <main className={ classes.main }>
    <Transactions />
    {/*<Settings />*/}
  </main>
);

export default injectSheet(styles)(MoneyManager);