import {curry, assoc, compose, __, merge} from 'ramda';
import {reduceTree} from 'src/utils/traverseTree';

const editNode = curry((payload, acc, node) =>
  compose(assoc(node.id, __, acc), merge(__, payload))(node)
);

/**
 * @typedef Update
 * @property {string} [title]
 * @property {boolean} [isDone]
 */

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
 * @function editChildren
 * Finds children nodes and merges each node with payload
 * @param {Structure} structure
 * @param {Node} node
 * @param {Update} payload
 * @return {Structure}
 */
const editChildren = (structure, node, payload) =>
  reduceTree(editNode(payload), structure, {}, node);

export default editChildren;
