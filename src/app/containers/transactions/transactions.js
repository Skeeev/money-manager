import React from 'react';
import injectSheet from 'react-jss';

import AddTransaction from './add-transaction';
import TransactionsList from 'components/transactions-list';

import styles from './styles';

const Transactions = ({
  classes
}) => (
  <div className={ classes.wrapper }>
    <AddTransaction />
    {/*<FilterTransactions />*/}
    {/*<TransactionsInfo />*/}
    <TransactionsList />
  </div>
);

export default injectSheet(styles)(Transactions);