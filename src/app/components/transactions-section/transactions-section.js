import React, { Component } from 'react';
import injectSheet from 'react-jss';

import TransactionsList from '../transactions-list';
import TransactionConfirm from '../transaction-confirm';

import walletImage from 'assets/images/wallet.svg';

import styles from './styles';

const NO_TRANSACTIONS_NOTIFICATION_TEXT = 'You don\'t have any transactions yet.';
const TRANSACTION_REMOVE_CONFIRM_MESSAGE = 'Remove this transaction?';

class TransactionsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRemoveConfirmOpen: false,
      selectedTransactionId: null
    };

    this.bindHandlers();
  }

  bindHandlers() {
    this.openRemoveConfirm = this.openRemoveConfirm.bind(this);
    this.closeRemoveConfirm = this.closeRemoveConfirm.bind(this);
  }

  openRemoveConfirm(selectedTransactionId) {
    this.setState({
      selectedTransactionId,
      isRemoveConfirmOpen: true
    });
  }

  closeRemoveConfirm() {
    this.setState({
      selectedTransactionId: null,
      isRemoveConfirmOpen: false
    });
  }

  render() {
    const {
      classes,
      transactions,
      onTransactionRemove
    } = this.props;
    const {
      isRemoveConfirmOpen,
      selectedTransactionId
    } = this.state;

    return (
      <div className={ classes.transactionsSection }>
        {
          transactions.length ?
            <TransactionsList
              transactions={ transactions }
              onTransactionRemoveIconClick={ this.openRemoveConfirm }
            /> :
            <div className={ classes.transactionsSectionNotification }>
              <img className={ classes.transactionsSectionNotificationImage } src={ walletImage } alt="Wallet" />
              <p className={ classes.transactionsSectionNotificationText }>{ NO_TRANSACTIONS_NOTIFICATION_TEXT }</p>
            </div>
        }
        <TransactionConfirm
          isOpen={ isRemoveConfirmOpen }
          text={ TRANSACTION_REMOVE_CONFIRM_MESSAGE }
          onSubmit={ () => {
            this.closeRemoveConfirm();
            onTransactionRemove(selectedTransactionId);
          } }
          onClose={ this.closeRemoveConfirm }
        />
      </div>
    );
  }
}

export default injectSheet(styles)(TransactionsSection);