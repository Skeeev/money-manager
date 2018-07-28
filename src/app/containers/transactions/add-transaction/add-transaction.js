import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';

import { transactionsActionCreators as actionCreators } from 'action-creators';
import TransactionForm from '../transaction-form';
import Modal from 'components/modal';
import Button from 'components/button';

import styles from './styles';

let AddTransaction = ({
  classes,
  isAddingTransaction,
  toggleAddTransitionModal,
  addTransaction
}) => (
  <div>
    <Button
      className={ classes.addNewTransactionButton }
      type="button"
      onClick={ toggleAddTransitionModal }
    >
      <i className={ `${classes.addTransactionIcon} icon-plus`}></i>
      Add transaction
    </Button>
    <Modal
      title="Add new transaction"
      submitButtonText="Add"
      isOpen={ isAddingTransaction }
      onSubmit={ addTransaction }
      onClose={ toggleAddTransitionModal }
    >
      <TransactionForm />
    </Modal>
  </div>
);

const mapStateToProps = ({ transactionsMode: { isAddingTransaction } }) => ({
  isAddingTransaction
});

const mapDispatchToProps = dispatch => ({
  toggleAddTransitionModal: () => {
    dispatch(
      actionCreators.toggleAddTransactionModal()
    );
  }
});

AddTransaction = connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(styles)(AddTransaction));

export default AddTransaction;