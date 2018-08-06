import React from 'react';
import injectSheet from 'react-jss';

import Transaction from '../transaction';

import styles from './styles';

const TransactionsList = ({
  classes,
  transactions,
  onTransactionEditIconClick,
  onTransactionRemoveIconClick
}) => (
  <ul className={ classes.transactionsSectionList }>
    {
      transactions.map(transaction => (
        <Transaction
          key={ transaction.id }
          data={ transaction }
          onTransactionEditIconClick={ () => onTransactionEditIconClick(transaction.id) }
          onTransactionRemoveIconClick={ () => onTransactionRemoveIconClick(transaction.id) }
        />
      ))
    }
  </ul>
);

export default injectSheet(styles)(TransactionsList);