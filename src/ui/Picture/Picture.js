import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './Image.module.css';

export const Picture = ({title, className, children}) => (
  <div
    className={classNames(classes.pictureWrapper, {
      [className]: !!className,
    })}>
    {children}
    <div className={classes.title}>{title}</div>
  </div>
);

Picture.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Picture.defaultProps = {
  className: '',
};
