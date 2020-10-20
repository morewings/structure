import React from 'react';
import {useStructureActions} from 'src/features/structure';
import {Button} from 'react-bootstrap';

export const FullRewind = () => {
  const {focusInitialNode} = useStructureActions();
  return (
    <Button variant="success" onClick={focusInitialNode} size="lg">
      Full Rewind
    </Button>
  );
};
