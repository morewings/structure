import {useModalActions} from '@/features/modal';

import modalTypes from './modalTypes';

const useEditNodeModal = () => {
  const {openModal} = useModalActions();
  return id => {
    openModal({
      modalType: modalTypes.NODE_EDIT,
      modalProps: {
        id,
      },
    });
  };
};

export default useEditNodeModal;
