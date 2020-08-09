/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import classes from './Column.module.css';
import {Button} from 'src/ui/Button';
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
        {role === 'siblings' && (<div className={classes.focus}>
          <Button text="Focus active" icon="focus" onClick={() => {console.log('trying to focus')}} />
        </div>)}
        <div className={classes.add}>
          <Button text="Add node" icon="add-node" onClick={onAddNode} />
        </div>
      </footer>
    </div>
  )
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
  role: PropTypes.oneOf(['parent', 'siblings', 'children']).isRequired,
  onAddNode: PropTypes.func.isRequired
}