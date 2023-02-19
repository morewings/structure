import {compose, lensProp, over, omit, filter, assoc, prepend} from 'ramda';

import {TOAST_SHOW, TOAST_HIDE} from './actionTypes';

const initialState = {
  visible: [],
  toasts: {},
};

const visibleToastsLens = lensProp(['visible']);
const toastsLens = lensProp(['toasts']);

export const ToastReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOAST_HIDE: {
      const {id} = action;
      return compose(
        over(
          visibleToastsLens,
          filter(visibleId => !(visibleId === id))
        ),
        over(toastsLens, omit([id]))
      )(state);
    }
    case TOAST_SHOW: {
      const {id, toastType, toastProps} = action;
      return compose(
        over(visibleToastsLens, prepend(id)),
        over(
          toastsLens,
          assoc(id, {
            toastType,
            toastProps,
          })
        )
      )(state);
    }
    default:
      return state;
  }
};
