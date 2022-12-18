import {InfoToast} from '@/components/InfoToast';

import toastTypes from './toastTypes';

export const useToastComponent = toastType =>
  ({
    [toastTypes.INFO]: InfoToast,
  }[toastType]);
