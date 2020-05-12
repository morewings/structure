import React from 'react';
import {Button, FormFile} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {saveAs} from 'file-saver';
import {useActions} from 'src/features/structure';
import createBlobFromString from 'src/utils/createBlobFromString';
import {UploadButton} from 'src/components/UploadButton';
import classes from './FloatingActions.module.css';

const FloatingActions = () => {
  const structure = useSelector(state => state.structure);
  const {resetStructure} = useActions();
  const handleSave = () => {
    const state = JSON.stringify(structure, null, 2);
    saveAs(createBlobFromString(state), 'structure.json');
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.buttonContainer}>
        <Button onClick={handleSave} size="lg">
          Save
        </Button>
      </div>
      <div className={classes.buttonContainer}>
        <UploadButton size="lg" />
      </div>
      <div className={classes.buttonContainer}>
        <Button onClick={resetStructure} size="lg">
          Clean
        </Button>
      </div>
    </div>
  );
};

export default FloatingActions;
