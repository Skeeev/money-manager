import React from 'react';
import { connect } from 'react-redux';

import TransactionsInfo from 'components/transactions-info';

const transactionsInfoTitle = 'Total transactions expenses';

const mapStateToProps = ({ transactions: { transactionsList }, settings: { activeCurrency } }) => ({
  transactionsInfoTitle,
  transactionsTotalAmount: transactionsList.reduce((totalAmount, transaction) => {
    totalAmount += transaction.amount;

    return totalAmount;
  }, 0).toFixed(2),
  transactionsCurrency: activeCurrency.label.split('-')[0]
});

export default connect(
  mapStateToProps
)(TransactionsInfo);