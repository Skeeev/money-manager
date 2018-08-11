import React from 'react';
import { Field } from 'redux-form';
import Select from 'react-select';
import injectSheet from 'react-jss';

import styles from './styles';
import settingsCurrencySelectStyles from './settings-currency-select-styles';

const SettingsForm = ({
  classes,
  currencySelectOptions,
  onCurrencySelectChange
}) => {
  return (
    <form>
      <div className={ classes.settingsFormRow }>
        <label
          className={ classes.settingsFormLabel }
          htmlFor="currency"
        >
          Select transactions currency:
        </label>
        <Field
          id="currency"
          name="currency"
          component={ ({
            input: {
              name,
              value,
              onChange,
              onFocus,
              onBlur
            },
            id
          } ) => (
            <Select
              isClearable
              inputId={ id }
              styles={ settingsCurrencySelectStyles }
              name={ name }
              value={ value }
              onChange={ selectedCurrency => {
                onChange(selectedCurrency);
                onCurrencySelectChange(selectedCurrency);
              } }
              options={ currencySelectOptions }
            />
          )}
        />
      </div>
    </form>
  )
};

export default injectSheet(styles)(SettingsForm);