import React from 'react';
import {ButtonBig} from "src/ui/ButtonBig";
import classes from './FloatingActions.module.css';

const FloatingActions = () => {
  return (
    <div className={classes.floatingActions}>
      <ButtonBig title="Focus parent" className={classes.button} icon="rewind" />
      <ButtonBig title="Focus initial node" className={classes.button} icon="full_rewind" />
      <div className={classes.divider} />
      <ButtonBig title="Upload structure json file" type="confirm" className={classes.button} icon="upload" />
      <ButtonBig title="Download structure json file" type="confirm" className={classes.button} icon="download" />
      <ButtonBig title="Delete structure tree" type="danger" className={classes.button} icon="delete_forever" />
    </div>
  )
}

export default FloatingActions;
