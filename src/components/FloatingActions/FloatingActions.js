import React from 'react';
import {Save, Clean, Upload} from './StateManipulation';
import classes from './FloatingActions.module.css';

const FloatingActions = () => {
  const handleUpload = files => {
    console.log('files', files)
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.buttonContainer}>
        <Save />
      </div>
      <div className={classes.buttonContainer}>
        <Upload onFileUpload={handleUpload} size="lg" />
      </div>
      <div className={classes.buttonContainer}>
        <Clean />
      </div>
    </div>
  );
};

export default FloatingActions;
