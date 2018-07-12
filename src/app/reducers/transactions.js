import transaction from './transaction';
import { transactionActionTypes as actionTypes } from '../constants';

const transactions = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TRANSACTION:
      return [
        ...state,
        transaction(undefined, action)
      ];
    default:
      return state;
  }
};

export default transactions;