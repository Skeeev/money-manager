import React from 'react';
import { connect } from 'react-redux';

import { transactionsActionCreators as actionCreators } from 'action-creators';
import TransactionsSection from 'components/transactions-section';

const NO_TRANSACTIONS_NOTIFICATION_TEXT = 'You don\'t have any transactions yet.';
const TRANSACTION_REMOVE_CONFIRM_MESSAGE = 'Remove this transaction?';

const mapStateToProps = ({ transactions: { transactionsList }, settings: { activeCurrency } }) => ({
  transactionsList,
  transactionsCurrency: activeCurrency.value,
  emptyTransactionListText: NO_TRANSACTIONS_NOTIFICATION_TEXT,
  removeConfirmText: TRANSACTION_REMOVE_CONFIRM_MESSAGE
});

const mapDispatchToProps = dispatch => ({
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