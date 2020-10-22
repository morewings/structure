import {CONFIRMATION_DELETE, NODE_EDIT} from 'src/features/modal';
import ConfirmationDelete from 'src/components/ConfirmationDelete';
import EditNode from 'src/components/EditNode';

const useModalComponent = modalType =>
  ({
    [CONFIRMATION_DELETE]: ConfirmationDelete,
    [NODE_EDIT]: EditNode,
  }[modalType]);

export default useModalComponent;
