import {useCallback} from 'react';

import {useToastActions} from '@/features/toast';
import {toastTypes} from '@/components/ToastManager';

export const useWarningToast = () => {
  const {openToast} = useToastActions();
  return useCallback(
    ({text}) => {
      openToast({
        toastType: toastTypes.WARNING,
        toastProps: {
          text,
        },
      });
    },
    [openToast]
  );
};
