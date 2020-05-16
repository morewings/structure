import {compose, map} from 'ramda';
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
 * @return {string[]} - List of children ids
 */
const getChildrenCompletion = (structure, node) => {
  const result = compose(
    map(id => structure.nodes[id])
  )(node.children)
  return 100
};

export default getChildrenCompletion