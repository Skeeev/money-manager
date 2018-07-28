import transactions from './transactions';
import { transactionActionTypes as actionTypes } from 'constants';

const initialState = {
  isAddingTransaction: false,
  transactions: [],
  selectedTransaction: null
};

const transactionsMode = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_ADD_TRANSACTION_MODAL:
      return {
        ...state,
        isAddingTransaction: !state.isAddingTransaction
      };
    case actionTypes.ADD_TRANSACTION:
      return {
        ...state,
        isAddingTransaction: false,
        transactions: transactions(state.transactions, action)
      };
    default:
      return state;
  }
};

export default transactionsMode;