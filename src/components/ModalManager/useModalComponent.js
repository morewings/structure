import ConfirmationDelete from 'src/components/ConfirmationDelete';
import EditNode from 'src/components/EditNode';
import modalTypes from './modalTypes';

const useModalComponent = modalType =>
  ({
    [modalTypes.CONFIRMATION_DELETE]: ConfirmationDelete,
    [modalTypes.NODE_EDIT]: EditNode,
  }[modalType]);

export default useModalComponent;
