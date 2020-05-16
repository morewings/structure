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
import {editChildren} from './selectors';
import {
  ADD_NODE,
  FOCUS_NODE,
  EDIT_NODE,
  TOGGLE_COMPLETION,
  RESET_STRUCTURE,
  REPLACE_STRUCTURE,
} from './actionTypes';

const initial = 'node_initial';

const initialState = {
  nodes: {
    [initial]: {
      title: 'Initial Node',
      isDone: false,
      children: [],
      parentId: initial,
      generation: 0,
    },
  },
  focused: initial,
};

const createNode = fields => ({
  ...fields,
  children: [],
});

const nodesListLens = () => lensProp(['nodes']);
const nodeSingleLens = id => lensPath(['nodes', id]);
const nodeChildrenLens = id => lensPath(['nodes', id, 'children']);

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NODE: {
      const {id, parentId, isDone, description, title} = action.payload;
      const generation = state.nodes[parentId].generation + 1;
      return compose(
        over(
          nodesListLens(),
          assoc(
            id,
            createNode({id, parentId, isDone, description, title, generation})
          )
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
    case TOGGLE_COMPLETION: {
      const {id, isDone} = action.payload;
      const node = view(nodeSingleLens(id), state);
      const updatedNodes = editChildren(state, node, {isDone});
      return over(nodesListLens(), merge(__, updatedNodes), state);
    }
    case RESET_STRUCTURE: {
      return initialState;
    }
    case REPLACE_STRUCTURE: {
      return action.payload;
    }
    default:
      return state;
  }
};
