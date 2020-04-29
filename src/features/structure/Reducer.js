import {ADD_NODE} from './actionTypes';

const initialState = {
  nodes: {
    initial: {
      title: 'Initial Node',
      done: false,
      children: [],
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NODE:
      return {...state};
    default:
      return state;
  }
};
