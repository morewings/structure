import {
  lensPath,
  lensProp,
  view,
  set,
  over,
  assoc,
  compose,
  append,
} from 'ramda';
import {ADD_NODE, FOCUS_NODE} from './actionTypes';

const initial = 'node_initial';

const initialState = {
  nodes: {
    [initial]: {
      title: 'Initial Node',
      isDone: false,
      children: [],
      parentId: initial,
    },
  },
  focused: initial,
};

const createNode = ({
  id,
  parentId,
  description = '',
  title = '',
  isDone = false,
}) => ({
  id,
  parentId,
  children: [],
  isDone,
  description,
  title,
});

const nodesListLens = () => lensProp(['nodes']);
const nodeChildrenLens = id => lensPath(['nodes', id, 'children']);

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NODE: {
      const {id, parentId} = action.payload;
      return compose(
        over(nodesListLens(), assoc(id, createNode({id, parentId}))),
        over(nodeChildrenLens(parentId), append(id))
      )(state);
    }
    case FOCUS_NODE: {
      return {
        ...state,
        focused: action.payload,
      };
    }
    default:
      return state;
  }
};
