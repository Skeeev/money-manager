import { transactionActionTypes as actionTypes } from 'constants';
import { generateTransactionId } from 'utils';

const addTransaction = (actionProps) => ({
  type: actionTypes.ADD_TRANSACTION,
  id: generateTransactionId(),
  ...actionProps
});

const editTransaction = (transactionId) => ({
  type: actionTypes.EDIT_TRANSACTION,
  id: transactionId
});

const removeTransaction = (transactionId) => ({
  type: actionTypes.REMOVE_TRANSACTION,
  id: transactionId
});

export {
  addTransaction,
  editTransaction,
  removeTransaction
};