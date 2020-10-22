/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'src/ui/Checkbox'
import classes from './EditNode.module.css';

const EditNode = ({id}) => {
  return (
    <div className={classes.editNode}>
      <header className={classes.header}><h2>Edit node</h2> {id && <small>{id}</small>}</header>
      <form>
        <fieldset>
          <h3>Title</h3>
          <Checkbox />
        </fieldset>
      </form>
    </div>
  )
}

EditNode.propTypes = {
  id: PropTypes.string
}

EditNode.defaultProps = {
  id: ''
}

export default EditNode;
