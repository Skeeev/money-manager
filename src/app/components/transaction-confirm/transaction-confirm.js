import React from 'react';
import ReactModal from 'react-modal';
import injectSheet from 'react-jss';

import Button from '../button';

import styles from './styles';

const TransactionConfirm = ({
  classes,
  text,
  isOpen,
  onSubmit,
  onClose
}) => (
  <ReactModal
    isOpen={ isOpen }
    onRequestClose={ onClose }
    contentLabel='Remove transition confirm'
    className={ {
      base: classes.confirmDialog,
      afterOpen: classes.confirmDialogOpen,
      beforeClose: ''
    } }
    overlayClassName={ {
      base: classes.confirmOverlay,
      afterOpen: classes.confirmOverlayOpen,
      beforeClose: ''
    } }
  >
    { text }
    <div className={ classes.confirmButtons }>
      <Button
        type="button"
        className={ classes.confirmButton }
        onClick={ onSubmit }
      >
        Yes
      </Button>
      <Button
        type="button"
        className={ classes.confirmButton }
        onClick={ onClose }
      >
        No
      </Button>
    </div>
  </ReactModal>
);

export default injectSheet(styles)(TransactionConfirm);