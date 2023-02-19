import ConfirmationDeleteNode from '@/components/ConfirmationDeleteNode';
import ConfirmationDeleteStructure from '@/components/ConfirmationDeleteStructure';
import EditNode from '@/components/EditNode';
import {CreateNodeModal} from '@/components/CreateNodeModal';

import modalTypes from './modalTypes';

const useModalComponent = modalType =>
  ({
    [modalTypes.CONFIRMATION_DELETE_NODE]: ConfirmationDeleteNode,
    [modalTypes.CONFIRMATION_DELETE_STRUCTURE]: ConfirmationDeleteStructure,
    [modalTypes.NODE_EDIT]: EditNode,
    [modalTypes.NODE_CREATE]: CreateNodeModal,
  }[modalType]);

export default useModalComponent;
