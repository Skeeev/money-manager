import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import injectSheet from 'react-jss';

import Transaction from '../transaction';

import styles from './styles';

const TransactionsList = ({
  classes,
  transactionsList,
  transactionsCurrency,
  onTransactionEditIconClick,
  onTransactionRemoveIconClick
}) => (
  <div className={ classes.transactionsSectionListContainer } >
    <Scrollbars
      autoHide
      renderView={ props => (
        <ul {...props} className={ classes.transactionsSectionList } />
      ) }
    >
      {
        transactionsList.map(transaction => (
          <Transaction
            key={ transaction.id }
            data={ transaction }
            transactionsCurrency={ transactionsCurrency }
            onTransactionEditIconClick={ () => onTransactionEditIconClick(transaction.id) }
            onTransactionRemoveIconClick={ () => onTransactionRemoveIconClick(transaction.id) }
          />
        ))
      }
    </Scrollbars>
  </div>
);

export default injectSheet(styles)(TransactionsList);