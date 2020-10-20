import React from 'react';
import {useFocusedParentId, useStructureActions} from 'src/features/structure';
import {Button} from 'react-bootstrap';

export const StepRewind = () => {
  const parentId = useFocusedParentId();
  const {focusNode} = useStructureActions();
  return (
    <Button
      variant="success"
      onClick={() => {
        focusNode(parentId);
      }}
      size="lg">
      Step Rewind
    </Button>
  );
};
