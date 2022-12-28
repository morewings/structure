import React from 'react';
import PropTypes from 'prop-types';
import {Cell, Pie, PieChart as PieChartGeneric, Tooltip} from 'recharts';
import {useVariable} from 'css-vars-hook';

import {useChartData} from './useChartData';
import {useChartColor} from './useChartColor';
import classes from './PieChart.module.css';

const formatter = value => `${value}%`;

export const PieChart = ({completion, color}) => {
  const chartData = useChartData(completion);
  const completeColor = useChartColor(color);
  const {setRef} = useVariable('color', completeColor);
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
            const segmentColor = index === 0 ? completeColor : 'rgba(66, 66, 66, 0.33)';
            return <Cell key={`cell-${index}`} fill={segmentColor} />;
          })}
        </Pie>
        <Tooltip
          position={{x: 0, y: 96}}
          allowEscapeViewBox={{x: true, y: true}}
          itemStyle={{fontSize: 'var(--chartTooltipFontSize)'}}
          contentStyle={{backgroundColor: 'var(--backgroundHighColor)'}}
          formatter={formatter}
        />
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
