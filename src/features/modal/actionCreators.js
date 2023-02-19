import {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {getUniqueId} from '@/utils/getUniqueId';

import {MODAL_CLOSE, MODAL_OPEN} from './actionTypes';

const useModalActions = () => {
  const dispatch = useDispatch();

  const closeModal = useCallback(
    id => {
      dispatch({
        type: MODAL_CLOSE,
        id,
      });
    },
    [dispatch]
  );

  const openModal = useCallback(
    ({modalProps, modalType}) => {
      const id = getUniqueId({prefix: 'modal'});
      dispatch({
        type: MODAL_OPEN,
        modalProps,
        modalType,
        id,
      });
    },
    [dispatch]
  );

  return {closeModal, openModal};
};

export default useModalActions;
