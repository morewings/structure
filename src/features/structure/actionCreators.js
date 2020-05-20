import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import getUniqueId from 'src/utils/getUniqueId';
import {
  ADD_NODE,
  EDIT_NODE,
  FOCUS_NODE,
  TOGGLE_COMPLETION,
  REPLACE_STRUCTURE,
  RESET_STRUCTURE,
} from './actionTypes';

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
    ({id, description, title, isDone, color}) => {
      dispatch({
        type: EDIT_NODE,
        payload: {
          id,
          description,
          title,
          isDone,
          color,
        },
      });
    },
    [dispatch]
  );
  const toggleNodeStatus = useCallback(
    ({id, isDone}) => {
      dispatch({
        type: TOGGLE_COMPLETION,
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
  const focusInitialNode = useCallback(
    id => {
      dispatch({
        type: FOCUS_NODE,
        payload: 'node_initial',
      });
    },
    [dispatch]
  );
  const replaceStructure = useCallback(
    structure => {
      dispatch({
        type: REPLACE_STRUCTURE,
        payload: structure,
      });
    },
    [dispatch]
  );
  const resetStructure = useCallback(() => {
    dispatch({
      type: RESET_STRUCTURE,
    });
  }, [dispatch]);
  return {
    addNode,
    focusNode,
    editNode,
    toggleNodeStatus,
    replaceStructure,
    resetStructure,
    focusInitialNode
  };
};

export default useActions;
