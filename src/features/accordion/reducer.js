import {
  ACCORDION_REGISTER,
  ACCORDION_TOGGLE,
} from 'src/features/accordion/actionTypes';
import config from 'src/config';

const initialState = {
  [config.initialNode]: {
    openNode: config.initialNode,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCORDION_REGISTER: {
      return {
        ...state,
        [action.id]: {
          openNode: null,
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
    default:
      return state;
  }
};
