import React from 'react';
import { connect } from 'react-redux';

import { transactionsActionCreators as actionCreators } from '../../../action-creators';
import TransactionForm from '../transaction-form';
import Modal from '../../../components/modal';
import Button from '../../../components/button';

let AddTransaction = ({
  isAddingTransaction,
  toggleAddTransitionModal,
  addTransaction
}) => (
  <div>
    <Button
      type="button"
      onClick={ toggleAddTransitionModal }
      text="Add transaction"
    />
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
)(AddTransaction);

export default AddTransaction;