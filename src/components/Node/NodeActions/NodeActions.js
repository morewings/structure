import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'src/ui/Button';
import classes from './NodeActions.module.css';

const NodeActions = ({deleteNode}) => (
  <div className={classes.actions}>
    <Button
      className={classes.iconButton}
      icon="drag_handle"
      onClick={() => {
        console.log('drag');
      }}
    />
    <Button
      className={classes.iconButton}
      icon="delete"
      onClick={() => {
        deleteNode();
      }}
    />
  </div>
);

NodeActions.propTypes = {
  deleteNode: PropTypes.func.isRequired,
};

export default NodeActions;
