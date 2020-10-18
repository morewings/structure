import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import {useModalActions, useModalInfo} from 'src/features/modal';
import useModalComponent from './useModalComponent';
import classes from './ModalWrapper.module.css';

const ModalWrapper = ({id, isOpen}) => {
  const {closeModal} = useModalActions();

  const handleClose = () => {
    closeModal(id);
  };

  const {modalType, modalProps} = useModalInfo(id);

  const ModalComponent = useModalComponent(modalType);

  return (
    <Modal
      // TODO: use appElement prop later for accessibility
      ariaHideApp={false}
      onRequestClose={handleClose}
      className={classes.modal}
      overlayClassName={classes.overlay}
      isOpen={isOpen}>
      <ModalComponent {...modalProps} onCloseModal={handleClose} />
    </Modal>
  );
};

ModalWrapper.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default ModalWrapper;
