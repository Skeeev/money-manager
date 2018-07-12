import { transactionActionTypes as actionTypes } from '../constants';

const transaction = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ADD_TRANSACTION:
      return {
        id: action.id,
        description: action.description
      };
    default:
      return state;
  }
};

export default transaction;