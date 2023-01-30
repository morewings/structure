import {useToastActions} from '@/features/toast';
import {toastTypes} from '@/components/ToastManager';

export const useInfoToast = () => {
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
