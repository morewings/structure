import {useSelector} from 'react-redux';

export const useModalState = () => useSelector(state => state.modal);

export const useOpenModalId = () => useSelector(state => state.modal.open[0]);

export const useModalInfo = id =>
  useSelector(state => state.modal.modals[id]);
