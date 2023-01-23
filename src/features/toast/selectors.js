import {useSelector} from 'react-redux';
import {pathOr} from 'ramda';

export const useVisibleToasts = () => useSelector(state => state.toast.visible);

export const useToastInfo = id => useSelector(state => pathOr({}, ['toast', 'toasts', id], state));
