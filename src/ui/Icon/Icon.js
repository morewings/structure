import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {useVariable} from 'css-vars-hook';
import classes from './Icon.module.css';
import 'src/ui/Icon/Icons.css';

export const Icon = ({name, className, color}) => {
  const {setRef, style} = useVariable('iconColor', color);
  return (
    <i
      style={style}
      ref={setRef}
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
