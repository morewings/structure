import React from 'react';
import classes from "src/components/Node/Node.module.css";

const Stats = ({completion, }) => {
  return (
    <div className={classes.stats}>
      <h3>Stats</h3>
      <div className={classes.chart}>{completion}</div>
      <div>
        <div className={classes.tier}>
          <h4>Tier</h4>
          <div className={classes.amount}>4th</div>
        </div>
        <div className={classes.ancestors}>
          <h4>Ancestors</h4>
          <div className={classes.amount}>{children.length}</div>
        </div>
      </div>
    </div>
  )
}

export default Stats;
