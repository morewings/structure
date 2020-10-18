import React from 'react';
import Modal from 'react-modal';

// eslint-disable-next-line react/prop-types
const withModal = Component => ({handleClose, isOpen, ...componentProps}) => (
  <Modal onRequestClose={handleClose} isOpen={isOpen}>
    <Component {...componentProps} />
  </Modal>
);

export default withModal;
