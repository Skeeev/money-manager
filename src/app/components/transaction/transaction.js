import React from 'react';
import injectSheet from 'react-jss';
import moment from 'moment';

import styles from './styles';

const Transaction = ({
  classes,
  data: {
    category,
    date,
    description,
    amount
  },
  transactionsCurrency,
  onTransactionEditIconClick,
  onTransactionRemoveIconClick
}) => (
  <li className={ classes.transactionsSectionListItem }>
    <div className={ classes.transactionsSectionItemCategory }>
      { category.label }
    </div>
    <time className={ classes.transactionsSectionItemDate }>
      { moment(date).format('ll') }
    </time>
    <div className={ classes.transactionsSectionItemDescription }>
      { description }
    </div>
    <div className={ classes.transactionsSectionItemAmount }>
      { `${transactionsCurrency} ${amount}` }
    </div>
    <ul className={ classes.transactionsListItemControls }>
      <li className={ classes.transactionsListItemControl }>
        <i
          className={ `${classes.transactionsListControlIcon} icon-pencil` }
          onClick={ onTransactionEditIconClick }
        >
        </i>
      </li>
      <li className={ classes.transactionsListItemControl }>
        <i
          className={ `${classes.transactionsListControlIcon} icon-bin` }
          onClick={ onTransactionRemoveIconClick }
        >
        </i>
      </li>
    </ul>
  </li>
);

export default injectSheet(styles)(Transaction);