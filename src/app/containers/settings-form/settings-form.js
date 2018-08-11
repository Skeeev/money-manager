import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';

import SettingsForm from 'components/settings-form';
import { settingsActionCreators as actionCreators } from 'action-creators';

const FORM_NAME = 'settingsForm';

let SettingsFormContainer = reduxForm({
  form: FORM_NAME
})(SettingsForm);

const selector = formValueSelector(FORM_NAME);

const mapStateToProps = state => {
  const {
    settings: {
      currencies,
      activeCurrency
    }
  } = state;
  const formValues = selector(state, 'currency', 'test');

  return {
    ...formValues,
    initialValues: {
      currency: activeCurrency
    },
    currencySelectOptions: currencies
  };
};

const mapDispatchToProps = dispatch => ({
  onCurrencySelectChange: currency => {
    if (!currency) {
      return;
    }

    dispatch(
      actionCreators.currencyChange({
        currency
      })
    )
  }
});

SettingsFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsFormContainer);

export default SettingsFormContainer;