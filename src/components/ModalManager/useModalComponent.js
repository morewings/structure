import ConfirmationDeleteNode from 'src/components/ConfirmationDeleteNode';
import ConfirmationDeleteStructure from 'src/components/ConfirmationDeleteStructure';
import EditNode from 'src/components/EditNode';
import CreateNode from 'src/components/CreateNode';
import modalTypes from './modalTypes';

const useModalComponent = modalType =>
  ({
    [modalTypes.CONFIRMATION_DELETE_NODE]: ConfirmationDeleteNode,
    [modalTypes.CONFIRMATION_DELETE_STRUCTURE]: ConfirmationDeleteStructure,
    [modalTypes.NODE_EDIT]: EditNode,
    [modalTypes.NODE_CREATE]: CreateNode,
  }[modalType]);

export default useModalComponent;
