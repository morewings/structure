import React from 'react';
import {Save, Clean, Upload} from 'src/components/StateManipulation';
import classes from './FloatingActions.module.css';

const FloatingActions = () => (
  <div className={classes.wrapper}>
    <div className={classes.buttonContainer}>
      <Save />
    </div>
    <div className={classes.buttonContainer}>
      <Upload />
    </div>
    <div className={classes.buttonContainer}>
      <Clean />
    </div>
  </div>
);

export default FloatingActions;
