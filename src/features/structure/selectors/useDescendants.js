import {useSelector} from 'react-redux';
import {append} from 'ramda';
import {reduceTree} from 'src/utils/traverseTree';

const flattenToArray = (arr, {id}) => append(id, arr);

/**
 * @function
 * Gets all child nodes from the structure Record provided
 * @param {string} id Id of parent node
 * @return {string[]} - List of children ids
 */
const useDescendants = id => {
  const structure = useSelector(state => state.structure);
  const node = useSelector(state => state.structure.nodes[id]);
  // eslint-disable-next-line no-unused-vars
  const [self, ...descendants] = reduceTree(
    flattenToArray,
    structure,
    [],
    node
  );
  return descendants;
};

export default useDescendants;
