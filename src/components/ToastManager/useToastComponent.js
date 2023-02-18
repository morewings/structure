import {InfoToast} from '@/components/InfoToast';
import {WarningToast} from '@/components/WarningToast';

import toastTypes from './toastTypes';

export const useToastComponent = toastType =>
  ({
    [toastTypes.INFO]: InfoToast,
    [toastTypes.WARNING]: WarningToast,
  }[toastType]);
