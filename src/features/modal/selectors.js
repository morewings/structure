import {useSelector} from 'react-redux';
import {pathOr} from 'ramda';

export const useOpenModalId = () => useSelector(state => state.modal.open[0]);

export const useModalInfo = id =>
  useSelector(state => pathOr({}, ['modal', 'modals', id], state));
