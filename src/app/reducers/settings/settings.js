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
      label: 'USD',
      value: '$'
    }
  ],
  activeCurrency: {
    label: 'USD',
    value: '$'
  }
};

const settings = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default settings;