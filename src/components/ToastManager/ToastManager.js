import React, {Fragment} from 'react';

import {useVisibleToasts} from '@/features/toast';

import {ToastWrapper} from './ToastWrapper';

export const ToastManager = () => {
  const visibleToasts = useVisibleToasts();
  // console.log(visibleToasts)
  return (
    <Fragment>
      {visibleToasts.map((modalId, i) => (
        <ToastWrapper id={modalId} key={modalId} isOpen={i === visibleToasts.length - 1} />
      ))}
    </Fragment>
  );
};
