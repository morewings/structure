import React from 'react';
import PropTypes from 'prop-types';

import {PieChart} from '@/components/PieChart';

import classes from './Stats.module.css';

const Stats = ({completion, nodeChildrenAmount, tier, color}) => (
  <div className={classes.stats}>
    <h3>Stats</h3>
    <PieChart color={color} completion={completion} />
    <div>
      <div className={classes.tier}>
        <h4>Tier</h4>
        <div className={classes.amount}>{tier}th</div>
      </div>
      <div className={classes.ancestors}>
        <h4>Ancestors</h4>
        <div className={classes.amount}>{nodeChildrenAmount}</div>
      </div>
    </div>
  </div>
);

Stats.propTypes = {
  nodeChildrenAmount: PropTypes.number.isRequired,
  completion: PropTypes.number.isRequired,
  tier: PropTypes.number.isRequired,
};

export default Stats;
