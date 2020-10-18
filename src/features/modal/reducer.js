import {compose, lensProp, over, omit, dropLast} from 'ramda';
import {MODAL_CLOSE} from './actionTypes';

const initialState = {
  open: ['modal_1', 'modal_2'],
  modals: {
    modal_1: {
      modalProps: {},
      modalType: 'CONFIRMATION',
    },
    modal_2: {
      modalProps: {},
      modalType: 'CONFIRMATION',
    },
  },
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
    default:
      return state;
  }
};
