import {useSelector} from 'react-redux';
import Tree from 'src/utils/traverseTree';

const flattenToArray = (arr, {id}) => arr.concat([id]);

const useDescendants = id => {
  const structure = useSelector(state => state.structure);
  const node = useSelector(state => state.structure.nodes[id]);
  // eslint-disable-next-line no-unused-vars
  const [self, ...descendants] = Tree.reduce(
    flattenToArray,
    structure,
    [],
    node
  );
  return descendants;
};

export default useDescendants;
