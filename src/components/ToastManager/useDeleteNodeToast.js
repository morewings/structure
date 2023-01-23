import {useToastActions} from '@/features/toast';

import toastTypes from './toastTypes';

export const useDeleteNodeToast = () => {
  const {openToast} = useToastActions();
  return ({id, text}) => {
    openToast({
      toastType: toastTypes.INFO,
      toastProps: {
        id,
        text,
      },
    });
  };
};
