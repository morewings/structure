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

const deleteNode = (structure, node) => {
  const children = getChildrenIdList(structure, node);
  const focused = find(id => id === structure.focused, children);
  const {parentId} = structure.nodes[node.id];
  return compose(
    over(lensPath(['nodes', parentId, 'children']), without([node.id])),
    when(() => !!focused, assoc('focused', parentId)),
    over(lensProp('nodes'), omit(children))
  )(structure);
};

export default deleteNode;
