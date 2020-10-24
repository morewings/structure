import React from 'react';
import PropTypes from 'prop-types';
import {useNodeColorNames} from 'src/utils/nodeColors';
import {Color} from './Color';
import classes from './ColorInput.module.css';

export const ColorInput = ({onchange, value}) => {
  const colors = useNodeColorNames();
  const handleChange = color => {
    onchange(color);
  };

  return (
    <div className={classes.colorInput}>
      {colors.map(color => (
        <Color
          isActive={value === color}
          onClick={handleChange}
          key={color}
          color={color}
        />
      ))}
    </div>
  );
};

ColorInput.propTypes = {
  onchange: PropTypes.func.isRequired,
  value: PropTypes.oneOf([
    'red',
    'orange',
    'green',
    'turquoise',
    'blue',
    'violet',
    'gray',
  ]).isRequired,
};
