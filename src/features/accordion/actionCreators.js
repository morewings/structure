import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {
  ACCORDION_REGISTER,
  ACCORDION_TOGGLE,
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
  return {registerAccordion, toggleAccordion};
};

export default useAccordionActions;
