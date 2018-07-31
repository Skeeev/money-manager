import React from 'react';
import { connect } from 'react-redux';

import { transactionsActionCreators as actionCreators } from 'action-creators';
import TransactionsSection from 'components/transactions-section';

const mapStateToProps = ({ transactionsMode: { transactions } }) => ({
  transactions
});

const mapDispatchToProps = dispatch => ({
  onTransactionEdit: transactionId => {
    dispatch(
      actionCreators.editTransaction(transactionId)
    );
  },
  onTransactionRemove: transactionId => {
    dispatch(
      actionCreators.removeTransaction(transactionId)
    );
  }
});

const TransactionSectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsSection);

export default TransactionSectionContainer;