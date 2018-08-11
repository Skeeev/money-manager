import React from 'react';
import { Field } from 'redux-form';
import Select from 'react-select';
import injectSheet from 'react-jss';

import Button from '../button';

import styles from './styles';
import settingsCurrencySelectStyles from './settings-currency-select-styles';

const SettingsForm = ({
  classes,
  currencySelectOptions,
  categories,
  onCurrencySelectChange,
  onCategoryAdd
}) => (
  <form>
    <div className={ classes.settingsFormRow }>
      <label
        className={ classes.settingsFormLabel }
        htmlFor="currency"
      >
        Change transactions currency:
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
    <div className={ classes.settingsFormRow }>
      <label
        className={ classes.settingsFormLabel }
        htmlFor="category"
      >
        Add new category:
      </label>
      <div className={ classes.settingsFormFieldWrap }>
        <Field
          id="category"
          className={ classes.settingsFormField }
          name="category"
          component="input"
          type="text"
          placeholder="Category name"
        />
        <Button
          type="button"
          className={ classes.settingsFormAddCategoryButton }
          onClick={ onCategoryAdd }
        >
          Add
        </Button>
      </div>
    </div>
    <ul className={ classes.settingsFormCategoriesList }>
      {
        categories.map((category, index) => (
          <li key={ index } className={ classes.settingsFormCategoryItem }>
                <span className={ classes.settingsFormCategoryItemName }>
                  { category.label }
                </span>
            <span className={ classes.settingsFormCategoryItemTransactions }>
                  { category.transactionsQuantity } transactions
                </span>
          </li>
        ))
      }
    </ul>
  </form>
);

export default injectSheet(styles)(SettingsForm);