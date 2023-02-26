import {useModalActions} from '@/features/modal';
import {modalTypes} from '@/components/ModalManager';

export const useEditNodeModal = () => {
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
