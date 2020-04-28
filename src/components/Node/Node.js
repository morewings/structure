/*eslint-disable*/
import React from 'react';
import classes from './Node.module.css';

const Node = () => {
  return (
    <div className={classes.node}>
      <label>
        <input type="checkbox" />
        <span>Node</span>
      </label>
    </div>
  )
};

export default Node;