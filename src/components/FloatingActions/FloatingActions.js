import React from 'react';
import {Button} from 'react-bootstrap';
import classes from './FloatingActions.module.css';

const FloatingActions = () => (
  <div className={classes.wrapper}>
    <div className={classes.buttonContainer}>
      <Button size="lg">Save</Button>
    </div>
    <div className={classes.buttonContainer}>
      <Button size="lg">Load</Button>
    </div>
    <div className={classes.buttonContainer}>
      <Button size="lg">Clean</Button>
    </div>
  </div>
);

export default FloatingActions;
