import {InfoToast} from '@/components/Toasts/InfoToast';
import {WarningToast} from '@/components/Toasts/WarningToast';

import toastTypes from './toastTypes';

export const useToastComponent = toastType =>
  ({
    [toastTypes.INFO]: InfoToast,
    [toastTypes.WARNING]: WarningToast,
  }[toastType]);
