import React from 'react';

import classes from './SmallScreenWarning.module.css';

const SmallScreenWarning = () => (
  <div className={classes.warning}>
    <h2 className={classes.header}>Small screen warning</h2>
    <div>
      Structure UI works properly at screen sizes bigger then 1280px. Please enlarge browser window or use
      another device.
    </div>
  </div>
);

export default SmallScreenWarning;
