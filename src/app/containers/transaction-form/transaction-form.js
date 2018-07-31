import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import TransactionForm from 'components/transaction-form';
import { transactionsActionCreators as actionCreators } from 'action-creators';

const FORM_NAME = 'transactionForm';

let TransactionFormContainer = reduxForm({
  form: FORM_NAME
})(TransactionForm);

const selector = formValueSelector(FORM_NAME);

const mapStateToProps = (state) => {
  const { transactionsMode: { selectedTransaction }, settingsMode: { categories } } = state;
  const formValues = selector(state, 'category', 'date', 'description', 'amount');

  return {
    ...formValues,
    initialValues: selectedTransaction || {
      category: '',
      date: new Date(),
      description: '',
      amount: ''
    },
    categorySelectOptions: categories
  };
};

const mergeProps = (stateProps, { dispatch }, ownProps) => {
  const { category, date, description, amount } = stateProps;
  const { toggleTransactionModal } = ownProps;

  return {
    ...stateProps,
    submitTransactionFormHandler: () => {
      toggleTransactionModal();
      dispatch(
        actionCreators.addTransaction({
          date,
          description,
          category: category.label,
          amount: parseFloat(amount)
        })
      )
    }
  };
};

TransactionFormContainer = connect(
  mapStateToProps,
  null,
  mergeProps
)(TransactionFormContainer);

export default TransactionFormContainer;