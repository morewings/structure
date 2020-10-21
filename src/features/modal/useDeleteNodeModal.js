import useModalActions from './actionCreators';
import {CONFIRMATION_DELETE} from './modalTypes';

const useDeleteNodeModal = () => {
  const {openModal} = useModalActions();
  return id => {
    openModal({
      modalType: CONFIRMATION_DELETE,
      modalProps: {
        id,
      },
    });
  };
};

export default useDeleteNodeModal;
