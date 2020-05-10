import {append} from 'ramda';
import {reduceTree} from 'src/utils/traverseTree';

const flattenToArray = (arr, {id}) => append(id, arr);

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
const getChildrenIdList = (structure, node) =>
  reduceTree(flattenToArray, structure, [], node);

export default getChildrenIdList;
