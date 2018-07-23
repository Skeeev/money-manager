import { transactionActionTypes as actionTypes } from '../constants';
import { generateTransactionId } from '../helpers';

const toggleAddTransactionModal = () => ({
  type: actionTypes.TOGGLE_ADD_TRANSACTION_MODAL
});

const addTransaction = (actionProps) => ({
  type: actionTypes.ADD_TRANSACTION,
  id: generateTransactionId(),
  ...actionProps
});

export {
  toggleAddTransactionModal,
  addTransaction
};