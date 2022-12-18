import {omit} from 'ramda';

import {
  ACCORDION_REGISTER,
  ACCORDION_TOGGLE,
  ACCORDION_DELETE,
  ACCORDION_RESET,
} from '@/features/accordion/actionTypes';
import config from '@/config';
import {LOCALSTORAGE_HYDRATE} from '@/features/localStorage';

const initialState = {
  [config.initialNode]: {
    openNode: '',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCALSTORAGE_HYDRATE: {
      const {accordion} = action.state;
      return accordion;
    }
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
