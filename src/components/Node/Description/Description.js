import React from 'react';
import PropTypes from 'prop-types';
import classes from './Description.module.css';

const Description = ({description}) => (
  <div className={classes.description}>
    <h3>Description</h3>
    <div className={classes.text}>{description}</div>
  </div>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
