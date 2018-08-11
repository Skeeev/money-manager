import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector, change } from 'redux-form';

import SettingsForm from 'components/settings-form';
import { settingsActionCreators as actionCreators } from 'action-creators';

const FORM_NAME = 'settingsForm';

let SettingsFormContainer = reduxForm({
  form: FORM_NAME
})(SettingsForm);

const selector = formValueSelector(FORM_NAME);

const mapStateToProps = state => {
  const {
    transactions: {
      transactionsList
    },
    settings: {
      currencies,
      activeCurrency,
      categories
    }
  } = state;
  const formValues = selector(state, 'currency', 'category');

  const categoriesList = categories.map(category => {
    category.transactionsQuantity = transactionsList.filter(transaction => (
      transaction.category.value === category.value)
    ).length;

    return category;
  });

  return {
    ...formValues,
    categories: categoriesList,
    initialValues: {
      currency: activeCurrency
    },
    currencySelectOptions: currencies
  };
};

const mergeProps = (stateProps, { dispatch }) => {
  const {
    category
  } = stateProps;

  return {
    ...stateProps,
    onCurrencySelectChange: currency => {
      if (!currency) {
        return;
      }

      dispatch(
        actionCreators.currencyChange({
          currency
        })
      );
    },
    onCategoryAdd: () => {
      dispatch(
        actionCreators.addCategory({
          category
        })
      );
      dispatch(
        change(FORM_NAME, 'category', '')
      );
    }
  };
};

SettingsFormContainer = connect(
  mapStateToProps,
  null,
  mergeProps
)(SettingsFormContainer);

export default SettingsFormContainer;