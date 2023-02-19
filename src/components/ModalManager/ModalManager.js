import React from 'react';

import {useOpenModals} from '@/features/modal';

import {Modal} from './Modal';

const ModalManager = () => {
  const openModals = useOpenModals();
  return openModals.map((modalId, i) => (
    <Modal id={modalId} key={modalId} isOpen={i === openModals.length - 1} />
  ));
};

export default ModalManager;
