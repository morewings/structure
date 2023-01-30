import React from 'react';

import {useVisibleToasts} from '@/features/toast';

import {ToastWrapper} from './ToastWrapper';
import {ToastRenderer} from './ToastRenderer';

export const ToastManager = () => {
  const visibleToasts = useVisibleToasts();
  // console.log(visibleToasts)

  return (
    <ToastWrapper>
      {visibleToasts.map((toastId, i) => (
        <ToastRenderer id={toastId} key={toastId} isOpen={i === visibleToasts.length - 1} />
      ))}
    </ToastWrapper>
  );
};
