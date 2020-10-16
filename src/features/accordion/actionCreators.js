import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {
  ACCORDION_REGISTER,
  ACCORDION_TOGGLE,
  ACCORDION_DELETE,
} from 'src/features/accordion/actionTypes';

const useAccordionActions = () => {
  const dispatch = useDispatch();
  const registerAccordion = useCallback(
    id => {
      dispatch({
        type: ACCORDION_REGISTER,
        id,
      });
    },
    [dispatch]
  );

  const toggleAccordion = useCallback(
    (id, openNode) => {
      dispatch({
        type: ACCORDION_TOGGLE,
        id,
        openNode,
      });
    },
    [dispatch]
  );

  const deleteAccordion = useCallback(
    id => {
      dispatch({
        type: ACCORDION_DELETE,
        id,
      });
    },
    [dispatch]
  );

  return {registerAccordion, toggleAccordion, deleteAccordion};
};

export default useAccordionActions;
