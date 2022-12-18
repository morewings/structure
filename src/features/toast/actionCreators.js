import {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import getUniqueId from '@/utils/getUniqueId';

import {TOAST_HIDE, TOAST_SHOW} from './actionTypes';

const useToastActions = () => {
  const dispatch = useDispatch();

  const closeToast = useCallback(
    id => {
      dispatch({
        type: TOAST_HIDE,
        id,
      });
    },
    [dispatch]
  );

  const openToast = useCallback(
    ({toastProps, toastType}) => {
      const id = getUniqueId({prefix: 'toast'});
      dispatch({
        type: TOAST_SHOW,
        toastProps,
        toastType,
        id,
      });
    },
    [dispatch]
  );

  return {closeToast, openToast};
};

export default useToastActions;
