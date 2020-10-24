import React from 'react';
import PropTypes from 'prop-types';
import {Color} from './Color';
import classes from './ColorInput.module.css';

const colors = [
  'red',
  'orange',
  'green',
  'turquoise',
  'blue',
  'violet',
  'gray',
];

export const ColorInput = ({onchange}) => {
  const handleChange = color => {
    onchange(color);
  };

  return (
    <div className={classes.colorInput}>
      {colors.map(color => (
        <Color onClick={handleChange} key={color} color={color} />
      ))}
    </div>
  );
};

ColorInput.propTypes = {
  onchange: PropTypes.func.isRequired,
};
