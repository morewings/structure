import React from 'react';
import PropTypes from 'prop-types';

import classes from './FooterSeparator.module.css';

export const FooterSeparator = ({leftButton, rightButton}) => (
  <footer className={classes.footer}>
    {leftButton && <div className={classes.left}>{leftButton}</div>}
    {rightButton && <div className={classes.right}>{rightButton}</div>}
  </footer>
);

FooterSeparator.propTypes = {
  leftButton: PropTypes.element,
  rightButton: PropTypes.element,
};

FooterSeparator.defaultProps = {
  leftButton: null,
  rightButton: null,
};
