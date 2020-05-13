import React from 'react';
import {useSelector} from 'react-redux';
import {saveAs} from 'file-saver';
import {Button} from 'react-bootstrap';
import createBlobFromString from 'src/utils/createBlobFromString';

export const Save = () => {
  const structure = useSelector(state => state.structure);
  const handleSave = () => {
    const state = JSON.stringify(structure, null, 2);
    saveAs(createBlobFromString(state), 'structure.json');
  };
  return (
    <Button onClick={handleSave} size="lg">
      Save
    </Button>
  );
};