import { settingsActionTypes as actionTypes } from 'constants';
import category from './category';

const categories = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY:
      return [
        ...state,
        category(undefined, action)
      ];
    default:
      return state;
  }
};

export default categories;