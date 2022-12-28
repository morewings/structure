import React from 'react';
import PropTypes from 'prop-types';

import classes from './Ancestry.module.css';

export const Ancestry = ({nodeChildrenAmount, tier}) => (
  <div className={classes.ancestry}>
    <h3>Ancestry</h3>
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

Ancestry.propTypes = {
  nodeChildrenAmount: PropTypes.number.isRequired,
  tier: PropTypes.number.isRequired,
};
