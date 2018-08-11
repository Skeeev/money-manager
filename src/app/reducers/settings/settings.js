import { settingsActionTypes as actionTypes } from 'constants';

const initialState = {
  categories: [
    {
      label: 'Food & Drink',
      value: 'food & drinks'
    },
    {
      label: 'Shopping',
      value: 'shopping'
    },
    {
      label: 'Transport',
      value: 'transport'
    },
    {
      label: 'Bills & Fees',
      value: 'bills & fees'
    },
    {
      label: 'Entertainment',
      value: 'entertainment'
    },
    {
      label: 'Travel',
      value: 'travel'
    },
    {
      label: 'Healthcare',
      value: 'healthcare'
    },
    {
      label: 'Education',
      value: 'education'
    },
    {
      label: 'Sport & Hobbies',
      value: 'sport & hobbies'
    }
  ],
  currencies: [
    {
      label: 'USD - United States dollar',
      value: '$'
    },
    {
      label: 'EUR - European Monetary Unit',
      value: '€'
    },
    {
      label: 'GBP - Great Britain Pound',
      value: '£'
    }
  ],
  activeCurrency: {
    label: 'USD - United States dollar',
    value: '$'
  }
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CURRENCY_CHANGE:
      return {
        ...state,
        activeCurrency: {
          ...action.selectedCurrency
        }
      };
    default:
      return state;
  }
};

export default settings;