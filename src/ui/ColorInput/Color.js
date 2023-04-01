import React from 'react';
import PropTypes from 'prop-types';
import {useLocalTheme} from 'css-vars-hook';

import {Icon} from '@/ui/Icon';
import {useNodeColorValues} from '@/utils/nodeColors';

import classes from './Color.module.css';

export const Color = ({color, onClick, isActive}) => {
  const handleClick = () => {
    onClick(color);
  };

  const colorValue = useNodeColorValues(color);

  const {LocalRoot} = useLocalTheme({colorValue}, 'button');

  return (
    <LocalRoot title={color} className={classes.color} type="button" onClick={handleClick}>
      {isActive && <Icon name="confirm" color="white" />}
    </LocalRoot>
  );
};

Color.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
