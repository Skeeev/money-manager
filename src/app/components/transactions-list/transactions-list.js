import React from 'react';
import injectSheet from 'react-jss';

import styles from './styles';

const TransactionsList = ({
  classes
}) => (
  <div className={ classes.transactionsSection }>
    <ul className={ classes.transactionsSectionList }>
      <li className={ classes.transactionsSectionListItem }>
        <div className={ classes.transactionsSectionItemCategory }>Shopping</div>
        <time className={ classes.transactionsSectionItemDate }>28 July, 2018</time>
        <div className={ classes.transactionsSectionItemDescription }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda autem cum deserunt ea eaque harum magnam maxime minima modi molestiae molestias nam officia, officiis omnis quae quam quasi quisquam rem sequi soluta sunt veritatis voluptatem? Ducimus eaque non quod ratione unde. Dolor ipsa magni odit vel voluptatem. Harum, iusto.</div>
        <ul className={ classes.transactionsListItemControls }>
          <li className={ classes.transactionsListItemControl }>
            <i className={ `${classes.transactionsListControlIcon} icon-pencil` }></i>
          </li>
          <li className={ classes.transactionsListItemControl }>
            <i className={ `${classes.transactionsListControlIcon} icon-bin` }></i>
          </li>
        </ul>
      </li>
      <li className={ classes.transactionsSectionListItem }>
        <div className={ classes.transactionsSectionItemCategory }>Shopping</div>
        <time className={ classes.transactionsSectionItemDate }>28 July, 2018</time>
        <div className={ classes.transactionsSectionItemDescription }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda autem cum deserunt ea eaque harum magnam maxime minima modi molestiae molestias nam officia, officiis omnis quae quam quasi quisquam rem sequi soluta sunt veritatis voluptatem? Ducimus eaque non quod ratione unde. Dolor ipsa magni odit vel voluptatem. Harum, iusto.</div>
        <ul className={ classes.transactionsListItemControls }>
          <li className={ classes.transactionsListItemControl }>
            <i className={ `${classes.transactionsListControlIcon} icon-pencil` }></i>
          </li>
          <li className={ classes.transactionsListItemControl }>
            <i className={ `${classes.transactionsListControlIcon} icon-bin` }></i>
          </li>
        </ul>
      </li>
      <li className={ classes.transactionsSectionListItem }>
        <div className={ classes.transactionsSectionItemCategory }>Shopping</div>
        <time className={ classes.transactionsSectionItemDate }>28 July, 2018</time>
        <div className={ classes.transactionsSectionItemDescription }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda autem cum deserunt ea eaque harum magnam maxime minima modi molestiae molestias nam officia, officiis omnis quae quam quasi quisquam rem sequi soluta sunt veritatis voluptatem? Ducimus eaque non quod ratione unde. Dolor ipsa magni odit vel voluptatem. Harum, iusto.</div>
        <ul className={ classes.transactionsListItemControls }>
          <li className={ classes.transactionsListItemControl }>
            <i className={ `${classes.transactionsListControlIcon} icon-pencil` }></i>
          </li>
          <li className={ classes.transactionsListItemControl }>
            <i className={ `${classes.transactionsListControlIcon} icon-bin` }></i>
          </li>
        </ul>
      </li>
      <li className={ classes.transactionsSectionListItem }>
        <div className={ classes.transactionsSectionItemCategory }>Shopping</div>
        <time className={ classes.transactionsSectionItemDate }>28 July, 2018</time>
        <div className={ classes.transactionsSectionItemDescription }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda autem cum deserunt ea eaque harum magnam maxime minima modi molestiae molestias nam officia, officiis omnis quae quam quasi quisquam rem sequi soluta sunt veritatis voluptatem? Ducimus eaque non quod ratione unde. Dolor ipsa magni odit vel voluptatem. Harum, iusto.</div>
        <ul className={ classes.transactionsListItemControls }>
          <li className={ classes.transactionsListItemControl }>
            <i className={ `${classes.transactionsListControlIcon} icon-pencil` }></i>
          </li>
          <li className={ classes.transactionsListItemControl }>
            <i className={ `${classes.transactionsListControlIcon} icon-bin` }></i>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default injectSheet(styles)(TransactionsList);