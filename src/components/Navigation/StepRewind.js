import React from 'react';
import {Button} from 'react-bootstrap';

import {useFocusedParentId, useStructureActions} from '@/features/structure';

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
