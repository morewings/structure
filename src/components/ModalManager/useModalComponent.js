import ConfirmationDeleteNode from '@/components/ConfirmationDeleteNode';
import ConfirmationDeleteStructure from '@/components/ConfirmationDeleteStructure';
import EditNode from '@/components/EditNode';
import CreateNode from '@/components/CreateNode';

import modalTypes from './modalTypes';

const useModalComponent = modalType =>
  ({
    [modalTypes.CONFIRMATION_DELETE_NODE]: ConfirmationDeleteNode,
    [modalTypes.CONFIRMATION_DELETE_STRUCTURE]: ConfirmationDeleteStructure,
    [modalTypes.NODE_EDIT]: EditNode,
    [modalTypes.NODE_CREATE]: CreateNode,
  }[modalType]);

export default useModalComponent;
