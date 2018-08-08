import React from 'react';
import injectSheet from 'react-jss';

import styles from './styles';

const TransactionsInfo = ({
  classes,
  transactionsInfoTitle,
  transactionsTotalAmount,
  transactionsCurrency
}) => (
  <section className={ classes.transactionsInfo }>
    <h3>
      { transactionsInfoTitle }
    </h3>
    <div className={ classes.transactionsInfoAmount }>
      { `${transactionsTotalAmount} ${transactionsCurrency}` }
    </div>
  </section>
);

export default injectSheet(styles)(TransactionsInfo);