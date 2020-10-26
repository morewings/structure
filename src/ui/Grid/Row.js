import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Row.module.css';

export const Row = ({children, className}) => (
  <div
    className={classNames({
      [classes.row]: true,
      [className]: !!className,
    })}>
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Row.defaultProps = {
  className: '',
};
