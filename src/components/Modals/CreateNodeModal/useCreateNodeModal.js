import {useModalActions} from '@/features/modal';
import {modalTypes} from '@/components/ModalManager';

export const useCreateNodeModal = () => {
  const {openModal} = useModalActions();
  return parentId => {
    openModal({
      modalType: modalTypes.NODE_CREATE,
      modalProps: {
        parentId,
      },
    });
  };
};
