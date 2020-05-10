import {useSelector} from 'react-redux';
import {getChildrenIdList} from './selectors';

/**
 * @function
 * React hook returns list of node children ids
 * @param {string} id Id of parent node
 * @return {string[]} - List of children ids
 */
const useDescendants = id => {
  const structure = useSelector(state => state.structure);
  const node = useSelector(state => state.structure.nodes[id]);
  // eslint-disable-next-line no-unused-vars
  const [_, ...descendants] = getChildrenIdList(structure, node);
  return descendants;
};

export default useDescendants;
