import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import getUniqueId from 'src/utils/getUniqueId';
import {ADD_NODE, EDIT_NODE, FOCUS_NODE} from './actionTypes';

const useActions = () => {
  const dispatch = useDispatch();
  const addNode = useCallback(
    ({parentId, description, title, isDone}) => {
      const id = getUniqueId();
      dispatch({
        type: ADD_NODE,
        payload: {
          parentId,
          id,
          description,
          title,
          isDone,
        },
      });
    },
    [dispatch]
  );
  const editNode = useCallback(
    ({id, description, title, isDone}) => {
      dispatch({
        type: EDIT_NODE,
        payload: {
          id,
          description,
          title,
          isDone,
        },
      });
    },
    [dispatch]
  );
  const toggleNodeStatus = useCallback(
    ({id, isDone}) => {
      dispatch({
        type: EDIT_NODE,
        payload: {
          id,
          isDone,
        },
      });
    },
    [dispatch]
  );
  const focusNode = useCallback(
    id => {
      dispatch({
        type: FOCUS_NODE,
        payload: id,
      });
    },
    [dispatch]
  );
  return {addNode, focusNode, editNode, toggleNodeStatus};
};

export default useActions;
