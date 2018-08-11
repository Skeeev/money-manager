import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import TransactionForm from 'components/transaction-form';
import { transactionsActionCreators as actionCreators } from 'action-creators';

const FORM_NAME = 'editTransactionForm';
const SUBMIT_BUTTON_TEXT = 'Save';

let EditTransactionForm = reduxForm({
  form: FORM_NAME
})(TransactionForm);

const selector = formValueSelector(FORM_NAME);

const mapStateToProps = (state, ownProps) => {
  const {
    transactions: {
      transactionsList
    },
    settings: {
      categories
    }
  } = state;
  const { selectedTransactionId } = ownProps;
  const {
    category,
    date,
    description,
    amount
  } = {
    ...transactionsList.find(transaction => transaction.id === selectedTransactionId)
  };
  const formValues = selector(state, 'category', 'date', 'description', 'amount');

  return {
    ...formValues,
    initialValues: {
      category,
      date,
      description,
      amount
    },
    categorySelectOptions: categories,
    submitButtonText: SUBMIT_BUTTON_TEXT
  };
};

const mergeProps = (stateProps, { dispatch }, ownProps) => {
  const {
    category,
    date,
    description,
    amount
  } = stateProps;
  const {
    closeEditTransactionModal,
    selectedTransactionId: id
  } = ownProps;

  return {
    ...stateProps,
    submitTransactionFormHandler: () => {
      closeEditTransactionModal();
      dispatch(
        actionCreators.editTransaction({
          id,
          date,
          description,
          category,
          amount: parseFloat(amount)
        })
      );
    }
  };
};

EditTransactionForm = connect(
  mapStateToProps,
  null,
  mergeProps
)(EditTransactionForm);

export default EditTransactionForm;