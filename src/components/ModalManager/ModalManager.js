import React, {Fragment} from 'react';
import {useOpenModals} from 'src/features/modal';
import ModalWrapper from './ModalWrapper';

const ModalManager = () => {
  const openModals = useOpenModals();
  return (
    <Fragment>
      {openModals.map((modalId, i) => (
        <ModalWrapper
          id={modalId}
          key={modalId}
          isOpen={i === openModals.length - 1}
        />
      ))}
    </Fragment>
  );
};

export default ModalManager;
