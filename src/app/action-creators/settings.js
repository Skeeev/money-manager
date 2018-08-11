import { settingsActionTypes as actionTypes } from 'constants';

const currencyChange = ({ currency }) => ({
  type: actionTypes.CURRENCY_CHANGE,
  selectedCurrency: currency
});

const addCategory = ({ category }) => ({
  type: actionTypes.ADD_CATEGORY,
  category
});

export {
  currencyChange,
  addCategory
};