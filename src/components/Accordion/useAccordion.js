import {useCallback, useEffect} from 'react';
import {useAccordionActions, useAccordionState} from 'src/features/accordion';

export const useAccordion = id => {
  const accordionState = useAccordionState(id);
  const activeNode = accordionState ? accordionState.openNode : null;
  const {registerAccordion, toggleAccordion} = useAccordionActions();
  const toggleNode = useCallback(
    node => {
      if (activeNode === node) {
        toggleAccordion(id, null);
      } else {
        toggleAccordion(id, node);
      }
    },
    [activeNode, toggleAccordion, id]
  );

  useEffect(() => {
    !accordionState && registerAccordion(id);
  }, [id, registerAccordion, accordionState]);

  return {
    activeNode,
    toggleNode,
  };
};
