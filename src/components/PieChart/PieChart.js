import React from 'react';
import PropTypes from 'prop-types';
import {Cell, Pie, PieChart as PieChartGeneric} from 'recharts';
import {useVariable} from 'css-vars-hook';

import {useChartData} from './useChartData';
import classes from './PieChart.module.css';

const normalizeColor = color => {
  return color === '' ? '#4a90e2' : color;
};

export const PieChart = ({completion, color}) => {
  const chartData = useChartData(completion);
  const {setRef} = useVariable('color', color);
  return (
    <div className={classes.chart}>
      <PieChartGeneric width={96} height={96}>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={24}
          outerRadius={48}
          stroke="none"
          label={false}>
          {chartData.map((entry, index) => {
            const segmentColor = index === 0 ? normalizeColor(color) : 'rgba(66, 66, 66, 0.33)';
            return <Cell key={`cell-${index}`} fill={segmentColor} />;
          })}
        </Pie>
      </PieChartGeneric>
      <div ref={setRef} className={classes.completion}>
        {completion}%
      </div>
    </div>
  );
};

PieChart.propTypes = {
  completion: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
