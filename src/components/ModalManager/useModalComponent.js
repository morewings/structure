import ConfirmationDeleteNode from '@/components/Modals/ConfirmationDeleteNode';
import ConfirmationDeleteStructure from '@/components/Modals/ConfirmationDeleteStructure';
import EditNode from '@/components/Modals/EditNode';
import {CreateNodeModal} from '@/components/Modals/CreateNodeModal';

import modalTypes from './modalTypes';

const useModalComponent = modalType =>
  ({
    [modalTypes.CONFIRMATION_DELETE_NODE]: ConfirmationDeleteNode,
    [modalTypes.CONFIRMATION_DELETE_STRUCTURE]: ConfirmationDeleteStructure,
    [modalTypes.NODE_EDIT]: EditNode,
    [modalTypes.NODE_CREATE]: CreateNodeModal,
  }[modalType]);

export default useModalComponent;
