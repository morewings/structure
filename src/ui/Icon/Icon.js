import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useSetIconColor} from './useSetIconColor';
import classes from './Icon.module.css';
import 'src/ui/Icon/Icons.css';

export const Icon = ({name, className, color}) => {
  const icon = useRef();
  useSetIconColor(icon, color);
  return (
    <i
      ref={icon}
      className={classNames({
        [className]: !!className,
        [classes.icon]: true,
        [`icon-${name}`]: true,
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
