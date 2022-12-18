import React from 'react';
import PropTypes from 'prop-types';

import classes from './Piechart.module.css';

export const PieChart = ({completion}) => {
  console.log('completion', completion);
  return <div className={classes.chart}>{completion}</div>;
};

PieChart.propTypes = {
  completion: PropTypes.number.isRequired,
};
