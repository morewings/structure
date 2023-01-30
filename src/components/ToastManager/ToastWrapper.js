import React from 'react';

import classes from './ToastWrapper.module.css';

export const ToastWrapper = ({children}) => {
  return <div className={classes.toastWrapper}>{children}</div>;
};
