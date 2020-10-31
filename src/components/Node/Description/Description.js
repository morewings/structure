import React from 'react';
import PropTypes from 'prop-types';
import classes from './Description.module.css';

const Description = ({text}) => (
  <div className={classes.description}>
    <h3>Description</h3>
    <div className={classes.text}>{text}</div>
  </div>
);

Description.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Description;
