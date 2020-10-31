import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Typography.module.css';

export const Typography = ({children, className}) => (
  <div
    className={classNames({
      [classes.typography]: true,
      [className]: !!className,
    })}>
    {children}
  </div>
);

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Typography.defaultProps = {
  className: '',
};
