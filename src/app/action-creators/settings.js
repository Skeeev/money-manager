import { settingsActionTypes as actionTypes } from 'constants';

const currencyChange = ({ currency }) => ({
  type: actionTypes.CURRENCY_CHANGE,
  selectedCurrency: currency
});

export {
  currencyChange
};