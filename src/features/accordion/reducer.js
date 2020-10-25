import {omit} from 'ramda';
import {
  ACCORDION_REGISTER,
  ACCORDION_TOGGLE,
  ACCORDION_DELETE,
  ACCORDION_RESET
} from 'src/features/accordion/actionTypes';
import config from 'src/config';

const initialState = {
  [config.initialNode]: {
    openNode: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCORDION_REGISTER: {
      return {
        ...state,
        [action.id]: {
          openNode: '',
        },
      };
    }
    case ACCORDION_TOGGLE: {
      return {
        ...state,
        [action.id]: {
          openNode: action.openNode,
        },
      };
    }
    case ACCORDION_DELETE: {
      return omit([action.id], state);
    }
    case ACCORDION_RESET: {
      return initialState;
    }
    default:
      return state;
  }
};
