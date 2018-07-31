import transactions from './transactions';
import { transactionActionTypes as actionTypes } from 'constants';

const initialState = {
  transactions: [],
  selectedTransaction: null
};

const transactionsMode = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TRANSACTION:
      return {
        ...state,
        isAddingTransaction: false,
        transactions: transactions(state.transactions, action)
      };
    case actionTypes.REMOVE_TRANSACTION:
      return {
        ...state,
        isRemovingTransaction: false,
        transactions: transactions(state.transactions, action)
      };
    default:
      return state;
  }
};

export default transactionsMode;