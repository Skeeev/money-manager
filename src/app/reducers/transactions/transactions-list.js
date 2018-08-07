import transaction from './transaction';
import { transactionActionTypes as actionTypes } from 'constants';

const transactionsList = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TRANSACTION:
      return [
        ...state,
        transaction(undefined, action)
      ];
    case actionTypes.EDIT_TRANSACTION:
      return state.map(t => transaction(t, action));
    case actionTypes.REMOVE_TRANSACTION:
      return state.filter(t => transaction(t, action));
    default:
      return state;
  }
};

export default transactionsList;