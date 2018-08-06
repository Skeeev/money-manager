import transactions from './transactions';
import { transactionActionTypes as actionTypes } from 'constants';

const initialState = {
  transactions: []
};

const transactionsMode = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactions: transactions(state.transactions, action)
      };
    case actionTypes.EDIT_TRANSACTION:
      return {
        ...state,
        transactions: transactions(state.transactions, action)
      };
    case actionTypes.REMOVE_TRANSACTION:
      return {
        ...state,
        transactions: transactions(state.transactions, action)
      };
    default:
      return state;
  }
};

export default transactionsMode;