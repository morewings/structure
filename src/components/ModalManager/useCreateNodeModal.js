import {useModalActions} from 'src/features/modal';
import modalTypes from './modalTypes';

const useCreateNodeModal = () => {
  const {openModal} = useModalActions();
  return parentId => {
    openModal({
      modalType: modalTypes.NODE_CREATE,
      modalProps: {
        parentId,
      }
    });
  };
};

export default useCreateNodeModal;
