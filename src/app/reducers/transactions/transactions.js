import transactionsList from './transactions-list';
import { transactionActionTypes as actionTypes } from 'constants';

const initialState = {
  transactionsList: []
};

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TRANSACTION:
      return {
        ...state,
        transactionsList: transactionsList(
          state.transactionsList,
          action
        )
      };
    case actionTypes.EDIT_TRANSACTION:
      return {
        ...state,
        transactionsList: transactionsList(
          state.transactionsList,
          action
        )
      };
    case actionTypes.REMOVE_TRANSACTION:
      return {
        ...state,
        transactionsList: transactionsList(
          state.transactionsList,
          action
        )
      };
    default:
      return state;
  }
};

export default transactions;