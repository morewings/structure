import {useSelector} from 'react-redux';
import {getChildrenCompletion} from './operations';

const useChildrenCompletion = id => {
  const structure = useSelector(state => state.structure);
  const node = useSelector(state => state.structure.nodes[id]);
  return getChildrenCompletion(structure, node);
};

export default useChildrenCompletion;
