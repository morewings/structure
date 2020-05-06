import {curry} from 'ramda';

/*
 * Tree traversing utility
 * @see https://jrsinclair.com/articles/2019/functional-js-traversing-trees-with-recursive-reduce/
 */

const hasChildren = node =>
  typeof node === 'object' &&
  typeof node.children !== 'undefined' &&
  node.children.length > 0;

const getChildren = (structure, node) =>
  node.children.map(childNodeId => structure.nodes[childNodeId]);

const Tree = {
  reduce: curry(function reduce(reducerFn, structure, initial, node) {
    const acc = reducerFn(initial, node);
    if (!hasChildren(node)) {
      return acc;
    }
    return getChildren(structure, node).reduce(Tree.reduce(reducerFn), acc);
  }),
};

export default Tree;
