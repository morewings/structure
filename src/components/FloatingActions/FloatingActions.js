import React from 'react';
import {Save, Clean, Upload} from 'src/components/StateManipulation';
import {FullRewind, StepRewind} from 'src/components/Navigation';
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
    <div className={classes.buttonContainer}>
      <FullRewind />
    </div>
    <div className={classes.buttonContainer}>
      <StepRewind />
    </div>
  </div>
);

export default FloatingActions;
