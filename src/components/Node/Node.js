/*eslint-disable*/
import React from 'react';
import {Checkbox} from 'react-materialize';
import classes from './Node.module.css';

const Node = () => {
  return (
    <div className={classes.node}>
      <Checkbox value={false} />
      Node
    </div>
  )
};

export default Node;