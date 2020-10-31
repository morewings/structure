import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classes from './Image.module.css';

export const Image = ({src, title, className}) => (
  <div
    className={classNames(classes.image, {
      [className]: !!className,
    })}>
    <img src={src} alt={title} />
    <div className={classes.title}>{title}</div>
  </div>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Image.defaultProps = {
  className: '',
};
