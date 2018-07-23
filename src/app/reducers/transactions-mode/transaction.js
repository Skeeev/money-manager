import { transactionActionTypes as actionTypes } from '../../constants';

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
    default:
      return state;
  }
};

export default transaction;