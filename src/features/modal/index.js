export {default as ModalReducer} from './reducer';
export {useOpenModalId, useModalInfo, useOpenModals} from './selectors';
export {default as useModalActions} from './actionCreators';
// TODO: fix problem with `export {* as modalTypes} from './modalTypes';`
export {CONFIRMATION_DELETE, NODE_EDIT} from './modalTypes';
export {default as useDeleteNodeModal} from './useDeleteNodeModal';
export {default as useEditNodeModal} from './useEditNodeModal';
