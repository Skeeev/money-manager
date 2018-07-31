import React from 'react';
import ReactModal from 'react-modal';
import injectSheet from 'react-jss';

import Button from '../button';

import styles from './styles';

const TransactionModal = ({
  classes,
  isOpen,
  onClose,
  withSubmit,
  submitButtonText,
  title,
  children
}) => (
  <ReactModal
    isOpen={ isOpen }
    onRequestClose={ onClose }
    contentLabel='Add transition modal'
    className={ {
      base: classes.modalDialog,
      afterOpen: classes.modalDialogOpen,
      beforeClose: ''
    } }
    overlayClassName={ {
      base: classes.modalOverlay,
      afterOpen: classes.modalOverlayOpen,
      beforeClose: ''
    } }
  >
    <div className={ classes.modalContent }>
      <div className={ classes.modalBody }>
        <h2 className={ classes.modalTitle }>{ title }</h2>
        { children }
      </div>
      <div className={ classes.modalControls }>
        <i
          className={ `${classes.modalCloseButton} icon-close` }
          onClick={ onClose }
        />
        {
          withSubmit ?
            <Button
              type="button"
              className={ classes.modalSubmitButton }
            >
              { submitButtonText }
            </Button> :
            null
        }
      </div>
    </div>
  </ReactModal>
);

ReactModal.setAppElement('body');

export default injectSheet(styles)(TransactionModal);