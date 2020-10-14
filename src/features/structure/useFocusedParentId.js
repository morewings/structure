import {useSelector} from 'react-redux';
import {getParentId} from './operations';

const useFocusedParentId = () => {
  const structure = useSelector(state => state.structure);
  const {focused} = structure;
  return getParentId(structure, focused);
};

export default useFocusedParentId;
