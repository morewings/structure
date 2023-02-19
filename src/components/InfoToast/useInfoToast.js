import {useCallback} from 'react';

import {useToastActions} from '@/features/toast';
import {toastTypes} from '@/components/ToastManager';

export const useInfoToast = () => {
  const {openToast} = useToastActions();
  return useCallback(
    ({text}) => {
      openToast({
        toastType: toastTypes.INFO,
        toastProps: {
          text,
        },
      });
    },
    [openToast]
  );
};
