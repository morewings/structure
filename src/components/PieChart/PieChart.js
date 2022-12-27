import React from 'react';
import PropTypes from 'prop-types';

import {useChartSizes} from '@/components/PieChart/useChartSizes';

import classes from './Piechart.module.css';

export const PieChart = ({completion, fullColor}) => {
  console.log('completion', completion);
  const {setChartSegmentRef, setEmptySegmentRef} = useChartSizes(completion, fullColor);
  console.log('completion', completion);
  console.log('fullColor', fullColor);
  return (
    <div>
      <div className={classes.pie}>
        {/*<div data-label="full" ref={setChartSegmentRef} className={classes.segment}>*/}
        {/*  <div className={classes.label}>{completion}%</div>*/}
        {/*</div>*/}
        {/*<div data-label="empty" ref={setEmptySegmentRef} className={classes.segment}>*/}
        {/*  <div className={classes.label}>{100 - completion}%</div>*/}
        {/*</div>*/}
        <div
          className={classes.segment}
          style={{'--offset': 0, '--value': 60, '--bg': fullColor, '--over50': 1}}></div>
        <div className={classes.segment} style={{'--offset': 60, '--value': 40, '--bg': '#4d05e8'}}></div>
      </div>
    </div>
  );
  // return <div className={classes.chart}>{completion}</div>;
};

PieChart.propTypes = {
  completion: PropTypes.number.isRequired,
  fullColor: PropTypes.string.isRequired,
};
