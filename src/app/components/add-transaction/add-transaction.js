import React, { Component } from 'react';
import injectSheet from 'react-jss';

import TransactionForm from 'containers/transaction-form';
import TransactionModal from '../transaction-modal';
import Button from '../button';

import styles from './styles';

class AddTransaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false
    };

    this.toggleTransactionModal = this.toggleTransactionModal.bind(this);
  }

  toggleTransactionModal() {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen
    }));
  }

  render() {
    const {
      classes
    } = this.props;
    const { isModalOpen } = this.state;

    return (
      <div>
        <Button
          className={ classes.addNewTransactionButton }
          type="button"
          onClick={ this.toggleTransactionModal }
        >
          <i className={ `${classes.addTransactionIcon} icon-plus`}></i>
          Add transaction
        </Button>
        <TransactionModal
          title="Add new transaction"
          submitButtonText="Add"
          isOpen={ isModalOpen }
          onClose={ this.toggleTransactionModal }
        >
          <TransactionForm
            toggleTransactionModal={ this.toggleTransactionModal }
          />
        </TransactionModal>
      </div>
    );
  }
}

export default injectSheet(styles)(AddTransaction);