import React from 'react';
import injectSheet from 'react-jss';

import AddTransaction from '../add-transaction';

import styles from './styles';
import TransactionsSection from 'containers/transactions-section';

const Transactions = ({
  classes
}) => (
  <div className={ classes.wrapper }>
    <AddTransaction />
    {/*<FilterTransactions />*/}
    {/*<TransactionsInfo />*/}
    <TransactionsSection />
  </div>
);

export default injectSheet(styles)(Transactions);