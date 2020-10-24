import ConfirmationDelete from 'src/components/ConfirmationDelete';
import EditNode from 'src/components/EditNode';
import CreateNode from 'src/components/CreateNode';
import modalTypes from './modalTypes';

const useModalComponent = modalType =>
  ({
    [modalTypes.CONFIRMATION_DELETE]: ConfirmationDelete,
    [modalTypes.NODE_EDIT]: EditNode,
    [modalTypes.NODE_CREATE]: CreateNode,
  }[modalType]);

export default useModalComponent;
