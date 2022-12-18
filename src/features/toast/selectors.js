import {useSelector} from 'react-redux';

export const useVisibleToasts = () => useSelector(state => state.toast.visible);
