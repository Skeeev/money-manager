import React from 'react';
import injectSheet from 'react-jss';

import Transaction from '../transaction';

import styles from './styles';

const TransactionsList = ({
  classes,
  transactions,
  onTransactionRemoveIconClick
}) => (
  <ul className={ classes.transactionsSectionList }>
    {
      transactions.map(transaction => (
        <Transaction
          key={ transaction.id }
          data={ transaction }
          onTransactionRemoveIconClick={ () => onTransactionRemoveIconClick(transaction.id) }
        />
      ))
    }
  </ul>
);

export default injectSheet(styles)(TransactionsList);