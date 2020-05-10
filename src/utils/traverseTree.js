import {curry} from 'ramda';

/*
 * Tree traversing utility
 * @see https://jrsinclair.com/articles/2019/functional-js-traversing-trees-with-recursive-reduce/
 */

const hasChildren = node => node.children.length > 0;

const getChildren = (structure, node) =>
  node.children.map(childNodeId => structure.nodes[childNodeId]);

/**
 * @typedef Node
 * @property {Array.<String>} children
 * @property {String} id
 */

/**
 * @typedef Structure
 * @property {Object.<string, Node>} nodes
 */

/**
 * @function
 * @name reduceTree
 * Recursively traverses the tree
 * @param {function} reducerFn
 * @param {Structure} structure
 * @param {*} initial
 * @param {Node} node
 * @return {*}
 */
export const reduceTree = curry((reducerFn, structure, initial, node) => {
  const acc = reducerFn(initial, node);
  if (!hasChildren(node)) {
    return acc;
  }
  return getChildren(structure, node).reduce(
    reduceTree(reducerFn, structure),
    acc
  );
});