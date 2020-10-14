import {compose, map, reduce, ifElse} from 'ramda';
/**
 * @typedef Node
 * @property {Array.<string>} children
 * @property {string} id
 */

/**
 * @typedef Structure
 * @property {Object.<string, Node>} nodes
 */

/**
 * @function
 * Gets all child nodes from the structure Record provided
 * @param {Structure} structure
 * @param {Node} node
 * @return {number} - Percentage of completed childen
 */
const getChildrenCompletion = (structure, node) =>
  compose(
    ifElse(
      () => node.children.length !== 0,
      checkedNodes => Math.floor((checkedNodes / node.children.length) * 100),
      () => 0
    ),
    reduce((acc, {isDone}) => (isDone ? acc + 1 : acc), 0),
    map(id => structure.nodes[id])
  )(node.children);

export default getChildrenCompletion;
