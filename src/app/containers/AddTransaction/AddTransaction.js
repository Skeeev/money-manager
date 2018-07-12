import React from 'react';
import { connect } from 'react-redux';
import { transactionsActionCreators as actionCreators } from '../../action-creators';

import './add-transaction.css';

let AddTransaction = ({ dispatch }) => (
  <button
    onClick={() => {
      dispatch(
        actionCreators.addTransaction({
          description: `New transaction: ${Date.now()}`
        })
      );
    }}
  >
    Add transaction
  </button>
);

AddTransaction = connect()(AddTransaction);

export default AddTransaction;