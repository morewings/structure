import {useModalActions} from 'src/features/modal';
import modalTypes from './modalTypes';

const useDeleteNodeModal = () => {
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

export default useDeleteNodeModal;
