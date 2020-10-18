import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {MODAL_CLOSE} from './actionTypes';

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
  return {closeModal};
};

export default useModalActions;
