import React from 'react';
import PropTypes from 'prop-types';
import ModalGeneric from 'react-modal';
import {ROOT_ID} from 'css-vars-hook';

import {useModalActions, useModalInfo} from '@/features/modal';

import useModalComponent from './useModalComponent';
import classes from './Modal.module.css';

export const Modal = ({id, isOpen}) => {
  const {closeModal} = useModalActions();

  const handleClose = () => {
    closeModal(id);
  };

  const {modalType, modalProps} = useModalInfo(id);

  const ModalComponent = useModalComponent(modalType);

  return (
    <ModalGeneric
      // TODO: use appElement prop later for accessibility
      ariaHideApp={false}
      onRequestClose={handleClose}
      className={classes.modal}
      overlayClassName={classes.overlay}
      parentSelector={() => document.querySelector(`#${ROOT_ID}`)}
      isOpen={isOpen}>
      <ModalComponent {...modalProps} onCloseModal={handleClose} />
    </ModalGeneric>
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
