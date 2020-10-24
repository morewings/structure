import React from 'react';
import PropTypes from 'prop-types';
import {useSetCssVariable} from 'src/utils/cssVariables';
import {Icon} from 'src/ui/Icon';
import {useColorValues} from './useColorValues';
import classes from './Color.module.css';

export const Color = ({color, onClick}) => {
  const handleClick = () => {
    onClick(color);
  };

  const colorValue = useColorValues(color);

  const [, setRef] = useSetCssVariable('colorValue', colorValue);

  return (
    <button
      ref={setRef}
      title={color}
      className={classes.color}
      type="button"
      onClick={handleClick}>
      <Icon name="confirm" color="white" />
    </button>
  );
};

Color.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
