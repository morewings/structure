import {
  lensPath,
  lensProp,
  view,
  set,
  over,
  assoc,
  compose,
  append,
  merge,
  __,
} from 'ramda';
import {ADD_NODE, FOCUS_NODE, EDIT_NODE} from './actionTypes';

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

const createNode = description => ({
  ...description,
  children: [],
});

const nodesListLens = () => lensProp(['nodes']);
const nodeSingleLens = id => lensPath(['nodes', id]);
const nodeChildrenLens = id => lensPath(['nodes', id, 'children']);

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NODE: {
      const {id, parentId, isDone, description, title} = action.payload;
      return compose(
        over(
          nodesListLens(),
          assoc(id, createNode({id, parentId, isDone, description, title}))
        ),
        over(nodeChildrenLens(parentId), append(id))
      )(state);
    }
    case FOCUS_NODE: {
      return {
        ...state,
        focused: action.payload,
      };
    }
    case EDIT_NODE: {
      const {id, ...node} = action.payload;
      return over(nodeSingleLens(id), merge(__, node), state);
    }
    default:
      return state;
  }
};
