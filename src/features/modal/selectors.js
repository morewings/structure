import {useSelector} from 'react-redux';
import {pathOr} from 'ramda';

export const useOpenModalId = () =>
  useSelector(state => state.modal.open[state.modal.open.length - 1]);

export const useOpenModals = () => useSelector(state => state.modal.open);

export const useModalInfo = id =>
  useSelector(state => pathOr({}, ['modal', 'modals', id], state));
