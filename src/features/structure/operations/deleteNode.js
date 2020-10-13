import {
  find,
  omit,
  lensProp,
  over,
  compose,
  when,
  assoc,
  without,
  lensPath,
} from 'ramda';
import getChildrenIdList from './getChildrenIdList';

// TODD: Use transducer reduceTree(deleteChildren, structure, [], node)
const deleteNode = (structure, node) => {
  const children = getChildrenIdList(structure, node);
  const focused = find(id => id === structure.focused, children);
  const {parentId} = structure.nodes[node.id];
  const deleteChildren = over(lensProp('nodes'), omit(children));
  const clearIfFocused = when(() => !!focused, assoc('focused', parentId));
  const removeFromParent = over(
    lensPath(['nodes', parentId, 'children']),
    without([node.id])
  );
  return compose(removeFromParent, clearIfFocused, deleteChildren)(structure);
};

export default deleteNode;
