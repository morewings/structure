import {useModalActions} from 'src/features/modal';
import {NODE_EDIT} from './modalTypes';

const useEditNodeModal = () => {
  const {openModal} = useModalActions();
  return id => {
    openModal({
      modalType: NODE_EDIT,
      modalProps: {
        id,
      },
    });
  };
};

export default useEditNodeModal;
