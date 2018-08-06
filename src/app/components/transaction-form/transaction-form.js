import React from 'react';
import { Field } from 'redux-form';
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { formatDate, parseDate } from 'react-day-picker/moment';
import Select from 'react-select';
import injectSheet from 'react-jss';

import 'moment/locale/it';
import 'react-day-picker/lib/style.css';

import Button from '../button';
import { withStyledDatePicker } from '../hoc';

import styles from './styles';
import transactionSelectStyles from './transactionSelectStyles';

const DatePicker = withStyledDatePicker(DayPickerInput);

const TransactionForm = ({
  classes,
  categorySelectOptions,
  submitButtonText,
  submitTransactionFormHandler
}) => (
  <form className={ classes.transactionForm }>
    <div className={ classes.transactionFormRow }>
      <label
        className={ classes.transactionFormLabel }
        htmlFor="category"
      >
        Category:
      </label>
      <Field
        id="category"
        name="category"
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
            styles={ transactionSelectStyles }
            name={ name }
            value={ value }
            onChange={ onChange }
            options={ categorySelectOptions }
          />
        )}
      />
    </div>
    <div className={ classes.transactionFormRow }>
      <label
        className={ classes.transactionFormLabel }
        htmlFor="date"
      >
        Choose date:
      </label>
      <Field
        id="date"
        name="date"
        component={ ({
          input: {
            name,
            value,
            onChange
          },
          id
        } ) => (
          <DatePicker
            inputProps={ {
              id,
              name,
              className: `${classes.transactionFormField} ${classes.transactionFormFieldDatePicker}`
            } }
            classNames={ {
              container: classes.transactionFormFieldWrap,
              overlayWrapper: classes.transactionFormDatePickerWrapper,
              overlay: classes.transactionFormDatePickerOverlay
            } }
            dayPickerProps={ {
              classNames: {
                day: classes.transactionDatePickerDay,
                selected: classes.transactionDatePickerSelectedDay
              }
            } }
            value={ value }
            formatDate={ formatDate }
            parseDate={ parseDate }
            onDayChange={ onChange }
          />
        ) }
      />
    </div>
    <div className={ classes.transactionFormRow }>
      <label
        className={ classes.transactionFormLabel }
        htmlFor="description"
      >
        Description:
      </label>
      <div className={ classes.transactionFormFieldWrap }>
        <Field
          id="description"
          className={ `${classes.transactionFormField} ${classes.transactionFormFieldDescription}` }
          name="description"
          component="textarea"
          placeholder="Transaction description"
        />
      </div>
    </div>
    <div className={ classes.transactionFormRow }>
      <label
        className={ classes.transactionFormLabel }
        htmlFor="amount"
      >
        Amount:
      </label>
      <div className={ classes.transactionFormFieldWrap }>
        <Field
          id="amount"
          className={ classes.transactionFormField }
          name="amount"
          component="input"
          type="text"
          placeholder="Expense amount"
        />
      </div>
    </div>
    <Button
      type="button"
      className={ classes.transactionFormSubmitButton }
      onClick={ submitTransactionFormHandler }
    >
      { submitButtonText }
    </Button>
  </form>
);

export default injectSheet(styles)(TransactionForm);