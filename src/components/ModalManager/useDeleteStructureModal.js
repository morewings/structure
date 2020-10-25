import {useModalActions} from 'src/features/modal';
import modalTypes from './modalTypes';

const useDeleteStructureModal = () => {
  const {openModal} = useModalActions();
  return () => {
    openModal({
      modalType: modalTypes.CONFIRMATION_DELETE_STRUCTURE,
      modalProps: {},
    });
  };
};

export default useDeleteStructureModal;
