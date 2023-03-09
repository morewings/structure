import {useModalActions} from '@/features/modal';
import {modalTypes} from '@/components/ModalManager';

export const useDeleteStructureModal = () => {
  const {openModal} = useModalActions();
  return () => {
    openModal({
      modalType: modalTypes.CONFIRMATION_DELETE_STRUCTURE,
      modalProps: {},
    });
  };
};
