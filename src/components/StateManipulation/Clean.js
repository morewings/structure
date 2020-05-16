import React from 'react';
import {useActions} from 'src/features/structure';
import {Button} from 'react-bootstrap';

export const Clean = () => {
  const {resetStructure} = useActions();
  return (
    <Button onClick={resetStructure} size="lg">
      Clean
    </Button>
  );
};
