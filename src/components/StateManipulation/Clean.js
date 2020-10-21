import React from 'react';
import {useStructureActions} from 'src/features/structure';
import {Button} from 'react-bootstrap';

export const Clean = () => {
  const {resetStructure} = useStructureActions();
  return (
    <Button onClick={resetStructure} size="lg">
      Clean
    </Button>
  );
};
