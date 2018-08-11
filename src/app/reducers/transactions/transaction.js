import { transactionsActionTypes as actionTypes } from 'constants';

const transaction = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_TRANSACTION:
      const { category, date, description, amount } = action;

      return {
        category,
        date,
        description,
        amount,
        id: action.id
      };
    case actionTypes.EDIT_TRANSACTION:
      const {
        id,
        ...transactionProps
      } = action;

      if (state.id !== id) {
        return state;
      }

      return {
        ...state,
        ...transactionProps
      };
    case actionTypes.REMOVE_TRANSACTION:
      return state.id !== action.id;
    default:
      return state;
  }
};

export default transaction;