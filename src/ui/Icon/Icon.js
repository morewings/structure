import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useLocalTheme} from 'css-vars-hook';

import classes from './Icon.module.css';

export const Icon = ({name, className, color}) => {
  const {LocalRoot} = useLocalTheme({iconColor: color}, 'i');
  return (
    <LocalRoot
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
