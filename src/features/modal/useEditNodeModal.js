import useModalActions from './actionCreators';
import {NODE_EDIT} from './modalTypes';

const useDeleteNodeModal = () => {
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

export default useDeleteNodeModal;
