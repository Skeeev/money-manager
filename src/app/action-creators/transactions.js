import { transactionActionTypes as actionTypes } from '../constants';
import { generateTransactionId } from '../helpers';

const addTransaction = (actionProps) => {
  return {
    type: actionTypes.ADD_TRANSACTION,
    id: generateTransactionId(),
    ...actionProps
  };
};

export {
  addTransaction
};