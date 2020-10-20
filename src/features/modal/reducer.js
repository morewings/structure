import {compose, lensProp, over, omit, dropLast, append, assoc} from 'ramda';
import {MODAL_CLOSE, MODAL_OPEN} from './actionTypes';

const initialState = {
  open: [],
  modals: {},
};

const openModalLens = lensProp(['open']);
const modalsLens = lensProp(['modals']);

export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL_CLOSE: {
      const {id} = action;
      return compose(
        over(openModalLens, dropLast(1)),
        over(modalsLens, omit([id]))
      )(state);
    }
    case MODAL_OPEN: {
      const {id, modalType, modalProps} = action;
      return compose(
        over(openModalLens, append(id)),
        over(
          modalsLens,
          assoc(id, {
            modalType,
            modalProps,
          })
        )
      )(state);
    }
    default:
      return state;
  }
};
