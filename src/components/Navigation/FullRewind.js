import React from 'react';
import {Button} from 'react-bootstrap';

import {useStructureActions} from '@/features/structure';

export const FullRewind = () => {
  const {focusInitialNode} = useStructureActions();
  return (
    <Button variant="success" onClick={focusInitialNode} size="lg">
      Full Rewind
    </Button>
  );
};
