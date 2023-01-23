import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './Toast.module.css';

export const Toast = ({className, children}) => {
  return (
    <div
      className={classNames({
        [classes.toast]: true,
        [className]: !!className,
      })}>
      {children}
    </div>
  );
};

Toast.propTypes = {
  className: PropTypes.string,
};
