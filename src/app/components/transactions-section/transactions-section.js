import React, { Component } from 'react';
import injectSheet from 'react-jss';

import TransactionsList from '../transactions-list';
import TransactionConfirm from '../transaction-confirm';
import TransactionModal from '../transaction-modal';
import TransactionsInfo from 'containers/transactions-info';
import EditTransactionForm from 'containers/edit-transaction-form';

import walletImage from 'assets/images/wallet.svg';

import styles from './styles';

class TransactionsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRemoveConfirmOpen: false,
      isEditModalOpen: false,
      selectedTransactionId: null
    };
  }

  openEditModal = selectedTransactionId => {
    this.setState({
      selectedTransactionId,
      isEditModalOpen: true
    });
  };

  closeEditModal = () => {
    this.setState({
      selectedTransactionId: null,
      isEditModalOpen: false
    });
  };

  openRemoveConfirm = selectedTransactionId => {
    this.setState({
      selectedTransactionId,
      isRemoveConfirmOpen: true
    });
  };

  closeRemoveConfirm = () => {
    this.setState({
      selectedTransactionId: null,
      isRemoveConfirmOpen: false
    });
  };

  render() {
    const {
      classes,
      transactionsList,
      transactionsCurrency,
      onTransactionRemove,
      emptyTransactionListText,
      removeConfirmText
    } = this.props;
    const {
      isRemoveConfirmOpen,
      isEditModalOpen,
      selectedTransactionId
    } = this.state;

    return (
      <div className={ classes.transactionsSection }>
        {
          transactionsList.length ?
            <div>
              <TransactionsInfo />
              <TransactionsList
                transactionsList={ transactionsList }
                transactionsCurrency={ transactionsCurrency }
                onTransactionEditIconClick={ this.openEditModal }
                onTransactionRemoveIconClick={ this.openRemoveConfirm }
              />
            </div> :
            <div className={ classes.transactionsSectionNotification }>
              <img
                className={ classes.transactionsSectionNotificationImage }
                src={ walletImage } alt="Wallet"
              />
              <p
                className={ classes.transactionsSectionNotificationText }
              >
                { emptyTransactionListText }
              </p>
            </div>
        }
        <TransactionConfirm
          isOpen={ isRemoveConfirmOpen }
          text={ removeConfirmText }
          onSubmit={ () => {
            this.closeRemoveConfirm();
            onTransactionRemove(selectedTransactionId);
          } }
          onClose={ this.closeRemoveConfirm }
        />
        <TransactionModal
          title="Edit transaction"
          isOpen={ isEditModalOpen }
          onClose={ this.closeEditModal }
        >
          <EditTransactionForm
            selectedTransactionId={ selectedTransactionId }
            closeEditTransactionModal={ this.closeEditModal }
          />
        </TransactionModal>
      </div>
    );
  }
}

export default injectSheet(styles)(TransactionsSection);