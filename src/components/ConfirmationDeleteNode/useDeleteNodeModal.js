import {useModalActions} from '@/features/modal';
import {modalTypes} from '@/components/ModalManager';

export const useDeleteNodeModal = () => {
  const {openModal} = useModalActions();
  return id => {
    openModal({
      modalType: modalTypes.CONFIRMATION_DELETE_NODE,
      modalProps: {
        id,
      },
    });
  };
};
