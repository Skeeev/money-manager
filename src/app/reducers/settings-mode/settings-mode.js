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
  currency: 'USD'
};

const settingsMode = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default settingsMode;