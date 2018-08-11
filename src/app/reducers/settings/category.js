import { settingsActionTypes as actionTypes } from 'constants';

const category = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY:
      const { category } = action;

      return {
        label: category
          .split(' ')
          .map(s => `${s.charAt(0).toUpperCase()}${s.slice(1)}`)
          .join(' '),
        value: category.toLowerCase()
      };
    default:
      return state;
  }
};

export default category;