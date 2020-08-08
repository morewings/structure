/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import classes from './Column.module.css';
import {Button} from 'react-bootstrap';
import {Icon} from 'src/ui/Icon';

export const Column = ({children, role, onAddNode}) => {
  console.log('role', role)
  return(
    <div className={classes.column}>
      <header>
        <Icon className={classes.icon} name={role} />
        <div className={classes.text}>{role}</div>
        {/*<div>{columnData.title || columnData.id}</div>*/}
      </header>
      {children}
      <footer>
        <div className={classes.add}>
          <Button onClick={onAddNode}>Add node</Button>
        </div>
      </footer>
    </div>
  )
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
  role: PropTypes.string.isRequired,
  onAddNode: PropTypes.func.isRequired
}