import React from 'react';
import {useActions} from 'src/features/structure';
import {Button} from 'react-bootstrap';

export const FullRewind = () => {
  const {focusInitialNode} = useActions();
  return (
    <Button variant="success" onClick={focusInitialNode} size="lg">
      Full Rewind
    </Button>
  );
};
