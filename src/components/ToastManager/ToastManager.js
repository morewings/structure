import React from 'react';

import {useVisibleToasts} from '@/features/toast';

import {Toast} from './Toast';
import classes from './ToastManager.module.css';

export const ToastManager = () => {
  const visibleToasts = useVisibleToasts();

  return (
    <div className={classes.visibleToasts}>
      {visibleToasts.map(toastId => (
        <Toast id={toastId} key={toastId} />
      ))}
    </div>
  );
};
