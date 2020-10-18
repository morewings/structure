import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import {
  useModalActions,
  useOpenModalId,
  useModalInfo,
} from 'src/features/modal';
import Confirmation from 'src/components/Confirmation';

const ModalManager = () => {
  const openModalId = useOpenModalId();
  const {modalType, modalProps} = useModalInfo(openModalId);
  const ModalComponent = openModalId
    ? {CONFIRMATION: Confirmation}[modalType]
    : Fragment;

  const {closeModal} = useModalActions();

  const handleClose = () => {
    closeModal(openModalId);
  };

  return openModalId ? (
    <Modal
      // TODO: use appElement prop later for accessibility
      ariaHideApp={false}
      onRequestClose={handleClose}
      isOpen={!!openModalId}>
      <ModalComponent {...modalProps} onCloseModal={handleClose} />
    </Modal>
  ) : null;
};

export default ModalManager;
