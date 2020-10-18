import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import {
  useModalState,
  useModalActions,
  useOpenModalId,
} from 'src/features/modal';
import Confirmation from 'src/components/Confirmation';

const ModalManager = () => {
  const modalState = useModalState();
  const openModalId = useOpenModalId();
  const {modalType, modalProps} = openModalId
    ? modalState.modals[openModalId]
    : {};
  const ModalComponent = openModalId
    ? {CONFIRMATION: Confirmation}[modalType]
    : Fragment;

  const {closeModal} = useModalActions();

  const handleClose = () => {
    closeModal(openModalId);
  };

  return (
    <Modal onRequestClose={handleClose} isOpen={!!openModalId}>
      <ModalComponent {...modalProps} onCloseModal={handleClose} />
    </Modal>
  );
};

export default ModalManager;
