import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './Container.module.css';

export const Container = ({children, className}) => (
  <div
    className={classNames({
      [classes.container]: true,
      [className]: !!className,
    })}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: '',
};
