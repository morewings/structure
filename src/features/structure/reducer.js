import {lensPath, lensProp, view, set, over, assoc, compose, append, mergeRight, __} from 'ramda';

import config from '@/config';
import {LOCALSTORAGE_HYDRATE} from '@/features/localStorage';

import {editChildren, deleteNode} from './operations';
import {
  ADD_NODE,
  FOCUS_NODE,
  EDIT_NODE,
  TOGGLE_COMPLETION,
  RESET_STRUCTURE,
  REPLACE_STRUCTURE,
  DELETE_NODE,
} from './actionTypes';

const initialState = {
  nodes: {
    [config.initialNode]: {
      title: 'Parent',
      isDone: false,
      children: ['node_siblings'],
      parentId: config.initialNode,
      generation: 0,
      color: '',
      description: 'This is initial node. It will never be shown.',
      id: config.initialNode,
    },
    node_siblings: {
      title: 'Siblings',
      isDone: false,
      children: ['node_children'],
      parentId: config.initialNode,
      generation: 1,
      color: '',
      description: 'This is parent column.',
      id: 'node_siblings',
    },
    node_children: {
      title: 'Children',
      isDone: false,
      children: [],
      parentId: 'node_siblings',
      generation: 2,
      color: '',
      description: 'This is siblings column.',
      id: 'node_children',
    },
  },
  focused: 'node_children',
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
    case LOCALSTORAGE_HYDRATE: {
      const {structure} = action.state;
      return structure;
    }
    case ADD_NODE: {
      const {id, parentId, isDone, description, title, color} = action.payload;
      const generation = state.nodes[parentId].generation + 1;
      return compose(
        over(
          nodesListLens(),
          assoc(
            id,
            createNode({
              id,
              parentId,
              isDone,
              description,
              title,
              generation,
              color,
            })
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
      return over(nodeSingleLens(id), mergeRight(__, node), state);
    }
    case DELETE_NODE: {
      const node = view(nodeSingleLens(action.payload), state);
      return deleteNode(state, node);
    }
    case TOGGLE_COMPLETION: {
      const {id, isDone} = action.payload;
      const node = view(nodeSingleLens(id), state);
      const updatedNodes = editChildren(state, node, {isDone});
      return over(nodesListLens(), mergeRight(__, updatedNodes), state);
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
