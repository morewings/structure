import React from 'react';
import PropTypes from 'prop-types';
import {useNodeColorValues} from 'src/utils/nodeColors';
import {Checkbox} from 'src/ui/Checkbox';
import {Textarea} from 'src/ui/Textarea';
import {ColorInput} from 'src/ui/ColorInput';
import classes from './NodeFieldset.module.css';

const NodeFieldset = ({
  color,
  setColor,
  isDone,
  setIsDone,
  title,
  setTitle,
  description,
  setDescription,
}) => {
  const colorValue = useNodeColorValues(color);

  return (
    <div>
      <fieldset className={classes.fieldSet}>
        <h3 className={classes.fieldLabel}>Title</h3>
        <div className={classes.titleInputs}>
          <Checkbox
            color={colorValue}
            checked={isDone}
            onChange={setIsDone}
            className={classes.checkbox}
          />
          <Textarea value={title} onChange={setTitle} />
        </div>
      </fieldset>
      <fieldset className={classes.fieldSet}>
        <h3 className={classes.fieldLabel}>Color</h3>
        <div className={classes.colorInput}>
          <ColorInput value={color} onchange={setColor} />
        </div>
      </fieldset>
      <fieldset className={classes.fieldSet}>
        <h3 className={classes.fieldLabel}>Description</h3>
        <div className={classes.descriptionInput}>
          <Textarea
            value={description}
            onChange={setDescription}
            className={classes.textarea}
          />
        </div>
      </fieldset>
    </div>
  );
};

NodeFieldset.propTypes = {
  color: PropTypes.oneOf([
    'red',
    'orange',
    'green',
    'turquoise',
    'blue',
    'violet',
    'gray',
  ]).isRequired,
  setColor: PropTypes.func.isRequired,
  isDone: PropTypes.bool.isRequired,
  setIsDone: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
};

export default NodeFieldset;
