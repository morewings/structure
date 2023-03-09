import {getUniqueId} from '@/utils/getUniqueId';
import {store} from '@/state';
import {TOAST_SHOW} from '@/features/toast/actionTypes';
import {toastTypes} from '@/components/ToastManager';

/**
 * @function showWarningToast
 * Dispatches an action to show warning toast. To use outside React components.
 * @param {Object} toastProps - Pass props to the Toast.
 * @param {string} toastProps.text - Warning message text.
 */
export const showWarningToast = ({text}) => {
  const id = getUniqueId({prefix: 'toast'});
  store.dispatch({
    type: TOAST_SHOW,
    toastProps: {
      text,
    },
    toastType: toastTypes.WARNING,
    id,
  });
};
