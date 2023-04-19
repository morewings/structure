import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useLocalTheme} from 'css-vars-hook';

import classes from './Icon.module.css';

export const Icon = ({name, className, color}) => {
  const {LocalRoot, setVariable} = useLocalTheme();
  useEffect(() => {
    setVariable('iconColor', color);
  }, [color, setVariable]);
  return (
    <LocalRoot
      theme={{iconColor: color}}
      as="i"
      className={classNames({
        [classes.icon]: true,
        [`icon-${name}`]: true,
        [className]: !!className,
      })}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
  color: '',
};
