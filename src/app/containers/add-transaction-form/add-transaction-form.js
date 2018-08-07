import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import TransactionForm from 'components/transaction-form';
import { transactionsActionCreators as actionCreators } from 'action-creators';

const FORM_NAME = 'addTransactionForm';
const SUBMIT_BUTTON_TEXT = 'Add';

let AddTransactionForm = reduxForm({
  form: FORM_NAME
})(TransactionForm);

const selector = formValueSelector(FORM_NAME);

const mapStateToProps = (state) => {
  const {
    settings: {
      categories
    }
  } = state;
  const formValues = selector(state, 'category', 'date', 'description', 'amount');

  return {
    ...formValues,
    initialValues: {
      category: '',
      date: new Date(),
      description: '',
      amount: ''
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
  const { toggleTransactionModal } = ownProps;

  return {
    ...stateProps,
    submitTransactionFormHandler: () => {
      toggleTransactionModal();
      dispatch(
        actionCreators.addTransaction({
          date,
          description,
          category,
          amount: parseFloat(amount)
        })
      )
    }
  };
};

AddTransactionForm = connect(
  mapStateToProps,
  null,
  mergeProps
)(AddTransactionForm);

export default AddTransactionForm;