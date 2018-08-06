import { transactionActionTypes as actionTypes } from 'constants';
import { generateTransactionId } from 'utils';

const addTransaction = actionProps => ({
  type: actionTypes.ADD_TRANSACTION,
  id: generateTransactionId(),
  ...actionProps
});

const editTransaction = actionProps => ({
  type: actionTypes.EDIT_TRANSACTION,
  ...actionProps
});

const removeTransaction = transactionId => ({
  type: actionTypes.REMOVE_TRANSACTION,
  id: transactionId
});

export {
  addTransaction,
  editTransaction,
  removeTransaction
};