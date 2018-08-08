import React, { Component } from 'react';
import injectSheet from 'react-jss';

import AddTransactionForm from 'containers/add-transaction-form';
import TransactionModal from '../transaction-modal';
import Button from '../button';

import styles from './styles';

class AddTransaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddModalOpen: false
    };

    this.bindHandlers();
  }

  bindHandlers() {
    this.toggleTransactionModal = this.toggleTransactionModal.bind(this);
  }

  toggleTransactionModal() {
    this.setState(prevState => ({
      isAddModalOpen: !prevState.isAddModalOpen
    }));
  }

  render() {
    const {
      classes
    } = this.props;
    const { isAddModalOpen } = this.state;

    return (
      <div className={ classes.addTransaction }>
        <Button
          className={ classes.addTransactionButton }
          type="button"
          onClick={ this.toggleTransactionModal }
        >
          <i className={ `${classes.addTransactionIcon} icon-plus`}></i>
          Add transaction
        </Button>
        <TransactionModal
          title="Add new transaction"
          isOpen={ isAddModalOpen }
          onClose={ this.toggleTransactionModal }
        >
          <AddTransactionForm
            toggleTransactionModal={ this.toggleTransactionModal }
          />
        </TransactionModal>
      </div>
    );
  }
}

export default injectSheet(styles)(AddTransaction);