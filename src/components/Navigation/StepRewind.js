import React from 'react';
import {useFocusedParentId, useActions} from 'src/features/structure';
import {Button} from 'react-bootstrap';

export const StepRewind = () => {
  const parentId = useFocusedParentId();
  const {focusNode} = useActions();
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
